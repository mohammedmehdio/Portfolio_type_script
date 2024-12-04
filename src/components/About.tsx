import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';
import { 
  Database, Server, Code2, Laptop, FileCode, 
  Boxes, Globe, Terminal, Braces, GitBranch
} from 'lucide-react';

const skills = [
  { name: 'MongoDB', icon: Database },
  { name: 'Express.js', icon: Server },
  { name: 'React', icon: Code2 },
  { name: 'Node.js', icon: Terminal },
  { name: 'HTML5', icon: FileCode },
  { name: 'CSS3', icon: Boxes },
  { name: 'REST API', icon: Globe },
  { name: 'JavaScript', icon: Braces },
  { name: 'TypeScript', icon: Laptop },
  { name: 'Git', icon: GitBranch }
];

const About = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 py-20" id="about">
      <Background />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto shadow-xl"
        >
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a passionate MERN Stack Developer with a strong foundation in web development. 
            My journey in coding started with a curiosity about how things work on the web, 
            and it has evolved into a professional career where I create innovative solutions 
            for real-world problems.
          </p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            I specialize in building full-stack applications using MongoDB, Express.js, React, 
            and Node.js. My experience includes developing responsive web applications, 
            RESTful APIs, and database architecture.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700/50 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-700 transition-all duration-300"
              >
                <skill.icon className="w-8 h-8 text-blue-500" />
                <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;