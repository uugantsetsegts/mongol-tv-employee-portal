'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Users, Gift, FileText, Phone } from 'lucide-react'
import FadeIn from './FadeIn'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="card-dark px-6 py-2 inline-block mb-6">
              <span className="text-text-secondary text-sm font-medium uppercase tracking-wide">
                Үйлчилгээ
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Бидний Үйлчилгээ
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Ажилчдынхаа сайн сайхан байдлыг хангах өргөн хүрээний үйлчилгээ үзүүлж байна
            </p>
          </FadeIn>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="card-dark p-8 group border border-border-subtle cursor-pointer"
              >
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-card-navy flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Icon className="w-7 h-7 text-electric-blue" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
