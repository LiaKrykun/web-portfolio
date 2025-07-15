import React from "react";
import "./Contact.css";
import { ContactForm } from "../Contact/ContactForm";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Lets talk!</h2>
          <p>
            Whether it's about design, development, or just a creative
            conversation — I'm here and excited to connect.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
