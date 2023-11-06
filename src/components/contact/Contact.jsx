import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
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
    <div id='Contact' className="flex">
        <div className="content-section">
        </div>
        <div className="form-section">
            <h1>Contact form</h1>
            <form action="" className='form' onSubmit={sendEmail} ref={form}>
                <input type="text"  name="name" className='input' placeholder='Name:'/>
                <input type="email" name="email" id="email"  className='input' placeholder='Gmail :'/>
                <input type="text" name="message" id="message"  className='input' placeholder='Messages :'/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}
