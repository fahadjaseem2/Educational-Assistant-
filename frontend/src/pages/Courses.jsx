import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: 'JEE Advanced Mastery',
      description: 'Comprehensive physics, chemistry, and mathematics preparation with rigorous problem-solving sessions and mock tests designed for IIT aspirants.',
      duration: '2 Years',
      level: 'Advanced'
    },
    {
      title: 'UPSC Foundation Course',
      description: 'Deep dive into policy context, history, geography, and current affairs. Includes answer writing practice and interview guidance.',
      duration: '1 Year',
      level: 'Intermediate'
    },
    {
      title: 'SAT & ACT Strategy',
      description: 'Master test-taking strategies, time management, and core concepts in reading, writing, and math for US college admissions.',
      duration: '6 Months',
      level: 'Beginner to Advanced'
    },
    {
      title: 'GRE/GMAT Quant & Verbal',
      description: 'Targeted preparation for graduate school admissions. Focus on advanced vocabulary, reading comprehension, and quantitative reasoning.',
      duration: '4 Months',
      level: 'Advanced'
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h1>Explore Our Courses</h1>
        <p>Premium test preparation courses designed to help you deeply understand concepts and ace your exams.</p>
      </div>

      <div className="grid">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <span className="badge">{course.level}</span>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div style={{ marginTop: '1rem', color: '#00ff88', fontWeight: 'bold' }}>
              Duration: {course.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
