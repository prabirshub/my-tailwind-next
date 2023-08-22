import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-[93vh] relative -z-10'>
      <Image
        src='/pic.jpg'
        width={1920}
        height={1280}
        alt='sea background'
        className='w-full h-full object-cover'
      />

      <div className='absolute w-full top-[40%] md:left-[20%] max-w-[1140px] mx-auto z-10'>
        <div className='w-full md:w-[50%] max-w-[600px] h-full flex flex-col text-white p-4 '>
          <h1 className='font-bold text-4xl capitalize'>
            Find your speacial trip
          </h1>
          <h2 className='text-4xl py-4 italic capitalize'>With Weekway</h2>
          <p className='leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            rerum, iusto distinctio ratione facere soluta quam, ullam, quibusdam
            incidunt voluptas numquam praesentium quaerat accusantium veniam nam
            illum! Fugit, nemo error!
          </p>
        </div>
      </div>
    </div>
  )
}
export default Hero
