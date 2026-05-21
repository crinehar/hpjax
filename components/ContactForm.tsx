"use client";

import { useForm } from "react-hook-form";

// TODO: wire up Resend API using RESEND_API_KEY env var in a server action
// import { sendContactEmail } from "@/app/actions/contact";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    // TODO: replace with server action using Resend
    console.log("Contact form submission:", data);
    await new Promise((r) => setTimeout(r, 800));
    reset();
  }

  return (
    <>
      {isSubmitSuccessful && (
        <div role="status" aria-live="polite" className="mb-6 p-4 bg-secondary/10 border border-secondary rounded-lg text-secondary-dark text-sm">
          Thank you! We&apos;ll get back to you within one business day.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            {...register("email", {
              required: "Email address is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
            })}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-1">
            Phone Number <span className="text-ink-subtle font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            {...register("phone")}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-ink mb-1">
            Subject <span aria-hidden="true">*</span>
          </label>
          <input
            id="subject"
            type="text"
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            {...register("subject", { required: "Subject is required" })}
          />
          {errors.subject && (
            <p id="subject-error" role="alert" className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary resize-y"
            {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="mt-1 text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
      </form>
    </>
  );
}
