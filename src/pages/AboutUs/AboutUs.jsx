import React from 'react'
import Abu from '../../components/about/Abu'
import Memories from '../../components/memories/Memories'
import Phone from '../../components/Phone/Phone'
import Customy from '../../components/Customy/Customy'
import Three from '../../components/Three/Three'
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion'


function AboutUs() {

  return (
    <div>
      <Abu/>
      <Three/>
      <FAQAccordion/>
      <Memories/>
      <Phone/>
      <Customy/>
    </div>
  )
}

export default AboutUs