import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, FileText, Mail, Github, Linkedin, Star } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/path-to-your-resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-blue-500 font-bold text-xl">MB.</a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-105">
                <Home size={18} />
                <span>Home</span>
              </a>
              <a href="#about" className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-105">
                <User size={18} />
                <span>About</span>
              </a>
              <a href="#projects" className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-105">
                <Briefcase size={18} />
                <span>Projects</span>
              </a>
              <button onClick={handleResumeClick} className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-105">
                <FileText size={18} />
                <span>Resume</span>
              </button>
              <a href="#contact" className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-105">
                <Mail size={18} />
                <span>Contact</span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <button className="text-gray-300 hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
              <Star size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;