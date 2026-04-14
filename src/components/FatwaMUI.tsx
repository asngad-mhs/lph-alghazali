import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function FatwaMUI() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="fatwa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary-900/5 rounded-3xl transform -rotate-3 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Sidang Fatwa MUI" 
              className="relative rounded-3xl shadow-xl border border-stone-100 object-cover h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-primary-900 p-6 rounded-2xl shadow-xl max-w-xs">
              <BookOpen size={32} className="mb-3" />
              <h4 className="font-bold text-lg mb-1">Ketetapan Halal</h4>
              <p className="text-sm font-medium opacity-90">Syarat mutlak penerbitan Sertifikat Halal oleh BPJPH.</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Otoritas Syariah</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              Peran Komisi Fatwa MUI
            </h3>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              Majelis Ulama Indonesia (MUI) memegang peranan sentral dalam ekosistem halal Indonesia sebagai pemegang otoritas syariah yang menetapkan kehalalan suatu produk melalui Sidang Komisi Fatwa.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-stone-900">Penetapan Kehalalan Produk</h4>
                  <p className="text-stone-600 text-sm">MUI mengeluarkan Ketetapan Halal tertulis berdasarkan laporan hasil audit dari LPH.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-stone-900">Sertifikasi Auditor Halal</h4>
                  <p className="text-stone-600 text-sm">MUI berwenang melakukan uji kompetensi dan sertifikasi bagi calon Auditor Halal.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-stone-900">Penetapan Standar Syariah</h4>
                  <p className="text-stone-600 text-sm">Menerbitkan fatwa-fatwa terkait standar kehalalan bahan, proses, dan fasilitas produksi.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-primary-900 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Cari Fatwa MUI Terbaru
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
