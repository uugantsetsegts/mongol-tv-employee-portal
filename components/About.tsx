'use client'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="glass-card rounded-2xl px-6 py-2 inline-block mb-6">
                <span className="text-white/80 text-sm font-medium uppercase tracking-wide">
                  Бидний тухай
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Монгол ТВ-ийн
                <br />
                Ажилчдын Сан
              </h2>
              
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Монгол ТВ-ийн ажилчдын нэгдсэн сан нь 2009 онд байгуулагдсан бөгөөд 
                телевизийн салбарт ажиллаж буй ажилчдын эрх ашгийг хамгаалах, 
                тэдний ажлын нөхцөл, нийгмийн баталгааг сайжруулах зорилгоор 
                үйл ажиллагаа явуулж байна.
              </p>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Бид ажилчдынхаа эрүүл мэнд, боловсрол, орон сууцны хөнгөлөлт, 
                амралт чөлөөт цагийг зохицуулах зэрэг олон талын үйлчилгээг 
                үзүүлж, хамт олноо бэхжүүлэхэд анхаардаг.
              </p>
              
              <a
                href="/about"
                className="glass-card px-8 py-4 rounded-2xl text-white font-semibold text-lg hover:bg-white/25 transition-all duration-300 hover:scale-105 inline-block"
              >
                Дэлгэрэнгүй мэдээлэл
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="glass-card rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-white/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">15+</span>
                </div>
                <p className="text-white/80 text-lg">Жилийн туршлага</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
