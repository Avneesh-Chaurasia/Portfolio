import { motion } from 'framer-motion';
import AboutImage from '../assets/about-image.jpeg'; // Replace with your image path

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white px-6 py-16 scroll-mt-20 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-400">
            About Me
          </h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
          >
            I’m passionate about <span className="text-lime-300 font-semibold">Artificial Intelligence</span>, <span className="text-lime-300 font-semibold">Machine Learning</span>, and <span className="text-lime-300 font-semibold">Data Analysis</span>, with a focus on building real-world solutions such as <span className="text-lime-300">AI agents</span>, <span className="text-lime-300">chatbots</span>, and <span className="text-lime-300">recommendation systems</span>. I enjoy turning data into insights and ideas into intelligent tools.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            I am particularly interested in building intelligent systems that can learn and adapt. Exploring new AI tools and frameworks motivates me to continuously improve my skills and contribute to innovative projects that make an impact.
          </motion.p>
        </div>

        {/* Right Side: Circular Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-90 overflow-hidden rounded-full shadow-2xl">
            <img
              src={AboutImage}
              alt="About Me"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 25%' }} // Adjust to perfectly show face
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;