import { BookOpen, Users, Award, History, Target, ShieldCheck, Building, UserCheck, Handshake, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const profileFeatures = [
  {
    id: "sejarah",
    icon: <History size={24} />,
    title: "Sejarah dan Latar Belakang",
    description: "Berawal dari ikhtiar luhur untuk membantu masyarakat dan pelaku usaha, LPH Al-Ghazali didirikan sebagai respon atas peningkatan skala kebutuhan industri akan jaminan produk halal yang kredibel.",
    fullDescription: "LPH Al-Ghazali didirikan sebagai wujud nyata dari upaya kami untuk mendukung terwujudnya ekosistem halal di Indonesia. Berangkat dari kesadaran akan pentingnya kejelasan status kehalalan sebuah produk bagi masyarakat yang mayoritas Muslim, dan juga sebagai sarana edukasi yang berkelanjutan. Kami menyadari bahwa tantangan terbesar bagi pelaku usaha, terutama UMKM, adalah kurangnya akses dan pemahaman tentang standar kehalalan. Oleh karena itu, LPH Al-Ghazali hadir tidak hanya sebagai lembaga pemeriksa, namun juga mitra strategis untuk membimbing dan memberikan literasi mengenai Jaminan Produk Halal secara komprehensif."
  },
  {
    id: "visi-misi",
    icon: <Target size={24} />,
    title: "Visi dan Misi",
    description: "Visi kami menjadi lembaga pemeriksa tepercaya. Misi kami memberikan layanan pemeriksaan berkualitas, edukasi berkesinambungan, serta pendampingan untuk semua level usaha.",
    fullDescription: "Visi LPH Al-Ghazali: Menjadi Lembaga Pemeriksa Halal yang tepercaya, kredibel, dan berkontribusi aktif dalam mewujudkan ekosistem industri halal global.\n\nMisi LPH Al-Ghazali:\n1. Menyediakan layanan pemeriksaan yang berkualitas, independen, dan sesuai standar.\n2. Mengedukasi masyarakat dan pelaku usaha mengenai pentingnya ekosistem halal.\n3. Memberikan pendampingan terstruktur khususnya bagi UMKM untuk naik kelas melalui Sertifikasi Halal.\n4. Mendorong transparansi dan inovasi berkelanjutan dalam setiap aspek operasional."
  },
  {
    id: "kebijakan",
    icon: <ShieldCheck size={24} />,
    title: "Kebijakan & Sasaran Mutu",
    description: "Berkomitmen pada pemenuhan standar mutu sertifikasi halal melalui continous improvement, dengan objektif kepuasan pelanggan, ketepatan waktu, dan zero complain atas pelayanan.",
    fullDescription: "LPH Al-Ghazali mengimplementasikan kebijakan mutu yang sangat ketat untuk menjamin transparansi, akuntabilitas, dan kepastian hukum syariat. Sasaran mutu kami dirancang untuk memastikan bahwa:\n• 100% proses audit dilakukan sesuai dengan prosedur dan etika yang berlaku.\n• Waktu pemeriksaan dan pemrosesan dokumen dari awal sampai laporan diserahkan ke MUI tepat waktu (SLA terukur).\n• Zero complain dalam hal pelayanan pelanggan dan transparansi pengajuan.\n• Pembaruan kompetensi staf dan auditor secara periodik dalam menghadapi perkembangan industri dan fiqih kontemporer."
  },
  {
    id: "struktur",
    icon: <Building size={24} />,
    title: "Struktur Organisasi",
    description: "Dikelola oleh susunan organisasi yang profesional, independen, dan transparan untuk memastikan seluruh alur pelayanan berjalan efektif tanpa adanya konflik kepentingan.",
    fullDescription: "Organisasi LPH Al-Ghazali dibangun dengan asas profesionalisme dan independensi yang tinggi untuk meniadakan konflik kepentingan (conflict of interest). Struktur organisasi terdiri dari Manajemen Puncak (Direktur), Manajer Mutu, Manajer Administrasi, dan Tim Auditor Halal.\n\nSetiap posisi memegang peranan penuh dalam memastikan ketepatan pengambilan keputusan dan objektivitas saat melakukan penilaian sertifikasi. Tim Puncak terpisah dari tim Audit dan memberikan fungsi pengawasan penuh atas jalannya standar operasional prosedural (SOP)."
  },
  {
    id: "auditor",
    icon: <UserCheck size={24} />,
    title: "Auditor Halal",
    description: "Didukung oleh Auditor Halal bersertifikat kompetensi, kredibel, dan menjunjung tinggi integritas untuk memastikan implementasi ketat Sistem Jaminan Produk Halal.",
    fullDescription: "Auditor Halal di LPH Al-Ghazali adalah tenaga ahli yang telah lulus uji kompetensi dari Badan Penyelenggara Jaminan Produk Halal (BPJPH) dan MUI. Mereka memiliki latar belakang pendidikan linier (seperti teknologi pangan, biologi, kimia, atau pertanian) dan terus melakukan pengembangan kompetensi teknis melalui pelatihan tahunan.\n\nPeran auditor mencakup penilaian bahan baku, observasi proses produksi, verifikasi fasilitas, dan memastikan tidak ada kontaminasi silang (cross-contamination) dengan bahan non-halal/najis."
  },
  {
    id: "sdm",
    icon: <BookOpen size={24} />,
    title: "SDM Syariah",
    description: "Dilengkapi pakar syariah/ahli agama Islam yang memiliki kepakaran mendalam terkait hukum syariat, fiqih kontemporer, serta fatwa-fatwa terbaru dari Majelis Ulama Indonesia.",
    fullDescription: "SDM Syariah kami terdiri dari para asatidz dan ulama yang lulus dari universitas terkemuka dengan konsentrasi Ilmu Fiqih, Syariah, maupun Ushuluddin. Mereka bertugas menjaga keselarasan antara inovasi di bidang teknologi pangan dengan kaidah-kaidah hukum Islam yang fundamental dan fatwa-fatwa MUI.\n\nMereka sangat diperlukan terutama pada audit titik kritis yang melibatkan penyembelihan, produk turunan hewani, fermentasi, dan unsur komputasi genetika yang semakin rumit."
  },
  {
    id: "kerjasama",
    icon: <Handshake size={24} />,
    title: "Kerjasama",
    description: "Membangun sinergi kolaboratif bersama BPJPH, MUI, Universitas, dan asosiasi industri dalam rangka memperluas ekosistem industri halal nasional dan internasional.",
    fullDescription: "Untuk memperkuat infrastruktur halal, LPH Al-Ghazali aktif menjalin kemitraan strategis:\n• Dengan BPJPH sebagai otoritas regluasi.\n• Dengan Komisi Fatwa MUI untuk otoritas hukum penetapan kehalalan.\n• Dengan perguruan tinggi negeri maupun swasta sebagai pusat riset, literasi, dan pengembangan teknologi pemeriksaan yang akurat.\n• Bersama asosiasi pengusaha dan UMKM untuk melaksanakan event literasi, pelatihan penyelia halal secara massal, dan coaching clinic."
  }
];

export default function About() {
  const [selectedFeature, setSelectedFeature] = useState<typeof profileFeatures[0] | null>(null);

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
                id={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all group flex flex-col items-start scroll-mt-24"
              >
                <div className="bg-primary-50 p-4 rounded-xl text-primary-600 mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-stone-600 leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>
                <button 
                  onClick={() => setSelectedFeature(feature)}
                  className="flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 mt-auto group-hover:translate-x-1 transition-transform"
                >
                  Selengkapnya <ChevronRight size={16} className="ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Feature Details */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              onClick={() => setSelectedFeature(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                    {selectedFeature.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900">
                    {selectedFeature.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full transition-colors flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="prose prose-stone leading-relaxed">
                  {selectedFeature.fullDescription.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-stone-700">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="p-6 border-t border-stone-100 bg-stone-50 flex justify-end">
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="px-6 py-2.5 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-lg transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
