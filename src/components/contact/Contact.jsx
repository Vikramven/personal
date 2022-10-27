import React from 'react'
import '/Users/vikramvenkat/personal/src/components/contact/contact.css'
import {AiFillMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className="contact_option">
            <AiFillMail/>
            <h4>Email</h4>
            <h5>vikramvenkat2002@gmail.com</h5>
            <a href="mailto:vikramvenkat2002@gmail.com">Shoot me a message !</a>
          </article>

          <article className="contact_option">
            <BsInstagram/>
            <h4>Instagram</h4>
            <h5>vikramvenkt</h5>
            <a href="">Send me a DM !</a>
          </article>

          <article className="contact_option">
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Vikram Venkat</h5>
            <a href="">Let's network</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your name' />
          <input type="email" name='email' placeholder='Your email' />
          <textarea name='message' rows='7' placeholder='Your message' />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact