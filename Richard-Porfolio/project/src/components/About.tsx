import React from 'react';
import { Palette, Brain, Rocket, Wine } from 'lucide-react';
import { translations } from '../locales';

interface AboutProps {
  lang: 'en' | 'de' | 'cz';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const skills = [
    {
      icon: Brain,
      title: translations[lang].creativity,
      description: translations[lang].creativityDesc,
      color: 'text-pink-400'
    },
    {
      icon: Palette,
      title: translations[lang].uiux,
      description: translations[lang].uiuxDesc,
      color: 'text-purple-500'
    },
    {
      icon: Rocket,
      title: translations[lang].engineering,
      description: translations[lang].engineeringDesc,
      color: 'text-yellow-500'
    },
    {
      icon: Wine,
      title: translations[lang].professional,
      description: translations[lang].professionalDesc,
      color: 'text-blue-500'
    }
  ];

  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/Aboutme_portfolio.jpeg"
                alt="About Me"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center text-2xl shadow-xl">
                🇨🇿
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {translations[lang].about} <span className="text-blue-500">{translations[lang].me}</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {translations[lang].aboutMe1}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {translations[lang].aboutMe2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <skill.icon className={`w-8 h-8 ${skill.color} mb-4`} />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;