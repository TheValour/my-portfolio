import { useEffect, useState } from 'react';

import Animate from '../animation/Animate';
import rLogo from '../../assets/images/rLogo.png';
import heroLogo from '../../assets/images/hero.png';
import Circle from '../../assets/images/Ellipse.png';
import './Home.css';
import BgAnimation from '../animation/BgAnimation';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['a', 'h', 'u', 'l'];
  const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div id='Home' className="container home-page flex">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img
            src={rLogo}
            alt="JavaScript Developer Name, Web Developer Name"
          />
          <Animate
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <Animate
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Front End Developer / JavaScript Expert / MERN stack Developer</h2>
        <a href="#Contact" className="flat-button">
          CONTACT ME
        </a>
      </div>
      <div className='hero-img-section flex'>
        <img src={heroLogo} alt="" />
        <img src={Circle} alt="" className='circle'/>
        <div className="squares-container">
          <div id="box1" className="square light-blue small"></div>
          <div id="box2" className="square dark-blue medium"></div>
          <div id="box3" className="square blue small "></div>
          <div id="box4" className="square dark-blue large "></div>
          
          <div id="box5" className="square light-blue medium"></div>
          <div id="box6" className="square dark-blue medium"></div>
          <div id="box7" className="square blue small"></div>
          <div id="box8" className="square dark-blue large"></div>
          
          <div id="box9" className="square light-blue medium"></div>
          <div id="box10" className="square dark-blue medium"></div>
          <div id="box11" className="square blue small "></div>
          <div id="box12" className="square dark-blue large"></div>

          <div id="box13" className="square light-blue  medium "></div>
          <div id="box14" className="square dark-blue  medium"></div>
          <div id="box15" className="square blue small"></div>
          <div id="box16" className="square dark-blue large "></div>
          
          <div id="box17" className="square light-blue medium "></div>
          <div id="box18" className="square dark-blue medium"></div>
          <div id="box19" className="square blue small"></div>
          <div id="box20" className="square dark-blue large"></div>
          
          <div id="box21" className="square light-blue medium "></div>
          <div id="box22" className="square dark-blue medium "></div>
          <div id="box23" className="square blue small"></div>
          <div id="box24" className="square dark-blue large "></div>
          
          <div id="box25" className="square light-blue medium "></div>
          <div id="box26" className="square dark-blue medium "></div>
          <div id="box27" className="square blue small "></div>
          <div id="box28" className="square dark-blue large "></div>
          
          <div id="box29" className="square light-blue medium "></div>
          <div id="box30" className="square dark-blue medium "></div>
          <div id="box31" className="square blue small "></div>
          <div id="box32" className="square dark-blue large "></div>
        
        </div>
      </div>
      <BgAnimation/>
      {/* <div className="border"> </div>
      <div className="border" id='border2'> </div> */}
      <div className='imgBorder'></div>
    </div>
  );
};

export default Home;
