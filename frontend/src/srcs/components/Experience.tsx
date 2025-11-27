import type React from 'react';
import type { Experience as ExperienceType } from '../../types';

interface ExperienceProps {
  data: ExperienceType[];
  setData: React.Dispatch<React.SetStateAction<ExperienceType[]>>;
}

const Experience: React.FC<ExperienceProps> = ({ data, setData }) => {
  const handleExperienceChange = (index: number, field: keyof ExperienceType, value: string | string[]) => {
    const newExperience = [...data];
    (newExperience[index] as any)[field] = value;
    setData(newExperience);
  };

  const addExperience = () => {
    setData([...data, { company: '', title: '', date: '', responsibilities: [''] }]);
  };

  const handleResponsibilityChange = (expIndex: number, resIndex: number, value: string) => {
    const newExperience = [...data];
    newExperience[expIndex].responsibilities[resIndex] = value;
    setData(newExperience);
  };

  const addResponsibility = (expIndex: number) => {
    const newExperience = [...data];
    newExperience[expIndex].responsibilities.push('');
    setData(newExperience);
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Experience</h3>
      {data.map((experience, expIndex) => (
        <div key={expIndex} className="mb-4 p-4 border rounded">
          <input
            type="text"
            placeholder="Company"
            value={experience.company}
            onChange={(e) => handleExperienceChange(expIndex, 'company', e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Title"
            value={experience.title}
            onChange={(e) => handleExperienceChange(expIndex, 'title', e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Date"
            value={experience.date}
            onChange={(e) => handleExperienceChange(expIndex, 'date', e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
          <h4 className="font-semibold mt-2">Responsibilities:</h4>
          {experience.responsibilities.map((responsibility, resIndex) => (
            <input
              key={resIndex}
              type="text"
              placeholder={`Responsibility ${resIndex + 1}`}
              value={responsibility}
              onChange={(e) => handleResponsibilityChange(expIndex, resIndex, e.target.value)}
              className="p-2 border rounded w-full mb-2"
            />
          ))}
          <button onClick={() => addResponsibility(expIndex)} className="text-blue-500">
            + Add Responsibility
          </button>
        </div>
      ))}
      <button onClick={addExperience} className="text-blue-500">
        + Add Experience
      </button>
    </div>
  );
};

export default Experience;
