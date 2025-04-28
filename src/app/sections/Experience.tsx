'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiAward } from 'react-icons/fi'

const experiences = [
  {
    role: "Freelance MERN Stack Developer",
    company: "Self-employed",
    period: "Nov 2022 – Present",
    location: "Aurangabad, Maharashtra",
    points: [
      "Developed and enhanced full-stack web applications for clients, including healthcare and education platforms",
      "Designed and deployed full-stack web applications using React, Node.js, Express, and MongoDB",
      "Developed a dashboard for an Islamic education platform, enhancing user engagement by 18%",
      "Implemented automated testing with Jest, reducing bugs by 20%"
    ]
  },
  {
    role: "Software Engineer",
    company: "Voyager Partners",
    period: "Aug 2022 – Oct 2022",
    location: "Hyderabad",
    points: [
      "Optimized code for a web application, improving performance by 12%",
      "Provided technical support, resolving 90% of software issues within 48 hours",
      "Maintained code quality with automated tests and transitioned React web apps to React Native"
    ]
  }
]

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Dr. Babasaheb Ambedkar Marathwada University",
    period: "Oct 2020 – Apr 2022"
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Dr. Babasaheb Ambedkar Marathwada University",
    period: "Apr 2017 – Oct 2019"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Experience & Education
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center font-sora">
              <FiBriefcase className="text-neon-blue mr-3" />
              Professional Journey
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-neon-blue transition-all hover-effect"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-bold">{exp.role}</h4>
                      <p className="text-neon-blue">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{exp.period}</p>
                      <p className="text-sm text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center font-sora">
              <FiAward className="text-neon-blue mr-3" />
              Education & Certification
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-neon-blue transition-all hover-effect"
                >
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-neon-blue mb-2">{edu.institution}</p>
                  <p className="text-sm">{edu.period}</p>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-neon-blue transition-all hover-effect"
              >
                <h4 className="text-xl font-bold">Fellowship in FullStack Development</h4>
                <p className="text-neon-blue mb-2">Crio</p>
                <p className="text-sm mb-4">2022</p>
                <p>
                  Mastered web development concepts including database management, server-side rendering, 
                  and RESTful APIs. Gained proficiency in tools like VS Code, Git, and Postman.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}