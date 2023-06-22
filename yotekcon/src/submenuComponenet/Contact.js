import React, { useState } from "react";
import LeftSide from '../LeftSide';
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sendCopy, setSendCopy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or API call here
    // You can access the form data using the state variables (name, email, subject, message, sendCopy)
    // Reset the form fields if needed
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSendCopy(false);
  };

  return (
    <div className="content">
          <div className="page-wrapper">
        <LeftSide />
     
      <div className="right-side">
      <h2 className="item_title">
      CONTACT   </h2>    
      <h5>
      <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
            info@yotekconstruction.com
</h5> 
       <h2>CONTACT FORM</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send an Email</h2>
        <hr />
        <h3>Required field</h3>
          
          <div className="form-group">
       
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={sendCopy}
                onChange={(e) => setSendCopy(e.target.checked)}
              />
              Send copy to yourself
            </label>
          </div>
          <button type="submit" className="send-email-button">
            Send Email
          </button>
        </form>
      </div>
    </div>
    </div>
 
  );
};

export default Contact;
