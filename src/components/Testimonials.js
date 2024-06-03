import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = ({ data }) => {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-container">
        {data.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.avatar} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;