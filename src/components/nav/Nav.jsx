import React from 'react'
import '/Users/vikramvenkat/personal/src/components/nav/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {BiPhoneCall} from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav=== '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav=== '#' ? 'active' : ''}><BiBookAlt/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#' ? 'active' : ''}><BiPhoneCall/></a>

    </nav>
  )
}

export default Nav