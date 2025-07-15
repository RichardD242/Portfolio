import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/animations.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<'en' | 'de' | 'cz'>('en');

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const sections = [
    { id: 'home', component: (props: any) => <Home {...props} setActiveSection={setActiveSection} lang={lang} /> },
    { id: 'about', component: (props: any) => <About {...props} lang={lang} /> },
    { id: 'projects', component: (props: any) => <Projects {...props} lang={lang} /> },
    { id: 'contact', component: (props: any) => <Contact {...props} lang={lang} /> }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white font-inter">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} lang={lang} setLang={setLang} />
      <main className="lg:ml-80">
        {sections.map(({ id, component: Component }) => (
          activeSection === id && (
            <div key={id}>
              <Component lang={lang} setActiveSection={setActiveSection} />
            </div>
          )
        ))}
      </main>
    </div>
  );
}

export default App;