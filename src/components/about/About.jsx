import React from 'react'
import '/Users/vikramvenkat/personal/src/components/about/about.css'
import ME from '/Users/vikramvenkat/personal/src/assets/Vikram_pic.JPG'
import {FaAward} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillFolder} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className='about_me'>
          <div className="about_image">
            <img srce={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className='about_card'>
              <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>My work</small>
            </article>

            <article className='about_card'>
              <FaUserAlt className='about_icons'/>
              <h5>Who I am</h5>
              <small>Beyond the academic lens</small>
            </article>

            <article className='about_card'>
              <AiFillFolder className='about_icons'/>
              <h5>My</h5>
              <small>Projects</small>
            </article>
          </div>  

          <p>
            Currently majoring in Data Science and AI at Maastricht University, I am passionate about my studies, and wish to apply my skills in the field of ML and Data Engineering.
          </p>
            

        </div>

        <a href="#contact" className='btn btn-primary'>Let's connect</a>
      </div>
    </section>
  )
}

export default About