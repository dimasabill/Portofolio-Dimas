import { motion } from 'framer-motion';
import { Code2, Briefcase, FileCode2, Paintbrush, Database, FileText, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Skills.css';

const Skills = ({ id = "skills", title = "Skills" }) => {
  const technicalSkills = [
    { name: "HTML", icon: <FileCode2 size={18} color="#E34F26" /> },
    { name: "CSS", icon: <Paintbrush size={18} color="#1572B6" /> },
    { name: "JavaScript", icon: <FileCode2 size={18} color="#F7DF1E" /> },
    { name: "GitHub", icon: <FaGithub size={18} color="#181717" /> },
    { name: "Responsive Web Design", icon: <Code2 size={18} color="#38BDF8" /> },
    { name: "MySQL", icon: <Database size={18} color="#00758F" /> },
  ];

  const adminSkills = [
    { name: "Microsoft Office", icon: <Briefcase size={18} color="#D83B01" /> },
    { name: "Data Entry", icon: <FileText size={18} color="#10B981" /> },
    { name: "Document Processing", icon: <CheckCircle2 size={18} color="#3B82F6" /> },
    { name: "Archiving / Filing", icon: <FileText size={18} color="#64748B" /> },
    { name: "Data Administration", icon: <Database size={18} color="#8B5CF6" /> },
  ];

  return (
    <section id={id} className="skills section-padding">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        
        <div className="skills-grid">
          {/* Technical Skills */}
          <motion.div 
            className="skills-card card-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="skills-header">
              <div className="skills-header-icon bg-blue">
                <Code2 size={24} color="#2563EB" />
              </div>
              <h3>Technical Skills</h3>
            </div>
            <ul className="skills-list">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <div className="skill-icon-wrapper">{skill.icon}</div>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Admin Skills */}
          <motion.div 
            className="skills-card card-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="skills-header">
              <div className="skills-header-icon bg-indigo">
                <Briefcase size={24} color="#4F46E5" />
              </div>
              <h3>Administrative Skills</h3>
            </div>
            <ul className="skills-list">
              {adminSkills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <div className="skill-icon-wrapper">{skill.icon}</div>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
