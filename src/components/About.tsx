import { BookOpen, Users, Award, History, Target, ShieldCheck, Building, UserCheck, Handshake, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const profileFeatures = [
  {
    icon: <History size={24} />,
    title: "Sejarah dan Latar Belakang",
    description: "Berawal dari ikhtiar luhur untuk membantu masyarakat dan pelaku usaha, LPH Al-Ghazali didirikan sebagai respon atas peningkatan skala kebutuhan industri akan jaminan produk halal yang kredibel."
  },
  {
    icon: <Target size={24} />,
    title: "Visi dan Misi",
    description: "Visi kami menjadi lembaga pemeriksa tepercaya. Misi kami memberikan layanan pemeriksaan berkualitas, edukasi berkesinambungan, serta pendampingan untuk semua level usaha."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Kebijakan & Sasaran Mutu",
    description: "Berkomitmen pada pemenuhan standar mutu sertifikasi halal melalui continous improvement, dengan objektif kepuasan pelanggan, ketepatan waktu, dan zero complain atas pelayanan."
  },
  {
    icon: <Building size={24} />,
    title: "Struktur Organisasi",
    description: "Dikelola oleh susunan organisasi yang profesional, independen, dan transparan untuk memastikan seluruh alur pelayanan berjalan efektif tanpa adanya konflik kepentingan."
  },
  {
    icon: <UserCheck size={24} />,
    title: "Auditor Halal",
    description: "Didukung oleh Auditor Halal bersertifikat kompetensi, kredibel, dan menjunjung tinggi integritas untuk memastikan implementasi ketat Sistem Jaminan Produk Halal."
  },
  {
    icon: <BookOpen size={24} />,
    title: "SDM Syariah",
    description: "Dilengkapi pakar syariah/ahli agama Islam yang memiliki kepakaran mendalam terkait hukum syariat, fiqih kontemporer, serta fatwa-fatwa terbaru dari Majelis Ulama Indonesia."
  },
  {
    icon: <Handshake size={24} />,
    title: "Kerjasama",
    description: "Membangun sinergi kolaboratif bersama BPJPH, MUI, Universitas, dan asosiasi industri dalam rangka memperluas ekosistem industri halal nasional dan internasional."
  }
];

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pelatihan Halal" 
                className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Sertifikasi Halal" 
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl border-4 border-primary-50 text-center w-32 h-32 flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-primary-700">10+</span>
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wider mt-1">Tahun<br/>Pengalaman</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Tentang LPH Al-Ghazali</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Mitra Terpercaya dalam Mewujudkan Ekosistem Halal
            </h3>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              Lembaga Pemeriksa Halal (LPH) Al-Ghazali didirikan dengan visi untuk menjadi garda terdepan dalam edukasi dan penjaminan produk halal di Indonesia. Kami berkomitmen untuk mempermudah akses sertifikasi halal bagi seluruh lapisan pelaku usaha.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Didukung oleh auditor halal yang kompeten dan berpengalaman, serta fasilitas laboratorium yang memadai, kami memastikan setiap proses pemeriksaan berjalan objektif, transparan, dan sesuai dengan syariat Islam serta regulasi pemerintah.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-1">Edukasi Berkelanjutan</h4>
                  <p className="text-stone-600">Menyelenggarakan pelatihan penyelia halal dan literasi halal untuk masyarakat luas.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-1">Pendampingan UMKM</h4>
                  <p className="text-stone-600">Fokus membantu Usaha Mikro Kecil dan Menengah untuk naik kelas melalui sertifikasi halal.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-900 mb-1">Integritas & Profesionalisme</h4>
                  <p className="text-stone-600">Menjunjung tinggi kode etik auditor halal dalam setiap tahapan pemeriksaan.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Profile Info Grid */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4">Profil Internal Kelembagaan</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Komitmen kami dalam memberikan mutu pelayanan sertifikasi dan jaminan produk halal sepenuhnya didukung oleh komponen kelembagaan yang transparan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profileFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all group flex flex-col items-start"
              >
                <div className="bg-primary-50 p-4 rounded-xl text-primary-600 mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-stone-600 leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>
                <button className="flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 mt-auto group-hover:translate-x-1 transition-transform">
                  Selengkapnya <ChevronRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
