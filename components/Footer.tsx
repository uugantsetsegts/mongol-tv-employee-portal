'use client'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Монгол ТВ</h3>
            <p className="text-white/60 text-sm">
              Ажилчдын нэгдсэн сан
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Холбоосууд</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/60 text-sm hover:text-white transition-colors">Нүүр</a></li>
              <li><a href="/about" className="text-white/60 text-sm hover:text-white transition-colors">Бидний тухай</a></li>
              <li><a href="/services" className="text-white/60 text-sm hover:text-white transition-colors">Үйлчилгээ</a></li>
              <li><a href="/blog" className="text-white/60 text-sm hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Холбоо барих</h3>
            <p className="text-white/60 text-sm mb-2">+976 11 123 456</p>
            <p className="text-white/60 text-sm">info@mongoltv.mn</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            2024 Монгол ТВ. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </footer>
  )
}
