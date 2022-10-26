import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/vikram-venkat" target="_blank" size={70}><BsLinkedin/></a>
        <a href="https://github.com/Vikramven" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/vikramvenkt" target="_blank" ><BsInstagram/></a>
    </div>
  )
}

export default Socials