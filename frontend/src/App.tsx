import { useState } from 'react';
import { ResumeData } from './types';
import PersonalInfo from './components/PersonalInfo';
import PowerProfile from './components/PowerProfile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: { name: 'John Doe', title: 'Senior Software Engineer', email: 'john.doe@example.com', phone: '123-456-7890', github: 'github.com/johndoe', linkedin: 'linkedin.com/in/johndoe' },
    powerProfile: { headline: 'Results-driven software engineer with over 7 years of experience...', achievements: ['Reduced API latency by 74%', 'Drove $3.4M in additional revenue'], skills: 'Python, JavaScript, React, Node.js, AWS' },
    experience: [{ company: 'Acme Corp', title: 'Senior Software Engineer', date: 'Jan 2018 - Present', responsibilities: ['Architected and deployed microservices platform', 'Engineered real-time analytics dashboard'] }],
    education: [{ institution: 'State University', degree: 'B.S. in Computer Science', date: '2014' }],
    skills: { 'Programming Languages': ['JavaScript', 'Python', 'Go'], 'Frontend': ['React', 'Redux', 'Webpack'] },
    projects: [{ name: 'My Awesome Project', description: 'A project that does awesome things.', technologies: ['React', 'Node.js', 'GraphQL'], link: 'github.com/johndoe/awesome-project' }],
  });

  const handleGenerateResume = async () => {
    try {
      const response = await fetch('http://localhost:3001/generate-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resumeData),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.error('Failed to generate PDF');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">AI Resume Generator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Resume Data</h2>
            <PersonalInfo data={resumeData.personalInfo} setData={(data) => setResumeData({ ...resumeData, personalInfo: data })} />
            <PowerProfile data={resumeData.powerProfile} setData={(data) => setResumeData({ ...resumeData, powerProfile: data })} />
            <Experience data={resumeData.experience} setData={(data) => setResumeData({ ...resumeData, experience: data })} />
            <Education data={resumeData.education} setData={(data) => setResumeData({ ...resumeData, education: data })} />
            <Skills data={resumeData.skills} setData={(data) => setResumeData({ ...resumeData, skills: data })} />
            <Projects data={resumeData.projects} setData={(data) => setResumeData({ ...resumeData, projects: data })} />
          </div>
          <div>
            {/* Preview will go here */}
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handleGenerateResume}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
