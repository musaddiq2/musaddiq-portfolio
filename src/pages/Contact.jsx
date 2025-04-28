import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';
import { fadeIn } from '../utils/animations';

const Contact = () => (
  <div className="min-h-screen py-20 px-4 md:px-20 bg-gradient-to-b from-gray-900 to-black">
    <SectionHeader title="Contact" />
    <motion.div
      className="mt-12 text-center"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
    >
      <Typography variant="h6" className="mb-4">
        Let's build something amazing together! Reach out at{' '}
        <a href="mailto:sayedmusaddiq786@gmail.com" className="text-cyan-400">
          sayedmusaddiq786@gmail.com
        </a>
      </Typography>
      <ContactForm />
    </motion.div>
  </div>
);

export default Contact;