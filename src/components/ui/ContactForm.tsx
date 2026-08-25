import { useId, useRef, useState } from "react";

type FieldName = "fullName" | "email" | "phone" | "company" | "message";
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form — client-side validation + POST to /api/contact (Vercel
 * serverless function) which forwards the message to admin@oglasglobal.com via
 * Resend. Requires RESEND_API_KEY on the server.
 */
export function ContactForm() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (fullName && fullName.length < 2) next.fullName = "Please enter your name.";
    if (!email) next.email = "Enter a valid email address.";
    else if (!emailRe.test(email)) next.email = "Enter a valid email address.";
    if (!phone) next.phone = "Enter a valid phone number.";
    else if (phone.replace(/[^\d]/g, "").length < 7) next.phone = "Enter a valid phone number.";
    return next;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const next = validate(data);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setStatus("idle");
      setStatusMessage("");
      const firstInvalid = (Object.keys(next) as FieldName[])[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setStatusMessage("Sending…");

    const payload = {
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let detail = "Could not send message. Please try again later.";
        try {
          const body = (await res.json()) as { error?: string };
          if (body?.error) detail = body.error;
        } catch {
          /* ignore body parse error */
        }
        setStatus("error");
        setStatusMessage(detail);
        return;
      }

      setStatus("success");
      setStatusMessage("Message sent — we’ll be in touch shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setStatusMessage(
        "Could not send message. Please email admin@oglasglobal.com instead."
      );
    }
  };

  const fieldClass =
    "w-full rounded-full border border-hairline-dark bg-transparent px-6 py-4 font-body text-base text-black outline-none transition-colors placeholder:text-black/45 focus-visible:border-black disabled:opacity-60";

  const describe = (field: FieldName) => (errors[field] ? `${id}-${field}-error` : undefined);
  const submitting = status === "submitting";

  const statusColor =
    status === "success"
      ? "text-black"
      : status === "error"
      ? "text-red-600"
      : "text-black/70";

  return (
    <form className="mt-12" noValidate onSubmit={handleSubmit} ref={formRef}>
      <fieldset disabled={submitting} className="contents">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor={`${id}-fullName`}>
              Full name
            </label>
            <input
              aria-describedby={describe("fullName")}
              aria-invalid={Boolean(errors.fullName)}
              autoComplete="name"
              className={fieldClass}
              id={`${id}-fullName`}
              name="fullName"
              placeholder="Full name"
              type="text"
            />
            {errors.fullName && (
              <p className="mt-2 px-6 font-body text-sm text-red-600" id={`${id}-fullName-error`}>
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="sr-only" htmlFor={`${id}-email`}>
              Email (required)
            </label>
            <input
              aria-describedby={describe("email")}
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
              className={fieldClass}
              id={`${id}-email`}
              name="email"
              placeholder="Email*"
              type="email"
            />
            {errors.email && (
              <p className="mt-2 px-6 font-body text-sm text-red-600" id={`${id}-email-error`}>
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="sr-only" htmlFor={`${id}-phone`}>
              Phone number (required)
            </label>
            <input
              aria-describedby={describe("phone")}
              aria-invalid={Boolean(errors.phone)}
              autoComplete="tel"
              className={fieldClass}
              id={`${id}-phone`}
              name="phone"
              placeholder="Phone number*"
              type="tel"
            />
            {errors.phone && (
              <p className="mt-2 px-6 font-body text-sm text-red-600" id={`${id}-phone-error`}>
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="sr-only" htmlFor={`${id}-company`}>
              Company Name
            </label>
            <input
              autoComplete="organization"
              className={fieldClass}
              id={`${id}-company`}
              name="company"
              placeholder="Company Name"
              type="text"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="sr-only" htmlFor={`${id}-message`}>
            Tell us about your product and goals.
          </label>
          <textarea
            className="min-h-[160px] w-full rounded-3xl border border-hairline-dark bg-transparent px-6 py-5 font-body text-base text-black outline-none transition-colors placeholder:text-black/45 focus-visible:border-black disabled:opacity-60"
            id={`${id}-message`}
            maxLength={2000}
            name="message"
            placeholder="Tell us about your product and goals."
          />
        </div>

        <button
          className="mt-6 w-full rounded-full bg-black py-5 font-body text-base font-medium text-white transition-transform hover:scale-[1.005] active:scale-100 disabled:opacity-60 disabled:hover:scale-100"
          type="submit"
        >
          {submitting ? "Sending…" : "Send message"}
        </button>
      </fieldset>

      <p
        aria-live="polite"
        className={`mt-4 text-center font-body text-sm ${statusColor}`}
        role="status"
      >
        {submitted && statusMessage}
      </p>
    </form>
  );
}
