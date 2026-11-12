# Nexaro Tech website audit, 12 November 2026

Owner: "we need to audit and fix the Nexaro Tech website, and enhance it as much as we can."
Checked the live site (project-jelc4.vercel.app) and the code. Build checked with `next build`
(fonts stubbed in a scratch copy only, because the sandbox cannot reach Google Fonts).

## Fixed in this commit
| # | Problem | Fix |
|---|---|---|
| 1 | The contact form did nothing (the legal page even said so) | Send now opens the visitor's email app with name, email, company, project type and message filled in; labels linked to fields; legal text (EN and AR) updated to describe it |
| 2 | Homepage positioning was generic ("We Build Digital Products That Matter") and did not mention ERP or websites, our main offers | New hero: "Systems Your Business Runs On", subtitle with ERP, bilingual websites, esports platforms, one build price, no price per user |
| 3 | Services listed things we do not sell (native mobile apps, event ticketing, brand identity) | Home and Services pages now show the four services in the partner deck: Business Systems (ERP), Websites, Esports Systems, Apps, Automation and AI (plus consulting on the Services page) |
| 4 | Services page claimed "Pyramids Cup: 5 editions, 3,500+ participants", which contradicts the other sites (see BRAND_CONSISTENCY_AUDIT.md) | Replaced with Cup 8 facts already on the homepage: 335 matches, 364 players, a staff of five |
| 5 | No "who is this for" and no "how we work" | Two new homepage sections: six client types, and the five steps from discovery call to monitoring |
| 6 | Product family showed Nexaro CRM, Nexaro HR and Rent OS as separate products, and missed Nexaro ERP and Mandoob OS | Homepage family: Nexaro ERP (HR, CRM, finance, stock), Teams OS, Mandoob OS, Vicious OS, Master Control, Nexaro Life |
| 7 | Every page had the same title and description | Titles and descriptions per page (services, about, contact, portfolio, blog), better home title in EN and AR, Open Graph and Twitter tags |
| 8 | No sitemap or robots file | `src/app/sitemap.ts` (EN and AR alternates) and `src/app/robots.ts` |
| 9 | Emoji in the hero badge; "Now accepting Q4 2026 projects" goes stale | "Now booking new projects", no emoji |
| 10 | "Powered by" listed Redis, which we do not use | Now: Next.js, React, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Flutter, Node.js, discord.js, Vercel |
| 11 | Footer: email not clickable, LinkedIn link carried an admin-only parameter, old tagline and services | Fixed |
| 12 | Contact page had an empty "Direct Line" block and an old Alahsa note | Replaced with LinkedIn and Facebook links and a "helpful to mention" list |
| 13 | Two nested `<main>` elements on every page (layout and page) | Layout uses a `<div>` |
| 14 | Lint error `any` in the locale layout; unused scroll hooks on the homepage | Fixed |

## Still open (not changed, for the owner to decide)
- **Arabic pages show English** for most content: the homepage, services, about and contact text
  is written in the components, not in `messages/ar.json`. Moving it into the message files is the
  next big step.
- **Portfolio page** still lists Nexaro CRM, Nexaro HR and Rent OS as products
  (`src/data/nexaro-showcase.ts`). Suggest folding CRM and HR into Nexaro ERP and removing Rent OS
  unless it is a real product.
- **Product codes** differ from `master-control/docs/PROJECTS_INDEX.md` (site: Teams OS NX-002.T,
  Master Control NX-008.M, IP NX-006.P; index: NX-006.T, NX-000.M, NX-017.IP). Pick one scheme.
- **Blog** has three posts in code; add real posts (case studies of Soft.tec ERP and the law firm
  site once the clients agree).
- **Testimonials**: both quotes are from Ahmed Alhassan (The Vicious). Add a second client when one
  agrees; never invent quotes.
- **Domain**: still on project-jelc4.vercel.app; a real domain helps trust and search.
- **Open Graph image**: add a 1200x630 image so links shared on WhatsApp and LinkedIn show a card.
- Five lint errors remain in files not touched here (mirror-hall-carousel, testimonials,
  glass-card, i18n request). They do not block the Vercel build.

## Deploy
`cd ~/nexaro-tech && git push` (Vercel deploys main). Then open /, /services, /contact and send a
test message from the contact form to see the email app open.
