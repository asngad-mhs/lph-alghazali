import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Phone, MapPin, Mail, Send, UserCog } from 'lucide-react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db, handleFirestoreError, OperationType } from '../firebase';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

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
    { name: 'Kontak', href: '#contact', icon: <Phone size={14} className="mr-1.5" /> },
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
          <div className="flex items-center gap-3">
            <img 
              src="https://data.asngad.my.id/logo-lph.jpeg" 
              alt="Logo LPH Al-Ghazali" 
              className="h-12 md:h-16 w-auto object-contain rounded-md"
            />
            <div className="flex flex-col justify-center">
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
                className={`flex items-center font-medium text-xs xl:text-sm hover:text-gold-500 transition-colors ${
                  isScrolled ? 'text-stone-600' : 'text-stone-600 lg:text-white/90'
                }`}
              >
                {link.icon && link.icon}
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-2">
              <a
                href="#register"
                className="bg-gold-500 hover:bg-gold-600 text-primary-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-sm hover:shadow-md"
              >
                Daftar Sekarang
              </a>
              <button 
                onClick={() => setIsAdminModalOpen(true)}
                aria-label="Login Admin"
                className={`p-2 rounded-full hover:bg-stone-200/50 transition-colors ${
                  isScrolled ? 'text-primary-900' : 'text-primary-900 lg:text-white'
                }`}
              >
                <UserCog size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAdminModalOpen(true);
              }}
              aria-label="Login Admin"
              className={`p-2 rounded-full hover:bg-stone-200/50 transition-colors ${
                isScrolled ? 'text-primary-900' : 'text-primary-900'
              }`}
            >
              <UserCog size={22} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-stone-800' : 'text-primary-900'} p-2`}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
                className="flex items-center px-3 py-3 text-base font-medium text-stone-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-primary-700 hover:bg-primary-800 text-white font-semibold px-5 py-3 rounded-lg text-base transition-colors"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Admin Login Modal */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            onClick={() => setIsAdminModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <button 
              onClick={() => setIsAdminModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCog size={32} className="text-primary-700" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">Sign in</h3>
                <p className="text-stone-500 text-sm mt-2">
                  Gunakan akun Google Anda yang terdaftar sebagai admin.
                </p>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={async () => {
                    const provider = new GoogleAuthProvider();
                    try {
                      await signInWithPopup(auth, provider);
                      setIsAdminModalOpen(false);
                    } catch (error) {
                      console.error("Gagal login:", error);
                      alert("Gagal melakukan login. Pastikan Anda mengizinkan popup.");
                    }
                  }}
                  className="w-full bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 font-semibold py-3.5 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"><path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"></path><path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"></path><path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"></path><path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"></path></g></svg>
                  Login menggunakan Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
