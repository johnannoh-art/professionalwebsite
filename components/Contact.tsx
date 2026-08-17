"use client";

import { useState, type FormEvent } from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/john-annoh/";
const EMAIL = "j_annoh@hotmail.com";
const WEB3FORMS_ACCESS_KEY = "657dfa30-c3a0-4299-b9c7-5cc7834297cf";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New message from johnannoh.com",
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      botcheck: formData.get("botcheck"),
    };

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white/60">
      <div className="mx-auto max-w-content px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Let&rsquo;s talk
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/75">
              Whether it&rsquo;s a full-time Head of Brand or Head of
              Marketing role, or a fractional engagement — I&rsquo;d like to
              hear about it.
            </p>
            <div className="mt-8 space-y-2 text-base">
              <a
                href={`mailto:${EMAIL}`}
                className="block font-semibold text-teal hover:underline"
              >
                {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-teal hover:underline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-ink/10 bg-cream p-7 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-ink"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-teal focus:ring-1 focus:ring-teal"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-ink"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-teal focus:ring-1 focus:ring-teal"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-ink"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-teal focus:ring-1 focus:ring-teal"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 w-full rounded-full bg-teal px-7 py-3.5 font-display text-sm font-semibold text-cream shadow-sm transition hover:bg-teal-dark disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
              {status === "success" && (
                <p className="text-sm text-teal">
                  Thanks for getting in touch. I&rsquo;ve got your message and
                  I&rsquo;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong sending that — please try again, or
                  email me directly at{" "}
                  <a href={`mailto:${EMAIL}`} className="underline">
                    {EMAIL}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
