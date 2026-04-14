import { ShieldCheck, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-700 text-white p-2 rounded-lg">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl text-white leading-tight">
                  LPH Al-Ghazali
                </h2>
                <p className="text-xs font-sans tracking-wider uppercase text-primary-500">
                  Edukasi Halal
                </p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Lembaga Pemeriksa Halal terakreditasi yang berdedikasi untuk mewujudkan ekosistem halal yang kuat di Indonesia melalui edukasi dan sertifikasi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Layanan & Program</a></li>
              <li><a href="#features" className="hover:text-gold-400 transition-colors">Keunggulan</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Berita & Artikel</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Layanan</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pelatihan Penyelia Halal</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Sertifikasi Halal Reguler</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Pendampingan Self Declare</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Uji Laboratorium</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Konsultasi Halal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-sm">Gedung Al-Ghazali Lt. 3<br />Jl. Pendidikan Halal No. 123<br />Jakarta Selatan, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-sm">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-sm">info@lphalghazali.id</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} LPH Al-Ghazali. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-stone-500">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
