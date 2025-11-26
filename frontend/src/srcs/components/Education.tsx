import React from 'react';
import { Education as EducationType } from '../types';

interface EducationProps {
  data: EducationType[];
  setData: React.Dispatch<React.SetStateAction<EducationType[]>>;
}

const Education: React.FC<EducationProps> = ({ data, setData }) => {
  const handleEducationChange = (index: number, field: keyof EducationType, value: string) => {
    const newEducation = [...data];
    newEducation[index][field] = value;
    setData(newEducation);
  };

  const addEducation = () => {
    setData([...data, { institution: '', degree: '', date: '' }]);
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Education</h3>
      {data.map((education, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <input
            type="text"
            placeholder="Institution"
            value={education.institution}
            onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Degree"
            value={education.degree}
            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Date"
            value={education.date}
            onChange={(e) => handleEducationChange(index, 'date', e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
        </div>
      ))}
      <button onClick={addEducation} className="text-blue-500">
        + Add Education
      </button>
    </div>
  );
};

export default Education;
