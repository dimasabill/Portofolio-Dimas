import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-text">
              I am a professional with a keen interest in administration and technology, 
              particularly in web development. I enjoy learning new things, solving problems 
              systematically, and continuously improving my skills through various projects.
            </p>
            <p className="about-text">
              Currently, I am focused on enhancing my capabilities in building modern web applications 
              as well as efficient data management and administrative processes.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4 className="info-label">Location</h4>
                  <p className="info-value">Bandung, Indonesia</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4 className="info-label">Email</h4>
                  <p className="info-value">dimasabilfasha@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Calendar size={20} /></div>
                <div>
                  <h4 className="info-label">Age</h4>
                  <p className="info-value">26 Years Old</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Workspace" className="workspace-img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
