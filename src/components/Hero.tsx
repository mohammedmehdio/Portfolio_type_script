import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center" id="home">
      <Background />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-2xl mb-4"
        >
          Hi There! 👋
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          I'M <span className="text-blue-500">MED MEHDI BOUDIR</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          MERN Stack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex space-x-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-colors transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;