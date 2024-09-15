import React, { useState } from 'react';
import TornadoAnimation from './TornadoAnimation';

const SkillForm = () => {
  const [skills, setSkills] = useState('');
  const [roadmap, setRoadmap] = useState([]);

  const handleSkillSubmit = async (e) => {
    e.preventDefault();

    // Fetch roadmap from the backend
    const response = await fetch('http://localhost:5000/get_roadmap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ skills }),
    });

    const data = await response.json();
    setRoadmap(data);
  };

  return (
    <div>
      <form onSubmit={handleSkillSubmit}>
        <input
          type="text"
          placeholder="Enter your known skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button type="submit">Get Roadmap</button>
      </form>

      {roadmap.length > 0 && (
        <div>
          <h2>Roadmap:</h2>
          <ul>
            {roadmap.map((job, index) => (
              <li key={index}>{job.title}</li>
            ))}
          </ul>

          <TornadoAnimation skills={skills.split(', ')} />
        </div>
      )}
    </div>
  );
};

export default SkillForm;
