import React from 'react';
import { Project as ProjectType } from '../types';

interface ProjectsProps {
  data: ProjectType[];
  setData: React.Dispatch<React.SetStateAction<ProjectType[]>>;
}

const Projects: React.FC<ProjectsProps> = ({ data, setData }) => {
  const handleProjectChange = (index: number, field: keyof ProjectType, value: string | string[]) => {
    const newProjects = [...data];
    (newProjects[index] as any)[field] = value;
    setData(newProjects);
  };

  const addProject = () => {
    setData([...data, { name: '', description: '', technologies: [], link: '' }]);
  };

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">Projects</h3>
      {data.map((project, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <input
            type="text"
            placeholder="Project Name"
            value={project.name}
            onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={project.description}
            onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={project.technologies.join(',')}
            onChange={(e) => handleProjectChange(index, 'technologies', e.target.value.split(','))}
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="url"
            placeholder="Link"
            value={project.link}
            onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
      ))}
      <button onClick={addProject} className="text-blue-500">
        + Add Project
      </button>
    </div>
  );
};

export default Projects;
