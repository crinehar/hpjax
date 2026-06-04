"use server";

const CC_LIST_ID = "fd0edacc-9a69-11ec-b500-fa163e504c74";

async function getAccessToken(): Promise<string | null> {
  const token = process.env.CONSTANT_CONTACT_ACCESS_TOKEN;
  const refreshToken = process.env.CONSTANT_CONTACT_REFRESH_TOKEN;
  const apiKey = process.env.CONSTANT_CONTACT_API_KEY;
  const secret = process.env.CONSTANT_CONTACT_CLIENT_SECRET;

  if (!token) return null;

  try {
    const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString());
    if (Date.now() < payload.exp * 1000 - 60_000) return token;
  } catch {
    return token;
  }

  if (!refreshToken || !apiKey || !secret) return token;

  try {
    const res = await fetch("https://authz.constantcontact.com/oauth2/default/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${apiKey}:${secret}`).toString("base64")}`,
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    });

    if (!res.ok) { console.error("[cc] Token refresh failed:", await res.text()); return token; }
    const json = await res.json();
    console.log("[cc] Token refreshed — update CONSTANT_CONTACT_ACCESS_TOKEN in Vercel");
    return json.access_token as string;
  } catch (e) {
    console.error("[cc] Token refresh error:", e);
    return token;
  }
}

export async function addPainQuizContactToCC(
  firstName: string,
  lastName: string,
  email: string
): Promise<void> {
  const accessToken = await getAccessToken();
  if (!accessToken) { console.log("[cc] No token — skipping CC add"); return; }

  const res = await fetch("https://api.cc.email/v3/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: { address: email, permission_to_send: "implicit" },
      first_name: firstName,
      last_name: lastName,
      list_memberships: [CC_LIST_ID],
      create_source: "Contact",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    if (res.status === 409) {
      console.log("[cc] Contact already exists");
    } else {
      console.error("[cc] Add contact failed:", err);
    }
  } else {
    console.log("[cc] Contact added to Pain Quiz list");
  }
}
