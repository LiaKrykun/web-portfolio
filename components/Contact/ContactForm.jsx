import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import logo from "../../../public/favicon.svg";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6hsyy5j", "template_pnbjm7r", form.current, {
        publicKey: "Y7FuaYcTwZH3wfopF",
      })
      .then(
        () => {
          alert("Thank you! Your message was successfully sent.");
        },
        (error) => {
          alert("Something goes wrong...Try again please", error.text);
        }
      );
  };

  return (
    <form className="contact-right" ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Enter your name" name="user_name" />
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Enter your email" name="user_email" />
      <label htmlFor="message">Write your message here</label>
      <textarea name="message" placeholder="Enter your message" />
      <input type="submit" value="Send" className="contact-submit"></input>
    </form>
  );
};
