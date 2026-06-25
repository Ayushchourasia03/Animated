import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 bg-red-500'>
        <Link className='text-[6.5vw] uppercase border-5 border-white rounded-full px-8 py-1 pt-1 pb-0'>Projects</Link>
        <Link className='text-[6.5vw] uppercase border-5 border-white rounded-full px-10'>Agence</Link>
    </div>
  )
}

export default HomeBottomText