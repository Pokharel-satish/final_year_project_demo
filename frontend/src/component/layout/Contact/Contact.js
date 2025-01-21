// import React from 'react';
// import './Contact.css';
// import { Button } from '@material-ui/core';

// const Contact = () => {
//   return (
//     <div className="contactContainer">
//       <a className="mailBtn" href="mailto:nirajkc98@gmail.com">
//         <Button>Contact: nirajkc98@gmail.com</Button>
//       </a>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container-contact">
        <h2 className="contact-us">Contact Us</h2>
        <p>
          We would love to hear from you. Please fill out the form below or
          reach out to us through any of the contact methods listed.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>

          <p>
            <i className="fas fa-phone"></i> +977 9860029251
          </p>
          <p>
            <i className="fas fa-envelope"></i> sastomandu@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
