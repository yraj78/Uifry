import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;