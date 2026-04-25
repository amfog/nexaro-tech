import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] py-12 bg-[#080b1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-cyan-400 to-purple-500 rounded flex items-center justify-center font-bold text-black text-xs">
                  N
                </div>
                <span className="font-orbitron font-bold text-lg tracking-wide text-white">
                  NEXARO<span className="text-cyan-400">.TECH</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">Building Tomorrow's Digital Experiences Today</p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-rajdhani font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/en/services" className="hover:text-cyan-400 transition-colors">Web Development</Link></li>
              <li><Link href="/en/services" className="hover:text-cyan-400 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/en/services" className="hover:text-cyan-400 transition-colors">Event Tech</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-rajdhani font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/en/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/en/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/en/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-rajdhani font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@nexaro.tech</li>
              <li>Egypt (Global Remote)</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[rgba(255,255,255,0.05)] pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nexaro.tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}