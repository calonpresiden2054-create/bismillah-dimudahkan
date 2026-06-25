import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tim', href: '#team' },
  { label: 'Program', href: '#programs' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center shadow-lg">
              <TrendingUp size={18} className="text-neutral-900" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="block text-sm font-semibold text-amber-400 tracking-wide">Ngerti</span>
              <span className="block text-xs text-neutral-400 tracking-widest uppercase">Investasi</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-300 hover:text-amber-400 transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#programs"
              className="px-5 py-2.5 rounded-lg gold-gradient text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-amber-900/30"
            >
              Bergabung Sekarang
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-neutral-300 hover:text-amber-400 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-dark px-6 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-neutral-300 hover:text-amber-400 transition-colors border-b border-neutral-800 last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#programs"
            className="mt-4 block text-center px-5 py-3 rounded-lg gold-gradient text-neutral-900 text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Bergabung Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
