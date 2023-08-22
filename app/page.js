import Activities from '@/components/Activities'
import Booking from '@/components/Booking'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Gallary from '@/components/Gallary'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'

export default function Home() {
  return (
    <main className='relative'>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallary />
      <Contact />
      <Footer />
    </main>
  )
}
