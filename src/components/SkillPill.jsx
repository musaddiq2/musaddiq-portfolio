import { Chip } from '@mui/material';
import { motion } from 'framer-motion';

const SkillPill = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Chip
      label={skill}
      className="bg-gray-800 text-cyan-400 border border-cyan-500"
    />
  </motion.div>
);

export default SkillPill;