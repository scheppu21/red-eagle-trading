import React, { useRef, useState, useContext,useEffect} from 'react';
import emailjs from 'emailjs-com';
import './ContactPage.css';
import { UserContext } from '../context/UseContext';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const {currentUser} = useContext(UserContext)
  const [email, setEmail] = useState('');

  useEffect (() =>{
    if (currentUser?.email){
      setEmail(currentUser.email);
    }
  },[currentUser]);

  const sendEmail = (e) => {
    e.preventDefault();

    const formEl = form.current;
    const name = formEl.user_name.value.trim();
    const email = formEl.user_email.value.trim();
    const message = formEl.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    // Email format check (basic)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    emailjs.sendForm(
      'service_5flixob',     // ← replace with your actual ID
      'template_adwogy3',    // ← replace with your actual ID
      form.current,
      '2TGz48J8djYtO8ftq'      // ← replace with your public key
    ).then(
      (result) => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        form.current.reset();
      },
      (error) => {
        setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
      }
    );
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <div className="contact-details">
        <p><strong>📍 Address:</strong> Frij Murar, Dubai, UAE</p>
        <p><strong>📞 Phone:</strong> +971 55 924 4112</p>
        <p><strong>✉️ Email:</strong> <a href="mailto:redeagletradinguae@gmail.com">redeagletradinguae@gmail.com</a></p>
        <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/971559244112">Chat with us</a></p>
        <p><strong>⏰ Working Hours:</strong> Sat - Thu: 10:00 AM – 9:00 PM</p>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h3>Send us a message</h3>

        <input type="text" name="user_name" placeholder="Your Name" />
        <input type="email"
         value= {email} 
         onChange={(e) =>setEmail(e.target.value)} required
           />
        <textarea name="message" placeholder="Your Message" rows="5" />

        <button type="submit">Send Message</button>

        {status.message && (
          <p className={`form-status ${status.type}`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactPage;