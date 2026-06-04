'use client'

import { motion } from 'framer-motion'

export default function Team() {
  const members = [
    {
      name: 'Б. Бат-Эрдэнэ',
      role: 'Ерөнхий захирал',
    },
    {
      name: 'Д. Сарантуяа',
      role: 'HR менежер',
    },
    {
      name: 'Г. Болд',
      role: 'IT захирал',
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-mercury-blue font-semibold text-sm tracking-widest mb-4">
            БАГИЙН ГИШҮҮД
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-starlight">
            Удирдлах баг
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-graphite rounded-2xl p-8 text-center hover:bg-graphite/80 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-mercury-blue/20 flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-mercury-blue">
                  {member.name.charAt(0)}
                </span>
              </motion.div>
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
  )
}
