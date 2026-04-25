import { redirect } from "next/navigation";

export default function RootPage() {
  // Next.js redirect throws internally, but we add return for type safety
  redirect("/en");
}

// Explicitly tell TypeScript this is a valid component
RootPage.displayName = "RootPage";