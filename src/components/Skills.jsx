import { useState } from 'react';
import { skills } from "../constants/index.js";
import './Skills.css'; // Ensure the CSS file is imported

const categories = ['Frontend', 'Backend', 'Programming'];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <main>
      <h2 className="text-4xl text-center text-gray-100 pt-8 font-playwrite">Skills</h2>
    <div className="p-5 mt-10">
      <div className="flex justify-center mb-5">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 rounded-full ${activeTab === category ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-5">
        {filteredSkills.map(skill => (
          <div key={skill.id} className="flex flex-col items-center text-center skill-item justify-center">
            <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
            <p className="mt-2 text-sm text-gray-400">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};