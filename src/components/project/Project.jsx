import React, { useEffect, useState } from 'react'
import './Project.css'
import Animate from '../animation/Animate';

import {pro3, pro4, pro6, pro7} from '../../assets/img'

export default function Project() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const projectArray = ['P', 'r', 'o', 'j','e','c','t','s'];
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  
    return () => {
      clearTimeout(timeoutId); // Cleanup: Clear the timeout when the component unmounts
    };
  }, []);

  return (
    <div id='Project' className='project-container'>
      <div className="project-heading">
        <Animate
          letterClass={letterClass}
          strArray={projectArray}
          idx={10}
        />
      </div>
        <div className="projects">
          <div className="boxes flex"  id="box1">
            <a href="https://github.com/TheValour" target="_blank" rel="noreferrer noopener">
              <img src={pro6} alt="" />
            </a>
            <div className="project-content">
              <span>Expence Maneger</span><span>React/ Redux</span>
            </div>
          </div>
          <div className="boxes flex" id="box2">
            <a href="https://github.com/TheValour" target="_blank" rel="noreferrer noopener">
              <img src={pro3} alt="" />
            </a>
            <div className="project-content">
              <span>Weather App</span><span>HTML/ CSS/ JS</span>
            </div>
          </div>
          <div className="boxes flex"  id="box3">
            <a href="https://github.com/TheValour" target="_blank" rel="noreferrer noopener">
              <img src={pro7} alt="" />
            </a>
            <div className="project-content">
              <span>Chat App</span><span>React/ Firebase</span>
            </div>
          </div>
          <div className="boxes flex" id="box4">
            <a href="https://github.com/TheValour" target="_blank" rel="noreferrer noopener">
              <img src={pro4} alt="" />
            </a>
            <div className="project-content">
              <span>Zomi Clone</span><span>React</span>
            </div>
          </div>
        </div>

    </div>
  )
}
