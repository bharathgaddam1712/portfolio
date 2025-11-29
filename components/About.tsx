
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const skills = [
    'Python',
    'C / Java',
    'JavaScript',
    'React',
    'PyTorch',
    'Docker',
    'MongoDB',
    'PostgreSQL',
    'NVIDIA Triton',
    'GenAi',
  ];

  return (
    <section
      id="about"
      ref={ref as any}
      className={`max-w-[900px] mx-auto py-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate mb-10">
        <span className="font-mono text-green text-xl md:text-2xl mr-2">01.</span>
        About Me
        <span className="h-[1px] bg-slate-dark ml-4 w-[200px] md:w-[300px] opacity-20"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
        <div className="text-slate text-lg leading-relaxed space-y-4">
          <p className="text-[1.1rem]">
            Hello! My name is Bharath and I enjoy building intelligent systems that solve real-world problems. I am currently pursuing an Integrated M.Tech in Artificial Intelligence at <span className="text-green">Rajiv Gandhi Institute of Petroleum Technology (RGIPT)</span>, Bengaluru, maintaining a CGPA of 8.65.
          </p>
          <p className="text-[1.1rem]">
            I worked as an Research Intern at <span className="text-green">DRDO</span> & MLE Intern at <span className="text-green">Matrice.Ai</span>.
          </p>
          <p className="text-[1.1rem]">
            I am open for opportunities in ML(Inference) Research & can help in Building Automated AI Solutions for your company.
          </p>
          <p className="text-[1.1rem]">
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-2 mt-5 overflow-hidden list-none p-0">
            {skills.map((skill, i) => (
              <li key={i} className="relative pl-5 font-mono text-xs sm:text-sm before:content-['▹'] before:absolute before:left-0 before:text-green before:text-sm before:leading-3">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative max-w-[300px] mx-auto md:mx-0 group">
          <div className="relative w-full rounded bg-green transition-all duration-300 group-hover:outline-0">
            {/* Image */}
            <img
              src={`${import.meta.env.BASE_URL}images/me.jpg`}
              alt="Bharath Gaddam"
              className="relative z-10 w-full rounded mix-blend-multiply grayscale contrast-100 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
            />

            {/* Overlay (Before) */}
            <div className="absolute inset-0 rounded bg-navy mix-blend-screen transition-all duration-300 group-hover:bg-transparent z-20 pointer-events-none"></div>

            {/* Border (After) */}
            <div className="absolute inset-0 border-2 border-green rounded transition-all duration-300 translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
