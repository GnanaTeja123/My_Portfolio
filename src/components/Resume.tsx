import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1kfYD8bq55CTsKPlaOkelFIE3tO2BXdpK/view";

  return (
    <section id="resume" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-6">
              <FileText className="text-blue-400 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-white mb-2">Download My Resume</h3>
              <p className="text-gray-300">
                Get a comprehensive overview of my skills, experience, and achievements
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Eye size={20} className="mr-2" />
                View Resume
              </a>
              
              <a
                href={resumeLink}
                download
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} className="mr-2" />
                Download PDF
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">2+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400">8+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">10+</div>
                <div className="text-gray-300 text-sm">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;