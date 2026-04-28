import { 
  BookOpen, Users, Award, ShieldCheck, Target, Layers, Briefcase, Handshake, History 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ProfilLembaga() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="profil">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Profil */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Profil LPH Al-Ghazali</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
            Mengenal Lebih Dalam LPH Al-Ghazali
          </h3>
          <p className="text-stone-600 text-lg">
            Kami adalah institusi terpercaya yang berdedikasi untuk memberikan layanan edukasi, penjaminan, dan sertifikasi halal terbaik bagi masyarakat dan pelaku usaha.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* 1. Sejarah dan Latar Belakang */}
          <motion.div 
            id="sejarah"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl h-80">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Sejarah LPH" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-gold-500 font-bold mb-4">
                <History size={24} />
                <span className="uppercase tracking-wider">Sejarah & Latar Belakang</span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4">Tonggak Awal Penjaminan Halal</h4>
              <p className="text-stone-600 leading-relaxed mb-4">
                LPH Al-Ghazali didirikan sebagai respon atas kebutuhan umat Islam dan pelaku usaha di Indonesia terhadap kepastian produk halal. Dengan berlakunya Undang-Undang Jaminan Produk Halal, kami hadir sebagai perpanjangan tangan dari komitmen nasional tersebut.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Sejak berdirinya, LPH Al-Ghazali terus bersinergi dengan ulama, akademisi, dan ahli sains terkemuka untuk memastikan setiap produk yang diuji tidak hanya memenuhi syarat secara sains (thoyyib) namun sepenuhnya sesuai dengan syariat Islam (halal).
              </p>
            </div>
          </motion.div>

          {/* 2. Visi dan Misi */}
          <motion.div 
            id="visi-misi"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-primary-900 text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gold-400 opacity-20 rounded-full blur-2xl"></div>
              <Target size={40} className="text-gold-400 mb-6" />
              <h4 className="text-2xl font-serif font-bold mb-4">Visi</h4>
              <p className="text-primary-100 leading-relaxed text-lg font-light">
                "Menjadi Lembaga Pemeriksa Halal yang terpercaya, profesional, tangguh, dan berstandar internasional dalam mendukung terwujudnya ekosistem industri halal global."
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-8 md:p-10 rounded-2xl shadow-sm">
              <BookOpen size={40} className="text-primary-600 mb-6" />
              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4">Misi</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-stone-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                  <span>Menyelenggarakan pemeriksaan produk halal dengan presisi, independen, dan berintegritas tinggi.</span>
                </li>
                <li className="flex gap-3 text-stone-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                  <span>Mengembangkan kapasitas sumber daya manusia (SDM) di sektor layanan halal melalui edukasi dan sertifikasi penyelia halal.</span>
                </li>
                <li className="flex gap-3 text-stone-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0"></div>
                  <span>Membangun kolaborasi strategis dengan berbagai pilar industri halal, baik nasional maupun internasional.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* 3. Kebijakan Mutu dan Sasaran Mutu */}
          <motion.div 
            id="kebijakan-mutu"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-primary-600 font-bold mb-4">
              <ShieldCheck size={24} />
              <span className="uppercase tracking-wider">Kebijakan & Sasaran Mutu</span>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white border text-left border-stone-200 p-8 rounded-2xl shadow-sm">
                <h4 className="text-xl font-bold text-stone-900 mb-4">Kebijakan Mutu</h4>
                <p className="text-stone-600 leading-relaxed">
                  LPH Al-Ghazali berkomitmen teguh dalam mengimplementasikan sistem manajemen mutu berdasarkan standar SNI ISO/IEC 17065. Kami menjamin kerahasiaan, ketidakberpihakan, dan kualitas prima dalam setiap tahapan layanan untuk mencapai kepuasan optimal bagi mitra dan pelaku usaha.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                  <div className="text-3xl font-black text-primary-300 mb-2">01</div>
                  <h5 className="font-bold text-primary-900 mb-2">Responsitas Layanan</h5>
                  <p className="text-sm text-stone-600">Pemrosesan audit tepat waktu dan tanpa penundaan administratif yang tidak beralasan.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                  <div className="text-3xl font-black text-primary-300 mb-2">02</div>
                  <h5 className="font-bold text-primary-900 mb-2">Zero Komplain</h5>
                  <p className="text-sm text-stone-600">Menjaga standar kualitas pemeriksaan tanpa adanya komplikasi atau komplain fatal terkait kehalalan.</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                  <div className="text-3xl font-black text-primary-300 mb-2">03</div>
                  <h5 className="font-bold text-primary-900 mb-2">Peningkatan Kompetensi</h5>
                  <p className="text-sm text-stone-600">Uji kompetensi berkala bagi seluruh Auditor Halal dan personel yang terlibat.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Struktur Organisasi */}
          <motion.div 
            id="struktur-organisasi"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-stone-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-gold-600 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <Layers size={40} className="mx-auto text-gold-400 mb-6" />
              <h4 className="text-3xl font-serif font-bold mb-4">Struktur Organisasi</h4>
              <p className="text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Organisasi kami digerakkan oleh dewan pakar, direksi yang berpengalaman, serta jajaran operasional yang solid dan berintegritas dalam memastikan kelancaran operasional sertifikasi halal.
              </p>
              
              <div className="bg-stone-800/50 backdrop-blur-sm p-6 rounded-2xl border border-stone-700/50 max-w-4xl mx-auto text-left flex flex-col gap-4">
                <div className="flex gap-4 items-center bg-primary-900/40 p-4 justify-between rounded-xl">
                  <div className="font-bold font-serif text-lg">Dewan Pengarah (Ketua Yayasan)</div>
                  <div className="text-primary-300 text-sm">Pengawas Strategis</div>
                </div>
                <div className="flex gap-4 items-center bg-stone-800 p-4 justify-between rounded-xl ml-4">
                  <div className="font-bold font-serif text-lg">Direktur LPH</div>
                  <div className="text-stone-400 text-sm">Pimpinan Eksekutif</div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 ml-8">
                  <div className="flex-1 bg-stone-700/40 p-4 rounded-xl border border-stone-600/50 text-center">
                    <div className="font-bold text-primary-200">Manajer Sertifikasi</div>
                  </div>
                  <div className="flex-1 bg-stone-700/40 p-4 rounded-xl border border-stone-600/50 text-center">
                    <div className="font-bold text-primary-200">Manajer Mutu</div>
                  </div>
                  <div className="flex-1 bg-stone-700/40 p-4 rounded-xl border border-stone-600/50 text-center">
                    <div className="font-bold text-primary-200">Manajer Administrasi</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. Auditor Halal & 6. SDM Syariah */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              id="auditor-halal"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase size={28} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4">Auditor Halal</h4>
              <p className="text-stone-600 leading-relaxed mb-6 flex-grow">
                Tulang punggung dari layanan kami, para Auditor Halal tergabung dalam sebuah tim spesialis yang menguasai keahlian ilmu pangan, kimia, biologi, dan pertanian. Setiap auditor telah lulus ujian kompetensi resmi BPJPH dan tersertifikasi secara nasional untuk menjamin hasil audit yang mutlak terjaga kebenarannya.
              </p>
              <div className="pt-6 border-t border-stone-100 mt-auto">
                <ul className="grid grid-cols-2 gap-3 text-sm text-stone-600 font-medium">
                  <li className="flex items-center gap-2"><Award size={16} className="text-gold-500" /> Ahli Sains / Pangan</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-gold-500" /> Sertifikasi BPJPH</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-gold-500" /> Independen</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-gold-500" /> Berintegritas</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              id="sdm-syariah"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm flex flex-col"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={28} />
              </div>
              <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4">SDM Syariah</h4>
              <p className="text-stone-600 leading-relaxed mb-6 flex-grow">
                Auditor dibantu dan bersinergi erat dengan SDM/Ahli Syariah kami yang sangat mumpuni dalam Hukum Islam, Ushul Fiqh, dan Fiqh Muamalah. Para ahli syariah memberikan penilaian komprehensif dari sudut pandang hukum syariat, memastikan tidak ada ruang keraguan dalam kehalalan produk.
              </p>
              <div className="pt-6 border-t border-stone-100 mt-auto">
                <ul className="grid grid-cols-2 gap-3 text-sm text-stone-600 font-medium">
                  <li className="flex items-center gap-2"><Award size={16} className="text-emerald-500" /> Ahli Fiqh/Muamalah</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-emerald-500" /> Ulama & Akademisi</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-emerald-500" /> Kepatuhan Hukum</li>
                  <li className="flex items-center gap-2"><Award size={16} className="text-emerald-500" /> Kepakaran Agama</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* 7. Kerjasama */}
          <motion.div 
            id="kerjasama"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 items-center bg-primary-50 rounded-3xl p-8 md:p-12 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-primary-700 font-bold mb-4">
                <Handshake size={24} />
                <span className="uppercase tracking-wider">Kemitraan Strategis</span>
              </div>
              <h4 className="text-3xl font-serif font-bold text-stone-900 mb-4">Jaringan Kerjasama Internasional & Nasional</h4>
              <p className="text-stone-600 leading-relaxed mb-6">
                Untuk memperkuat kapasitas dan konektivitas, LPH Al-Ghazali menjalin kerja sama strategis dengan otoritas terkait (BPJPH, MUI, Komite Akreditasi Nasional), lembaga pendidikan tinggi, laboratorium berskala internasional, serta organisasi pengembangan bisnis UMKM.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Kami meyakini bahwa jaminan halal global hanya bisa diraih melalui simpul kemitraan yang kuat, sehingga produk halal lokal mampu berjaya di pasar internasional.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex-shrink-0 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-center justify-center flex-col gap-2 transition hover:-translate-y-1">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-400">G</div>
                <span className="text-xs font-bold text-stone-600">Pemerintah</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-center justify-center flex-col gap-2 transition hover:-translate-y-1">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-400">A</div>
                <span className="text-xs font-bold text-stone-600">Akademisi</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-center justify-center flex-col gap-2 transition hover:-translate-y-1">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-400">L</div>
                <span className="text-xs font-bold text-stone-600">Lab Uji</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 flex items-center justify-center flex-col gap-2 transition hover:-translate-y-1">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center font-bold text-stone-400">U</div>
                <span className="text-xs font-bold text-stone-600">Pusat UMKM</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
