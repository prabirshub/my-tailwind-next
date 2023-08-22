'use client'

import { useState } from 'react'

import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from 'react-icons/fa'
import { BsChatSquareDots } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Gallary', path: '#gallary' },
  { label: 'Deals', path: '#deals' },
  { label: 'Contact', path: '#contact' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center fixed z-30 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className='flex justify-between'>
        <Link href='#'>
          <FaFacebookF className='mx-4' />
        </Link>
        <Link href='#'>
          <FaTwitter className='mx-4' />
        </Link>
        <Link href='#'>
          <FaGooglePlusG className='mx-4' />
        </Link>
        <Link href='#'>
          <FaInstagram className='mx-4' />
        </Link>
      </div>

      {/* Hamburger icon */}
      <div onClick={handleNav} className='sm:hidden z-30'>
        {!nav ? (
          <FaBars size={20} className='mr-4 cursor-pointer' />
        ) : (
          <CgClose size={25} className='mr-4 cursor-pointer' />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-[50px] w-full h-[calc(100vh-50px)] bg-black/90 px-4 py-7 flex flex-col z-20'
            : 'absolute top-[50px] h-[calc(100vh-50px)] left-[-100%] transition-all ease-in duration-500 z-20'
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          {navLinks.map((item) => (
            <li className='text-2xl py-8 hover:bg-gray-950/20' key={item.label}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Navbar
