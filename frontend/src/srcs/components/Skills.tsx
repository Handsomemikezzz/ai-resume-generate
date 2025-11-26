import React from 'react';
import { Skills as SkillsType } from '../types';

interface SkillsProps {
  data: SkillsType;
  setData: React.Dispatch<React.SetStateAction<SkillsType>>;
}

const Skills: React.FC<SkillsProps> = ({ data, setData }) => {
  const handleCategoryChange = (oldCategory: string, newCategory: string) => {
    const newData = { ...data };
    if (newCategory !== oldCategory) {
      newData[newCategory] = newData[oldCategory];
      delete newData[oldCategory];
    }
    setData(newData);
  };

  const handleSkillChange = (category: string, index: number, value: string) => {
    const newData = { ...data };
    newData[category][index] = value;
    setData(newData);
  };

  const addCategory = () => {
    const newCategory = `New Category ${Object.keys(data).length + 1}`;
    setData({ ...data, [newCategory]: [''] });
  };

  const addSkill = (category: string) => {
    const newData = { ...data };
    newData[category].push('');
    setData(newData);
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      {Object.entries(data).map(([category, skills], catIndex) => (
        <div key={catIndex} className="mb-4 p-4 border rounded">
          <input
            type="text"
            value={category}
            onChange={(e) => handleCategoryChange(category, e.target.value)}
            className="p-2 border rounded w-full mb-2 font-semibold"
          />
          {skills.map((skill, skillIndex) => (
            <input
              key={skillIndex}
              type="text"
              placeholder={`Skill ${skillIndex + 1}`}
              value={skill}
              onChange={(e) => handleSkillChange(category, skillIndex, e.target.value)}
              className="p-2 border rounded w-full mb-2"
            />
          ))}
          <button onClick={() => addSkill(category)} className="text-blue-500">
            + Add Skill
          </button>
        </div>
      ))}
      <button onClick={addCategory} className="text-blue-500">
        + Add Category
      </button>
    </div>
  );
};

export default Skills;
