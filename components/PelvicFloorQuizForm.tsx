"use client";

import { useState } from "react";

const questions = [
  "Do you leak urine when you laugh, cough, sneeze, jump, or exercise?",
  "Do you feel a frequent or urgent need to urinate—even when your bladder isn't full?",
  "Do you have difficulty starting or fully emptying your bladder?",
  "Do you strain or push to have a bowel movement?",
  "Do you experience constipation regularly, even with adequate water and fiber?",
  "Do you feel like your bowels don't fully empty after going?",
  "Do you have a visible abdominal bulge or feel a gap between your abs (especially after pregnancy)?",
  "Do you feel a sensation of heaviness or pressure in the vaginal or rectal area (like something is \"falling out\")?",
  "Do you have chronic low back, hip, or tailbone pain without a clear musculoskeletal cause?",
  "Do you experience pain during or after sexual intercourse?",
  "Have you noticed a decrease in sexual sensation or satisfaction?",
  "Do you hold tension in your jaw, glutes, or pelvic region during stress?",
];

export default function PelvicFloorQuizForm() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const score = Object.values(answers).filter((a) => a === "Yes").length;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_PELVIC_FLOOR_QUIZ_ID;

    const payload: Record<string, string> = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      score: `${score} / ${questions.length}`,
    };
    questions.forEach((q, i) => { payload[q] = answers[i] ?? "No answer"; });

    if (!formspreeId) {
      console.log("[pelvic-floor-quiz] No Formspree ID configured yet");
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl bg-teal/10 border border-teal/30 px-8 py-10 text-center">
        <p className="font-heading font-bold text-teal-dark text-2xl mb-3">Thank you!</p>
        <p className="text-ink-muted leading-relaxed">
          We&apos;ve received your quiz. Our team will follow up with personalized pelvic floor resources and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Yes/No questions — 2 col on md+ */}
      <fieldset>
        <legend className="sr-only">Pelvic floor health questions</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((q, i) => (
            <div key={i} className="bg-surface rounded-xl px-5 py-4 border border-surface-muted">
              <p id={`pf-q-${i}`} className="text-sm text-ink leading-snug mb-3">{q}</p>
              <div className="flex gap-6" role="group" aria-labelledby={`pf-q-${i}`}>
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio" name={`pf_${i}`} value={opt}
                      checked={answers[i] === opt}
                      onChange={() => setAnswers((prev) => ({ ...prev, [i]: opt }))}
                      className="accent-teal-dark w-4 h-4 focus:ring-2 focus:ring-teal-dark"
                    />
                    <span className="text-sm font-medium text-ink">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Live score */}
      {Object.keys(answers).length > 0 && (
        <div aria-live="polite" className="text-center py-3">
          <span className="text-sm text-ink-muted">Your score: </span>
          <span className="font-heading font-bold text-teal-dark text-lg">{score}</span>
          <span className="text-sm text-ink-muted"> / {questions.length}</span>
        </div>
      )}

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
        <div>
          <label htmlFor="pf-firstName" className="block text-sm font-semibold text-ink mb-2">
            First Name
          </label>
          <input id="pf-firstName" name="firstName" type="text"
            className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark"
          />
        </div>
        <div>
          <label htmlFor="pf-lastName" className="block text-sm font-semibold text-ink mb-2">
            Last Name
          </label>
          <input id="pf-lastName" name="lastName" type="text"
            className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark"
          />
        </div>
      </div>
      <div>
        <label htmlFor="pf-email" className="block text-sm font-semibold text-ink mb-2">
          Email Address
        </label>
        <input id="pf-email" name="email" type="email"
          className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark"
        />
      </div>

      {status === "error" && (
        <p role="alert" aria-live="assertive" className="text-red-600 text-sm">
          Something went wrong. Please call us at (904) 448-0046.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
