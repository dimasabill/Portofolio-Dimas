import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import getolImg from '../assets/getol.png';
import memoryImg from '../assets/memory.png';
import ifannoImg from '../assets/ifanno.png';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Getol App",
      desc: "Location-Based Marketplace.",
      image: getolImg,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      demo: "https://getol.mattoworks.com/",
      github: "#"
    },
    {
      title: "Memory-Ai",
      desc: "AI Web Application.",
      image: memoryImg, 
      tags: ["HTML", "CSS", "JavaScript", "API"],
      demo: "#",
      github: "#"
    },
    {
      title: "Ifanno Footwear",
      desc: "Premium E-Commerce.",
      image: ifannoImg,
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://ifanno-footwear.vercel.app/",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <a href="#" className="view-all">View All &rarr;</a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card card-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-img-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
