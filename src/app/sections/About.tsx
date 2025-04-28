'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 font-sora">Sayed Musaddiq</h3>
            <h4 className="text-xl text-neon-blue mb-6">MERN Stack Developer</h4>
            
            <p className="text-lg mb-6">
              Proficient MERN Stack Developer with 2.7+ years of experience building scalable web applications. 
              After completing a FullStack fellowship with Crio, I transitioned to freelancing, delivering 
              innovative solutions like telemedicine platforms, learning management systems, and Islamic 
              education dashboards.
            </p>
            
            <p className="text-lg">
              Adept at creating high-performance, user-centric applications, I excel in writing clean code, 
              optimizing APIs, and ensuring robust deployments, consistently meeting client needs on time 
              and within budget.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FiMail className="text-neon-blue mr-3" />
                <span>sayedmusaddiq786@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="text-neon-blue mr-3" />
                <span>+91 9689959078</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="text-neon-blue mr-3" />
                <span>Aurangabad, Maharashtra</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-neon-blue hover:text-gray-900 transition-all hover-effect"
              >
                <FiGithub className="mr-2" /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-neon-blue hover:text-gray-900 transition-all hover-effect"
              >
                <FiLinkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-neon-blue transition-all hover-effect"
          >
            <h3 className="text-xl font-bold mb-6 font-sora">Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-neon-blue mb-2">Frontend</h4>
                <p>HTML, CSS, JavaScript, Bootstrap, React, Material UI, React Router, Redux, Responsive Design</p>
              </div>
              <div>
                <h4 className="text-neon-blue mb-2">Backend</h4>
                <p>JavaScript (Node.js), Express.js, REST APIs, HTTP</p>
              </div>
              <div>
                <h4 className="text-neon-blue mb-2">Database</h4>
                <p>MongoDB, Mongoose, MySQL, Firebase, PostgreSQL</p>
              </div>
              <div>
                <h4 className="text-neon-blue mb-2">DevOps</h4>
                <p>Docker, AWS (EC2, S3), CI/CD (GitHub Actions), Vercel, Netlify, Heroku</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}