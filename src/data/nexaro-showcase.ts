export interface ShowcaseItem {
  code: string;
  name: string;
  subtitle: string;
  type: "product" | "website";
  color: string;
  icon?: string;
  liveUrl?: string;
}

export const showcaseItems: ShowcaseItem[] = [
  // Products (icon-box cards, no liveUrl)
  { code: "NX-001.L", name: "Nexaro Life", subtitle: "Personal AI OS", type: "product", color: "from-cyan-500 to-blue-600", icon: "/nexaro-life.svg" },
  { code: "NX-002.O", name: "Vicious OS", subtitle: "Esports Operations", type: "product", color: "from-purple-500 to-pink-500", icon: "/vicious-os.svg" },
  { code: "NX-003.C", name: "Nexaro CRM", subtitle: "Smart Business CRM", type: "product", color: "from-cyan-500 to-blue-600", icon: "/nexaro-crm.svg" },
  { code: "NX-004.R", name: "Rent OS", subtitle: "Property & Rent Management", type: "product", color: "from-emerald-500 to-teal-500", icon: "/rent-os.svg" },
  { code: "NX-005.H", name: "Nexaro HR", subtitle: "HR & Payroll Management", type: "product", color: "from-orange-500 to-red-500", icon: "/nexaro-hr.svg" },
  { code: "NX-002.T", name: "Nexaro Teams OS", subtitle: "Core Operations Platform", type: "product", color: "from-slate-500 to-zinc-500", icon: "/teams-os.svg", liveUrl: "https://nexaro-teams-os-site.vercel.app/" },
  { code: "NX-006.P", name: "Nexaro IP", subtitle: "IP Management", type: "product", color: "from-blue-600 to-indigo-600", icon: "/nexaro-ip.svg", liveUrl: "https://nexaroip.vercel.app/en/dashboard" },
  { code: "NX-008.M", name: "Nexaro Master Control", subtitle: "Master Control Dashboard", type: "product", color: "from-violet-500 to-purple-600", icon: "/nexaro-master-control.svg" },

  // Websites (live-preview iframe cards, has liveUrl)
  { code: "WS-001", name: "Abdelrahman Mohamed Portfolio", subtitle: "Personal Developer Portfolio", type: "website", color: "from-blue-500 to-cyan-500", icon: "/personal-portfolio.svg", liveUrl: "https://project-8qxfy.vercel.app/" },
  { code: "WS-002", name: "Alahsa Festival Platform", subtitle: "Festival Ticketing Platform", type: "website", color: "from-emerald-600 to-green-600", icon: "/alahsa-festival.svg", liveUrl: "https://project-i9fer.vercel.app/ar" },
  { code: "WS-003", name: "Pyramids Queue", subtitle: "Event Queue & Registration", type: "website", color: "from-yellow-500 to-orange-500", icon: "/pyramids-queue.png", liveUrl: "https://project-c3kqs.vercel.app/" },
  { code: "WS-004", name: "Vicious Esports Website", subtitle: "Esports Organization Website", type: "website", color: "from-purple-600 to-pink-600", icon: "/vicious-website.png", liveUrl: "https://vicioussa.vercel.app/en" },
  { code: "WS-005", name: "Phygital KSA", subtitle: "National Phygital Competitions", type: "website", color: "from-indigo-500 to-purple-600", icon: "/phygital-ksa-logo.png", liveUrl: "https://phygital-ksa.vercel.app" },
  { code: "WS-006", name: "Ahmed Kamal IP Law", subtitle: "Trademark & IP Legal Practice", type: "website", color: "from-amber-400 to-yellow-600", liveUrl: "https://ahmedkamal-uat.vercel.app/ar" },
];
