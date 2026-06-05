'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import FadeIn from './FadeIn'

const faqs = [
  {
    question: 'Ажилчдын сангаас ямар тусламж авах боломжтой вэ?',
    answer: 'Ажилчдын сангаас эрүүл мэндийн тусламж, нийгмийн хамгаалал, сургалтын дэмжлэг, орон сууцны хөнгөлөлт зэрэг олон талын тусламж авах боломжтой. Дэлгэрэнгүй мэдээллийг Үйлчилгээ хэсгээс харна уу.',
  },
  {
    question: 'Хэрхэн гишүүн болох вэ?',
    answer: 'Монгол ТВ-ийн бүх ажилтнууд автоматаар ажилчдын сангийн гишүүн болдог. Нэмэлт мэдээлэл авахыг хүсвэл бидэнтэй холбогдоно уу.',
  },
  {
    question: 'Эрүүл мэндийн үзлэг хэзээ хийгддэг вэ?',
    answer: 'Жил бүр урьдчилан сэргийлэх эрүүл мэндийн үзлэгийг зохион байгуулдаг. Точилох хугацааг блог хэсэгт мэдэгдэх болно.',
  },
  {
    question: 'Сургалтад хэрхэн хамрагдах вэ?',
    answer: 'Сургалтын хөтөлбөрүүдийг блог хэсэгт зарладаг. Сонирхсон сургалтадаа бүртгүүлэхийн тулд бидэнтэй холбогдоно уу.',
  },
  {
    question: 'Ажилчдын сангийн санхүүгийн тайлан хаанаас харах вэ?',
    answer: 'Санхүүгийн тайланг жил бэр гаргадаг бөгөөд ажилчдын хурлаар танилцуулдаг. Нэмэлт мэдээлэл авахыг хүсвэл холбогдоно уу.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6 bg-canvas">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="card-dark px-6 py-2 inline-block mb-6">
              <span className="text-text-secondary text-sm font-medium uppercase tracking-wide">
                Түгээмэл асуулт
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Түгээмэл асуулт, хариулт
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted">
              Танд гарч болох асуултуудад хариулт бэлдсэн
            </p>
          </FadeIn>
        </div>

        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="card-dark border border-border-subtle overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.button
                className="w-full px-8 py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
