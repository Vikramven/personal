import React from 'react'
import '/Users/vikramvenkat/personal/src/components/experience/experience.css'
import Robotech from '/Users/vikramvenkat/personal/src/assets/Robotech.png'
import Damac from '/Users/vikramvenkat/personal/src/assets/damac.png'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>A quick overview of</h5>
      <h2>My Skills and Experience</h2>

      <div className='container experience_container'>
        <div className="experience_skills">
          <h3>My skills</h3>
          <div className="skills_content">
            <article className="list_skills">
              <BsFillPatchCheckFill/>
              <h4>Java</h4>
            </article>
            <article className="list_skills">
              <BsFillPatchCheckFill/>
              <h4>Python</h4>
            </article>
            <article className="list_skills">
              <BsFillPatchCheckFill/>
              <h4>SQL</h4>
            </article>
            <article className="list_skills">
              <BsFillPatchCheckFill/>
              <h4>HTML, CSS</h4>
            </article>
            <article className="list_skills">
              <BsFillPatchCheckFill/>
              <h4>JavaScript</h4>
            </article>
            <article className="list_skills">
              <BsFillPatchCheckFill/>
              <h4>Unity</h4>
            </article>
            <article className="list_skills">
              <BsFillPatchCheckFill/>
              <h4>Matlab</h4>
            </article>
            <article className="list_skills">
              <BsFillPatchCheckFill/>
              <h4>R</h4>
            </article>
          </div>
        </div>
        <div className='works_card'>
          <article className='work'>
            <img src={Robotech} alt="Robotech" className='experience_image'/>
            <p className='experience_content'>I was tasked with using Scikit learn and Numpy to create reports on a supermarket data set. It was a great learning experience, which introduced me to the world of machine learning. This short stint served as my introduction to the industry of sorts, and equipped me with an understanding of what to expect when working on such projects and related subjects in the field in the future.</p>
          </article>
          </div>

        {/*<div>
          <article className='work'>
            <img src={Damac} alt="Damac" className='experience_image'/>
            <p className='experience_content'>I was tasked with using Scikit learn and Numpy to create reports on a supermarket data set. It was a great learning experience, which introduced me to the world of machine learning. This short stint served as my introduction to the industry of sorts, and equipped me with an understanding of what to expect when working on such projects and related subjects in the field in the future.</p>
          </article>

        </div>
        */}
  
          

          </div>
        

      
    </section>
  )
}

export default Experience