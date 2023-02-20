import React from 'react'
import './header.css'
import CTA from './CTA'
import main from '../../assets/main.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
    <div className='container header__container'>
      <h1>Matn Avis</h1>
      <h5 className='text-light'>
        Here to help you throughout your research
      </h5>
      <CTA/>
      <HeaderSocials/>
      <div className="main-image">
        <img src={main} alt="matn avis logo" />
        
      </div>
      

    </div>
   </header>
  )
}

export default Header
