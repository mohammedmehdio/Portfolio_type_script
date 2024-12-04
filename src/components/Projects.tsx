import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Background from './Background';

const projects = [
  {
    title: 'Chatify',
    description: 'A personal chat room or workspace using React.js, Material-UI, and Firebase. Features real-time messaging, image sharing, and message reactions.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Bits-of-Code',
    description: 'A personal blog built with Next.js and Tailwind CSS for markdown-based content. Offers dark mode and a seamless blogging experience.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Editor.io',
    description: 'An online code and markdown editor with React.js that supports HTML, CSS, and JavaScript. Features instant preview and auto-save.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 py-20" id="projects">
      <Background />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Recent <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-gray-400">Here are a few projects I've worked on recently.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative pb-[56.25%] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-1"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-1"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;