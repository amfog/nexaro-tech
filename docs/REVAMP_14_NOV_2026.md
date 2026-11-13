# Nexaro Tech website revamp (14 Nov 2026)

Owner: "Revamp Nexaro Tech like decent companies. No useless emojis like the ones on the website,
suggested images to be used, animation." Scope chosen: redesign, same content.

## What changed
- **Look:** a calm product-company style. Near-black background, one cyan accent used sparingly,
  white primary buttons, hairline borders, Geist type (Tajawal for Arabic). Gone: the particle
  canvas, the grid and neon glows, Orbitron and Rajdhani, the five star icons, the coloured icon
  tiles, the "★" badge on Services, "Client Love".
- **Real images instead of icons:** English screenshots of the live Nexaro ERP demo
  (`public/images/erp/dashboard.webp`, `people.webp`, `settings.webp`, taken 14 Nov), the Pyramids
  Cup 8 screenshots already in `public/case-studies/pc8`, and the existing project screenshots.
- **Animation (quiet, once, off for people who ask for reduced motion):** sections fade up as they
  scroll in; the hero ERP screenshot straightens from a tilt as you scroll; the case study numbers
  count up; the ERP spotlight switches screens (Dashboard, Team, Modules); the How we work line
  draws itself; a slow colour glow behind the hero and the final call to action; the tech list
  scrolls slowly and pauses on hover.
- **Home:** hero with the ERP screenshot, a strip of real projects (Pyramids Queue, The Vicious
  Esports, Phygital KSA, Alahsa Festival), Pyramids Cup 8 case study (same numbers), the side project
  card, four services with screenshots, an ERP spotlight with a link to the live demo, who we work
  with, how we work, three shipped projects, the product family, the same two quotes from the same
  client, the call to action.
- **Services and About:** rebuilt in the same style with the same text. Services alternates text
  and a screenshot per service.
- **Every other page** (Products, Contact, Blog, Legal, the three case studies) picks up the new
  look through the shared theme: the old class names now map to the new colours and font.
- **Fixes on the way:** the primary button was a gradient made of colours Tailwind v4 never loaded
  (`tailwind.config.ts` is not read by v4), so it showed as text with no background; now a solid
  white button. Links that went to `/contact`, `/portfolio` and `/` from inside pages now go to the
  `/en/...` pages. The mobile menu's Get in touch link went to `/contact`.
- Checked: `tsc` clean; `next build` passes (fonts stubbed in the sandbox copy only); eslint has no
  new problems (4 old ones remain in files the site no longer uses and in `lib/i18n/request.ts`).

## Not changed
No number, quote, client or claim was added. The ERP spotlight bullets describe what the live demo
screens show.

## Next (optional)
- The case study pages still use some small decorative icons inside their text; they now look
  calm, but can be removed in the same way if wanted.
- Unused old files: `components/hero/mirror-hall-carousel.tsx`, `components/ui/particles-bg.tsx`,
  `components/sections/*`. Safe to delete later.
- Images to add: see `docs/IMAGE_SUGGESTIONS.md`.
