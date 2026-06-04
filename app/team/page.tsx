'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function TeamPage() {
  const members = [
    { name: 'Б. Бат-Эрдэнэ', role: 'Ерөнхий захирал' },
    { name: 'Д. Сарантуяа', role: 'HR менежер' },
    { name: 'Г. Болд', role: 'IT захирал' },
  ]

  return (
    <main className="min-h-screen bg-deep-space">
      <Header />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <p className="text-mercury-blue font-semibold text-sm tracking-widest mb-4">
              БАГИЙН ГИШҮҮД
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-starlight">
              Баг
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-graphite rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-mercury-blue/20 flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-mercury-blue">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-starlight mb-2">
                  {member.name}
                </h3>
                <p className="text-silver">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
