import { motion } from 'framer-motion';
import { Award, Laptop, BarChart, Globe } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      title: "Web Development",
      issuer: "Dicoding Indonesia",
      year: "2023",
      icon: <Laptop size={24} color="#10B981" />,
      iconBg: "#D1FAE5" // Emerald 100
    },
    {
      title: "Microsoft Office Specialist",
      issuer: "Microsoft",
      year: "2022",
      icon: <Award size={24} color="#3B82F6" />,
      iconBg: "#DBEAFE" // Blue 100
    },
    {
      title: "Digital Marketing",
      issuer: "RevoU",
      year: "2022",
      icon: <BarChart size={24} color="#F59E0B" />,
      iconBg: "#FEF3C7" // Amber 100
    },
    {
      title: "Pengembangan Aplikasi Web",
      issuer: "Progate",
      year: "2021",
      icon: <Globe size={24} color="#8B5CF6" />,
      iconBg: "#EDE9FE" // Violet 100
    }
  ];

  return (
    <section id="certificates" className="certificates section-padding">
      <div className="container">
        <div className="section-title">
          <h2>Sertifikat</h2>
          <a href="#" className="view-all">Lihat Semua &rarr;</a>
        </div>

        <div className="certs-grid">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              className="cert-card card-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cert-header">
                <div className="cert-icon" style={{ backgroundColor: cert.iconBg }}>
                  {cert.icon}
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-year">{cert.year}</p>
                </div>
              </div>
              
              <a href="#" className="btn-cert-outline">Lihat Sertifikat</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
