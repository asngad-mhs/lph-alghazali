import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmad Fauzi',
    role: 'Pemilik UMKM Kuliner',
    content: 'Pelayanan LPH Al-Ghazali sangat profesional. Pendampingan yang diberikan sangat jelas sehingga proses sertifikasi halal produk saya berjalan lancar tanpa kendala.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Siti Aminah',
    role: 'Peserta Pelatihan Penyelia Halal',
    content: 'Materi pelatihan sangat komprehensif dan mudah dipahami. Instrukturnya berpengalaman dan sabar menjawab setiap pertanyaan. Sangat direkomendasikan!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Budi Santoso',
    role: 'Direktur PT. Pangan Sehat',
    content: 'Sebagai perusahaan skala menengah, kami sangat terbantu dengan audit yang teliti dan objektif dari tim LPH Al-Ghazali. Integritas mereka tidak diragukan lagi.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Testimoni</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
            Apa Kata Mereka?
          </h3>
          <p className="text-stone-600 text-lg">
            Kepercayaan klien adalah prioritas kami. Berikut adalah pengalaman mereka yang telah menggunakan layanan LPH Al-Ghazali.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative">
              <div className="flex text-gold-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-600 mb-8 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
