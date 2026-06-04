'use client'

import { Heart, Shield, Users, Gift, FileText, Phone } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Эрүүл мэндийн тусламж',
    description: 'Ажилчдад эрүүл мэндийн даатгал, үзлэг шинжилгээний дэмжлэг үзүүлнэ',
  },
  {
    icon: Shield,
    title: 'Нийгмийн хамгаалал',
    description: 'Тэтгэвэр, тэтгэмж, хүүхдийн мөнгө зэрэг нийгмийн халамжийн үйлчилгээ',
  },
  {
    icon: Users,
    title: 'Сургалт хөгжил',
    description: 'Мэргэжил дээшлүүлэх, чадвар нэмэгдүүлэх сургалтууд зохион байгуулна',
  },
  {
    icon: Gift,
    title: 'Урамшуулал',
    description: 'Шилдэг ажилтнуудыг урамшуулах, баяр ёслолын бэлэг гардуулах',
  },
  {
    icon: FileText,
    title: 'Зөвлөгөө мэдээлэл',
    description: 'Хууль эрх зүй, санхүүгийн зөвлөгөө өгөх мэргэжилтнүүдтэй хамтран ажиллана',
  },
  {
    icon: Phone,
    title: '24/7 Дэмжлэг',
    description: 'Ажилчдын асуудлыг шийдвэрлэх шуурхай утасны дэмжлэг үйлчилгээ',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="glass-card rounded-2xl px-6 py-2 inline-block mb-6">
            <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
              Үйлчилгээ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Бидний Үйлчилгээ
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ажилчдынхаа сайн сайхан байдлыг хангах өргөн хүрээний үйлчилгээ үзүүлж байна
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
