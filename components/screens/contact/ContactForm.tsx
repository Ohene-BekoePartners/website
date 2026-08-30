"use client";

import * as React from "react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "done" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      // Never report success when the submission could not have been sent.
      console.error(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set — the contact form cannot deliver messages.",
      );
      setErrorMessage(null);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: ACCESS_KEY,
          subject:
            `Website inquiry from ${data.firstName ?? ""} ${data.lastName ?? ""}`.trim(),
          from_name: "Ohene-Bekoe & Partners website",
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        setErrorMessage(result?.message ?? null);
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6"
      noValidate
      aria-label="Contact form"
    >
      {/* Spam trap: hidden from users, so a checked box means a bot filled it in. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="First name"
          name="firstName"
          type="text"
          required
          autoComplete="given-name"
          disabled={status === "submitting"}
        />
        <Input
          label="Last name"
          name="lastName"
          type="text"
          required
          autoComplete="family-name"
          disabled={status === "submitting"}
        />
      </div>
      <Input
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
        disabled={status === "submitting"}
      />
      <Input
        label="Company"
        name="company"
        type="text"
        autoComplete="organization"
        disabled={status === "submitting"}
      />
      <Input
        label="Phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        disabled={status === "submitting"}
      />
      <Textarea
        label="Message"
        name="message"
        required
        rows={5}
        placeholder="Brief description of your legal matter or inquiry"
        disabled={status === "submitting"}
      />

      <p className="text-xs leading-relaxed text-charcoal-muted">
        Sending an inquiry does not create a lawyer&ndash;client relationship.
        Please do not include confidential information until we have confirmed
        we are able to act for you.
      </p>

      <div aria-live="polite">
        {status === "done" && (
          <p className="text-sm text-charcoal-muted" role="status">
            Thank you. We have received your inquiry and will respond shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600" role="alert">
            {errorMessage ??
              "We could not send your inquiry. Please try again, or email us directly at secretariat@obpgh.com."}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </Button>
    </form>
  );
}
