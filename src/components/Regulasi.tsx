import { Scale, FileText, Download } from 'lucide-react';

const regulations = [
  { id: 'UU 33/2014', title: 'Undang-Undang No. 33 Tahun 2014', desc: 'Tentang Jaminan Produk Halal' },
  { id: 'PP 39/2021', title: 'Peraturan Pemerintah No. 39 Tahun 2021', desc: 'Penyelenggaraan Bidang Jaminan Produk Halal' },
  { id: 'PMA 20/2021', title: 'Peraturan Menteri Agama No. 20 Tahun 2021', desc: 'Sertifikasi Halal bagi Pelaku UMK' },
  { id: 'Kepkaban 57/2021', title: 'Keputusan Kepala BPJPH No. 57 Tahun 2021', desc: 'Kriteria Sistem Jaminan Produk Halal' },
  { id: 'KMA 748/2021', title: 'Keputusan Menteri Agama No. 748 Tahun 2021', desc: 'Jenis Produk yang Wajib Bersertifikat Halal' },
  { id: 'Fatwa MUI 44/2020', title: 'Fatwa MUI No. 44 Tahun 2020', desc: 'Penggunaan Nama, Bentuk, dan Kemasan Produk' }
];

export default function Regulasi() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="regulasi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mb-6">
              <Scale size={32} />
            </div>
            <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Dasar Hukum</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              Regulasi Halal
            </h3>
            <p className="text-stone-600 text-lg mb-8">
              Kumpulan peraturan perundang-undangan dan kebijakan yang menjadi landasan pelaksanaan Jaminan Produk Halal di Indonesia.
            </p>
          </div>
          
          <div className="lg:w-2/3 w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              {regulations.map((reg, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
                  <div className="flex items-start gap-4">
                    <div className="text-primary-500 mt-1">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1 group-hover:text-primary-700 transition-colors">{reg.id}</h4>
                      <p className="text-sm text-stone-800 font-medium mb-2">{reg.title}</p>
                      <p className="text-xs text-stone-500 mb-4">{reg.desc}</p>
                      <button className="text-primary-600 text-sm font-semibold flex items-center gap-1 hover:text-primary-800">
                        <Download size={16} /> Unduh Dokumen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
