import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Orbitron, Rajdhani, Inter, Tajawal } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "../globals.css";

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ subsets: ["latin"], variable: "--font-rajdhani", weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const tajawal = Tajawal({ subsets: ["arabic"], variable: "--font-tajawal", weight: ["400", "700"] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return { title: t("title"), description: t("description") };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable} ${tajawal.variable}`}>
      <body className="bg-space text-white min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}