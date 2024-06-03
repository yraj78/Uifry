import React from 'react';
import '../styles/Hero.css'

const Hero = ({ data }) => {
  return (
    <section className="hero">


      <div className='hero-headline'>
        <h1>{data.headline}</h1>
        <p>{data.subheadline}</p>
        {data.ctaButtons.map((button, index) => (
          <a key={index} href={button.link} className="cta-button">{button.text}</a>
        ))}
      </div>



    </section>
  );
};

export default Hero;