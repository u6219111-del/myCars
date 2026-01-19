import React from 'react'
import Abu from '../../components/about/Abu'
import Memories from '../../components/memories/Memories'
import Phone from '../../components/Phone/Phone'
import RentalRules from '../../components/RentalRules/RentalRules'
import Three from '../../components/Three/Three'
import './AboutUs.css'



function AboutUs() {

  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <Abu/>
        <Three/>
        <Memories/>
        <RentalRules/>
        <Phone/>
      </div>
    </div>
  )
}

export default AboutUs