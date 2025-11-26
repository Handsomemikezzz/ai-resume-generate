const getResumeHTML = (resumeData) => {
  const { personalInfo, powerProfile, experience, education, skills, projects } = resumeData;

  const skillsHTML = Object.entries(skills)
    .map(([category, skillsList]) => `
      <div class="skills-category">
        <h3>${category}</h3>
        <ul>
          ${skillsList.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
      </div>
    `)
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume</title>
      <style>
        body {
          font-family: sans-serif;
          line-height: 1.6;
          color: #333;
        }
        h1, h2, h3 {
          margin: 0;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .section {
          margin-bottom: 20px;
        }
        .section h2 {
          border-bottom: 2px solid #333;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        .experience-item, .project-item, .education-item {
          margin-bottom: 15px;
        }
        .skills-container {
          display: flex;
          flex-wrap: wrap;
        }
        .skills-category {
          margin-right: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${personalInfo.name}</h1>
          <p>${personalInfo.title} | ${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.github} | ${personalInfo.linkedin}</p>
        </div>
        <div class="section">
          <h2>Power Profile</h2>
          <h3>${powerProfile.headline}</h3>
          <ul>
            ${powerProfile.achievements.map(ach => `<li>${ach}</li>`).join('')}
          </ul>
          <p>${powerProfile.skills}</p>
        </div>
        <div class="section">
          <h2>Experience</h2>
          ${experience.map(exp => `
            <div class="experience-item">
              <h3>${exp.company} - ${exp.title}</h3>
              <p>${exp.date}</p>
              <ul>
                ${exp.responsibilities.map(res => `<li>${res}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        <div class="section">
          <h2>Education</h2>
          ${education.map(edu => `
            <div class="education-item">
              <h3>${edu.institution}</h3>
              <p>${edu.degree} - ${edu.date}</p>
            </div>
          `).join('')}
        </div>
        <div class="section">
          <h2>Skills</h2>
          <div class="skills-container">
            ${skillsHTML}
          </div>
        </div>
        <div class="section">
          <h2>Projects</h2>
          ${projects.map(proj => `
            <div class="project-item">
              <h3>${proj.name}</h3>
              <p>${proj.description}</p>
              <p><strong>Technologies:</strong> ${proj.technologies.join(', ')}</p>
              <a href="${proj.link}">Project Link</a>
            </div>
          `).join('')}
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = { getResumeHTML };
