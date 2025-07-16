import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-400">G</span>nana<span className="text-blue-400">T</span>eja
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Data Science Student passionate about transforming data into meaningful insights and building innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:gnanatejakummaragiri@gmail.com"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={16} className="mr-2" />
                gnanatejakummaragiri@gmail.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/GnanaTeja123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="http://www.linkedin.com/in/gnanatejakummaragiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:gnanatejakummaragiri@gmail.com"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="text-red-400 mx-2" size={16} /> by Gnana Teja Kummaragiri
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;