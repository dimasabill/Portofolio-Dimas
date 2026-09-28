import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">
            Administrative & <br />
            <span className="text-accent">Web Developer</span>
          </h1>
          <p className="hero-desc">
            A dedicated professional bridging the gap between efficient administrative operations 
            and modern web technologies. I specialize in developing structured digital solutions, 
            managing complex data workflows, and leveraging innovative tools to drive organizational success.
          </p>
          
          <div className="hero-actions">
            <a href="CV_Dimas_Abil_Fasha.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={18} /> Download CV
            </a>
            <a href="#projects" className="btn-outline">
              <Eye size={18} /> View Projects
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/dimasabill" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/dimas-abil-fasha" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
            <a href="mailto:dimasabilfasha@gmail.com"><FaEnvelope size={20} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
