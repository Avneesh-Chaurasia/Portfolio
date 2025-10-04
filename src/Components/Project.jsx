import { motion } from 'framer-motion';

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
        className="text-center max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
          Projects
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 italic">
          🚧 Coming soon... <br />
          Stay tuned for AI agents, chatbots, and intelligent systems that learn and adapt.
        </p>
      </motion.div>
    </section>
  );
};

export default Project;
