import React from 'react'
import './Project.css'

import {pro1, pro2, pro3, pro4} from '../../assets/img'

export default function Project() {
  return (
    <div id='Project' className='project-container'>
        <div className="projects">
          <div id="box1">
            <a href="https://github.com/TheValour" target="_blank">
              <img src={pro1} alt="" />
            </a>
          </div>
          <div id="box2">
            <a href="https://github.com/TheValour" target="_blank">
              <img src={pro2} alt="" />
            </a>
          </div>
          <div id="box3">
            <a href="https://github.com/TheValour" target="_blank">
              <img src={pro3} alt="" />
            </a>
          </div>
          <div id="box4">
            <a href="https://github.com/TheValour" target="_blank">
              <img src={pro4} alt="" />
            </a>
          </div>
        </div>

    </div>
  )
}
