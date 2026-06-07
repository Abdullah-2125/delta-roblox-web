import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-wider text-white group-hover:text-primary transition-colors">
                DELTA<span className="text-primary">ROBLOX</span>
              </span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li>
                <Link href="#download" className="bg-primary hover:bg-primaryHover text-white px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                  Download
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
