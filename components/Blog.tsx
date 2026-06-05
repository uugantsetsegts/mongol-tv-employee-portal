'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

const posts = [
  {
    title: 'Ажилчдын эрүүл мэндийн үзлэг 2024',
    excerpt: 'Энэ оны эрүүл мэндийн урьдчилан сэргийлэх үзлэг амжилттай зохион байгуулагдлаа...',
    date: '2024.03.15',
    category: 'Эрүүл мэнд',
  },
  {
    title: 'Шинэ хөтөлбөр хэрэгжүүлэх гэж байна',
    excerpt: 'Ажилчдынхаа чадварыг дээшлүүлэх шинэ сургалтын хөтөлбөрийг танилцуулж байна...',
    date: '2024.03.10',
    category: 'Сургалт',
  },
  {
    title: 'Нийгмийн хамгааллын шинэчлэл',
    excerpt: 'Ажилчдын нийгмийн хамгааллын багц шинэчлэгдэн, илүү өргөн хүрээтэй боллоо...',
    date: '2024.03.05',
    category: 'Нийгмийн хамгаалал',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="card-dark px-6 py-2 inline-block mb-6">
              <span className="text-text-secondary text-sm font-medium uppercase tracking-wide">
                Блог
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Сүүлийн мэдээ
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Ажилчдын сангийн үйл ажиллагаа, шинэчлэлтүүдээс мэдээлэл аваарай
            </p>
          </FadeIn>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {posts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="card-dark p-8 group border border-border-subtle cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="card-navy px-3 py-1 rounded-full text-xs text-electric-blue">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-text-muted text-xs">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                {post.title}
              </h3>
              
              <p className="text-text-muted leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-electric-blue text-sm font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                Дэлгэрэнгүй
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
