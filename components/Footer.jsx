import { BsChatSquareDots } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='max-w-[1140px] m-auto py-8 border-t-4'>
      <div className=' flex items-center justify-center m-auto'>
        <BsChatSquareDots
          size={30}
          className='text-[var(--primary-dark)] mr-2'
        />
        <h3 className='uppercase text-xl font-bold text-gray-700'>Weekway</h3>
      </div>
    </div>
  )
}
export default Footer
