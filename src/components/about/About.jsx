import React from 'react'
import './about.css'
import team from '../../assets/team.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import {SiBookstack} from 'react-icons/si'



const About = () => {
  return (
    <section id='about' className='about__section'>
        <div className='about__heading'>
      <h5 >Get to Know Us</h5>
      <h2>About Us</h2>
      </div>

      <div className="container about__container">
       <div className="row">
        <div className="col-lg-6">
        
            <div className='about__image'>
            <img src={team} alt="team" />
            </div>
            
        </div>
        
        <div className="col-lg-6 about__content">
          <div className="row">
        
          <ul className='d-flex justify-content-between'>
            <li className='about__card'>
            <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years of Experience</small>

            </li>
            <li className='about__card'>
            <HiUserGroup className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Clients</small>
            </li>
            <li className='about__card'>
            <SiBookstack className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ projects</small>

            </li>
          </ul>
          <div className="row">
          
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit libero quis harum, delectus fugiat quos aliquid quidem unde non corrupti suscipit. Incidunt sint ullam voluptatum amet animi, odit nulla.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit libero quis harum, delectus fugiat quos aliquid quidem unde non corrupti suscipit. Incidunt sint ullam voluptatum amet animi, odit nulla.
          </p>
          

          </div>
        
      </div>

      </div>
       </div>
      </div>
        
      

    </section>
    

  )
}

export default About
