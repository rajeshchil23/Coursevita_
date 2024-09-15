import React, { useState } from 'react';
import SkillForm from './SkillForm';

const MainPage = () => {
  const [showSkillForm, setShowSkillForm] = useState(false);

  return (
    <div>
      <h1>WHAT DO YOU WANT TO BECOME?</h1>
      <input type="text" placeholder="Enter your career goal" />
      <button onClick={() => setShowSkillForm(true)}>I have no idea!</button>

      {showSkillForm && <SkillForm />}
    </div>
  );
};

export default MainPage;
