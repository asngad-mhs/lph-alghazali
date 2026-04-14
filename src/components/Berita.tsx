import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '12 April 2024',
    category: 'Regulasi',
    title: 'Kewajiban Sertifikasi Halal Oktober 2024: Apa yang Perlu Disiapkan UMKM?',
    excerpt: 'Pemerintah mewajibkan seluruh produk makanan dan minuman bersertifikat halal pada Oktober 2024. Simak persiapannya.'
  },
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '05 April 2024',
    category: 'Pelatihan',
    title: 'LPH Al-Ghazali Sukses Gelar Pelatihan Penyelia Halal Batch 15',
    excerpt: 'Sebanyak 50 peserta dari berbagai perusahaan mengikuti diklat penyelia halal untuk memenuhi standar kompetensi BNSP.'
  },
  {
    image: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '28 Maret 2024',
    category: 'Sinergi',
    title: 'Sinergi BPJPH dan LPH dalam Mempercepat Ekosistem Halal Global',
    excerpt: 'Kolaborasi strategis terus ditingkatkan guna menjadikan Indonesia sebagai pusat industri halal dunia pada tahun 2024.'
  }
];

export default function Berita() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="berita">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Pusat Informasi</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
              Berita & Artikel Halal
            </h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors">
            Lihat Semua Berita <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-gold-500 text-primary-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-stone-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3 line-clamp-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.excerpt}
                </p>
                <a href="#" className="text-primary-600 font-semibold text-sm flex items-center gap-1 hover:text-primary-800 mt-auto">
                  Baca Selengkapnya <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors">
            Lihat Semua Berita <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
