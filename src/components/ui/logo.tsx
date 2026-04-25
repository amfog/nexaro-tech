import Link from "next/link";

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Gradient N Icon */}
      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
        <span className="font-bold text-black text-lg">N</span>
      </div>
      
      {/* Text */}
      <div className="flex items-center">
        <span className="font-orbitron font-bold text-xl tracking-wide text-white">
          NEXARO
        </span>
        <span className="font-orbitron font-bold text-xl text-cyan-400 ml-0.5">
          .TECH
        </span>
      </div>
    </Link>
  );
}