'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Амралт хэрхэн хүсэх вэ?',
      answer: 'HR порталд нэвтэрч, "HR үйлчилгээ" хэсэг рүү ороод амралтын хүсэлт илгээх товчийг дарна уу.',
    },
    {
      question: 'Цалингийн тодорхойлолт хэрхэн авах вэ?',
      answer: 'Хувийн мэдээлэл хэсэгт ороод цалингийн тодорхойлолт хэсгийг сонгоно уу.',
    },
    {
      question: 'Шинэ ажилтны онбординг хэд хоног үргэлжлэх вэ?',
      answer: 'Онбординг хөтөлбөр нь ерөнхийдөө 90 хоног үргэлжилнэ.',
    },
  ]

  return (
    <main className="min-h-screen bg-deep-space">
      <Header />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <p className="text-mercury-blue font-semibold text-sm tracking-widest mb-4">
              ТҮГЭЭМЭЛ АСУУЛТУУД
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-starlight">
              FAQ
            </h1>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-graphite rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-graphite/80 transition-colors"
                >
                  <span className="text-starlight font-medium">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 90 : 0 }}
                    className="text-mercury-blue"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-silver">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
