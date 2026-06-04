"use client";

import { useState } from "react";

const yesNoQuestions = [
  "Do you have a history of miscarriages or chemical pregnancies?",
  "Do you have irregular periods (greater than 35 days or less than 24 days)?",
  "Are signs and symptoms of ovulation hard for you to identify? Do you worry that you're not ovulating?",
  "Do you have a family history of polycystic ovaries or endometriosis and are planning a pregnancy for the future?",
  "Do you have spotting before your period or any other time during your cycle?",
  "Have you been diagnosed with poor egg quality?",
  "Do you have a lot of clotting or cramping during your period?",
  "Do you have intense PMS symptoms?",
  "Are you emotionally exhausted by the challenges of fertility and trying to conceive?",
  "Do you suspect (or have you been diagnosed with) endometriosis, PCOS, fibroids OR diminished ovarian reserve?",
  "Do you have painful or heavy periods?",
];

export default function FertilityQuizForm() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FERTILITY_QUIZ_ID;

    if (!formspreeId) {
      console.log("[fertility-quiz] No Formspree ID configured yet");
      setStatus("success");
      return;
    }

    const payload: Record<string, string> = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      age: (form.elements.namedItem("age") as HTMLSelectElement).value,
      timeToConceive: (form.elements.namedItem("timeToConceive") as HTMLSelectElement).value,
    };

    yesNoQuestions.forEach((q, i) => {
      payload[q] = answers[i] ?? "No answer";
    });

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
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-teal/10 border border-teal/30 px-8 py-10 text-center"
      >
        <p className="font-heading font-bold text-teal-dark text-2xl mb-3">Thank you!</p>
        <p className="text-ink-muted leading-relaxed">
          We&apos;ve received your quiz. Dr. Miller&apos;s team will follow up with personalized fertility resources and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">

      {/* First / Last name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-ink mb-2">
            First Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="firstName" name="firstName" type="text" required aria-required="true"
            className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-ink mb-2">
            Last Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="lastName" name="lastName" type="text" required aria-required="true"
            className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
          Email <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="email" name="email" type="email" required aria-required="true"
          className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark"
        />
      </div>

      {/* Age + Time trying */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="age" className="block text-sm font-semibold text-ink mb-2">Age</label>
          <select id="age" name="age"
            className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark bg-white"
          >
            <option value="I'm under 35">I&apos;m under 35</option>
            <option value="Over 35">Over 35</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeToConceive" className="block text-sm font-semibold text-ink mb-2">
            How long trying to conceive?
          </label>
          <select id="timeToConceive" name="timeToConceive" required aria-required="true"
            className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark bg-white"
          >
            <option value="Planning soon">Planning soon</option>
            <option value="1-6 months">1–6 months</option>
            <option value="7-12 months">7–12 months</option>
            <option value="Over 12 months">Over 12 months</option>
            <option value="Not trying yet">Not trying yet</option>
          </select>
        </div>
      </div>

      {/* Yes / No questions */}
      <fieldset className="space-y-5">
        <legend className="text-sm font-semibold text-ink mb-2">
          Please answer yes or no to the following:
        </legend>
        {yesNoQuestions.map((q, i) => (
          <div key={i} className="bg-surface rounded-xl px-5 py-4 border border-surface-muted">
            <p id={`q-label-${i}`} className="text-sm text-ink leading-snug mb-3">{q}</p>
            <div className="flex gap-6" role="group" aria-labelledby={`q-label-${i}`}>
              {["Yes", "No"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio" name={`q_${i}`} value={opt}
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
      </fieldset>

      {status === "error" && (
        <p role="alert" aria-live="assertive" className="text-red-600 text-sm">
          Something went wrong. Please call us at (904) 448-0046.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Submit Quiz"}
      </button>
    </form>
  );
}
