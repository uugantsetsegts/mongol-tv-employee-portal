'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import FadeIn from './FadeIn'

const team = [
  {
    name: 'Бат-Эрдэнэ',
    role: 'Тэргүүн',
    bio: '10+ жилийн туршлагатай удирдлагын мэргэжилтэн',
  },
  {
    name: 'Оюунчимэг',
    role: 'Дэд тэргүүн',
    bio: 'Нийгмийн хамгааллын чиглэлээр мэргэшсэн',
  },
  {
    name: 'Ганбат',
    role: 'Нарийн бичиг',
    bio: 'Ажилчдын холбооны зохион байгуулалт',
  },
  {
    name: 'Сарангэрэл',
    role: 'Санхүүч',
    bio: 'Сангийн санхүүгийн менежмент',
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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="card-dark px-6 py-2 inline-block mb-6">
              <span className="text-text-secondary text-sm font-medium uppercase tracking-wide">
                Баг
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Удирдлах баг
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Ажилчдын сангийн удирдлах багтай танилцана уу
            </p>
          </FadeIn>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="card-dark p-8 text-center border border-border-subtle"
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-card-navy flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <span className="text-2xl font-bold text-electric-blue">
                  {member.name[0]}
                </span>
              </motion.div>
              
              <h3 className="text-lg font-bold text-white mb-1">
                {member.name}
              </h3>
              
              <p className="text-electric-blue text-sm mb-4">
                {member.role}
              </p>
              
              <p className="text-text-muted text-sm mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center gap-4">
                <motion.a 
                  href="#" 
                  className="text-text-muted hover:text-electric-blue transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-text-muted hover:text-electric-blue transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
