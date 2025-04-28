'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { FiExternalLink } from 'react-icons/fi'
import ThreeScene from '../components/ThreeScene'

const projects = [
  {
    title: "Islamic Education Platform",
    description: "MERN stack dashboard for Islamic education with content management, user authentication, and analytics tracking for Urdu-speaking audiences.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Material UI"],
    image: "/images/project1.jpg",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Nestwell Healthcare Platform",
    description: "Healthcare platform with appointment booking, user dashboards, and real-time notifications that improved user engagement by 25%.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/images/project2.jpg",
    githubLink: "#",
    liveLink: "https://nestwell.co.in"
  },
  {
    title: "HealthSync: Telemedicine Web App",
    description: "Telemedicine platform with real-time video consultations using WebRTC, appointment scheduling, and secure user authentication.",
    tags: ["React", "Node.js", "WebRTC", "MongoDB", "Material UI"],
    image: "/images/project3.jpg",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "EduMentor: Online Learning Portal",
    description: "Learning management system with course enrollment, progress tracking, and quiz functionality using Firebase for real-time updates.",
    tags: ["React", "Redux", "Node.js", "Firebase", "React Router"],
    image: "/images/project4.jpg",
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Task Manager",
    description: "Task management web app with user authentication, task creation/editing, and real-time updates with 90% test coverage.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Jest"],
    image: "/images/project5.jpg",
    githubLink: "#",
    liveLink: "#"
  }
]

export default function Projects() {
    return (
      <section id="projects" className="relative">
        {/* Three.js Scene */}
        <ThreeScene />
        
        {/* Projects Grid */}
        <div className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Featured Projects
            </motion.h2>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} index={index} {...project} />
              ))}
            </div>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center mt-12"
            >
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-neon-blue bg-opacity-10 border border-neon-blue rounded-full text-neon-blue hover:bg-opacity-20 transition-all duration-300 hover-effect"
              >
                View All Projects
                <FiExternalLink className="ml-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }