import { NextResponse } from "next/server";

export async function GET() {
  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

  if (!domain || !token) {
    return NextResponse.json({ error: "Missing env vars", domain: !!domain, token: !!token });
  }

  try {
    const res = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query: "{ shop { name } products(first: 5, query: \"product_type:giftcard\") { edges { node { title handle } } } }" }),
      cache: "no-store",
    });

    const json = await res.json();
    return NextResponse.json({ status: res.status, body: json });
  } catch (err) {
    return NextResponse.json({ error: String(err) });
  }
}
