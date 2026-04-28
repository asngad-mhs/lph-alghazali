import { Shield, Clock, BadgeCheck, Headset } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Shield size={24} />,
    title: 'Terakreditasi Resmi',
    description: 'LPH Al-Ghazali telah terakreditasi oleh BPJPH dan MUI sebagai Lembaga Pemeriksa Halal yang sah.'
  },
  {
    icon: <Clock size={24} />,
    title: 'Proses Cepat & Tepat',
    description: 'Sistem pelayanan yang terintegrasi memastikan proses audit dan sertifikasi berjalan efisien sesuai SLA.'
  },
  {
    icon: <BadgeCheck size={24} />,
    title: 'Auditor Kompeten',
    description: 'Didukung oleh tim Auditor Halal yang berpengalaman, bersertifikat kompetensi, dan berintegritas tinggi.'
  },
  {
    icon: <Headset size={24} />,
    title: 'Layanan Konsultasi',
    description: 'Tim customer service kami siap membantu dan memberikan konsultasi terkait kendala sertifikasi halal Anda.'
  }
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-primary-900 text-white relative overflow-hidden" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-400 font-semibold tracking-wider uppercase text-sm mb-3">Mengapa Memilih Kami</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
              Keunggulan LPH Al-Ghazali
            </h3>
            <p className="text-primary-100 text-lg mb-8 leading-relaxed">
              Kami memahami bahwa sertifikasi halal adalah investasi penting bagi bisnis Anda. Oleh karena itu, kami berkomitmen memberikan layanan terbaik dengan berbagai keunggulan.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-800 border border-primary-700 flex items-center justify-center text-gold-400 mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-primary-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-primary-500/20 rounded-3xl transform rotate-3 scale-105 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Tim Auditor Halal" 
              className="relative rounded-3xl shadow-2xl border border-primary-700/50 object-cover h-[600px] w-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
