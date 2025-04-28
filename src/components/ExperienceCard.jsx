import { Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { cardVariants } from '../utils/animations';

const ExperienceCard = ({ title, company, location, duration, description }) => (
  <motion.div variants={cardVariants} initial="hidden" whileInView="visible">
    <Card className="bg-gray-800 border border-cyan-500 hover:shadow-cyan-500/50 hover:shadow-lg transition-shadow">
      <CardContent>
        <Typography variant="h6" className="text-cyan-400">
          {title}
        </Typography>
        <Typography variant="subtitle1">{company}</Typography>
        <Typography variant="body2" color="textSecondary">
          {location} | {duration}
        </Typography>
        <Typography variant="body1" className="mt-2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

export default ExperienceCard;