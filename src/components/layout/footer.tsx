import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

/** 14 Nov 2026 revamp: same links and contact details, quieter layout. */
export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const col = "space-y-2.5 text-sm text-mute";
  const a = "transition-colors hover:text-ink";

  return (
    <footer className="border-t border-line bg-space">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/en" className="mb-4 inline-flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nexaro-logo.svg" alt="" className="h-7 w-7" />
              <span className="text-[15px] font-semibold tracking-tight text-ink">Nexaro Tech</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-mute">Business systems, websites and esports platforms, in Arabic and English.</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-ink">Services</h4>
            <ul className={col}>
              <li><Link href="/en/services" className={a}>Business Systems (ERP)</Link></li>
              <li><Link href="/en/services" className={a}>Websites</Link></li>
              <li><Link href="/en/services" className={a}>Esports Systems</Link></li>
              <li><Link href="/en/services" className={a}>Apps, Automation and AI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-ink">Company</h4>
            <ul className={col}>
              <li><Link href="/en/about" className={a}>About Us</Link></li>
              <li><Link href="/en/portfolio" className={a}>Products</Link></li>
              <li><Link href="/en/case-studies/pyramids-cup-8" className={a}>Case study</Link></li>
              <li><Link href="/en/contact" className={a}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-ink">Connect</h4>
            <ul className={col}>
              <li><a href="mailto:nexarotch@gmail.com" className={a}>nexarotch@gmail.com</a></li>
              <li>Egypt (Global Remote)</li>
              <li className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/Nexarotch" target="_blank" rel="noopener noreferrer" className={a}>Facebook</a>
                <a href="https://www.linkedin.com/company/nexarotch/" target="_blank" rel="noopener noreferrer" className={a}>LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Nexaro.tech. All rights reserved.</span>
          <Link href={`/${locale}/legal`} className={a}>{t("legal")}</Link>
        </div>
      </div>
    </footer>
  );
}
