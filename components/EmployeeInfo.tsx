'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Users, Briefcase, Heart, GraduationCap, Home, Star } from 'lucide-react'

interface Category {
  id: string
  icon: React.ElementType
  title: string
  count: number
  color: string
  items: {
    name: string
    detail: string
    subDetail?: string
  }[]
}

const categories: Category[] = [
  {
    id: 'personal',
    icon: Users,
    title: 'Хувийн мэдээлэл',
    count: 3,
    color: '#0088ff',
    items: [
      { name: 'Нэр', detail: 'Бат-Эрдэнэ', subDetail: 'Овог: Дорж' },
      { name: 'Регистрийн дугаар', detail: 'АА12345678' },
      { name: 'Төрсөн өдөр', detail: '1990.05.15' },
    ]
  },
  {
    id: 'work',
    icon: Briefcase,
    title: 'Ажлын мэдээлэл',
    count: 4,
    color: '#00ff88',
    items: [
      { name: 'Албан тушаал', detail: 'Ахлах програмист' },
      { name: 'Хэлтэс', detail: 'Мэдээлэл технологи' },
      { name: 'Ажилд орсон', detail: '2020.03.15' },
      { name: 'Цалин', detail: '3,500,000 ₮' },
    ]
  },
  {
    id: 'health',
    icon: Heart,
    title: 'Эрүүл мэнд',
    count: 2,
    color: '#ff3366',
    items: [
      { name: 'Цусны бүлэг', detail: 'O+' },
      { name: 'Даатгал', detail: 'Хувийн даатгалтай' },
    ]
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Боловсрол',
    count: 2,
    color: '#ffaa00',
    items: [
      { name: 'Боловсрол', detail: 'Бакалавр' },
      { name: 'Мэргэжил', detail: 'Компьютерийн ухаан' },
    ]
  },
  {
    id: 'address',
    icon: Home,
    title: 'Хаяг байршил',
    count: 2,
    color: '#aa66ff',
    items: [
      { name: 'Оршин суугаа хаяг', detail: 'Улаанбаатар, Сүхбаатар дүүрэг' },
      { name: 'Утас', detail: '+976 9911 2233' },
    ]
  },
  {
    id: 'performance',
    icon: Star,
    title: 'Үнэлгээ',
    count: 3,
    color: '#ff8800',
    items: [
      { name: 'Сүүлийн үнэлгээ', detail: 'А' },
      { name: 'Талархал', detail: '3 удаа' },
      { name: 'Сургалт', detail: '5 сургалт' },
    ]
  },
]

export default function EmployeeInfo() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  return (
    <section className="py-24 px-6 bg-canvas">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card-dark px-6 py-2 inline-block mb-6">
            <span className="text-text-secondary text-sm font-medium uppercase tracking-wide">
              Ажилчдын мэдээлэл
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Мэдээллийн <span className="text-gradient">Категори</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Ажилтны мэдээллийг категориар харах
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isOpen = openCategory === category.id

            return (
              <motion.div
                key={category.id}
                className="card-dark border border-border-subtle overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenCategory(isOpen ? null : category.id)}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}15` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-text-muted text-sm">{category.count} мэдээлэл</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                  >
                    <ChevronDown className="w-5 h-5 text-text-muted" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="card-deep p-4 border border-border-subtle"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(0, 136, 255, 0.05)' }}
                          >
                            <p className="text-text-muted text-sm mb-1">{item.name}</p>
                            <p className="text-white font-semibold">{item.detail}</p>
                            {item.subDetail && (
                              <p className="text-text-muted text-xs mt-1">{item.subDetail}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
