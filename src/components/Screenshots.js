import React from 'react';
import '../styles/Screenshots.css'

const Screenshots = ({ data }) => {
  return (
    <section className="screenshots">
      <h2>Why us?</h2>
      <div className="screenshots-container">
        {data.map((screenshot, index) => (
          <div key={index} className="screenshot">
            <img src={screenshot.image} alt={screenshot.title} />
            <h3>{screenshot.title}</h3>
            <p>{screenshot.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screenshots;