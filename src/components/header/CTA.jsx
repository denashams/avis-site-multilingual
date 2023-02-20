import React from 'react'
//import Brochure from '../../assets/Brochure.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    
    <div className="dropdown show">
  <a className="btn btn-primary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Language
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="/">English</a>
    <a className="dropdown-item" href="/">فارسی</a>
    
  </div>
</div>
      <a href="/" download className='btn'>Download Brochure </a>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA
