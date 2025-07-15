import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, Menu, X, Github, Slack } from 'lucide-react';
import { translations } from '../locales';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  lang: 'en' | 'de' | 'cz';
  setLang: (lang: 'en' | 'de' | 'cz') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: translations[lang].home, icon: Home },
    { id: 'about', label: translations[lang].about, icon: User },
    { id: 'projects', label: translations[lang].projects, icon: Briefcase },
    { id: 'contact', label: translations[lang].contact, icon: Mail }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/richard-daubner', label: translations[lang].github },
    { icon: Slack, href: 'https://hackclub.slack.com/team/U08HH8E5DQB', label: translations[lang].slack }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-80 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-8 border-b border-gray-700">
            <img
              src="/pp_portfolio.jpeg"
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-500 shadow-lg"
            />
            <h1 className="text-2xl font-bold mb-2">Richard</h1>
            <p className="text-gray-400">{translations[lang].profileTitle}</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-8">
            <ul className="space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      setActiveSection(id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === id
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="p-8 border-t border-gray-700">
            {/* Language Selector - moved above social icons, left-aligned */}
            <div className="flex justify-start mb-6">
              <div className="flex gap-2">
                <button
                  className={`px-3 py-1 rounded-full text-sm font-semibold border transition-colors duration-200 ${lang === 'en' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'}`}
                  onClick={() => setLang('en')}
                >
                  EN
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm font-semibold border transition-colors duration-200 ${lang === 'de' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'}`}
                  onClick={() => setLang('de')}
                >
                  DE
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm font-semibold border transition-colors duration-200 ${lang === 'cz' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'}`}
                  onClick={() => setLang('cz')}
                >
                  CZ
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;