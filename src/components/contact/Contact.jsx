import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'


import { faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact2() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7h3wv8d', 'template_v4q4hlv', form.current, 'n-PDtk-55n-hiOJQ7')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='flex contact-sections'>
        <h3>Get in Touch!</h3>
        <div className="contact-options flex">
            <div className="contact-boxes flex">
                <FontAwesomeIcon icon={faPhone} />
                <h4>PHONE</h4>
                <span>Phone +91 7899872374</span>
            </div>
            <div className="contact-boxes flex">
                <FontAwesomeIcon icon={faLocationPin} />
                <h4>LOCATION</h4>
                <span>Dehradun, Uttarakhand, India</span>
            </div>
            <div className="contact-boxes flex">
                <FontAwesomeIcon icon={faEnvelope} />
                <h4>EMAIL</h4>
                <span>helloworld@gmail.com</span>
            </div>
        </div>
        <h4>Contact Form</h4>
        <form className='form flex' onSubmit={sendEmail} ref={form}>
            <input type="text" placeholder='Name :' id='name'/>
            <input type="email" placeholder='Email :' id='email'/>
            <input type="text" placeholder='Message :' id='message'/>
            <button>Send Message</button>
        </form>
        <ul className='flex contact-links'>
            <li>
                <a  href="https://www.linkedin.com/in/rahul01singh07"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" className="anchor-icon" />
                </a>
            </li>
            <li>
                <a  href="https://github.com/TheValour"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
                </a>
            </li>
            <li>
                <a  href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" className="anchor-icon" />
                </a>
            </li>
        </ul>
    </div>
  )
}
