"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0E27] text-white pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            Let's Build <span className="text-cyan-400">Together</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Whether you need a full AI platform, a high-scale event system, or a stunning website—we are ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
            <div className="bg-[#0d122d] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)]">
              <h2 className="font-orbitron text-2xl font-bold mb-6 text-white">Contact Info</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <a href="mailto:nexarotch@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      nexarotch@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-400/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Location</h3>
                    <p className="text-gray-400">Egypt (Serving Global Clients)</p>
                    <p className="text-sm text-gray-500 mt-1">Remote work friendly. Alahsa project coordination available.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-400/10 rounded-lg">
                    <Phone className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Direct Line</h3>
                    <p className="text-gray-400">Available for urgent inquiries</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <form className="bg-[#0d122d] p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] space-y-6">
              <h2 className="font-orbitron text-2xl font-bold mb-4 text-white">Send a Message</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Project Type</label>
                <select className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-cyan-400 transition-colors appearance-none">
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>AI Integration</option>
                  <option>Event Tech / Platform</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button className="w-full bg-cyan-400 text-black font-bold py-4 rounded-lg hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
