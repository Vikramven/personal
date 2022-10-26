import React from 'react'
import CV from '/Users/vikramvenkat/personal/src/assets/CV-Vikram.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download my CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA