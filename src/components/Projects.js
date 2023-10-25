import React from 'react';

const projects = [
  {
    title: 'Ecommerce website',
    description: 'Built a full-stack e-commerce website where users can browse and purchase books. Implemented user authentication, shopping cart functionality, and integrated payment processing. Utilized React for the front end and Node.js with Express for the back end, along with a MongoDB database.',
  },
  {
    title: 'TaskMaster: A Task Managing App',
    description: 'Developed a task management application with features for task creation, assignment, and tracking progress. Integrated user authentication and notification alerts. Employed React for the front end and a Node.js back end with a PostgreSQL database.',
  },
  {
    title: 'ChatX',
    description: 'Developed a real-time chat application with individual and group chat functionality. Used React for the front end and a Node.js server with WebSocket for real-time messaging. Implemented user authentication and multimedia sharing.',
  }
  
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
