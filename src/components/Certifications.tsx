import React from 'react';
import { Award, ExternalLink, Shield } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Google Data Analytics",
      description: "Comprehensive course covering data analytics fundamentals, data visualization, and statistical analysis using industry-standard tools.",
      link: "https://drive.google.com/file/d/1rF-buncUISNMnUSfwFb7Ez2yi0jcV8HR/view",
      category: "Data Analytics"
    },
    {
      name: "Power of Statistics",
      description: "Advanced statistical methods and their applications in data science, including hypothesis testing and regression analysis.",
      link: "https://drive.google.com/file/d/1_wP3itGfj0k7fphJQsBxe7Wc4bxyhnTz/view",
      category: "Statistics"
    },
    {
      name: "Python for Data Science",
      description: "Hands-on Python programming for data science, including pandas, numpy, and machine learning libraries.",
      link: "https://drive.google.com/file/d/1FXEp8cMPhc-3W9kwghGkg3gywIrpF2Ih/view",
      category: "Programming"
    },
    {
      name: "Data Analysis with R",
      description: "Statistical computing and data analysis using R programming language, including data visualization with ggplot2.",
      link: "https://drive.google.com/file/d/1birya4ObU4UGD63_AtGmfMZypR5f6O84/view",
      category: "Data Analytics"
    },
    {
      name: "Business Data Analytics",
      description: "Application of data analytics in business contexts, including KPI analysis and business intelligence.",
      link: "https://drive.google.com/file/d/13dnX0jHO2edOf0gh7z8dA5R6E_1YC6jK/view?usp=sharing",
      category: "Business"
    },
    {
      name: "GIT",
      description: "Version control system fundamentals, branching strategies, and collaborative development workflows.",
      link: "https://drive.google.com/file/d/1iesNJ0DcsnFaw4ZPxcyLNgnO6NAtOe8j/view?usp=sharing",
      category: "Development"
    },
    {
      name: "Agile Scrum",
      description: "Project management methodologies, sprint planning, and agile development practices.",
      link: "https://drive.google.com/file/d/1FB0U14l4LMPdpP3nyQ6K6rZRVm0EzmJg/view?usp=sharing",
      category: "Management"
    }
  ];

  const badges = [
    {
      name: "Introduction to CyberSecurity",
      description: "Foundational cybersecurity concepts, threat analysis, and security best practices.",
      link: "https://www.credly.com/badges/e7046426-2dc2-4f14-a9cd-21536244c40d",
      category: "Security"
    },
    {
      name: "Modern AI",
      description: "Contemporary artificial intelligence technologies, machine learning applications, and AI ethics.",
      link: "https://www.credly.com/badges/c9424a2d-e054-4535-abae-4cee61b2a7a0",
      category: "AI/ML"
    },
    {
      name: "Global AI Bootcamp",
      description: "Intensive AI training program covering latest AI technologies, tools, and real-world applications.",
      link: "https://globalai.community/badges/d80830ff-7306-4319-995c-796b3db1792a/",
      category: "AI/ML"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications & Badges</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-yellow-400 flex-shrink-0 mr-3" size={24} />
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                    {cert.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{cert.name}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Certificate <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Badges</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
                <div className="flex items-start justify-between mb-4">
                  <Shield className="text-green-400 flex-shrink-0 mr-3" size={24} />
                  <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                    {badge.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{badge.name}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{badge.description}</p>
                <a
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  View Badge <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;