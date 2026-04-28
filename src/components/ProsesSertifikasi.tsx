import { ClipboardList, Search, Gavel, Award, Waypoints, Route } from 'lucide-react';

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

export default function ProsesSertifikasi() {
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
              <button className="text-primary-600 font-semibold text-sm hover:text-primary-700 underline decoration-2 underline-offset-4 transition-colors">
                Lihat Detail
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
              <button className="text-gold-600 font-semibold text-sm hover:text-gold-700 underline decoration-2 underline-offset-4 transition-colors">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
