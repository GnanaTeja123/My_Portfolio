import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient and soft overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Animated blurred color blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Main content layout */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
        
        {/* Profile Image (Left Side) */}
        <div className="relative flex-shrink-0">
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 mx-auto md:mx-0">
            <img
             src={profileImg}
             alt="Gnana Teja Kummaragiri"
             className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>
        </div>

        {/* Text Content (Right Side) */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-blue-400">Gnana Teja</span><br />
            <span className="text-gray-300">Kummaragiri</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in delay-300">
            Data Science Student & Machine Learning Enthusiast
          </p>

          <p className="text-lg text-gray-400 mb-6 leading-relaxed animate-fade-in delay-500">
            🧑‍💼 I'm a B.Tech Computer Science student at Malla Reddy Engineering College (MREC), passionate about leveraging data to drive meaningful insights and solve real-world problems. With hands-on experience in Python, Machine Learning, Data Analytics, and Data Science, I enjoy working on end-to-end solutions—from data cleaning and model building to interpretation and decision-making.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 mb-6 animate-fade-in delay-700">
            <a
              href="https://github.com/GnanaTeja123"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Github size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/gnanatejakummaragiri"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gnanatejakummaragiri@gmail.com"
              className="bg-red-600 hover:bg-red-500 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Call-to-Action Button */}
          <div className="animate-fade-in delay-1000">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
