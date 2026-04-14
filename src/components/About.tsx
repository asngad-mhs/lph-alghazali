import { BookOpen, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Pelatihan Halal" 
                className="rounded-2xl w-full h-64 object-cover mt-8 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
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
      </div>
    </section>
  );
}
