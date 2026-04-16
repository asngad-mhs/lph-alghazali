import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const staticNews = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1581022295087-35e59dce8314?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    createdAt: { seconds: new Date('2024-04-12').getTime() / 1000 },
    title: 'Kewajiban Sertifikasi Halal Oktober 2024: Apa yang Perlu Disiapkan UMKM?',
    content: 'Pemerintah mewajibkan seluruh produk makanan dan minuman bersertifikat halal pada Oktober 2024. Simak persiapannya mulai dari sekarang sebelum masa tenggang berakhir.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    createdAt: { seconds: new Date('2024-04-05').getTime() / 1000 },
    title: 'LPH Al-Ghazali Sukses Gelar Pelatihan Penyelia Halal Batch 15',
    content: 'Sebanyak 50 peserta dari berbagai perusahaan mengikuti diklat penyelia halal untuk memenuhi standar kompetensi BNSP yang diselenggarakan di Cilacap.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    createdAt: { seconds: new Date('2024-03-28').getTime() / 1000 },
    title: 'Sinergi BPJPH dan LPH dalam Mempercepat Ekosistem Halal Global',
    content: 'Kolaborasi strategis terus ditingkatkan guna menjadikan Indonesia sebagai pusat industri halal dunia pada tahun 2024 melalui penguatan infrastruktur LPH.'
  }
];

export default function Berita() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const q = query(
          collection(db, 'news'),
          where('published', '==', true),
          orderBy('createdAt', 'desc'),
          limit(3)
        );
        const snapshot = await getDocs(q);
        const fetchedNews = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        if (fetchedNews.length > 0) {
          setNews(fetchedNews);
        } else {
          setNews(staticNews);
        }
      } catch (error) {
        console.error("Error fetching news: ", error);
        setNews(staticNews);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
          <button className="hidden md:flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors">
            Lihat Semua Berita <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={item.id || index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl transition-shadow group flex flex-col">
              <div className="relative h-48 overflow-hidden flex-shrink-0 bg-stone-200 flex items-center justify-center">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <ImageIcon size={48} className="text-stone-400" />
                )}
                <div className="absolute top-4 left-4 bg-gold-500 text-primary-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Berita
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-stone-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>
                    {item.createdAt 
                      ? new Date(item.createdAt.seconds * 1000).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
                      : 'Tanggal tidak diketahui'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3 line-clamp-2 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.content}
                </p>
                <button className="text-primary-600 font-semibold text-sm flex items-center gap-1 hover:text-primary-800 mt-auto text-left w-max">
                  Baca Selengkapnya <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors">
            Lihat Semua Berita <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
