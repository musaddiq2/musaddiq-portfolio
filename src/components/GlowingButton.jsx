import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const GlowingButton = ({ children, href, ...props }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Button
      variant="contained"
      className="bg-cyan-500 hover:bg-cyan-600 text-black"
      href={href}
      {...props}
    >
      {children}
    </Button>
  </motion.div>
);

export default GlowingButton;