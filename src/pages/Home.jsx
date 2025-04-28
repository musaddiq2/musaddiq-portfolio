import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/3d/ParticlesBackground';
import AnimatedText from '../components/AnimatedText';
import GlowingButton from '../components/GlowingButton';
import TechSphere from '../components/3d/TechSphere';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import SkillPill from '../components/SkillPill';
import ContactForm from '../components/ContactForm';
import { PROJECTS, EXPERIENCE } from '../utils/constants';
import { fadeIn } from '../utils/animations';

const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Material UI', 'React Router', 'Redux',
  'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'MySQL', 'Firebase', 'PostgreSQL',
  'Docker', 'AWS', 'Vercel', 'Netlify', 'Heroku', 'Git', 'Postman', 'Jest', 'Cypress'
];

const Home = () => (
  <div className="bg-black text-white">
    {/* Hero Section */}
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative">
      <ParticlesBackground />
      <motion.div
        className="text-center z-10"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <AnimatedText
          strings={["Hi, I'm Sayed Musaddiq", "A MERN Stack Developer"]}
        />
        <Typography variant="h6" className="mt-4 max-w-md mx-auto">
          Building scalable, user-centric web applications with React, Node.js, and MongoDB.
        </Typography>
        <div className="mt-6">
          <GlowingButton href="#projects">Explore My Work</GlowingButton>
        </div>
      </motion.div>
      <div className="mt-12">
        <TechSphere />
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="min-h-screen py-20 px-4 md:px-20 flex flex-col items-center">
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
    </section>

    {/* Skills Section */}
    <section id="skills" className="min-h-screen py-20 px-4 md:px-20 bg-gradient-to-b from-black to-gray-900">
      <SectionHeader title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
        {SKILLS.map((skill, index) => (
          <SkillPill key={index} skill={skill} />
        ))}
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="min-h-screen py-20 px-4 md:px-20 bg-gradient-to-b from-gray-900 to-black">
      <SectionHeader title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className="min-h-screen py-20 px-4 md:px-20">
      <SectionHeader title="Experience" />
      <div className="max-w-4xl mx-auto mt-12 space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="min-h-screen py-20 px-4 md:px-20 bg-gradient-to-b from-black to-gray-900">
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
    </section>
  </div>
);

export default Home;