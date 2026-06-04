'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-deep-space">
      <Header />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center"
          >
            <p className="text-mercury-blue font-semibold text-sm tracking-widest mb-4">
              ХОЛБОО БАРИХ
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-starlight mb-8">
              Холбоо барих
            </h1>
            <div className="bg-graphite rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <p className="text-silver mb-2">И-мэйл</p>
                  <a href="mailto:hr@mongoltv.mn" className="text-starlight hover:text-mercury-blue transition-colors">
                    hr@mongoltv.mn
                  </a>
                </div>
                <div>
                  <p className="text-silver mb-2">Утас</p>
                  <p className="text-starlight">+976 11 123456</p>
                </div>
                <div>
                  <p className="text-silver mb-2">Хаяг</p>
                  <p className="text-starlight">Улаанбаатар хот, Сүхбаатар дүүрэг</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
