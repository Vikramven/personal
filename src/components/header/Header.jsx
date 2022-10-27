import React from 'react'
import '/Users/vikramvenkat/personal/src/components/header/header.css'
import CTA from '/Users/vikramvenkat/personal/src/components/header/CTA.jsx'
import ME from '/Users/vikramvenkat/personal/src/assets/Vikram_pic.JPG'
import Socials from '/Users/vikramvenkat/personal/src/components/header/Socials.jsx'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I'm</h5>
        <h1>Vikram Venkat</h1>
        <h5 className="text-light">A Data Science And AI Major</h5>
        <CTA/>
        <Socials/>

        <div className='my' >
          <img src={ME} alt='me'/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )

  
}

export default Header