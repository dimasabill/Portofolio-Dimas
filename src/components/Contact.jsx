import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="contact-wrapper">
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="contact-subtitle">Let's Connect</h3>
              <p className="contact-desc">
                I am open to new opportunities and collaborations. Don't hesitate
                to reach out to me through any of the channels below.
              </p>

              <div className="contact-links-list">
                <a href="mailto:dimasabilfasha@gmail.com" className="contact-link-item">
                  <div className="contact-icon bg-blue"><Mail size={20} color="#2563EB" /></div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">Email</span>
                    <span className="contact-link-value">dimasabilfasha@gmail.com</span>
                  </div>
                </a>

                <a href="#" className="contact-link-item">
                  <div className="contact-icon bg-green"><FaWhatsapp size={20} color="#10B981" /></div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">WhatsApp</span>
                    <span className="contact-link-value">+62 877 7181 6654</span>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/dimas-abil-fasha/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  <div className="contact-icon bg-linkedin"><FaLinkedin size={20} color="#0077B5" /></div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">LinkedIn</span>
                    <span className="contact-link-value">linkedin.com/in/dimasabilfasha</span>
                  </div>
                </a>

                <a href="https://github.com/dimasabill" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  <div className="contact-icon bg-github"><FaGithub size={20} color="#181717" /></div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">GitHub</span>
                    <span className="contact-link-value">github.com/dimasabill</span>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container card-shadow"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form action="https://formsubmit.co/dimasabilfasha@gmail.com" method="POST" className="contact-form">
                <input type="hidden" name="_subject" value="New message from your Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section matched to design */}
      <footer className="footer bg-hero">
        <div className="container footer-content">
          <div className="footer-left">
            <h3 className="footer-title">Dimas Abil Fasha</h3>
            <p className="footer-subtitle">Administrative & Web Developer</p>
            <div className="footer-socials">
              <a href="https://github.com/dimasabill"><FaGithub size={20} /></a>
              <a href="https://linkedin.com/in/dimas-abil-fasha"><FaLinkedin size={20} /></a>
              <a href="mailto:dimasabilfasha@gmail.com"><Mail size={20} /></a>
            </div>
          </div>
          <div className="footer-right">
            <p>&copy; {new Date().getFullYear()} Dimas Abil Fasha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
