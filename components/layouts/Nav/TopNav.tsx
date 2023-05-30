import React from 'react'
import Nav from './Nav'
import logo from '../../../public/logo.png'
import Image from 'next/image'


const TopNav = () => {
  return (
    <div id='nav' className='z-[1000]  flex flex-col  center-all w-full md:max-w-[940px]'>
    <div className='flex flex-col md:flex-row items-center mt-3 w-full'>
      <div className='px-12 mb-5 md:mb-0'><div className=''>
        <Image src={logo} width={80}/>
      </div></div>
      <div className=' flex center-all text-white border-dashed border-2 border-white h-16 rounded-lg grow w-full'> Food Delivery Service, Lagos Island </div>
    </div>
    <Nav />
  </div>
  )
}

export default TopNav