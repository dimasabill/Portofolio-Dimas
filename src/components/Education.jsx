import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education section-padding bg-secondary">
      <div className="container">
        <div className="section-title">
          <h2>Pendidikan</h2>
        </div>

        <motion.div 
          className="education-card card-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="edu-icon">
            <GraduationCap size={28} color="#2563EB" />
          </div>
          <div className="edu-details">
            <h3 className="school-name">SMK Negeri 1 Bandung</h3>
            <p className="school-major">Teknik Komputer dan Jaringan</p>
            <p className="school-year">2018 - 2021</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
