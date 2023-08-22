import Image from 'next/image'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/30 p-4 z-10'>
          Resorts
        </h3>
        <Image
          src='/resorts1.jpg'
          width={1920}
          height={1280}
          alt='Resort one'
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/30 p-4 z-10'>
          Resorts
        </h3>
        <Image
          src='/cruise.jpg'
          width={1920}
          height={1280}
          alt='Resort one'
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold bg-black/30 p-4'>
          Resorts
        </h3>
        <Image
          src='/scuba.jpg'
          width={1920}
          height={1280}
          alt='Resort one'
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
        />
      </div>
    </div>
  )
}
export default Activities
