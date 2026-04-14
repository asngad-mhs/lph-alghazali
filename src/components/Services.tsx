import { FileCheck, GraduationCap, Building2, FlaskConical, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <GraduationCap size={32} />,
    title: 'Pelatihan Penyelia Halal',
    description: 'Program diklat komprehensif untuk mencetak Penyelia Halal yang kompeten dan bersertifikat BNSP, siap mengawal proses produk halal di perusahaan.',
    link: '#pelatihan'
  },
  {
    icon: <FileCheck size={32} />,
    title: 'Pemeriksaan & Sertifikasi',
    description: 'Layanan audit dan pemeriksaan kehalalan produk (makanan, minuman, kosmetik, obat) untuk penerbitan Sertifikat Halal oleh BPJPH.',
    link: '#sertifikasi'
  },
  {
    icon: <Building2 size={32} />,
    title: 'Pendampingan PPH',
    description: 'Layanan pendampingan Proses Produk Halal (PPH) khusus bagi pelaku Usaha Mikro dan Kecil (UMK) melalui skema Self Declare.',
    link: '#pendampingan'
  },
  {
    icon: <FlaskConical size={32} />,
    title: 'Uji Laboratorium',
    description: 'Fasilitas pengujian laboratorium terakreditasi untuk mendeteksi kandungan DNA babi (porcine) dan cemaran bahan non-halal lainnya.',
    link: '#lab'
  }
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Layanan Kami</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
            Solusi Lengkap Ekosistem Halal
          </h3>
          <p className="text-stone-600 text-lg">
            Kami menyediakan berbagai layanan terintegrasi untuk mendukung kepatuhan dan pemahaman terhadap standar halal di Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-stone-100 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h4>
              <p className="text-stone-600 mb-6 flex-grow">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors mt-auto"
              >
                Selengkapnya <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
