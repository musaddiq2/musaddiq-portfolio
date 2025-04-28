'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleHover = () => {
      document.querySelectorAll('a, button, .hover-effect').forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', moveCursor)
    handleHover()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - (isHovering ? 16 : 8),
        y: position.y - (isHovering ? 16 : 8),
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-difference ${
        isHovering ? 'bg-white w-8 h-8' : 'bg-neon-blue w-4 h-4'
      }`}
    />
  )
}