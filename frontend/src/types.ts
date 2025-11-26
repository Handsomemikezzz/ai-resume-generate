export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface PowerProfile {
  headline: string;
  achievements: string[];
  skills: string;
}

export interface Experience {
  company: string;
  title:string;
  date: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
}

export interface Skills {
  [category: string]: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  powerProfile: PowerProfile;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
}
