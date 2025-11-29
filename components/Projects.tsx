import React from 'react';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { OTHER_PROJECTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as any}
      className={`max-w-[1000px] mx-auto py-24 px-6 sm:px-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-lightest-slate mb-4">Other Noteworthy Projects</h2>
        <a href="#" className="font-mono text-green text-sm hover:underline">view the archive</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {OTHER_PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group bg-light-navy px-6 py-8 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out-cubic cursor-default"
          >
            <div className="flex justify-between items-center mb-8">
              <Folder className="text-green" size={40} />
              <div className="flex space-x-4 text-slate">
                {project.tech.includes('Research Paper') ? (
                  <span className="text-green font-mono text-xs px-2 py-1 border border-green rounded">Research Paper</span>
                ) : (
                  <>
                    {project.github && (
                      <a href={project.github} className="hover:text-green transition-colors" target="_blank" rel="noreferrer">
                        <Github size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} className="hover:text-green transition-colors" target="_blank" rel="noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-lightest-slate mb-4 group-hover:text-green transition-colors">
              <a href={project.external || project.github} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h3>

            <p className="text-light-slate text-sm mb-6">
              {project.description}
            </p>

            <ul className="flex flex-wrap font-mono text-xs text-slate mt-auto">
              {project.tech.map((t, i) => (
                <li key={i} className="mr-3 mb-2">{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;