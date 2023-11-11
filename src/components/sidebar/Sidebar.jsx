import { useState } from 'react'

import './Sidebar.css'
import LogoS from '../../assets/images/rLogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope, faSuitcase, faBars, faClose, faCode } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <a 
        className="logo"
        href="Home"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <div className="sub-logo" >Rahul</div>
      </a>
      <nav className={showNav ? 'mobile-show' : ''}>
        <a 
          exact="true"
          href="#Home"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </a>
        <a 
          className="about-link"
          href="#About"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </a>
        <a
          className="portfolio-link"
          href="#Project"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </a>
        <a
          className="contact-link"
          href="#Contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </a>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/rahul01singh07"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/TheValour"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/RahulSingh08/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faCode}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar