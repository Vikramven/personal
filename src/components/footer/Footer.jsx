import React from 'react'
import '/Users/vikramvenkat/personal/src/components/footer/footer.css'
import {AiFillMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Vikram Venkat</a>

      <ul className='goto_links'>
        <li> <a href="#">Home</a>  </li>
        <li> <a href="#about">About</a>  </li>
        <li> <a href="#experience">Experience</a>  </li>
        <li> <a href="#contact">Contact</a>  </li>
      </ul>

      <div className="footer_socials">
        <a href=""><AiFillMail/></a>
        <a href="https://www.instagram.com/vikramvenkt/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/vikram-venkat/"><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Vikram Venkat. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer