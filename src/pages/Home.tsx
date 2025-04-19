import { motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import "../styles/Home.css";

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <div className="hero-intro">
              <h2 className="hero-greeting">Hello, I'm</h2>
              <h1 className="hero-name">
                <span className="gradient-text">Boikanyo Mohlamonyane</span>
              </h1>
              <p className="hero-title">Fullstack Developer</p>
            </div>

            <p className="hero-description">
              As a Full Stack Developer and A Computer
              Science Graduate at Tshwane University of Technology, I am passionate about
              leveraging my technical expertise to drive innovative solutions.
              With hands-on experience in both mobile and web development, and a
              background in competitive hacking events, I bring a strong
              problem-solving mindset and a commitment to delivering
              high-quality results. I’m actively seeking freelance opportunities
              or collaborations where I can contribute value, grow
              professionally, and stay at the forefront of emerging
              technologies.
            </p>

            <div className="button-group">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf"
                download
                className="button button-secondary"
              >
                Download CV <Download size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="profile-container"
          >
            <div className="profile-glow"></div>
            <img
              src="/WhatsApp Image 2025-04-10 at 18.39.56_aba86978.jpg"
              alt="Boikanyo Mohlamonyane"
              className="profile-image"
            />
          </motion.div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <motion.div whileHover={{ y: -5 }} className="stat-card">
            <h3 className="stat-number gradient-text">1+</h3>
            <p className="stat-label">Year of Experience</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="stat-card">
            <h3 className="stat-number gradient-text">6+</h3>
            <p className="stat-label">Technologies Mastered</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="stat-card">
            <h3 className="stat-number gradient-text">4</h3>
            <p className="stat-label">Projects Completed</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
