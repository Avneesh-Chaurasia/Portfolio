import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const getOffset = (name) => {
    // The offset has been adjusted to move the page slightly upward.
    // Use a value that works well with your fixed navbar's height.
    return -65;
  };

  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col"
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Name, Quote, Social */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-lime-300">Avneesh Chaurasia</h3>
              <p className="text-sm text-gray-400 mt-2">
                Building intelligent systems with heart and code.
              </p>
            </div>
            <div className="flex gap-4 text-3xl">
              {[
                {
                  icon: <FaGithub />,
                  link: 'https://github.com/Avneesh-Chaurasia',
                },
                {
                  icon: <FaLinkedin />,
                  link: 'https://www.linkedin.com/in/avneesh-chaurasia/',
                },
              ].map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-700 rounded-md p-3 hover:border-lime-300 hover:scale-105 active:scale-95 transition duration-300"
                >
                  <span className="text-white hover:text-lime-300 transition duration-300">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Quick Links with scroll and underline */}
          <div className="flex flex-col items-start md:items-center justify-center">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-gray-300 text-base">
              {['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item} className="relative group">
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={getOffset(item)}
                    className="cursor-pointer transition-colors duration-300 relative"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12">
          <hr className="border-t border-gray-700 mb-4" />
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Avneesh Chaurasia — All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;