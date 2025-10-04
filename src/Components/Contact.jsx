import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdSend } from 'react-icons/md';
import { useRef, useState } from 'react';

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Reset form after short delay to allow Formspree submit
    setTimeout(() => {
      formRef.current.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000); // hide message after 4s
    }, 100);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-4 py-6 flex items-start justify-center"
      style={{ scrollMarginTop: '110px' }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold text-blue-400 text-center mb-6"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4">
          {/* Left: Send a Message */}
          <motion.div variants={item} className="bg-gray-800 border border-gray-700 rounded-xl p-4 h-fit">
            <h3 className="text-2xl font-bold text-lime-300 mb-3">Send a Message</h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xkgvypkn" // make sure this is your verified Formspree URL
              method="POST"
              className="flex flex-col gap-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your name"
                    required
                    className="w-full px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  name="Subject"
                  placeholder="What's this about?"
                  required
                  className="w-full px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  rows="4"
                  name="Message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-3 py-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white text-base font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2"
              >
                <MdSend className="text-xl" style={{ transform: 'rotate(-30deg)' }} />
                Send Message
              </button>

              {submitted && (
                <p className="text-sm text-green-400 mt-2 text-center">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>

          {/* Right: Contact Info + Social */}
          <motion.div variants={item} className="flex flex-col gap-3">
            <motion.div variants={item} className="bg-gray-800 border border-gray-700 rounded-xl p-4">
              <h3 className="text-xl font-bold text-lime-300 mb-2">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <MdEmail className="text-2xl text-blue-400" />
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm">charasiaavneesh1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MdLocationOn className="text-2xl text-blue-400" />
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-sm">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="bg-gray-800 border border-gray-700 rounded-xl p-4">
              <h3 className="text-xl font-bold text-lime-300 mb-3">Let’s Connect</h3>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://github.com/Avneesh-Chaurasia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-700 rounded-lg px-3 py-2 hover:border-lime-300 transition duration-300 min-w-[120px]"
                >
                  <FaGithub className="text-2xl text-white hover:text-lime-300 transition duration-300" />
                  <span className="text-sm text-gray-300 hover:text-white font-semibold">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/avneesh-chaurasia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-700 rounded-lg px-3 py-2 hover:border-lime-300 transition duration-300 min-w-[120px]"
                >
                  <FaLinkedin className="text-2xl text-white hover:text-lime-300 transition duration-300" />
                  <span className="text-sm text-gray-300 hover:text-white font-semibold">
                    LinkedIn
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
