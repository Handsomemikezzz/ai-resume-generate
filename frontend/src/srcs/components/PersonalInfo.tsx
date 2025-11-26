import React from 'react';
import { PersonalInfo as PersonalInfoType } from '../types';

interface PersonalInfoProps {
  data: PersonalInfoType;
  setData: React.Dispatch<React.SetStateAction<PersonalInfoType>>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, setData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={data.phone}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="url"
          name="github"
          placeholder="GitHub"
          value={data.github}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn"
          value={data.linkedin}
          onChange={handleChange}
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
