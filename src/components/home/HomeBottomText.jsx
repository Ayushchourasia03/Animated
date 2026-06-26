import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
      <div className='border-5 hover:border-[#D3FD50] hover:text-[#D3FD50] h-30 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw]' to='/projects'>Projects</Link>
      </div>
      <div className='border-5 hover:border-[#D3FD50] hover:text-[#D3FD50]  h-30 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] ' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText