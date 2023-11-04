import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Animate from '../animatedLetters/Animate';
import LogoTitle from '../../assets/images/logo-s.png';
import './Home.css';
import Logo from '../logo/Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
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
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
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
          <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo/>
      </div>
    </>
  );
};

export default Home;
