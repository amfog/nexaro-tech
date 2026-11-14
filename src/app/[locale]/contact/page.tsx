"use client";

/* Contact (12 Nov 2026 audit): the old form did nothing when sent (the legal page said so).
   Now Send opens the visitor's own email app with the message filled in, addressed to us.
   No backend, nothing stored by the site; legal.privacy.form says the same. */
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Users } from "lucide-react";

const EMAIL = "nexarotch@gmail.com";
const TYPES = [
  "Business system (ERP)",
  "Website",
  "Esports system",
  "Apps, automation or AI",
  "Something else",
];
const field =
  "w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function send(e: FormEvent) {
    e.preventDefault();
    const subject = `${type}${company ? ` for ${company}` : ""} (from ${name || "the website"})`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      `Project type: ${type}`,
      "",
      message,
    ].filter((l, i) => l !== "" || i === 4).join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s Build <span className="text-cyan-400">Together</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us how your team works today and what slows it down. We reply by email, set up a short call, and send a
            written scope and price afterwards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
            <div className="bg-[#0d122d] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)]">
              <h2 className="font-orbitron text-2xl font-bold mb-6 text-white">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg"><Mail className="w-6 h-6 text-cyan-400" /></div>
                  <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-cyan-400 transition-colors">{EMAIL}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-400/10 rounded-lg"><MapPin className="w-6 h-6 text-purple-400" /></div>
                  <div>
                    <h3 className="font-bold text-white">Location</h3>
                    <p className="text-gray-400">Egypt, working with clients in Egypt, the Gulf and Europe</p>
                    <p className="text-sm text-gray-500 mt-1">Calls in Arabic or English.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-400/10 rounded-lg"><Users className="w-6 h-6 text-pink-400" /></div>
                  <div>
                    <h3 className="font-bold text-white">Follow our work</h3>
                    <div className="flex gap-4 text-gray-400">
                      <a href="https://www.linkedin.com/company/nexarotch/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                      <a href="https://www.facebook.com/Nexarotch" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d122d] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)]">
              <h2 className="font-orbitron text-lg font-bold mb-4 text-white">Helpful to mention</h2>
              <ul className="space-y-2 text-sm text-gray-400 list-disc ps-5">
                <li>How many people will use the system, and in which departments</li>
                <li>What you use today: Excel, WhatsApp, another system</li>
                <li>What wastes the most time every week</li>
                <li>For a website: the pages you need and two or three sites you like</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <form onSubmit={send} className="bg-[#0d122d] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] space-y-6">
              <h2 className="font-orbitron text-2xl font-bold mb-4 text-white">Send a Message</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="c-name" className="text-sm text-gray-400">Name</label>
                  <input id="c-name" required value={name} onChange={(e) => setName(e.target.value)} type="text" autoComplete="name" className={field} placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="c-email" className="text-sm text-gray-400">Email</label>
                  <input id="c-email" required value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" className={field} placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="c-company" className="text-sm text-gray-400">Company</label>
                  <input id="c-company" value={company} onChange={(e) => setCompany(e.target.value)} type="text" autoComplete="organization" className={field} placeholder="Optional" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="c-type" className="text-sm text-gray-400">Project type</label>
                  <select id="c-type" value={type} onChange={(e) => setType(e.target.value)} className={`${field} appearance-none`}>
                    {TYPES.map((t) => <option key={t} className="bg-[#0d122d]">{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="c-msg" className="text-sm text-gray-400">Message</label>
                <textarea id="c-msg" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={field} placeholder="Tell us about your team and your project" />
              </div>
              <button type="submit" className="w-full bg-cyan-400 text-black font-bold py-4 rounded-lg hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-5 h-5" />
              </button>
              <p className="text-xs text-gray-500" aria-live="polite">
                {opened
                  ? `Your email app should be open with the message ready. Press send there. If nothing opened, email ${EMAIL} directly.`
                  : "Send opens your email app with the message ready to go. Nothing is stored on this site."}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
