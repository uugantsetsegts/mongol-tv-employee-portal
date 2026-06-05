'use client'

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-canvas border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-white font-bold text-xl tracking-tight mb-4 block">
              МОНГОЛ ТВ
            </a>
            <p className="text-text-muted max-w-sm">
              Ажилчдынхаа сайн сайхан байдлыг дэмжих, хамт олноо бэхжүүлэх зорилготой
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Холбоосууд</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-text-muted hover:text-white transition-colors">Бидний тухай</a></li>
              <li><a href="#services" className="text-text-muted hover:text-white transition-colors">Үйлчилгээ</a></li>
              <li><a href="#blog" className="text-text-muted hover:text-white transition-colors">Блог</a></li>
              <li><a href="#contact" className="text-text-muted hover:text-white transition-colors">Холбоо барих</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Холбоо барих</h4>
            <ul className="space-y-3">
              <li className="text-text-muted">+976 11 123 456</li>
              <li className="text-text-muted">info@mongoltv.mn</li>
              <li className="text-text-muted">Улаанбаатар хот</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2024 Монгол ТВ. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-white text-sm transition-colors">Нууцлал</a>
            <a href="#" className="text-text-muted hover:text-white text-sm transition-colors">Үйлчилгээний нөхцөл</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
