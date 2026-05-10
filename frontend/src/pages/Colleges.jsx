import React from 'react';

const Colleges = () => {
  const colleges = [
    {
      name: 'Massachusetts Institute of Technology (MIT)',
      location: 'Cambridge, USA',
      type: 'Private Research University',
      acceptanceRate: '4%',
      popularMajors: ['Computer Science', 'Engineering', 'Physics']
    },
    {
      name: 'Stanford University',
      location: 'Stanford, USA',
      type: 'Private Research University',
      acceptanceRate: '4%',
      popularMajors: ['Computer Science', 'Economics', 'Human Biology']
    },
    {
      name: 'Indian Institute of Technology (IIT) Bombay',
      location: 'Mumbai, India',
      type: 'Public Technical University',
      acceptanceRate: '< 1%',
      popularMajors: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering']
    },
    {
      name: 'Harvard University',
      location: 'Cambridge, USA',
      type: 'Private Ivy League',
      acceptanceRate: '3.2%',
      popularMajors: ['Economics', 'Computer Science', 'Social Sciences']
    },
    {
      name: 'University of Oxford',
      location: 'Oxford, UK',
      type: 'Collegiate Research University',
      acceptanceRate: '17.5%',
      popularMajors: ['Philosophy, Politics and Economics', 'Law', 'Medicine']
    },
    {
      name: 'National University of Singapore (NUS)',
      location: 'Singapore',
      type: 'Public Research University',
      acceptanceRate: '5%',
      popularMajors: ['Engineering', 'Business', 'Computer Science']
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Top Tier Colleges</h1>
        <p>Aim high. Discover the world's leading educational institutions and what it takes to get there.</p>
      </div>

      <div className="grid">
        {colleges.map((college, index) => (
          <div className="card" key={index}>
            <h3>{college.name}</h3>
            <p style={{ color: '#00ff88', marginBottom: '1rem' }}>{college.location}</p>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Type:</strong> {college.type}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Acceptance Rate:</strong> {college.acceptanceRate}
            </div>
            <div>
              <strong>Popular Majors:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {college.popularMajors.map((major, idx) => (
                  <span key={idx} style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '4px',
                    fontSize: '0.85rem'
                  }}>
                    {major}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
