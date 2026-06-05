'use client'

import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn direction="left">
              <div className="card-dark p-8 md:p-12 border border-border-subtle">
                <div className="card-navy px-6 py-2 inline-block mb-6">
                  <span className="text-text-secondary text-sm font-medium uppercase tracking-wide">
                    Бидний тухай
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Монгол ТВ-ийн
                  <br />
                  <span className="text-gradient">Ажилчдын Сан</span>
                </h2>
                
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Монгол ТВ-ийн ажилчдын нэгдсэн сан нь 2009 онд байгуулагдсан бөгөөд 
                  телевизийн салбарт ажиллаж буй ажилчдын эрх ашгийг хамгаалах, 
                  тэдний ажлын нөхцөл, нийгмийн баталгааг сайжруулах зорилгоор 
                  үйл ажиллагаа явуулж байна.
                </p>
                
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Бид ажилчдынхаа эрүүл мэнд, боловсрол, орон сууцны хөнгөлөлт, 
                  амралт чөлөөт цагийг зохицуулах зэрэг олон талын үйлчилгээг 
                  үзүүлж, хамт олноо бэхжүүлэхэд анхаардаг.
                </p>
                
                <motion.a
                  href="/about"
                  className="card-navy px-8 py-4 rounded-2xl text-white font-semibold text-lg inline-block border border-border-subtle"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  Дэлгэрэнгүй мэдээлэл
                </motion.a>
              </div>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn direction="right">
              <motion.div 
                className="card-deep p-8 aspect-square flex items-center justify-center border border-border-subtle"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-card-navy flex items-center justify-center glow-blue"
                    animate={{ 
                      boxShadow: [
                        '0 0 40px rgba(0, 136, 255, 0.15)',
                        '0 0 60px rgba(0, 136, 255, 0.25)',
                        '0 0 40px rgba(0, 136, 255, 0.15)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-6xl font-bold text-electric-blue tracking-tighter">15+</span>
                  </motion.div>
                  <p className="text-text-secondary text-lg">Жилийн туршлага</p>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
