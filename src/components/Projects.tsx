import React from 'react';
import { Github, ExternalLink, Database, Brain, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      category: "Data Analytics",
      icon: <Database className="text-blue-400" size={24} />,
      items: [
        {
          name: "AdVision",
          description: "Advanced advertisement classification system using machine learning techniques to categorize and analyze advertising content effectiveness.",
          link: "https://github.com/GnanaTeja123/Ads_Classification",
          tech: ["Python", "Machine Learning", "OpenCV", "Scikit-learn"]
        },
        {
          name: "Customer Churn",
          description: "Predictive analytics model to identify customers likely to churn, helping businesses improve retention strategies.",
          link: "https://github.com/GnanaTeja123/Customer_churn",
          tech: ["Python", "Pandas", "Data Visualization", "Predictive Modeling"]
        },
        {
          name: "COVID-19 Analysis",
          description: "Comprehensive analysis of COVID-19 data trends, patterns, and insights using statistical methods and data visualization.",
          link: "https://github.com/GnanaTeja123/Covid_19_Analysis",
          tech: ["Python", "Matplotlib", "Seaborn", "Statistical Analysis"]
        }
      ]
    },
    {
      category: "ML/DS",
      icon: <Brain className="text-green-400" size={24} />,
      items: [
        {
          name: "Stock Prediction (LSTM)",
          description: "Deep learning model using LSTM neural networks to predict stock prices based on historical market data.",
          link: "https://github.com/GnanaTeja123/Stock_Prediction",
          tech: ["Python", "TensorFlow", "LSTM", "Time Series Analysis"]
        },
        {
          name: "Crop Yield Prediction",
          description: "Machine learning model to predict crop yields using various agricultural and environmental factors.",
          link: "https://github.com/GnanaTeja123/Crop_Yield",
          tech: ["Python", "Random Forest", "Feature Engineering", "Agriculture Data"]
        },
        {
          name: "Customer Segmentation",
          description: "Unsupervised learning approach to segment customers based on purchasing behavior and demographics.",
          link: "https://github.com/GnanaTeja123/Customer_segmentation",
          tech: ["Python", "K-Means", "Clustering", "Customer Analytics"]
        }
      ]
    },
    {
      category: "Web Dev",
      icon: <Globe className="text-purple-400" size={24} />,
      items: [
        {
          name: "Resume Screening Tool",
          description: "Automated resume screening application using NLP techniques to match candidate profiles with job requirements.",
          link: "https://github.com/GnanaTeja123/Resume-Screening",
          tech: ["Python", "NLP", "Flask", "Machine Learning"]
        },
        {
          name: "Carbon Footprint Tracker",
          description: "Web application to track and monitor carbon footprint with recommendations for environmental sustainability.",
          link: "https://github.com/GnanaTeja123/CarbonFootprint",
          tech: ["Node.js", "React", "MongoDB", "Environmental Data"]
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center justify-center mb-8">
                {category.icon}
                <h3 className="text-3xl font-bold text-white ml-4">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((project, projectIndex) => (
                  <div key={projectIndex} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">{project.name}</h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-left">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project <ExternalLink size={16} className="ml-2" />
                    </a>
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

export default Projects;