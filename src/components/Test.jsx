import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../assets/images/logo-s.png'

import './Test.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Test() {
  return (
    <div className='navbar'>
        <Link className='sidebar-logo'>
            <img src={LogoS} alt="Logo" />
        </Link>
        <nav className='pages flex'>
            <NavLink to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/portfolio" >
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <Link className='sidebar-logo'>
            <img src={LogoS} alt="Logo" />
        </Link>

    </div>
  )
}
