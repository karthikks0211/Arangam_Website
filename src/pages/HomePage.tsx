import Curtain from '@/components/Curtain'
import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Experiences from '@/sections/Experiences'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Visit from '@/sections/Visit'

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Curtain />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Experiences />
        <Visit />
      </main>

      <Footer />
    </>
  )
}
