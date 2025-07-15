import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { translations } from '../locales';

interface ProjectsProps {
  lang: 'en' | 'de' | 'cz';
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const projects = [
    {
      title: 'Sproutly',
      description: translations[lang].sproutlyDesc,
      image: 'https://journey.90e2da927f7b2f6c30f10f86d1b5e679.r2.cloudflarestorage.com/ic6u2oyskahpik088il2sni983qd?response-content-disposition=inline%3B%20filename%3D%22SproutlyBanner.png%22%3B%20filename%2A%3DUTF-8%27%27SproutlyBanner.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=14147de7f716b4f968218760dfed0809%2F20250708%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250708T095736Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f796390a858cfb133b6842e226756175aa53aa86ac9185b24933fab894a86f33',
      tech: ['Html', 'Javascript', 'Supabase (DB)', 'CSS' , 'Typescript'],
      liveUrl: 'https://richardd242.github.io/sproutly/main/index',
      githubUrl: 'https://github.com/RichardD242/sproutly',
      hours: '18h 42m'
    },
    {
      title: 'Hackwallet',
      description: translations[lang].hackwalletDesc,
      image: 'https://journey.90e2da927f7b2f6c30f10f86d1b5e679.r2.cloudflarestorage.com/2vixxt6bofr1a8zbemtd7sv52lrz?response-content-disposition=inline%3B%20filename%3D%22HackWalletBanner.png%22%3B%20filename%2A%3DUTF-8%27%27HackWalletBanner.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=14147de7f716b4f968218760dfed0809%2F20250708%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250708T095900Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=4c450cb5589e430d48f9a8596ff681aac2e2a1d02a400ce782fe511131b56d8a',
      tech: ['Html', 'Javascript' , 'Typescript', 'Slack API'],
      liveUrl: '', // Coming soon
      githubUrl: 'https://github.com/RichardD242/HackWallet',
      hours: '2h 39m'
    }
  ];

  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {translations[lang].my} <span className="text-blue-500">{translations[lang].projects}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {translations[lang].projectsIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {project.hours && (
                  <p className="text-xs text-gray-500 mb-2">⏱️ {project.hours}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech: string, techIndex: number) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      {translations[lang].liveDemo}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed">
                      {translations[lang].comingSoon}
                    </span>
                  )}
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-colors"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    {translations[lang].github}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;