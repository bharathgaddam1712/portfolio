import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { JOBS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref as any}
      className={`max-w-[700px] mx-auto py-24 px-6 sm:px-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionHeading number="02" title="Where I've Worked" />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-lightest-navy w-full md:w-32 min-w-max no-scrollbar">
          {JOBS.map((job, index) => (
            <button
              key={index}
              onClick={() => setActiveTabId(index)}
              className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-300 hover:bg-light-navy hover:text-green
                ${activeTabId === index
                  ? 'text-green border-b-2 md:border-b-0 md:border-l-2 border-green bg-light-navy/50 -mb-[2px] md:-mb-0 md:-ml-[2px]'
                  : 'text-slate border-b-0 md:border-l-0 border-transparent'
                }
              `}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Panel Content */}
        <div className="w-full min-h-[300px]">
          {JOBS.map((job, index) => (
            <div
              key={index}
              className={`transition-opacity duration-300 ${activeTabId === index ? 'block opacity-100' : 'hidden opacity-0'
                }`}
            >
              <h3 className="text-xl font-medium text-lightest-slate mb-1">
                {job.title} <span className="text-green">@ <a href={job.url} className="hover:underline">{job.company}</a></span>
              </h3>
              <p className="font-mono text-sm text-light-slate mb-6">
                {job.range}
              </p>
              <ul className="space-y-4">
                {job.duties.map((duty, i) => (
                  <li key={i} className="flex items-start text-slate text-lg">
                    <span className="text-green mr-3 mt-1.5 text-xs">▹</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;