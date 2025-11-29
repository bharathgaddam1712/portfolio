
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { FEATURED_PROJECTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Work: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="work"
      ref={ref as any}
      className={`max-w-[1000px] mx-auto py-24 px-6 sm:px-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionHeading number="03" title="Some Things I've Built" />

      <div className="space-y-24">
        {FEATURED_PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="relative grid md:grid-cols-12 items-center gap-4">
              {/* Project Image Area */}
              <div className={`md:col-span-7 md:row-start-1 relative h-full min-h-[300px] group ${isEven ? 'md:col-start-1' : 'md:col-start-6'}`}>
                <a href={project.external} target="_blank" rel="noopener noreferrer" className="block w-full h-full absolute inset-0 z-10 cursor-pointer"></a>
                <div className="relative w-full h-full rounded shadow-xl overflow-hidden bg-green transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-multiply grayscale hover:grayscale-0 filter transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>

              {/* Project Content Area */}
              <div className={`md:col-span-6 md:row-start-1 z-20 pointer-events-none md:pointer-events-auto flex flex-col ${isEven ? 'md:items-end md:text-right md:col-start-7' : 'md:items-start md:text-left md:col-start-1'} relative`}>
                <p className="font-mono text-green text-sm mb-2">Featured Project</p>
                <h3 className="text-lightest-slate text-2xl font-bold mb-4 hover:text-green transition-colors">
                  <a href={project.external} target="_blank" rel="noreferrer">{project.title}</a>
                </h3>

                <div className="bg-light-navy p-6 rounded shadow-lg text-light-slate text-sm mb-4 md:hover:shadow-xl transition-shadow">
                  {project.description}
                </div>

                <ul className={`flex flex-wrap mb-8 text-light-slate font-mono text-xs ${isEven ? 'justify-end' : 'justify-start'}`}>
                  {project.tech.map(t => (
                    <li key={t} className={`mb-2 ${isEven ? 'ml-5' : 'mr-5'}`}>{t}</li>
                  ))}
                </ul>

                <div className={`flex items-center text-lightest-slate ${isEven ? 'justify-end' : 'justify-start'}`}>
                  {project.github && (
                    <a href={project.github} className="hover:text-green p-2" target="_blank" rel="noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} className="hover:text-green p-2" target="_blank" rel="noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
