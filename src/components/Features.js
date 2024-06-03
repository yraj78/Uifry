import React from 'react';
import '../styles/Features.css'

const Features = ({ data }) => {
  return (
    <section id='features' className="features">
      <h1>Features</h1>
      {data.map((feature, index) => (
        <div key={index} className="feature">
          <img src={feature.icon} alt={feature.title} className="feature-icon" />
          <div className="feature-text">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;