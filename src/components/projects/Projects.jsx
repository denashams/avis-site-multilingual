import React from 'react'
import './projects.css'
import architecture from '../../assets/architecture.jpg'
import garden from '../../assets/garden.png'
import landscape from '../../assets/landscape.jpg'
import pirnia from '../../assets/pirnia.jpg'
import page from '../../assets/page.jpg'
import note from '../../assets/note.jpg'
const Projects = () => {
    return (
        <section id='projects'>
            <div className='projects__heading'>
            <h5>Platforms We Created</h5>
            <h2>Our Projects</h2>
            </div>
            <div className="container projects__container">
                <div className="row">
                    <div className='col-lg-4 mb-5'>
                    <div className="projects__item">
          <div className="projects__image">
            <img src={architecture} alt="architecture" />
            <h3>Iranian Architecture History Ontology</h3>
            <div className='projects__cta'>
            <a href="/" className='btn' target="_blank">Full site</a>
            <a href="/" className='btn btn-primary'target="_blank">Live Demo</a>
          </div>
          </div>
        </div>
                    </div>
                    <div className='col-lg-4 mb-5'>
                    <div className="projects__item">  
            <img src={garden} alt="garden" />
            <h3>Persian Garden Ontology</h3>
            <div className='projects__cta'>
            <a href="/" className='btn' target="_blank">Full site</a>
            <a href="/" className='btn btn-primary'target="_blank">Live Demo</a>
            </div>
        </div>
                    </div>
                    <div className='col-lg-4 mb-5'>
                    <div className="projects__item">
            <img src={landscape} alt="landscape" />
            <h3>Landscape Architecture History Ontology</h3>
            <div className='projects__cta'>
            <a href="/" className='btn' target="_blank">Full site</a>
            <a href="/" className='btn btn-primary'target="_blank">Live Demo</a>
            </div>
        </div>
                    </div>
                    </div>
                <div className="row">
                    <div className='col-lg-4 mb-5'>
                    <div className="projects__item">
            <img src={pirnia} alt="pirnia" />
            <h3>Pirnia Project</h3>
            <div className='projects__cta'>
            <a href="/" className='btn' target="_blank">Full site</a>
            <a href="/" className='btn btn-primary'target="_blank">Live Demo</a>
            </div>
        </div>
                    </div>
                    <div className='col-lg-4 mb-5'>
                    <div className="projects__item">         
            <img src={page} alt="book page" />
            <h3>Syntopicon</h3>
            <div className='projects__cta'>
            <a href="/" className='btn' target="_blank">Full site</a>
            <a href="/" className='btn btn-primary'target="_blank">Live Demo</a>
            </div>
        </div>
                    </div>
                    <div className='col-lg-4 mb-5'>
                    <div className="projects__item">
            <img src={note} alt="note" />
            <h3>Flashcards</h3>
            <div className='projects__cta'>
            <a href="/" className='btn' target="_blank">Full site</a>
            <a href="/" className='btn btn-primary'target="_blank">Live Demo</a>
            </div>         
        </div>
                    </div>
                    </div>

                    
                

            </div>


        </section>
    )

}
export default Projects