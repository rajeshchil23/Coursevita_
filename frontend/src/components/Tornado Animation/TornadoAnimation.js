import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const TornadoAnimation = ({ skills }) => {
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    
    skills.forEach((skill, index) => {
      timeline.to(`#skill-${index}`, {
        rotation: 360,
        y: -100 * (index + 1),
        duration: 2,
        ease: 'power1.inOut',
      });
    });
  }, [skills]);

  return (
    <div className="tornado-animation">
      {skills.map((skill, index) => (
        <div key={index} id={`skill-${index}`} className="skill-tornado">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default TornadoAnimation;
