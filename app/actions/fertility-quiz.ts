"use server";

export type FertilityQuizData = {
  name: string;
  email: string;
  age: string;
  timeToConceive: string;
  questions: { question: string; answer: string }[];
};

export async function submitFertilityQuiz(
  data: FertilityQuizData
): Promise<{ success: boolean; error?: string }> {
  const resendKey = process.env.RESEND_API_KEY;

  const html = `
    <h2>New Fertility Quiz Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Age:</strong> ${data.age}</p>
    <p><strong>How long trying to conceive:</strong> ${data.timeToConceive}</p>
    <hr />
    <h3>Quiz Answers</h3>
    <table cellpadding="6" style="border-collapse:collapse;width:100%">
      ${data.questions
        .map(
          (q) => `
        <tr style="border-bottom:1px solid #eee">
          <td style="width:80%">${q.question}</td>
          <td style="font-weight:bold;color:${q.answer === "Yes" ? "#1E8A7C" : "#666"}">${q.answer}</td>
        </tr>`
        )
        .join("")}
    </table>
  `;

  if (!resendKey) {
    console.log("[fertility-quiz] No RESEND_API_KEY — logging submission:", data);
    return { success: true };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "hpjax.com <noreply@hpjax.com>",
        to: ["info@hpjax.com"],
        reply_to: data.email,
        subject: `Fertility Quiz — ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[fertility-quiz] Resend error:", await res.text());
      return { success: false, error: "Failed to send. Please call us at (904) 448-0046." };
    }

    return { success: true };
  } catch (e) {
    console.error("[fertility-quiz] Network error:", e);
    return { success: false, error: "Failed to send. Please call us at (904) 448-0046." };
  }
}
