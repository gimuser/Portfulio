"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";

type FormState = "idle" | "success" | "error";

export function ContactForm() {
  const { language } = useLanguage();
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const honeypot = String(form.get("company") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    if (honeypot || !email.includes("@") || message.trim().length < 20) {
      setState("error");
      return;
    }

    setState("success");
    event.currentTarget.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        {language === "en" ? "Name" : "Nom"}
        <input name="name" type="text" required minLength={2} />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        {language === "en" ? "Subject" : "Sujet"}
        <input name="subject" type="text" required minLength={3} />
      </label>
      <label>
        Message
        <textarea name="message" required minLength={20} rows={6} />
      </label>
      <label className="honeypot" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <p className="spam-note">
        {language === "en"
          ? "Spam-protection placeholder: connect Turnstile, reCAPTCHA, or a server action before production mail delivery."
          : "Placeholder anti-spam : connecter Turnstile, reCAPTCHA ou une server action avant l'envoi en production."}
      </p>
      {state === "success" ? (
        <p className="form-success">
          {language === "en"
            ? "Message validated locally. Connect an email service before deployment to send it."
            : "Message valide localement. Connectez un service email avant le deploiement pour l'envoyer."}
        </p>
      ) : null}
      {state === "error" ? (
        <p className="form-error">
          {language === "en"
            ? "Please provide a valid email and a message of at least 20 characters."
            : "Veuillez fournir un email valide et un message d'au moins 20 caracteres."}
        </p>
      ) : null}
      <button className="button" type="submit">
        <Send size={18} />
        {language === "en" ? "Validate message" : "Valider le message"}
      </button>
    </form>
  );
}
