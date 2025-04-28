import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { fadeIn } from '../utils/animations';

const About = () => (
  <div className="min-h-screen py-20 px-4 md:px-20 flex flex-col items-center">
    <SectionHeader title="About Me" />
    <motion.div
      className="max-w-3xl mt-12 text-center"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
    >
      <Typography variant="body1" className="mb-4">
        I'm Sayed Musaddiq, a proficient MERN Stack Developer with 2.7 years of experience building scalable web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. After completing a FullStack fellowship with Crio, I transitioned to freelancing, delivering innovative solutions like telemedicine platforms, learning management systems, and Islamic education dashboards.
      </Typography>
      <Typography variant="body1">
        I excel in writing clean code, optimizing APIs, and ensuring robust deployments, consistently meeting client needs on time and within budget. My passion lies in creating high-performance, user-centric applications that make a difference.
      </Typography>
    </motion.div>
  </div>
);

export default About;