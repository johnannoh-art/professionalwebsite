"use client";

import { useState, type FormEvent } from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/john-annoh/";
const EMAIL = "j_annoh@hotmail.com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    // No backend yet — log the submission for now.
    console.log("Contact form submission:", payload);
    setSubmitted(true);
    event.currentTarget.reset();
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
                className="mt-2 w-full rounded-full bg-teal px-7 py-3.5 font-display text-sm font-semibold text-cream shadow-sm transition hover:bg-teal-dark sm:w-auto"
              >
                Send message
              </button>
              {submitted && (
                <p className="text-sm text-teal">
                  Thanks — your message has been logged. I&rsquo;ll get back
                  to you soon.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
