'use client'

import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Утас',
      value: '+976 11 123 456',
    },
    {
      icon: Mail,
      label: 'И-мэйл',
      value: 'info@mongoltv.mn',
    },
    {
      icon: MapPin,
      label: 'Хаяг',
      value: 'Улаанбаатар хот, Сүхбаатар дүүрэг',
    },
    {
      icon: Clock,
      label: 'Ажлын цаг',
      value: 'Даваа - Баасан: 09:00 - 18:00',
    },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="glass-card rounded-2xl px-6 py-2 inline-block mb-6">
            <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
              Холбоо барих
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Бидэнтэй Холбогдох
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Танд асуулт байна уу? Бидэнтэй доорх мэдээллээр холбогдоно уу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-white/60 text-sm mb-2">{info.label}</p>
                <p className="text-white font-semibold">{info.value}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 glass-card rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Мессеж илгээх</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Нэр"
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="И-мэйл"
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Мессеж"
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="glass-card px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:bg-white/25 transition-all duration-300 hover:scale-105"
                >
                  Илгээх
                </button>
              </form>
            </div>

            <div className="glass-card rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white/80 text-lg mb-4">Ажилчдын нэгдсэн сан</p>
                <p className="text-white/60 text-sm">Монгол ТВ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
