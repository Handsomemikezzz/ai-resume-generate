import React from 'react';
import { PowerProfile as PowerProfileType } from '../types';

interface PowerProfileProps {
  data: PowerProfileType;
  setData: React.Dispatch<React.SetStateAction<PowerProfileType>>;
}

const PowerProfile: React.FC<PowerProfileProps> = ({ data, setData }) => {
  const handleAchievementChange = (index: number, value: string) => {
    const newAchievements = [...data.achievements];
    newAchievements[index] = value;
    setData({ ...data, achievements: newAchievements });
  };

  const addAchievement = () => {
    setData({ ...data, achievements: [...data.achievements, ''] });
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Power Profile</h3>
      <input
        type="text"
        placeholder="Headline"
        value={data.headline}
        onChange={(e) => setData({ ...data, headline: e.target.value })}
        className="p-2 border rounded w-full mb-2"
      />
      {data.achievements.map((achievement, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Achievement ${index + 1}`}
          value={achievement}
          onChange={(e) => handleAchievementChange(index, e.target.value)}
          className="p-2 border rounded w-full mb-2"
        />
      ))}
      <button onClick={addAchievement} className="text-blue-500">
        + Add Achievement
      </button>
      <input
        type="text"
        placeholder="Skills Summary"
        value={data.skills}
        onChange={(e) => setData({ ...data, skills: e.target.value })}
        className="p-2 border rounded w-full mt-2"
      />
    </div>
  );
};

export default PowerProfile;
