import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Phone, MapPin, Mail, Send, UserCog } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPhone = "6281327782079";
    const subjectMap: Record<string, string> = {
      sertifikasi: "Pendaftaran Sertifikasi Halal",
      pelatihan: "Informasi Pelatihan Penyelia Halal",
      konsultasi: "Konsultasi Halal",
      lainnya: "Lainnya"
    };
    const subjectText = subjectMap[formData.subject] || formData.subject || "Belum dipilih";

    const message = `Halo Admin LPH Al-Ghazali,\n\nSaya menghubungi Anda dari Website. Berikut data diri dan keperluan saya:\n\n*Nama:* ${formData.name}\n*No. WA:* ${formData.phone}\n*Email:* ${formData.email}\n*Keperluan:* ${subjectText}\n\nMohon info dan arahannya lebih lanjut. Terima kasih.`;
    
    window.open(`https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`, "_blank");
    setIsRegisterModalOpen(false);
    setFormData({ name: '', phone: '', email: '', subject: '' });
  };

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
              <button
                onClick={() => setIsRegisterModalOpen(true)}
                className="bg-gold-500 hover:bg-gold-600 text-primary-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-sm hover:shadow-md"
              >
                Daftar Sekarang
              </button>
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

                {/* Google Maps Embed */}
                <div className="mt-8 rounded-xl overflow-hidden h-40 xl:h-48 shadow-inner border border-primary-800/50 hidden sm:block">
                  <iframe 
                    src="https://maps.google.com/maps?q=Jl.+Kemerdekaan+Barat+No.12,+Kesugihan,+Cilacap,+Jawa+Tengah&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="p-8 md:p-10 md:col-span-3">
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Info Lanjut</h3>
                <p className="text-stone-500 text-sm mb-8">
                  Silakan isi formulir di bawah ini dan kami akan segera menghubungi Anda kembali.
                </p>

                <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-1.5">Nama Lengkap / Perusahaan</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="Contoh: 08123456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1.5">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="email@contoh.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-1.5">Subjek / Keperluan</label>
                    <select 
                      id="subject" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
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
                <h3 className="text-2xl font-serif font-bold text-stone-900">Login Admin</h3>
                <p className="text-stone-500 text-sm mt-2">
                  Masuk ke dashboard untuk mengelola data LPH.
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                alert("Fitur Login Admin (Backend) akan dihubungkan disini.");
                setIsAdminModalOpen(false);
              }}>
                <div>
                  <label htmlFor="admin-username" className="block text-sm font-semibold text-stone-700 mb-1.5">Username / Email</label>
                  <input 
                    type="text" 
                    id="admin-username" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Masukkan username Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="admin-password" className="block text-sm font-semibold text-stone-700 mb-1.5">Password</label>
                  <input 
                    type="password" 
                    id="admin-password" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 border-stone-300" />
                    <span className="text-sm text-stone-600">Ingat Saya</span>
                  </label>
                  <a href="#" className="text-sm font-semibold text-primary-700 hover:text-primary-800">
                    Lupa Password?
                  </a>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-3.5 px-6 rounded-lg transition-colors mt-2"
                >
                  Masuk Sekarang
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
