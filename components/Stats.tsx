'use client'

export default function Stats() {
  const stats = [
    { number: '2,500+', label: 'Гишүүн ажилтан' },
    { number: '15+', label: 'Жилийн туршлага' },
    { number: '₮500M+', label: 'Нийт хөрөнгө' },
    { number: '98%', label: 'Ажилчдын сэтгэл ханамж' },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
