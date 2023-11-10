import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  
  faBootstrap, faCss3, faGitAlt, 
  faHtml5, faJsSquare, faReact,
} from '@fortawesome/free-brands-svg-icons'

import Animate from '../animation/Animate'
import './About.css'
import '../layout/Layout.css'
import Astro from '../../assets/images/about.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
  const timeoutId = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  return () => {
    clearTimeout(timeoutId); // Cleanup: Clear the timeout when the component unmounts
  };
}, []);

  return (
    <div id='About' className="container flex about-page">
      <div className="text-zone">
        <h1>
          <Animate
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
          <img src={Astro} alt="" />
        </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p align="LEFT">
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, living in a beautiful country, a sports  enthusiast, and tech-obsessed!!!
        </p>
      </div>
      <div className='cube-section flex'>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default About