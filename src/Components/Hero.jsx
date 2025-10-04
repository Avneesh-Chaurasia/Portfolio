import { motion } from 'framer-motion';
import '../stars.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['AIML Engineer', 'Data Analysis'];

  // Change role every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    const navbar = document.getElementById('navbar');

    if (contactSection) {
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const extraOffset = -10;
      const yOffset =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset -
        (navbarHeight + extraOffset);
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center pt-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
          Hello, I'm <br />
          <span className="text-blue-500">Avneesh Chaurasia</span>
        </h1>

        {/* Animated Role with Left-to-Right Slide Effect */}
        <motion.div
          key={roles[roleIndex]}
          initial={{ opacity: 0, x: -80 }}       // start from left
          animate={{ opacity: 1, x: 0 }}         // move to center
          exit={{ opacity: 0, x: 80 }}           // exit to right
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <motion.p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
            {roles[roleIndex]}
          </motion.p>
        </motion.div>

        <p className="text-lg md:text-xl text-gray-400 italic mb-8">
          "Turning curiosity into code <br />
          And ideas into AI solutions."
        </p>

        <div className="flex justify-center gap-6 text-gray-600 text-2xl">
          <a href="https://github.com/Avneesh-Chaurasia" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-lime-300 transition duration-300 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/avneesh-chaurasia/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-lime-300 transition duration-300 cursor-pointer" />
          </a>
          <a href="mailto:chaurasiaavneesh1@gmail.com">
            <FaEnvelope className="hover:text-lime-300 transition duration-300 cursor-pointer" />
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-6 mb-14">
          <button
            onClick={scrollToContact}
            className="bg-gray-200 text-gray-800 px-10 py-3 rounded-md font-semibold hover:bg-gray-300 transition transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Let's Collaborate
          </button>
        </div>
      </motion.div>

      {/* Shooting Stars */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </section>
  );
};

export default Hero;
