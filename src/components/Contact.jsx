// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import ParticlesBg from "particles-bg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formsubmit.co/ajax/nagasriramkochetti@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <section className="contact-section" id="contact">
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />

      <h2 className="contact-title" data-aos="fade-up">Get in Touch</h2>

      {submitted ? (
        <div className="thank-you" data-aos="fade-in">
          <h3>🎉 Thank you! Your message has been sent!</h3>
          <p>I'll get back to you soon 😊</p>
        </div>
      ) : (
        <div className="contact-container">
          <div className="contact-left" data-aos="fade-right">
            <p className="contact-subtitle">I'd love to hear from you!</p>
            <p>If you have any inquiries or just want to say hi, please use the contact form!</p>
            <div className="contact-info">
              <p><FaEnvelope /> nagasriramkochetti@gmail.com</p>
              <div className="contact-icons">
                <a href="https://www.linkedin.com/in/naga-sri-ram-kochetti-72a464189/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/nagasriramnani" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-row">
              <input type="text" name="First Name" placeholder="First Name" required />
              <input type="text" name="Last Name" placeholder="Last Name" required />
            </div>
            <input type="email" name="Email" placeholder="Email" required />
            <textarea name="Message" rows="5" placeholder="Your message..." required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;
