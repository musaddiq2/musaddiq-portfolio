import { Typography } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionHeader = ({ title }) => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div style={{ y: parallaxY }}>
      <Typography variant="h3" className="text-center font-bold text-cyan-400">
        {title}
      </Typography>
    </motion.div>
  );
};

export default SectionHeader;