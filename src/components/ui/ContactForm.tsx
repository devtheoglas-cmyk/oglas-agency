import { useId, useRef, useState } from "react";

type FieldName = "fullName" | "email" | "phone" | "company" | "message";
type Errors = Partial<Record<FieldName, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form — UI + client-side validation ONLY. It never transmits,
 * persists, or logs entered data: submit calls preventDefault and shows an
 * honest demo status. (See BUILD-SPEC contact-form contract.)
 */
export function ContactForm() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // never transmit
    setSubmitted(true);
    const data = new FormData(event.currentTarget);
    const next = validate(data);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      setStatus("");
      const firstInvalid = (Object.keys(next) as FieldName[])[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus("Validated — this is a demo form and was not sent.");
  };

  const fieldClass =
    "w-full rounded-full border border-hairline-dark bg-transparent px-6 py-4 font-body text-base text-black outline-none transition-colors placeholder:text-black/45 focus-visible:border-black";

  const describe = (field: FieldName) => (errors[field] ? `${id}-${field}-error` : undefined);

  return (
    <form className="mt-12" noValidate onSubmit={handleSubmit} ref={formRef}>
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
          className="min-h-[160px] w-full rounded-3xl border border-hairline-dark bg-transparent px-6 py-5 font-body text-base text-black outline-none transition-colors placeholder:text-black/45 focus-visible:border-black"
          id={`${id}-message`}
          maxLength={2000}
          name="message"
          placeholder="Tell us about your product and goals."
        />
      </div>

      <button
        className="mt-6 w-full rounded-full bg-black py-5 font-body text-base font-medium text-white transition-transform hover:scale-[1.005] active:scale-100"
        type="submit"
      >
        Send message
      </button>

      <p
        aria-live="polite"
        className="mt-4 text-center font-body text-sm text-black/70"
        role="status"
      >
        {submitted && status}
      </p>
    </form>
  );
}
