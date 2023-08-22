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
    <div className='w-full min-h-[50px] flex justify-between items-center fixed z-10 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        {navLinks.map((item) => (
          <li key={item.label}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className='flex justify-between'>
        <FaFacebookF className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaGooglePlusG className='mx-4' />
        <FaInstagram className='mx-4' />
      </div>
      {/* Hamburger icon */}
      <div onClick={handleNav} className='sm:hidden z-10'>
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
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] transition-all ease-in duration-500'
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
