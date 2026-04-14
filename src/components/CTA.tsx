import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-white" id="register">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-gold-500 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Siap Memulai Perjalanan Halal Anda?
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pelaku usaha lainnya yang telah mempercayakan edukasi dan sertifikasi halalnya kepada LPH Al-Ghazali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-500 hover:bg-gold-400 text-primary-900 font-bold px-8 py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2">
                Daftar Pelatihan <ArrowRight size={20} />
              </button>
              <button className="bg-white hover:bg-stone-50 text-primary-900 font-bold px-8 py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
