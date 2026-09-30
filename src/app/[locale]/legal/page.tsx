import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

// ── THE LEGAL PAGE, FIRST PASS ───────────────────────────────────────────────
//
// Written 23 September 2026, modelled on the Pyramids Queue legal page (see
// pyramids-queue/src/app/legal/page.tsx and the lessons in its header). Same
// section order, same rule: describe what the site actually does today, and
// put anything undecided on screen under an orange "(pending)" heading rather
// than in a comment.
//
// WHAT WAS CHECKED BEFORE WRITING, rather than assumed:
//
//   - THE CONTACT FORM SENDS NOTHING. src/app/[locale]/contact/page.tsx has a
//     <form> with no action, no onSubmit and no name attributes on its inputs.
//     Pressing Send reloads the page and discards what was typed. The page says
//     so, and tells people to email instead. Fixing the form is the first item
//     in the audit; when it is fixed, rewrite the "contact form" section to name
//     the service that receives the messages.
//
//   - NO ANALYTICS RUN. @vercel/analytics and @next/third-parties are in
//     package.json but neither is imported anywhere in src. If one is wired up,
//     update the "Analytics and advertising" section in the same commit.
//
//   - ONE COOKIE. next-intl 4.9 middleware sets NEXT_LOCALE when the chosen
//     locale differs from the browser language. It is disclosed.
//
//   - LIVE IFRAMES. The home page and portfolio embed live third party sites.
//     Those load in the visitor's browser and can set their own cookies, so the
//     page says that their policies apply.
//
// STILL OPEN, and flagged "(pending)" on the page:
//   - Business registration. No registered company is confirmed for Nexaro
//     Tech, so none is named. Fill in once confirmed.
//   - The contact form (see above).
//   - Default ownership terms for delivered work when an agreement is silent.
//   - Written permission from each client shown in the portfolio.
//
// NOT LEGAL ADVICE AND NOT REVIEWED BY A LAWYER.

const EMAIL = "nexarotch@gmail.com";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description") },
  };
}

export default async function LegalPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  const date = t("date");

  const tags = {
    b: (chunks: ReactNode) => <B>{chunks}</B>,
    email: (chunks: ReactNode) => <A href={`mailto:${EMAIL}`}>{chunks}</A>,
  };
  const rich = (key: string) => t.rich(key, tags);
  const list = (key: string) =>
    Object.keys(t.raw(key) as Record<string, string>).map((k) => rich(`${key}.${k}`));
  const pending = t("pending");

  const nav: [string, string][] = [
    [t("nav.operators"), "#operators"],
    [t("nav.privacy"), "#privacy"],
    [t("nav.terms"), "#terms"],
    [t("nav.ip"), "#ip"],
    [t("nav.contact"), "#contact"],
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white pt-16 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            {t("title")} <span className="text-cyan-400">{t("accent")}</span>
          </h1>
          <p className="text-gray-400">{t("subtitle", { date })}</p>
        </header>

        <nav aria-label={t("nav.label")} className="mb-12 flex flex-wrap gap-2 text-sm">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-gray-400 transition-colors hover:border-cyan-400 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <Section id="operators" title={t("operators.title")}>
          <P>{t("operators.intro")}</P>
          <P>{rich("operators.role")}</P>
          <H3 flag pending={pending}>{t("operators.business.h")}</H3>
          <P>{t("operators.business.p")}</P>
        </Section>

        <Section id="privacy" title={t("privacy.title")}>
          <P>{t("privacy.intro")}</P>

          <H3>{t("privacy.what.h")}</H3>
          <List items={list("privacy.what.items")} />

          <H3 flag pending={pending}>{t("privacy.form.h")}</H3>
          <P>{t("privacy.form.p")}</P>

          <H3>{t("privacy.analytics.h")}</H3>
          <P>{t("privacy.analytics.p")}</P>

          <H3>{t("privacy.previews.h")}</H3>
          <P>{t("privacy.previews.p")}</P>

          <H3>{t("privacy.why.h")}</H3>
          <P>{t("privacy.why.p")}</P>

          <H3>{t("privacy.who.h")}</H3>
          <List items={list("privacy.who.items")} />

          <H3>{t("privacy.keep.h")}</H3>
          <P>{t("privacy.keep.p1")}</P>
          <P>{t("privacy.keep.p2")}</P>

          <H3>{t("privacy.rights.h")}</H3>
          <P>{t("privacy.rights.p1")}</P>
          <P>{t("privacy.rights.p2")}</P>

          <H3>{t("privacy.security.h")}</H3>
          <P>{t("privacy.security.p")}</P>

          <H3>{t("privacy.age.h")}</H3>
          <P>{t("privacy.age.p")}</P>
        </Section>

        <Section id="terms" title={t("terms.title")}>
          <H3>{t("terms.site.h")}</H3>
          <P>{t("terms.site.p1")}</P>
          <P>{t("terms.site.p2")}</P>

          <H3>{t("terms.enquiries.h")}</H3>
          <P>{t("terms.enquiries.p")}</P>

          <H3 flag pending={pending}>{t("terms.delivered.h")}</H3>
          <P>{t("terms.delivered.p1")}</P>
          <P>{t("terms.delivered.p2")}</P>

          <H3>{t("terms.warranty.h")}</H3>
          <P>{t("terms.warranty.p")}</P>

          <H3>{t("terms.changes.h")}</H3>
          <P>{t("terms.changes.p")}</P>

          <H3>{t("terms.law.h")}</H3>
          <P>{rich("terms.law.p1")}</P>
          <P>{t("terms.law.p2")}</P>
        </Section>

        <Section id="ip" title={t("ip.title")}>
          <H3>{t("ip.ours.h")}</H3>
          <P>{t("ip.ours.p")}</P>

          <H3 flag pending={pending}>{t("ip.clients.h")}</H3>
          <P>{t("ip.clients.p1")}</P>
          <P>{t("ip.clients.p2")}</P>

          <H3>{t("ip.tech.h")}</H3>
          <P>{t("ip.tech.p")}</P>
        </Section>

        <Section id="contact" title={t("contact.title")}>
          <P>{rich("contact.p1")}</P>
          <P>{t("contact.p2")}</P>
          <p className="mt-8 text-xs text-gray-500">{t("updated", { date })}</p>
        </Section>
      </div>
    </div>
  );
}

// ── Small presentational helpers ─────────────────────────────────────────────

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-14 scroll-mt-28">
      <h2 className="font-orbitron mb-5 text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

/** `flag` marks a heading whose section is still awaiting a decision. */
function H3({ children, flag, pending }: { children: ReactNode; flag?: boolean; pending?: string }) {
  return (
    <h3
      className="pt-4 text-xs font-semibold uppercase tracking-wider"
      style={{ color: flag ? "#FF8C6A" : "#22D3EE" }}
    >
      {children}
      {flag && <span className="ms-2 normal-case tracking-normal">{pending}</span>}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-gray-400">{children}</p>;
}

function B({ children }: { children: ReactNode }) {
  return <span className="font-medium text-white">{children}</span>;
}

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300">
      {children}
    </a>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 leading-relaxed text-gray-400">
          <span className="select-none pt-0.5 text-cyan-400">&bull;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
