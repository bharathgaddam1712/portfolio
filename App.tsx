
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';

const App: React.FC = () => {
  return (
    <div className="bg-navy min-h-screen text-slate font-sans selection:bg-green selection:text-navy">
      <Navbar />
      <Socials />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Projects />
        <Contact />
      </main>

      <footer className="py-6 text-center text-slate font-mono text-xs">
        <a 
          href="https://github.com/bchiang7/v4" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-green transition-colors"
        >
          <div>Designed by Brittany Chiang</div>
          <div>Built by Bharath Gaddam</div>
        </a>
      </footer>
    </div>
  );
};

export default App;
