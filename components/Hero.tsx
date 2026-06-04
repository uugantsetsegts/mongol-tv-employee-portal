'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="glass-card rounded-3xl px-8 py-6 mb-8 inline-block">
          <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
            Монгол ТВ-ийн Ажилчдын Нэгдсэн Сан
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Хамтдаа
          <br />
          <span className="text-white/90">Илүү Ирээдүйг</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Ажилчдынхаа сайн сайхан байдлыг дэмжих, хамт олноо бэхжүүлэх зорилготой
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="glass-card px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:bg-white/25 transition-all duration-300 hover:scale-105"
          >
            Бидэнтэй холбогдох
          </a>
          <a
            href="#about"
            className="glass-card px-8 py-4 rounded-2xl text-white/90 font-semibold text-lg hover:bg-white/25 transition-all duration-300 hover:scale-105"
          >
            Дэлгэрэнгүй
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
