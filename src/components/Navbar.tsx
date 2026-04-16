import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Phone, MapPin, Mail, Send } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

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
          <div className="flex items-center gap-2">
            <img 
              src={logoImg} 
              alt="Logo LPH Al-Ghazali" 
              className="h-10 md:h-12 w-auto object-contain"
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
                className={`flex items-center font-medium text-xs xl:text-sm hover:text-gold-500 transition-colors ${
                  isScrolled ? 'text-stone-600' : 'text-stone-600 lg:text-white/90'
                }`}
              >
                {link.icon && link.icon}
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className="bg-gold-500 hover:bg-gold-600 text-primary-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-sm hover:shadow-md"
            >
              Daftar Sekarang
            </button>
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
                className="flex items-center px-3 py-3 text-base font-medium text-stone-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsRegisterModalOpen(true);
                }}
                className="block w-full text-center bg-primary-700 hover:bg-primary-800 text-white font-semibold px-5 py-3 rounded-lg text-base transition-colors"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            onClick={() => setIsRegisterModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsRegisterModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-5 h-full">
              {/* Left Column: Contact Info */}
              <div className="bg-primary-900 text-white p-8 md:p-10 md:col-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold mb-2">Hubungi Kami</h3>
                <p className="text-primary-200 text-sm mb-8">
                  Punya pertanyaan seputar proses sertifikasi? Tim kami siap membantu Anda.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-lg flex-shrink-0">
                      <Phone size={20} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider font-semibold mb-1">Telepon / WhatsApp</p>
                      <p className="font-medium">+62 813-2778-2079</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-lg flex-shrink-0">
                      <Mail size={20} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider font-semibold mb-1">Email</p>
                      <p className="font-medium">lph@unugha.ac.id</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-lg flex-shrink-0">
                      <MapPin size={20} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider font-semibold mb-1">Alamat</p>
                      <p className="font-medium text-sm leading-relaxed">
                        Jl. Kemerdekaan Barat No.12,<br />
                        Kesugihan, Cilacap,<br />
                        Jawa Tengah 53274
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="p-8 md:p-10 md:col-span-3">
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Info Lanjut</h3>
                <p className="text-stone-500 text-sm mb-8">
                  Silakan isi formulir di bawah ini dan kami akan segera menghubungi Anda kembali.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-1.5">Nama Lengkap / Perusahaan</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-1.5">No. Telepon / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="Contoh: 08123456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1.5">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-1.5">Subjek / Keperluan</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                    >
                      <option value="">Pilih keperluan Anda...</option>
                      <option value="sertifikasi">Pendaftaran Sertifikasi Halal</option>
                      <option value="pelatihan">Informasi Pelatihan Penyelia Halal</option>
                      <option value="konsultasi">Konsultasi Halal</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    Kirim Pesan <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
