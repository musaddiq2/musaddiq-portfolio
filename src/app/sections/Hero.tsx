'use client'

import { motion } from 'framer-motion'
import Particles from '../components/Particles'
import AnimatedText from '../components/AnimatedText'
import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-black">
      {/* AI-generated background video (placeholder - replace with your actual video link) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-pattern-1292-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90" />
      </div>

      <Particles />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Animated title with glitch effect */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 font-orbitron"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              textShadow: [
                '0 0 10px var(--neon-blue)',
                '0 0 20px var(--neon-blue)',
                '0 0 30px var(--neon-blue)',
                '0 0 10px var(--neon-blue)'
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <AnimatedText text="Hi, I'm Sayed Musaddiq" />
          </motion.h1>

          {/* Subtitle with floating animation */}
          <motion.h2 
            className="text-2xl md:text-4xl text-neon-blue mb-8 font-sora"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              delay: 1.5,
              duration: 3,
              repeat: Infinity,
              repeatType: 'mirror'
            }}
          >
            <AnimatedText text="A Creative Developer" delay={1.5} />
          </motion.h2>

          {/* Description with fade-in */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-300"
          >
            Building immersive digital experiences with cutting-edge technologies
          </motion.p>

          {/* Enhanced CTA button */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              boxShadow: '0 0 15px rgba(56, 182, 255, 0.5)'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(56, 182, 255, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              delay: 3,
              type: 'spring',
              stiffness: 400,
              damping: 10
            }}
            className="inline-flex items-center px-8 py-4 bg-neon-blue/10 border-2 border-neon-blue rounded-full text-neon-blue hover:bg-neon-blue/20 transition-all duration-300 hover-effect font-medium"
          >
            <span className="mr-2">Explore My World</span>
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            >
              <FiArrowDown />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Floating AI-generated tech elements (positioned absolutely) */}
      <motion.div 
        className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-neon-blue/20 border border-neon-blue"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-neon-blue/10 border border-neon-blue"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1
        }}
      />
    </section>
  )
}