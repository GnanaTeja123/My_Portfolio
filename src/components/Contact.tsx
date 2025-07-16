import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // FormSubmit will handle the form submission
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on interesting projects, 
                or simply having a conversation about data science and technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:gnanatejakummaragiri@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    gnanatejakummaragiri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">LinkedIn</p>
                  <a 
                    href="http://www.linkedin.com/in/gnanatejakummaragiri" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/gnanatejakummaragiri
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-600 p-3 rounded-full">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/GnanaTeja123" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    github.com/GnanaTeja123
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form 
              action="https://formsubmit.co/gnanatejakummaragiri@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://your-success-page.com" />
              
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 hover:scale-105 transform"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;