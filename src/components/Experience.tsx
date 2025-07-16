import React from 'react';
import { Briefcase, ExternalLink, Calendar, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Feynn Labs",
      role: "ML & DS",
      description: "Worked on machine learning and data science projects, focusing on predictive modeling, data preprocessing, and statistical analysis. Collaborated with cross-functional teams to develop data-driven solutions.",
      duration: "Internship",
      link: "https://drive.google.com/file/d/1kV0mUcnQAJVq0GVXXnN1aYrNEPC_Bl_H/view",
      skills: ["Python", "Machine Learning", "Data Analysis", "Statistical Modeling"]
    },
    {
      company: "CollegeTips.in",
      role: "Data Analytics",
      description: "Analyzed student engagement data and educational content performance. Created dashboards and reports to help improve content strategy and user experience through data-driven insights.",
      duration: "Internship",
      link: "https://drive.google.com/file/d/1ihVHM-W0Fe-gce6l6eqMX-8Ul2FatnSJ/view",
      skills: ["Data Analytics", "Dashboard Creation", "Python", "Excel"]
    },
    {
      company: "InAmigos",
      role: "Content Writing",
      description: "Created technical content, blog posts, and documentation related to data science and technology. Researched and wrote about emerging technologies and industry trends.",
      duration: "Internship",
      link: "https://drive.google.com/file/d/1gx4ZwQcn-aJyE9Gpy-rhhFhz6yQjbbmH/view?usp=sharing",
      skills: ["Technical Writing", "Research", "Content Strategy", "SEO"]
    },
    {
      company: "Skilltimate",
      role: "Web, ML",
      description: "Developed web applications integrated with machine learning models. Worked on full-stack development projects and implemented ML algorithms for web-based solutions.",
      duration: "Internship",
      link: "https://drive.google.com/file/d/1rW6dT5fGPbnfc5GjHi9EWX3vWd371Ef1/view?usp=sharing",
      skills: ["Web Development", "Machine Learning", "Node.js", "Python"]
    }
  ];

  const events = [
    "GDSC - Google Developer Student Club",
    "Vishesh - InterCollege Project Expo",
    "Microsoft - Tech Events",
    "Micron - Industry Workshops",
    "Stratum - 24 hours Hackathon",
    "Encode - Coding Competition"
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Work Experience</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Briefcase className="text-blue-400 mr-3" size={24} />
                    <div className="text-left">
                      <h4 className="text-2xl font-bold text-white">{exp.company}</h4>
                      <p className="text-blue-400 text-lg">{exp.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-left">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={exp.link}
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

        {/* Events Participated */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Events Participated</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Users className="text-green-400 mr-3" size={24} />
                <h4 className="text-2xl font-bold text-white">Technical Events & Workshops</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                    <span className="text-gray-300">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;