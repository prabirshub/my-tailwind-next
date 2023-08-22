import Image from 'next/image'

const Gallary = () => {
  return (
    <div id='gallary' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallary</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <Image
            className='w-full h-full object-cover'
            src='/gal1.jpg'
            width={1920}
            height={1280}
            alt='galary image 1'
          />
        </div>
        <div>
          <Image
            className='w-full h-full object-cover'
            src='/gal2.jpg'
            width={1920}
            height={1280}
            alt='galary image 1'
          />
        </div>
        <div>
          <Image
            className='w-full h-full object-cover'
            src='/gal3.jpg'
            width={1920}
            height={1280}
            alt='galary image 1'
          />
        </div>
        <div>
          <Image
            className='w-full h-full object-cover'
            src='/gal4.jpg'
            width={1920}
            height={1280}
            alt='galary image 1'
          />
        </div>
        <div>
          <Image
            className='w-full h-full object-cover'
            src='/gal5.jpg'
            width={1920}
            height={1280}
            alt='galary image 1'
          />
        </div>
      </div>
    </div>
  )
}
export default Gallary
