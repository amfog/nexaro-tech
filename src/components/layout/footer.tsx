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
                <img src="/nexaro-logo.svg" alt="Nexaro" className="w-8 h-8" />
                <span className="font-orbitron font-bold text-lg tracking-wider text-white">
                  NEXARO<span className="text-cyan-400">.TECH</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">Building Tomorrow&apos;s Digital Experiences Today</p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-rajdhani font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/en/services" className="hover:text-cyan-400 transition-colors">Workflow Automation</Link></li>
              <li><Link href="/en/services" className="hover:text-cyan-400 transition-colors">AI Integration</Link></li>
              <li><Link href="/en/services" className="hover:text-cyan-400 transition-colors">Esports Platforms</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-rajdhani font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/en/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/en/portfolio" className="hover:text-cyan-400 transition-colors">Products</Link></li>
              <li><Link href="/en/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-rajdhani font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>nexarotch@gmail.com</li>
              <li>Egypt (Global Remote)</li>
              <li className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/Nexarotch" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Facebook</a>
                <a href="https://www.linkedin.com/company/nexarotch/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
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
