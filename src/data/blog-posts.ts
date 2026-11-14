// Blog posts (14 Nov 2026, owner: "increase the blog and add things from our work").
// Every fact here comes from our own projects and the numbers already published on this site.
// A paragraph that starts with "## " is a subheading.

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  cover: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "one-system-ran-pyramids-cup-8",
    title: "How one system ran Pyramids Cup 8",
    date: "November 2026",
    excerpt: "335 matches over six weeks and four stages, run by a staff of five. What we built, and what each part did.",
    tags: ["Esports", "Case Study", "Operations"],
    cover: "/case-studies/pc8/league.webp",
    body: [
      "Pyramids Cup 8 was the MENA Wild Rift circuit inside the Rift Legends ecosystem. Over six weeks it went through four stages and 335 matches, with 364 players from 24 countries and a Discord community of 3,660 members. A staff of five ran it.",
      "That is only possible when the repetitive work is done by software and every decision stays with a person. So we built one system with four parts on one database.",
      "## The four parts",
      "The tournament bot handles registration, check-in, match channels, reminders and results inside Discord, where the teams already are. Teams OS is the staff app: tasks, incidents, verification of results and the prize pool. The public website, pyramidsqueue.com, shows standings, schedules, player profiles and the leaderboard. And one Postgres database sits behind all three, so a result entered once shows up everywhere.",
      "## A person checks every result",
      "Nothing reaches the website until a staff member has verified it. The bot reads the end-of-game screenshot and fills in what it can; a referee confirms it. That one rule is why the standings never had to be corrected in public.",
      "## What we would tell another organiser",
      "Put every repeated message into the bot, keep every judgement call with a person, and make the public site read from the same place your staff works in. JSK Esports won the Grand Final 3-2 against SBO3A, and both went on to the Rift Legends Regional Groups.",
    ],
  },
  {
    slug: "a-modular-erp",
    title: "A modular ERP: switch on only what you use",
    date: "November 2026",
    excerpt: "Why Nexaro ERP works like a phone's settings screen: every module can be switched off, and nothing is lost.",
    tags: ["ERP", "Product", "Business Systems"],
    cover: "/images/erp/dashboard.webp",
    body: [
      "Most companies of 10 to 80 people do not need a giant ERP. They need people, projects, clients and money in one place, without a crowded screen. Nexaro ERP is built around that.",
      "## Modules you can switch off",
      "People, projects, tasks, clients, finance, assets, storage, reports, stock and orders, and the Nexaro AI helper are separate modules. The owner switches them on and off in Settings. A module that is off disappears for everyone, and its data stays safe for the day it is switched back on.",
      "## Each person sees their part",
      "Access runs from level 0 (a client) to level 6 (system admin), and it is enforced in the database itself, not only on the screen. A team lead sees their team and projects; finance and the CEO see the money; a client sees only their own projects, invoices and tickets.",
      "## Arabic and English, three looks",
      "Every screen works in Arabic and English, right to left done properly. Companies pick one of three looks for the same system. There is a full backup to a file on a PC or a USB stick, and import and export of clients, people and finance.",
      "You can try it on our live demo with an invented company: nexaro-erp.vercel.app.",
    ],
  },
  {
    slug: "building-a-draft-tool",
    title: "Building a draft tool for Wild Rift tournaments",
    date: "November 2026",
    excerpt: "Captain links, an OBS view for the stream, fearless across a series, and the bug that taught us not to trust one browser tab.",
    tags: ["Esports", "Engineering", "Pyramids Queue"],
    cover: "/case-studies/pc8/playoffs.webp",
    body: [
      "Our cup games are Wild Rift custom games in blind pick, so the draft happens outside the game, by voice. That works, but viewers cannot see it, nobody records it, and fearless rules depend on memory. We built a draft tool for Pyramids Queue to fix that.",
      "## How it works",
      "An admin creates a series with the two team names, Bo1, Bo3 or Bo5, and the side rules. The tool gives four links: one per captain, one for the stream (an OBS browser source) and one for the admin. The same links work for every game of the series. Captains ban and pick with a timer; the stream shows every hover and lock; champions picked earlier in the series are greyed out for fearless.",
      "## The bug",
      "The first version kept the whole draft in the admin's browser tab. In testing, the browser put that tab to sleep, and from then on nothing moved: Lock did nothing. The fix was to stop having a single owner. Now every open page keeps its own copy of the draft and applies the same checked actions, so the draft keeps going even if the admin tab sleeps or closes, and a page that reopens gets the draft back from the others.",
      "## Practice and keeping a record",
      "Players can also practice a draft alone, and every draft can be saved as an image with the teams, bans and picks, ready to post. The next step is to create the draft for every match automatically and save it with the result.",
    ],
  },
  {
    slug: "arabic-and-english-done-properly",
    title: "Arabic and English in one product, done properly",
    date: "November 2026",
    excerpt: "What it takes for a system to feel native in Arabic, not translated: direction, layout, numbers, dates and fonts.",
    tags: ["Arabic", "Design", "Web Dev"],
    cover: "/images/live/ahmed-kamal-ip.webp",
    body: [
      "Every product we ship works in Arabic and English. Translating the words is the easy part. Making the Arabic version feel like it was designed first is the real work.",
      "## Direction is a layout decision",
      "Setting the page to right to left flips the text, but layouts built with left and right margins stay the wrong way round. We use start and end instead of left and right everywhere, so columns, icons and arrows mirror by themselves.",
      "## Numbers, dates and money",
      "Dates and amounts are formatted for the reader's language, with the same digits our clients use in their invoices. A tax invoice must read correctly in both languages, so totals, VAT and dates are checked on printed copies, not only on screen.",
      "## Fonts and line height",
      "Arabic needs its own font and more room between lines. We pair a Latin font with an Arabic one that has the same weight, so a bilingual page does not look like two sites stitched together.",
      "## Test with real users",
      "The best test is simple: hand the Arabic version to someone who will use it every day and watch where they hesitate.",
    ],
  },
  {
    slug: "inhouses-between-cups",
    title: "Inhouses: keeping players active between cups",
    date: "October 2026",
    excerpt: "Between two tournaments a community goes quiet. Pyramids Q Inhouses gives players a reason to play together every week.",
    tags: ["Esports", "Community", "Discord"],
    cover: "/case-studies/pc8/inhouse_open.webp",
    body: [
      "A tournament brings a community together for a few weeks, and then it goes quiet until the next one. New teams struggle to form because players never meet. Pyramids Q Inhouses is our answer.",
      "## How a session runs",
      "Staff open a session in Discord. Players press Join and pick their lane; when ten are in, the bot builds two balanced teams, asks everyone to confirm they are ready, and creates the lobby with voice channels for blue and red. After the game the result is reported with a screenshot and checked by staff.",
      "## A rating that means something",
      "Every game moves a player's rating, so the ladder shows who is improving. A weekly recap post names the top players, and ratings fade slowly for players who stop playing, so the top of the ladder stays current.",
      "## Profiles that last",
      "Results feed the player profiles on pyramidsqueue.com, so a player's inhouse record sits next to their tournament history. Captains looking for players between cups can see who is active, which lane they play and how they are doing.",
    ],
  },
  {
    slug: "an-ai-helper-that-asks-first",
    title: "An AI helper that asks before it saves",
    date: "November 2026",
    excerpt: "How we put an AI assistant inside business systems without letting it change anything on its own.",
    tags: ["AI", "Product", "ERP"],
    cover: "/images/erp/settings.webp",
    body: [
      "Everyone wants an AI assistant inside their tools. Very few want it changing records by itself. Nexaro AI is built around that difference.",
      "## It prepares, you confirm",
      "Ask a question in Arabic or English and it answers from the data your role is allowed to see. Ask it to create a task, a client or an invoice draft, and it prepares the change and shows it to you first. Nothing is saved until you press Confirm.",
      "## It sees what you see",
      "The assistant works with the same access level as the person asking. A team lead's assistant cannot read finance; a client's portal has no assistant at all.",
      "## Your provider, your key",
      "It works with Google Gemini, Groq or Claude. Keys stay with the company and are sent from our server route, never shipped inside the app. A free tier is enough for most owners.",
    ],
  },
  {
    slug: "building-nexaro-life",
    title: "Building Nexaro Life: our AI OS journey",
    date: "April 2026",
    excerpt: "How we architected a personal AI operating system with privacy-first design.",
    tags: ["AI", "Product", "Architecture"],
    cover: "/images/nexaro-life-dashboard.webp",
    body: [
      "Nexaro Life started as the system we needed ourselves: one place for tasks, projects, habits and ideas, with an AI assistant that knows the context.",
      "## Eight modules, one context",
      "It brings eight modules together, including tasks, projects, habits and an ideas vault. Because they share one database, the assistant can see that a task belongs to a project and that a habit has slipped this week.",
      "## An assistant with tools",
      "The AI works through 26 tools and five modes, so it can act inside the app rather than only chat. Google Drive is connected for documents.",
      "## Privacy first",
      "It is built on Flutter and Supabase with privacy-first rules: every row belongs to its owner and is protected in the database.",
    ],
  },
  {
    slug: "event-tech-alahsa",
    title: "Event tech in Saudi Arabia: lessons from Alahsa",
    date: "March 2026",
    excerpt: "Key insights from building festival platforms for large-scale events.",
    tags: ["Event Tech", "Case Study", "KSA"],
    cover: "/images/alahsa-festival-home.webp",
    body: [
      "A festival platform has one busy moment after another: tickets go on sale, the schedule changes, and visitors check their phones in the crowd.",
      "## Tickets, schedules and vendors",
      "The Alahsa Festival Platform brings online ticketing, the event schedule and maps, vendor management and real-time updates together, built mobile first.",
      "## Arabic first",
      "The main audience reads Arabic, so the Arabic version is the primary one, with English alongside.",
      "## Build for the peak",
      "The lesson we carry into every event project: design for the busiest ten minutes, not the average day.",
    ],
  },
  {
    slug: "why-nextjs-for-nexaro-tech",
    title: "Why we chose Next.js for Nexaro.tech",
    date: "February 2026",
    excerpt: "Technical decisions behind our own company website.",
    tags: ["Next.js", "Web Dev", "Design"],
    cover: "/images/nexaro-website-home.webp",
    body: [
      "Our own website had to be fast, bilingual and easy to change, because it is the first thing a client sees.",
      "## The stack",
      "It is built with Next.js and TypeScript, styled with Tailwind CSS, animated with Framer Motion, and translated with next-intl for English and Arabic with right to left support.",
      "## Live, not screenshots",
      "Where we can, the site shows our work live: the Pyramids Cup 8 section embeds pyramidsqueue.com itself, so visitors see the real product.",
      "## Easy to grow",
      "Each project, service and article is data, so adding a new case study or post is a small change rather than a redesign.",
    ],
  },
];

export const postBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);
