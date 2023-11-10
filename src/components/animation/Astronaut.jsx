import React from 'react'
import Rocket from '../../assets/images/rocket.svg'
import Astro from '../../assets/images/astronaut.svg'

import './Astronaut.css'

export default function Astronaut() {
  return (
    <>
        <img class="object_rocket" src={Astro} alt="img" width="80px"/>
        <div class="box_astronaut">
            <img class="object_astronaut" src={Rocket} alt="img2" width="60px"/>
        </div>
    </>
  )
}
