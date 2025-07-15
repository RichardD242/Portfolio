import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { translations } from '../locales';

interface ContactProps {
  lang: 'en' | 'de' | 'cz';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: translations[lang].email,
      value: 'richard.daubner@icloud.com',
      link: 'mailto:richard.daubner@icloud.com'
    },
    {
      icon: MessageCircle,
      title: translations[lang].slack,
      value: translations[lang].slackUser,
      link: 'https://hackclub.slack.com/team/U08HH8E5DQB'
    },
    {
      icon: MapPin,
      title: translations[lang].location,
      value: translations[lang].vienna,
      link: '#'
    }
  ];

  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {translations[lang].getInTouch.split(' ').map((word, i) => i === 2 ? <span key={i} className="text-blue-500">{word}</span> : word + ' ')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {translations[lang].contactIntro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">{translations[lang].letsConnect}</h3>
              <p className="text-gray-400 mb-8">
                {translations[lang].connectIntro}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8 shadow-xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">{translations[lang].name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">{translations[lang].email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">{translations[lang].message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold text-lg"
            >
              <Send size={20} /> {translations[lang].send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;