import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaReact, FaAws,
  FaGithub, FaCloud, FaLaptopCode
} from 'react-icons/fa';
import {
  SiFlask, SiDjango, SiMysql, SiMongodb, SiPandas, SiNumpy,
  SiScikitlearn, SiJupyter
} from 'react-icons/si';

const Skills = () => {
  const devSkills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'HTML', icon: <FaLaptopCode /> },
    { name: 'CSS', icon: <FaLaptopCode /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
  ];

  const toolSkills = [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Power BI', icon: <FaLaptopCode /> },
    { name: 'Google Colab', icon: <FaLaptopCode /> },
    { name: 'AWS Lambda', icon: <FaAws /> },
    { name: 'GCP', icon: <FaCloud /> },
    { name: 'Jupyter', icon: <SiJupyter /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center -mt-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-12">
          Skills & Technologies
        </h2>

        {/* Development Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-lime-300 mb-6">
            Development Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {devSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center transition-transform hover:scale-110"
              >
                <div className="text-4xl text-lime-300 mb-2">{skill.icon}</div>
                <p className="text-sm text-gray-300 hover:text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-700 w-3/4 mx-auto my-10" />

        {/* Tools & Cloud */}
        <div>
          <h3 className="text-2xl font-semibold text-lime-300 mb-6">
            Tools & Cloud
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {toolSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center transition-transform hover:scale-110"
              >
                <div className="text-4xl text-lime-300 mb-2">{skill.icon}</div>
                <p className="text-sm text-gray-300 hover:text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
