import React from 'react'
import '../../sass/hero.scss'
import heroImg1 from '../../assets/hero4.webp';


function Hero() {
  return (
    <>
        <div className='hero'>
            <img src={heroImg1} alt="" />
        </div>
    </>
  )
}

export default Hero