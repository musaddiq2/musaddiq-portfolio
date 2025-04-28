'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  githubLink?: string
  liveLink?: string
  index: number
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  githubLink,
  liveLink,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-neon-blue transition-all duration-300 hover-effect"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-sora">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-gray-800 rounded-full text-neon-blue"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-neon-blue transition-colors"
            >
              <FiGithub className="mr-1" /> Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-neon-blue transition-colors"
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}