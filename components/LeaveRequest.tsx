'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Send, Calendar, User, FileText, Clock } from 'lucide-react'

export default function LeaveRequest() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    type: 'annual',
    reason: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Чөлөөний хүсэлт илгээгдлээ!')
    setIsOpen(false)
  }

  return (
    <section className="py-24 px-6 bg-canvas">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="card-dark border border-border-subtle overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header Button */}
          <motion.button
            className="w-full px-8 py-6 flex items-center justify-between text-left"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ backgroundColor: 'rgba(0, 136, 255, 0.05)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-card-navy flex items-center justify-center">
                <Calendar className="w-6 h-6 text-electric-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Чөлөөний хүсэлт</h3>
                <p className="text-text-muted text-sm">Чөлөө авах хүсэлтээ бөглөж илгээнэ үү</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-electric-blue" />
            </motion.div>
          </motion.button>

          {/* Expandable Form */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 border-t border-border-subtle">
                  <form onSubmit={handleSubmit} className="space-y-6 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-text-secondary text-sm mb-2">Ажилтны нэр</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <input
                            type="text"
                            placeholder="Нэрээ оруулна уу"
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card-deep border border-border-subtle text-white placeholder-text-muted focus:outline-none focus:border-electric-blue/50 transition-colors"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-text-secondary text-sm mb-2">Чөлөөний төрөл</label>
                        <div className="relative">
                          <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <select
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card-deep border border-border-subtle text-white focus:outline-none focus:border-electric-blue/50 transition-colors appearance-none"
                            value={formData.type}
                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                          >
                            <option value="annual">Жилийн чөлөө</option>
                            <option value="sick">Өвчний чөлөө</option>
                            <option value="personal">Хувийн чөлөө</option>
                            <option value="maternity">Төрөхийн чөлөө</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-text-secondary text-sm mb-2">Эхлэх өдөр</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <input
                            type="date"
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card-deep border border-border-subtle text-white focus:outline-none focus:border-electric-blue/50 transition-colors"
                            value={formData.startDate}
                            onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-text-secondary text-sm mb-2">Дуусах өдөр</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                          <input
                            type="date"
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card-deep border border-border-subtle text-white focus:outline-none focus:border-electric-blue/50 transition-colors"
                            value={formData.endDate}
                            onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-text-secondary text-sm mb-2">Шалтгаан</label>
                      <textarea
                        placeholder="Чөлөө авах шалтгаанаа бичнэ үү"
                        rows={4}
                        className="w-full px-6 py-4 rounded-2xl bg-card-deep border border-border-subtle text-white placeholder-text-muted focus:outline-none focus:border-electric-blue/50 transition-colors resize-none"
                        value={formData.reason}
                        onChange={(e) => setFormData({...formData, reason: e.target.value})}
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full card-navy px-8 py-4 rounded-2xl text-white font-semibold text-lg border border-border-subtle flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Send className="w-5 h-5" />
                      Хүсэлт илгээх
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
