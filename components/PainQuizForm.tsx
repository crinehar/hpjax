"use client";

import { useState } from "react";

const selectClass =
  "w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-dark";

const labelClass = "block text-sm font-semibold text-ink mb-2";

export default function PainQuizForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_PAIN_QUIZ_ID;

    if (!formspreeId) {
      console.log("[pain-quiz] No Formspree ID configured yet");
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
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
          We&apos;ve received your screening. Our team will review your answers and reach out with personalized treatment recommendations.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

      {/* First / Last name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="firstName" name="firstName" type="text" required aria-required="true"
            className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
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
        <label htmlFor="pain-email" className={labelClass}>
          Email <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="pain-email" name="email" type="email" required aria-required="true"
          className="w-full border border-surface-muted rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal-dark"
        />
      </div>

      {/* Pain area + Diagnosis — 2 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="pain_area" className={labelClass}>Where is your pain?</label>
          <select id="pain_area" name="pain_area" className={selectClass}>
            <option value="Lumbar (Lower Back)">Lumbar (Lower Back)</option>
            <option value="Thoracic (Mid Back)">Thoracic (Mid Back)</option>
            <option value="Cervical (Neck)">Cervical (Neck)</option>
            <option value="Head">Head</option>
            <option value="Shoulder">Shoulder</option>
            <option value="Hip">Hip</option>
            <option value="Knee">Knee</option>
            <option value="Foot">Foot</option>
          </select>
        </div>
        <div>
          <label htmlFor="condition_type" className={labelClass}>
            Have you been diagnosed with any of the following?{" "}
            <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <select id="condition_type" name="condition_type" required aria-required="true" className={selectClass}>
            <option value="Herniated/Bulging Disc or Annular Tear">Herniated/Bulging Disc or Annular Tear</option>
            <option value="Degenerative Disc Disease (DDD)">Degenerative Disc Disease (DDD)</option>
            <option value="Spondylosis">Spondylosis</option>
            <option value="Stenosis">Stenosis</option>
            <option value="Sciatica">Sciatica</option>
            <option value="Radiculopathy">Radiculopathy</option>
            <option value="Neuropathy">Neuropathy</option>
            <option value="Pinched Nerve">Pinched Nerve</option>
            <option value="Facet Joint Syndrome">Facet Joint Syndrome</option>
            <option value="Bone Spurs/Osteophytes">Bone Spurs/Osteophytes</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Pain description */}
      <div>
        <label htmlFor="pain_description" className={labelClass}>How would you describe your pain?</label>
        <select id="pain_description" name="pain_description" className={selectClass}>
          <option value="Shooting Pain">Shooting Pain</option>
          <option value="Sharp">Sharp</option>
          <option value="Burning">Burning</option>
          <option value="Cramping">Cramping</option>
          <option value="Throbbing">Throbbing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Associated symptoms */}
      <div>
        <label htmlFor="associated_symptoms" className={labelClass}>Do you have any associated symptoms?</label>
        <select id="associated_symptoms" name="associated_symptoms" className={selectClass}>
          <option value="Pins">Pins</option>
          <option value="Needles">Needles</option>
          <option value="Numbness">Numbness</option>
          <option value="Weakness">Weakness</option>
          <option value="Tingling">Tingling</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Triggers */}
      <div>
        <label htmlFor="pain_triggers" className={labelClass}>What triggers your pain?</label>
        <select id="pain_triggers" name="pain_triggers" className={selectClass}>
          <option value="Sitting">Sitting</option>
          <option value="Standing">Standing</option>
          <option value="Walking">Walking</option>
          <option value="Laying Down">Laying Down</option>
          <option value="Bending Forward">Bending Forward</option>
          <option value="Bending Backward">Bending Backward</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Alleviates */}
      <div>
        <label htmlFor="pain_relief" className={labelClass}>What improves or alleviates your pain?</label>
        <select id="pain_relief" name="pain_relief" className={selectClass}>
          <option value="Sitting">Sitting</option>
          <option value="Standing">Standing</option>
          <option value="Walking">Walking</option>
          <option value="Laying Down">Laying Down</option>
          <option value="Heat">Heat</option>
          <option value="Ice">Ice</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Tests */}
      <div>
        <label htmlFor="tests_had" className={labelClass}>What tests have you had?</label>
        <select id="tests_had" name="tests_had" className={selectClass}>
          <option value="CT Scan">CT Scan</option>
          <option value="MRI">MRI</option>
          <option value="XRay">XRay</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Treatments */}
      <div>
        <label htmlFor="treatments_had" className={labelClass}>What treatments have you had to treat the pain?</label>
        <select id="treatments_had" name="treatments_had" className={selectClass}>
          <option value="Chiropractic Treatment">Chiropractic Treatment</option>
          <option value="Physical Therapy">Physical Therapy</option>
          <option value="Acupuncture">Acupuncture</option>
          <option value="Spinal Injections">Spinal Injections</option>
          <option value="Spine Surgery">Spine Surgery</option>
          <option value="Other">Other</option>
        </select>
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
