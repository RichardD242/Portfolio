import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ChevronDown, Github } from 'lucide-react';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiMysql, SiFigma, SiDocker, SiLinux, SiNodedotjs, SiReact, SiTailwindcss, SiSlack, SiUnity, SiLua, SiRoblox } from 'react-icons/si';
import { FaWindows } from 'react-icons/fa';
import { SiSharp } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { translations } from '../locales';

interface HomeProps {
  setActiveSection: (section: string) => void;
  lang: 'en' | 'de' | 'cz';
}

const Home: React.FC<HomeProps> = ({ setActiveSection, lang }) => {
  const navigate = useNavigate();
  const scrollToNext = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in leading-tight">
              {translations[lang].helloIm} <span className="text-blue-500 whitespace-nowrap">Richard Daubner</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              {translations[lang].heroTitle}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
              {translations[lang].heroDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-delay-3">
            <button
              className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-semibold"
              onClick={() => setActiveSection('projects')}
            >
              {translations[lang].viewMyWork}
            </button>
            <a
              href="https://github.com/RichardD242"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 font-semibold"
            >
              <Github size={20} />
              {translations[lang].github}
            </a>
          </div>

          <button 
            onClick={scrollToNext}
            className="animate-bounce cursor-pointer hover:text-blue-500 transition-colors"
          >
            <ChevronDown size={32} className="text-gray-500 mx-auto" />
          </button>
        </div>
      </section>

      {/* Quick Stats Preview Section */}
      <section id="quick-stats" className="min-h-screen bg-gray-800 flex items-center justify-center p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">{translations[lang].quickStats}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-500 mb-2">22+</h3>
              <p className="text-gray-300">{translations[lang].hoursCoded}</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-500 mb-2">2+</h3>
              <p className="text-gray-300">{translations[lang].projectsCompleted}</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-500 mb-2">4+</h3>
              <p className="text-gray-300">{translations[lang].languagesMastered}</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-all duration-300">
              <h3 className="text-2xl font-bold text-pink-500 mb-2">13+</h3>
              <p className="text-gray-300">{translations[lang].githubStars}</p>
            </div>
          </div>
          <button 
            className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-semibold"
            onClick={() => navigate('/stats')}
          >
            {translations[lang].viewDetailedStats}
          </button>
        </div>
      </section>

      {/* What I Work With Section */}
      <section id="what-i-work-with" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">{translations[lang].whatIWorkWith}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Programming Languages */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">{translations[lang].programmingLanguages}</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 animate-fade-in-up">
                  <SiHtml5 color="#e34c26" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].html5}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 animate-fade-in-up">
                  <SiCss3 color="#1572b6" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].css3}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 animate-fade-in-up">
                  <SiJavascript color="#f7df1e" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].javascript}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 animate-fade-in-up">
                  <SiTypescript color="#3178c6" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].typescript}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 animate-fade-in-up">
                  <SiPython color="#ffd43b" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].python}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 animate-fade-in-up">
                  <SiLua color="#000080" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].lua}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 animate-fade-in-up">
                  <SiSharp color="#178600" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].csharp}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 animate-fade-in-up">
                  <SiMysql color="#00758f" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].sql}</span>
                </div>
              </div>
            </div>
            {/* Programs/Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-green-400 mb-6 text-center">{translations[lang].programsTools}</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{ width: 48, height: 48 }} />
                  <span className="mt-3 text-white font-medium">{translations[lang].github}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <SiFigma color="#f24e1e" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].figma}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <SiDocker color="#2496ed" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].docker}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <SiLinux color="#fbc02d" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].linux}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <SiNodedotjs color="#3c873a" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].nodejs}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <SiRoblox color="#00adef" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].roblox}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <SiUnity color="#222" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].unity}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <FaWindows color="#00adef" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].windows}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-green-500/20 animate-fade-in-up">
                  <FaMicrosoft color="#5c2d91" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].visualstudio}</span>
                </div>
              </div>
            </div>
            {/* Miscellaneous */}
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">{translations[lang].miscellaneous}</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/20 animate-fade-in-up">
                  <SiReact color="#61dafb" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].react}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/20 animate-fade-in-up">
                  <SiTailwindcss color="#38bdf8" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].tailwindcss}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/20 animate-fade-in-up">
                  <SiSlack color="#611f69" size={48} />
                  <span className="mt-3 text-white font-medium">{translations[lang].slack}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/20 animate-fade-in-up">
                  <span style={{color:'#fff',fontSize:48}}>🎨</span>
                  <span className="mt-3 text-white font-medium">{translations[lang].uiuxPrinciples}</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/20 animate-fade-in-up">
                  <span style={{color:'#fff',fontSize:48}}>🌍</span>
                  <span className="mt-3 text-white font-medium">{translations[lang].opensource}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;