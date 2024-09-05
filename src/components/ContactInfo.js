import React from 'react';

const ContactInfo = () => {
  return (
    <section id="contact-info">
      <h2>Contact Information</h2>
      <p>Email: <a href="mailto:HammedBello97@gmail.com">HammedBello97@gmail.com</a></p>
      <p>Phone: <a href="tel:7732904887">773-290-4887</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/hammed-bello-58a304254">www.linkedin.com/in/hammed-bello-58a304254</a></p>

      <article id="download-resume">
        <h2>Resume</h2>
        <p><a href="https://drive.google.com/file/d/1yvqjaAThkfgAgGMt54oRkIqN--kezmP5/view?usp=sharing" download>Click here</a> to download my resume.</p>
      </article>
    </section>
  );
};

export default ContactInfo;
