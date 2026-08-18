'use client';

import * as React from 'react';
import { site } from '@/lib/site';

/**
 * Contact form with a mailto fallback.
 *
 * Because the site is statically exported (no server runtime by default), the
 * form composes a pre-filled email to the firm's inbox on submit — this works
 * on any static host with zero backend. If you later deploy with a server
 * (e.g. Vercel without `output: 'export'`) or a form service (Formspree,
 * Web3Forms, etc.), replace `handleSubmit` with a fetch() to your endpoint.
 *
 * TODO(client): point site.contact.email at the real inbox before launch.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const company = String(data.get('company') ?? '');
    const message = String(data.get('message') ?? '');

    const subject = `Enquiry from ${name || 'website'}${company ? ` (${company})` : ''}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      '',
      message,
    ].join('\n');

    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSubmitted(true);
  }

  const fieldClass =
    'w-full border border-ink/20 bg-white/60 px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass';
  const labelClass = 'mb-2 block text-xs font-sans uppercase tracking-[0.16em] text-ink/60';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea id="message" name="message" rows={5} required className={fieldClass} />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-ink px-7 py-3 text-sm font-sans uppercase tracking-[0.14em] text-bone transition-colors hover:bg-ink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
        >
          Send enquiry
        </button>
        {submitted && (
          <p role="status" className="text-sm text-ink/70">
            Your email client should now open with your message ready to send. If it
            doesn’t, please email us directly at{' '}
            <a className="text-brass underline" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            .
          </p>
        )}
      </div>

      <p className="text-xs leading-relaxed text-ink/45">
        Your enquiry is treated in strict confidence. We use the details you provide
        solely to respond to you.
      </p>
    </form>
  );
}
