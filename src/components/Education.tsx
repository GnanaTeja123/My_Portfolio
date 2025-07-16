import React from 'react';

const educationData = [
  {
    title: 'Malla Reddy Engineering College',
    degree: 'B.Tech – CSE (Data Science)',
    result: 'CGPA: 9.26',
    location: 'Maisammaguda, Hyderabad',
  },
  {
    title: 'Deeksha Junior College',
    degree: 'Intermediate – MPC',
    result: 'Percentage: 97.9%',
    location: 'ECIL, Hyderabad',
  },
  {
    title: 'Bhavans Sri Ramakrishna Vidyalaya',
    degree: '1st–10th – CBSE',
    result: 'Percentage: 95.8%',
    location: 'Sainikpuri, Hyderabad',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-950 text-white px-6 md:px-12 relative">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-16 animate-fade-in">🎓 Education</h2>

      {/* Vertical Line */}
      <div className="absolute left-1/2 top-32 transform -translate-x-1/2 h-[calc(100%-6rem)] w-1 bg-blue-500/40"></div>

      <div className="space-y-16 max-w-5xl mx-auto">
        {educationData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center group ${
                isLeft ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition duration-300"></div>

              {/* Content Box */}
              <div className={`w-full md:w-1/2 px-6 z-20 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                  className="bg-gray-800 border border-blue-500/50 hover:border-blue-400 transition-all duration-300 rounded-xl shadow-xl p-6 group-hover:scale-105 group-hover:shadow-blue-500/30"
                >
                  <h3 className="text-xl font-bold text-blue-300">{item.title}</h3>
                  <p className="text-gray-200 mt-1">{item.degree}</p>
                  <p className="text-gray-400">{item.result}</p>
                  <p className="text-gray-400">{item.location}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
