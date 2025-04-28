import { EXPERIENCE } from '../utils/constants';
import ExperienceCard from '../components/ExperienceCard';
import SectionHeader from '../components/SectionHeader';

const Experience = () => (
  <div className="min-h-screen py-20 px-4 md:px-20">
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
  </div>
);

export default Experience;