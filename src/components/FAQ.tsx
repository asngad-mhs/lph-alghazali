import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Apa itu Sertifikasi Halal?',
    answer: 'Sertifikasi Halal adalah proses pengujian dan penetapan kehalalan suatu produk berdasarkan syariat Islam yang dilakukan oleh BPJPH, LPH, dan MUI untuk memberikan kepastian hukum dan kenyamanan bagi konsumen.'
  },
  {
    question: 'Berapa lama proses sertifikasi halal reguler?',
    answer: 'Sesuai regulasi terbaru (UU Cipta Kerja), proses sertifikasi halal reguler memakan waktu maksimal 21 hari kerja sejak dokumen dinyatakan lengkap oleh BPJPH hingga sertifikat diterbitkan.'
  },
  {
    question: 'Apa perbedaan jalur Reguler dan Self Declare?',
    answer: 'Jalur Reguler diperuntukkan bagi usaha menengah/besar atau produk berisiko tinggi dengan audit langsung oleh LPH. Sedangkan Self Declare khusus untuk Usaha Mikro dan Kecil (UMK) dengan produk berisiko rendah melalui pendampingan Proses Produk Halal (PPH).'
  },
  {
    question: 'Berapa biaya sertifikasi halal?',
    answer: 'Biaya bervariasi tergantung skala usaha dan jenis produk, sesuai dengan tarif layanan BLU BPJPH yang diatur dalam PMK No. 57/PMK.05/2021. Untuk UMK jalur Self Declare, biayanya digratiskan (disubsidi pemerintah).'
  },
  {
    question: 'Apakah sertifikat halal berlaku seumur hidup?',
    answer: 'Berdasarkan regulasi terbaru (UU No. 6 Tahun 2023), Sertifikat Halal berlaku seumur hidup selama tidak ada perubahan komposisi bahan dan/atau proses produksi.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
            Pertanyaan yang Sering Diajukan
          </h3>
          <p className="text-stone-600 text-lg">
            Temukan jawaban cepat untuk pertanyaan umum seputar proses sertifikasi halal.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors ${
                openIndex === index ? 'border-primary-500 bg-primary-50/50' : 'border-stone-200 bg-white hover:border-primary-300'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-stone-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  size={20} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-stone-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
