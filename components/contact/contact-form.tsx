"use client";

import { FormEvent, useState, useTransition } from "react";
import { Send } from "lucide-react";
import { sendContactMessage } from "@/app/contact/actions";
import { useLanguage } from "@/components/layout/language-provider";

type FormState = {
  status: "idle" | "success" | "error";
  reason?: "invalid" | "rate_limited" | "not_configured" | "delivery_failed";
};

export function ContactForm() {
  const { language } = useLanguage();
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [startedAt, setStartedAt] = useState(() => String(Date.now()));
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    setState({ status: "idle" });

    startTransition(async () => {
      const result = await sendContactMessage(formData);
      setState(result);

      if (result.status === "success") {
        formElement.reset();
        setStartedAt(String(Date.now()));
      }
    });
  };

  const errorMessage =
    state.reason === "rate_limited"
      ? language === "en"
        ? "Too many messages were sent recently. Please try again later."
        : "Trop de messages ont ete envoyes recemment. Veuillez reessayer plus tard."
      : state.reason === "not_configured"
        ? language === "en"
          ? "Email delivery is not configured yet. Add the SMTP variables on the server."
          : "L'envoi email n'est pas encore configure. Ajoutez les variables SMTP sur le serveur."
        : language === "en"
          ? "Please check your details and try again."
          : "Veuillez verifier vos informations et reessayer.";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="startedAt" value={startedAt} />
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
          ? "Protected by server-side validation, a honeypot field, rate limiting, and SMTP credentials kept outside the browser."
          : "Protege par validation serveur, champ honeypot, limite de debit et identifiants SMTP gardes hors du navigateur."}
      </p>
      {state.status === "success" ? (
        <p className="form-success">
          {language === "en"
            ? "Message sent. I will receive it in my email inbox."
            : "Message envoye. Je le recevrai dans ma boite email."}
        </p>
      ) : null}
      {state.status === "error" ? (
        <p className="form-error">{errorMessage}</p>
      ) : null}
      <button className="button" type="submit" disabled={isPending}>
        <Send size={18} />
        {isPending
          ? language === "en"
            ? "Sending..."
            : "Envoi..."
          : language === "en"
            ? "Send message"
            : "Envoyer le message"}
      </button>
    </form>
  );
}
