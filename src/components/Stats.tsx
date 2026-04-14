export default function Stats() {
  const stats = [
    { value: '5.000+', label: 'Alumni Pelatihan' },
    { value: '2.500+', label: 'Sertifikat Terbit' },
    { value: '150+', label: 'Auditor Halal' },
    { value: '34', label: 'Provinsi Jangkauan' },
  ];

  return (
    <section className="py-16 bg-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-2">
                {stat.value}
              </div>
              <div className="text-primary-900/80 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
