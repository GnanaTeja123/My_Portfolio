import React from 'react';
import { Target, Heart, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Description */}
          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
            <div className="flex items-center mb-6">
              <User className="text-blue-400 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">My Description</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I'm a B.Tech 4th-year student at Malla Reddy Engineering College (MREC), passionate about leveraging data to drive meaningful insights and solve real-world problems. With hands-on experience in Python, Machine Learning, Data Analytics, and Data Science, I enjoy working on end-to-end solutions—from data cleaning and model building to interpretation and decision-making. I'm also familiar with SDLC principles and backend development using Node.js.
            </p>
          </div>

          {/* Career Goals */}
          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
            <div className="flex items-center mb-6">
              <Target className="text-green-400 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">My Desired Career</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I aspire to build a career as a Data Analyst or Data Scientist, where I can apply my analytical mindset, problem-solving skills, and technical expertise to extract actionable insights and support data-driven decision-making. I'm particularly enthusiastic about working in the domains of Data Science and Machine Learning, where innovation and real-time impact intersect.
            </p>
          </div>

          {/* Interests */}
          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
            <div className="flex items-center mb-6">
              <Heart className="text-pink-400 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">My Interests</h3>
            </div>
            <ul className="text-gray-300 space-y-3 text-left">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Artificial Intelligence and its applications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Problem-solving through data and algorithms
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Exploring new technologies and datasets
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Working with NLP, Blockchain, Python libraries
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;