import { useEffect, useState } from 'react';

import Animate from '../animatedLetters/Animate';
import rLogo from '../../assets/images/rLogo.png';
import heroLogo from '../../assets/images/hero.png';
import Circle from '../../assets/images/Ellipse.png';
import './Home.css';

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
      </div>
    </div>
  );
};

export default Home;
