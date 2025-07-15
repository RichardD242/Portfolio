import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Detailed Stats</h1>
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg p-8 shadow-lg flex flex-col items-center gap-8">
        <img
          src="https://github-readme-stats.vercel.app/api?username=RichardD242&show_icons=true&theme=github_dark&hide=issues"
          alt="GitHub Stats"
          className="rounded-lg w-full max-w-xl"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=RichardD242&layout=compact&theme=github_dark"
          alt="Top Languages"
          className="rounded-lg w-full max-w-xl"
        />
        <a
          href="https://github-readme-stats.hackclub.dev/api/wakatime?username=U08HH8E5DQB&api_domain=hackatime.hackclub.com&theme=darcula&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github-readme-stats.hackclub.dev/api/wakatime?username=U08HH8E5DQB&api_domain=hackatime.hackclub.com&theme=darcula&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8"
            alt="Hackatime Stats"
            className="rounded-lg w-full max-w-xl"
          />
        </a>
      </div>
    </section>
  );
};

export default Stats;
