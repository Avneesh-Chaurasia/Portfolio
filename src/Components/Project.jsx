import { motion } from 'framer-motion';
import PortfolioImage from '../assets/portfolio-ss.png'; // Import your screenshot

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-16 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-center max-w-5xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-400">
          Projects
        </h2>

        {/* Project Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition duration-300 max-w-md mx-auto"
        >
          <a
            href="https://avneeshchaurasiaportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={PortfolioImage}
              alt="Portfolio Project"
              className="rounded-lg w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-lime-300 mb-2">
              My Portfolio Website
            </h3>
            <p className="text-gray-300 text-sm">
              A responsive portfolio website showcasing my projects, skills, and experience. Built with React, Tailwind CSS, and hosted on Netlify.
            </p>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Project;
