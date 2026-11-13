import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "../globals.css";

// 14 Nov 2026 revamp: one calm type family (Geist) instead of Orbitron and Rajdhani; Tajawal for Arabic.
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const tajawal = Tajawal({ subsets: ["arabic"], variable: "--font-tajawal", weight: ["400", "500", "700"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return {
    metadataBase: new URL("https://project-jelc4.vercel.app"),
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), siteName: "Nexaro Tech", type: "website", locale: locale === "ar" ? "ar_EG" : "en_US" },
    twitter: { card: "summary", title: t("title"), description: t("description") },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();
  
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} className={`${geist.variable} ${geistMono.variable} ${tajawal.variable}`}>
      <body className="bg-space text-ink min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="flex-grow pt-16">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}