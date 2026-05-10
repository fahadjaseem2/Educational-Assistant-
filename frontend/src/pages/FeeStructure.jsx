import React from 'react';

const FeeStructure = () => {
  const fees = [
    {
      plan: 'Basic Prep',
      price: '$49',
      period: '/ month',
      features: [
        'Access to AI Chatbot',
        'Basic Mock Tests',
        'Study Material Library'
      ]
    },
    {
      plan: 'Pro Learner',
      price: '$99',
      period: '/ month',
      features: [
        'Everything in Basic',
        'Advanced Analytics',
        'Weekly Live Doubt Sessions',
        'Personalized Study Plan'
      ],
      isPopular: true
    },
    {
      plan: 'Elite Coaching',
      price: '$499',
      period: '/ 6 months',
      features: [
        'Everything in Pro',
        '1-on-1 Mentorship',
        'Essay & Application Review',
        'Interview Preparation'
      ]
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Fee Structure</h1>
        <p>Transparent pricing for premium educational guidance. Invest in your future today.</p>
      </div>

      <div className="grid">
        {fees.map((fee, index) => (
          <div className="card" key={index} style={{ border: fee.isPopular ? '2px solid #00ff88' : '' }}>
            {fee.isPopular && <span className="badge" style={{ backgroundColor: '#00ff88', color: '#000' }}>Most Popular</span>}
            <h3>{fee.plan}</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="price">{fee.price}</span>
              <span style={{ color: '#888' }}>{fee.period}</span>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {fee.features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#00ff88' }}>✓</span> {feature}
                </li>
              ))}
            </ul>
            <button style={{
              width: '100%',
              padding: '1rem',
              marginTop: '1.5rem',
              backgroundColor: fee.isPopular ? '#00ff88' : 'transparent',
              color: fee.isPopular ? '#000' : '#00ff88',
              border: '1px solid #00ff88',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeStructure;
