import React from 'react';
import '../styles/Pricing.css'

const Pricing = ({ data }) => {
  return (
    <section id="pricing" className="pricing">
      <h1>Pricing</h1>
      <div className="pricing-container">
        {data.map((plan, index) => (
          <div key={index} className={`pricing-plan ${plan.plan.toLowerCase()}`}>
            <h3>{plan.plan}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;