import React from 'react'
import Rocket from '../../assets/images/rocket.svg'
import Astro from '../../assets/images/astronaut.svg'
import UFO from '../../assets/images/UFO.png'
import './Astronaut.css'

export default function Astronaut() {
  return (
    <>
        <img class="object_rocket" src={Astro} alt="img" width="80px"/>
        <div class="box_astronaut">
            <img class="object_astronaut" src={Rocket} alt="img2" width="60px"/>
        </div>
        <div class="box_ufo">
            <img id="ufo" src={UFO} alt="img3" width="60px"/>
        </div>
    </>
  )
}
