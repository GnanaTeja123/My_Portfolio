import React from 'react';
import { Code, Database, Wrench, BarChart3 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["Python", "R", "SQL", "Java (basic)", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Tools",
      icon: <Wrench className="text-green-400" size={24} />,
      skills: ["VS Code", "Colab", "Jupyter", "Anaconda"]
    },
    {
      title: "Frameworks/Methods",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["Node.js", "Agile Scrum", "Power BI", "Tableau", "Excel"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-center">
                    <div className="bg-gray-800 px-4 py-2 rounded-full w-full text-center">
                      <span className="text-gray-300 font-medium">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;