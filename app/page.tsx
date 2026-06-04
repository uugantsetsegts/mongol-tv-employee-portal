import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Blog />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
