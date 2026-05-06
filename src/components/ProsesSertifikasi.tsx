import { ClipboardList, Search, Gavel, Award, Waypoints, Route, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: '1. Pendaftaran (SIHALAL)',
    description: 'Pelaku usaha mendaftar melalui sistem SIHALAL BPJPH, melengkapi dokumen, dan memilih LPH Al-Ghazali sebagai lembaga pemeriksa.'
  },
  {
    icon: <Search size={32} />,
    title: '2. Pemeriksaan & Audit',
    description: 'Auditor Halal dari LPH Al-Ghazali melakukan verifikasi dokumen dan audit lapangan ke lokasi produksi untuk memastikan kehalalan bahan dan proses.'
  },
  {
    icon: <Gavel size={32} />,
    title: '3. Sidang Fatwa MUI',
    description: 'Laporan hasil audit diserahkan ke Komisi Fatwa MUI untuk disidangkan dan diterbitkan Ketetapan Halal.'
  },
  {
    icon: <Award size={32} />,
    title: '4. Penerbitan Sertifikat',
    description: 'BPJPH menerbitkan Sertifikat Halal berdasarkan Ketetapan Halal dari MUI. Sertifikat dapat diunduh melalui SIHALAL.'
  }
];

const detailContents = {
  alurSertifikasi: {
    title: "Alur Sertifikasi Halal Reguler",
    icon: <Waypoints size={32} className="text-primary-600" />,
    content: (
      <div className="space-y-4 text-stone-700 leading-relaxed text-sm md:text-base">
        <p>Prosedur sertifikasi halal mengikuti alur baku yang ditetapkan oleh BPJPH dengan estimasi SLA (Service Level Agreement) berdasarkan tingkat kompleksitas produk yang diajukan.</p>
        
        <h4 className="font-bold text-lg text-primary-900 mt-4">Tahapan Utama:</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Pembuatan Akun SIHALAL:</strong> Pelaku usaha membuat akun, mengunggah Surat Izin Usaha, KTP, dan NIB.</li>
          <li><strong>Pengajuan Pendaftaran:</strong> Memasukkan data bahan baku, proses produksi, serta matrik produk, sekaligus menunjuk LPH Al-Ghazali.</li>
          <li><strong>Verifikasi Dokumen:</strong> Admin mengecek kelengkapan persyaratan dan melakukan evaluasi kesiapan.</li>
          <li><strong>Perhitungan Biaya (Invoice):</strong> BPJPH akan merilis otomatis invoice setelah disetujui LPH.</li>
          <li><strong>Penjadwalan Auditor:</strong> Setelah pembayaran dikonfirmasi, dijadwalkan audit.</li>
          <li><strong>Pelaksanaan Audit:</strong> Pemeriksaan menyeluruh, dan laporan diteruskan ke Komisi Fatwa MUI.</li>
          <li><strong>Ketetapan Halal MUI:</strong> Keputusan sidang komisi fatwa disampaikan ke BPJPH.</li>
          <li><strong>Penerbitan Sertifikat:</strong> Pelaku usaha mengunduh sertifikat halal di akun.</li>
        </ol>
      </div>
    )
  },
  alurLayanan: {
    title: "Alur Layanan LPH Al-Ghazali",
    icon: <Route size={32} className="text-gold-600" />,
    content: (
      <div className="space-y-4 text-stone-700 leading-relaxed text-sm md:text-base">
        <p>Alur layanan secara tatap muka maupun digital dari LPH Al-Ghazali dalam membantu proses klien.</p>
        
        <h4 className="font-bold text-lg text-primary-900 mt-4">Tahapan Layanan Kami:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Konsultasi Pra-Audit:</strong> Diskusi awal untuk penentuan tingkat kesiapan dan pemahaman pemohon.</li>
          <li><strong>Review Kelengkapan:</strong> Tim LPH memvalidasi kelengkapan awal dokumen SIHALAL sebelum disubmit.</li>
          <li><strong>Audit Pendahuluan (Optional):</strong> Untuk perusahaan besar, kami menyarankan evaluasi celah untuk memastikan zero finding saat audit.</li>
          <li><strong>Komunikasi Proaktif:</strong> Sepanjang proses audit hingga penerbitan laporan dikomunikasikan secara berkala.</li>
          <li><strong>Penanganan Ketidaksesuaian:</strong> LPH memberikan waktu perbaikan (CAR) dengan pendampingan.</li>
        </ul>
      </div>
    )
  }
};

export default function ProsesSertifikasi() {
  const [modalContent, setModalContent] = useState<keyof typeof detailContents | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white" id="proses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Tinjauan Proses</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
            Proses Sertifikasi Halal
          </h3>
          <p className="text-stone-600 text-lg">
            Langkah-langkah sistematis dan transparan dalam pengajuan sertifikasi halal reguler sesuai standar BPJPH.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-primary-100 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-primary-50 shadow-xl flex items-center justify-center text-primary-600 mb-6 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-500 text-primary-900 font-bold flex items-center justify-center text-sm border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">{step.title}</h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12 bg-stone-50 p-8 rounded-3xl border border-stone-100">
          <div className="bg-white p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 shadow-sm border border-stone-100 hover:shadow-md transition-all group">
            <div className="bg-primary-50 p-4 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
              <Waypoints size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">Alur Sertifikasi</h4>
              <p className="text-sm text-stone-600 mb-4">
                Panduan diagram alur tahapan sertifikasi halal dari pendaftaran hingga selesai.
              </p>
              <button 
                onClick={() => setModalContent('alurSertifikasi')}
                className="text-primary-600 font-semibold text-sm hover:text-primary-700 underline decoration-2 underline-offset-4 transition-colors flex items-center"
              >
                Lihat Detail <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 shadow-sm border border-stone-100 hover:shadow-md transition-all group">
            <div className="bg-gold-50 p-4 rounded-xl text-gold-600 group-hover:bg-gold-500 group-hover:text-primary-900 transition-colors duration-300">
              <Route size={28} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">Alur Layanan</h4>
              <p className="text-sm text-stone-600 mb-4">
                Dokumen Service Flow dan interaksi pelayanan lembaga dengan klien (pelaku usaha).
              </p>
              <button 
                onClick={() => setModalContent('alurLayanan')}
                className="text-gold-600 font-semibold text-sm hover:text-gold-700 underline decoration-2 underline-offset-4 transition-colors flex items-center"
              >
                Lihat Detail <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Details */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              onClick={() => setModalContent(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="bg-stone-50 p-3 rounded-xl">
                    {detailContents[modalContent].icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900">
                    {detailContents[modalContent].title}
                  </h3>
                </div>
                <button 
                  onClick={() => setModalContent(null)}
                  className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full transition-colors flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="prose prose-stone max-w-none">
                  {detailContents[modalContent].content}
                </div>
              </div>
              
              <div className="p-6 border-t border-stone-100 bg-stone-50 flex justify-end">
                <button 
                  onClick={() => setModalContent(null)}
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
