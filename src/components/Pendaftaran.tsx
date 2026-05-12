import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

export default function Pendaftaran() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    subject: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    // Allows optional + at start, spaces, dashes and numbers. Evaluates to true if 10-15 digits long (roughly)
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(phone) || phone.replace(/\D/g, '').length >= 10;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field as keyof typeof formData]);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const validateField = (field: string, value: string) => {
    let error = '';
    switch (field) {
      case 'name':
        if (!value.trim()) error = 'Nama Lengkap wajib diisi';
        else if (value.trim().length < 3) error = 'Nama terlalu pendek';
        break;
      case 'phone':
        if (!value.trim()) error = 'No. Telepon / WhatsApp wajib diisi';
        else if (!validatePhone(value)) error = 'Format No. Telepon tidak valid';
        break;
      case 'email':
        if (!value.trim()) error = 'Alamat email wajib diisi';
        else if (!validateEmail(value)) error = 'Format email tidak valid';
        break;
      case 'subject':
        if (!value) error = 'Keperluan layanan wajib dipilih';
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
    return error === '';
  };

  const handleWhatsAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isPhoneValid = validateField('phone', formData.phone);
    const isEmailValid = validateField('email', formData.email);
    const isSubjectValid = validateField('subject', formData.subject);

    // Mark all as touched
    setTouched({
      name: true,
      phone: true,
      email: true,
      subject: true
    });

    if (!isNameValid || !isPhoneValid || !isEmailValid || !isSubjectValid) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'registrations'), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        status: 'new',
        createdAt: serverTimestamp()
      });

      const adminPhone = "6285802494252";
      const subjectMap: Record<string, string> = {
        sertifikasi: "Pendaftaran Sertifikasi Halal",
        pelatihan: "Informasi Pelatihan Penyelia Halal",
        konsultasi: "Konsultasi Halal",
        lainnya: "Lainnya"
      };
      const subjectText = subjectMap[formData.subject] || formData.subject || "Belum dipilih";

      const message = `Halo Admin LPH Al-Ghazali,\n\nSaya menghubungi Anda dari Website. Berikut data diri dan keperluan saya:\n\n*Nama:* ${formData.name}\n*No. WA:* ${formData.phone}\n*Email:* ${formData.email}\n*Keperluan:* ${subjectText}\n\nMohon info dan arahannya lebih lanjut. Terima kasih.`;
      
      window.open(`https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`, "_blank");
      setFormData({ name: '', phone: '', email: '', subject: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'registrations');
      alert("Terjadi kesalahan saat menyimpan data. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-stone-50" id="register">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-700 font-semibold tracking-wider uppercase text-sm mb-3">Mulai Sekarang</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
            Pendaftaran & Konsultasi
          </h3>
          <p className="text-stone-600 text-lg">
            Isi formulir di bawah ini untuk memulai proses sertifikasi, mengikuti pelatihan, atau sekadar berkonsultasi dengan tim ahli kami.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
          <div className="grid lg:grid-cols-5 h-full">
            <div className="bg-primary-900 text-white p-8 md:p-12 lg:col-span-2 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-gold-500 rounded-full blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4">Hubungi Kami</h3>
                <p className="text-primary-100 text-sm mb-10 leading-relaxed">
                  Tim layanan klien kami siap memberikan panduan dan jawaban atas setiap pertanyaan Anda seputar layanan LPH Al-Ghazali.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-xl flex-shrink-0">
                      <Phone size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider font-semibold mb-1">Telepon / WhatsApp</p>
                      <p className="font-semibold text-lg">+62 858-0249-4252</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-xl flex-shrink-0">
                      <Mail size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider font-semibold mb-1">Email</p>
                      <p className="font-semibold text-lg">lph@unugha.ac.id</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-xl flex-shrink-0">
                      <MapPin size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 uppercase tracking-wider font-semibold mb-1">Alamat</p>
                      <p className="font-medium leading-relaxed text-primary-50">
                        Jl. Kemerdekaan Barat No.12,<br />
                        Kesugihan, Cilacap,<br />
                        Jawa Tengah 53274
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:col-span-3">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">Formulir Pendaftaran</h3>
              <p className="text-stone-500 text-sm mb-8">
                Data Anda akan disimpan dengan aman. Kami akan membalas pesan Anda melalui WhatsApp secepatnya.
              </p>

              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">Nama Lengkap / Perusahaan</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-stone-200 focus:border-primary-500 focus:ring-primary-200'} focus:ring-2 outline-none transition-all`}
                    placeholder="Contoh: Budi Santoso / PT Pangan Sejahtera"
                  />
                  {errors.name && touched.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">No. Telepon / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-stone-200 focus:border-primary-500 focus:ring-primary-200'} focus:ring-2 outline-none transition-all`}
                      placeholder="Contoh: 08123456789"
                    />
                    {errors.phone && touched.phone && <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">Alamat Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-stone-200 focus:border-primary-500 focus:ring-primary-200'} focus:ring-2 outline-none transition-all`}
                      placeholder="Contoh: email@perusahaan.com"
                    />
                    {errors.email && touched.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-2">Keperluan Layanan</label>
                  <select 
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-stone-200 focus:border-primary-500 focus:ring-primary-200'} focus:ring-2 outline-none transition-all bg-white`}
                  >
                    <option value="" disabled>-- Pilih salah satu --</option>
                    <option value="sertifikasi">Pendaftaran Sertifikasi Halal</option>
                    <option value="pelatihan">Pendaftaran Pelatihan Penyelia Halal</option>
                    <option value="konsultasi">Konsultasi Umum</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                  {errors.subject && touched.subject && <p className="mt-1.5 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-primary-900 font-bold px-6 py-4 rounded-xl flex justify-center items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full border-2 border-primary-900 border-t-transparent animate-spin inline-block"></span>
                        Mengirim Data...
                      </span>
                    ) : (
                      <><Send size={20} /> Kirim via WhatsApp</>
                    )}
                  </button>
                  <p className="text-center text-xs text-stone-400 mt-4">
                    Dengan mengirimkan form ini, Anda menyetujui kebijakan privasi kami.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
