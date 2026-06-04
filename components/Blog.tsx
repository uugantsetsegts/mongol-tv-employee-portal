'use client'

import { motion } from 'framer-motion'

export default function Blog() {
  const posts = [
    {
      title: 'Шинэ ажилтны онбординг хөтөлбөр эхэллээ',
      date: '2026.06.01',
      category: 'HR',
    },
    {
      title: 'Хагас жилийн шилдэг ажилтнууд',
      date: '2026.05.28',
      category: 'Баг',
    },
    {
      title: 'Амралтын өдрүүдийн зарлал',
      date: '2026.05.25',
      category: 'Мэдээ',
    },
  ]

  return (
    <section id="blog" className="py-24 px-6 bg-midnight-slate/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-mercury-blue font-semibold text-sm tracking-widest mb-4">
            МЭДЭЭ МЭДЭЭЛЭЛ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-starlight">
            Сүүлийн мэдээ
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-graphite rounded-2xl p-8 hover:bg-graphite/80 transition-colors cursor-pointer"
            >
              <span className="text-mercury-blue text-sm font-semibold">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold text-starlight mt-3 mb-4">
                {post.title}
              </h3>
              <p className="text-silver text-sm">
                {post.date}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
