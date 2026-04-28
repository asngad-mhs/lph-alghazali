import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative bg-primary-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
      {/* Background Pattern/Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
      </div>
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-primary-800/80"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-800/50 border border-primary-700/50 text-gold-400 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              Lembaga Pemeriksa Halal Terakreditasi
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            >
              Pusat Edukasi & <br className="hidden lg:block" />
              <span className="text-gold-400">Sertifikasi Halal</span> Terpercaya
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              LPH Al-Ghazali hadir untuk mendampingi UMKM dan Perusahaan dalam mewujudkan ekosistem halal di Indonesia melalui edukasi, pelatihan, dan sertifikasi yang profesional.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#services" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-primary-900 font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Mulai Sertifikasi
                <ArrowRight size={20} />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 bg-primary-800 hover:bg-primary-700 text-white font-medium px-8 py-4 rounded-lg transition-all border border-primary-700">
                Pelajari Lebih Lanjut
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-primary-200"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold-400" />
                <span>Pendampingan Penuh</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold-400" />
                <span>Proses Transparan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-gold-400" />
                <span>Sesuai Standar BPJPH</span>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:block relative">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gold-500/20 rounded-[2.5rem] blur-2xl"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-700/50"
            >
              <motion.img 
                animate={{ 
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut"
                }}
                src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Edukasi Halal" 
                className="w-full h-[500px] object-cover scale-110 origin-center"
                referrerPolicy="no-referrer"
              />
              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4"
              >
                <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Terakreditasi</p>
                  <p className="text-stone-900 font-bold">BPJPH & MUI</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
