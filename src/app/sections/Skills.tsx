'use client'

import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi'

const skills = [
  {
    category: 'Frontend',
    icon: <FiCode className="text-3xl text-neon-blue" />,
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: <FiCpu className="text-3xl text-neon-blue" />,
    items: ['Node.js', 'Express', 'GraphQL', 'REST API', 'Python'],
  },
  {
    category: 'Database',
    icon: <FiDatabase className="text-3xl text-neon-blue" />,
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Prisma', 'DynamoDB'],
  },
  {
    category: 'Other',
    icon: <FiLayers className="text-3xl text-neon-blue" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Git', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-neon-blue transition-all hover-effect"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-bold ml-3 font-sora">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-neon-blue rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}