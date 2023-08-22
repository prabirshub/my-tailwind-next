import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'

export default function Home() {
  return (
    <main className=''>
      <TopBar />
      <Navbar />
      <Hero />
    </main>
  )
}
