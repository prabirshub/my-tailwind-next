import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'
import { BsChatSquareDots } from 'react-icons/bs'

const TopBar = () => {
  return (
    <div className='sticky top-0 left-0 flex justify-between items-center px-4 py-2 bg-white'>
      <div className='flex items-center gap-2'>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)]' />
        <h1 className='uppercase text-xl font-bold text-gray-700'>weekway</h1>
      </div>
      <div className='flex items-center'>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle
            size={20}
            className='mr-2 text-[var(--primary-dark)]'
          />
          <p className='text-sm text-gray-700'>9AM-5AM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
          <p className='text-sm text-gray-700'>1-888-817-1234</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  )
}
export default TopBar
