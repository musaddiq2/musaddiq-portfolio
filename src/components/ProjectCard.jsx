import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { cardVariants } from '../utils/animations';
import GlowingButton from './GlowingButton';

const ProjectCard = ({ title, description, techStack, link }) => (
  <motion.div variants={cardVariants} initial="hidden" whileInView="visible">
    <Card className="bg-gray-800 border border-cyan-500 hover:shadow-cyan-500/50 hover:shadow-lg transition-shadow">
      <CardContent>
        <Typography variant="h6" className="text-cyan-400">
          {title}
        </Typography>
        <Typography variant="body2" className="mt-2">
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="mt-2">
          Tech Stack: {techStack}
        </Typography>
      </CardContent>
      {link && (
        <div className="p-4">
          <GlowingButton href={link}>View Project</GlowingButton>
        </div>
      )}
    </Card>
  </motion.div>
);

export default ProjectCard;