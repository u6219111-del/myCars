import React from 'react'
import Abu from '../components/about/abu'
import Memories from '../components/memories/Memories'
import Phone from '../components/Phone'
import Customy from '../components/Customy/Customy'

function AboutUs() {
  return (
    <div>
      <Abu/>
      <div className='flex items-center justify-around '>
        <div>
          <h1 className='text-[80px] font-bold text-[#5937E0]'>20k+</h1>
          <h2 className='text-[20px] font-bold text-black'>Happy customers</h2>
        </div>
        <div>
          <h1 className='text-[80px] font-bold text-[#5937E0]'>540+</h1>
          <h2 className='text-[20px] font-bold text-black'>Count of cars</h2>
        </div>
        <div>
          <h1 className='text-[80px] font-bold text-[#5937E0]'>25+</h1>
          <h2 className='text-[20px] font-bold text-black'>Years of experince</h2>
        </div>
      </div>
      <Memories/>
      <Phone/>
      <Customy/>
    </div>
  )
}

export default AboutUs