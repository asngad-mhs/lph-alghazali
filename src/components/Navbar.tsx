import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Layanan Kami', href: '#services' },
    { name: 'Profil', href: '#about' },
    { name: 'Proses Sertifikasi', href: '#proses' },
    { name: 'Regulasi', href: '#regulasi' },
    { name: 'Fatwa MUI', href: '#fatwa' },
    { name: 'Berita', href: '#berita' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="https://drive.google.com/file/d/1279_6Jv2PVryShpLbfRpHo6uX3YYue6T/view?usp=sharing" 
              alt="Logo LPH Al-Ghazali" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className={`font-serif font-bold text-xl leading-tight ${isScrolled ? 'text-primary-900' : 'text-primary-900 lg:text-white'}`}>
                LPH Al-Ghazali
              </h1>
              <p className={`text-xs font-sans tracking-wider uppercase ${isScrolled ? 'text-primary-600' : 'text-primary-600 lg:text-primary-100'}`}>
                Edukasi Halal
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-xs xl:text-sm hover:text-gold-500 transition-colors ${
                  isScrolled ? 'text-stone-600' : 'text-stone-600 lg:text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-gold-500 hover:bg-gold-600 text-primary-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-sm hover:shadow-md"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-stone-800' : 'text-primary-900'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-xl absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#register"
                className="block w-full text-center bg-primary-700 hover:bg-primary-800 text-white font-semibold px-5 py-3 rounded-lg text-base transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
