import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <div className='p-7'>
          <h3 className='mb-8 text-5xl font-bold'>Prospective<br /> <span>Customer</span> <br />Segmentation</h3>
          <p className='text-lg font-medium text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam nemo quis et nobis sequi quibusdam ut placeat similique odio.</p>
        </div>
        <div>
          <ArrowUpRight size={80}/>
        </div>
    </div>
  )
}

export default LeftContent