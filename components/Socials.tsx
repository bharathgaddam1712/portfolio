
import React from 'react';
import { Github, Linkedin, Mail, Hash, Code } from 'lucide-react';

const Socials: React.FC = () => {
  return (
    <>
      {/* Left Side - Social Icons */}
      <div className="hidden lg:block fixed bottom-0 left-10 z-10 w-10 text-light-slate">
        <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-light-slate after:mx-auto after:mt-6">
          <li className="hover:text-green hover:-translate-y-1 transition-all duration-300">
            <a href="https://github.com/bharathgaddam1712" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
          </li>
          <li className="hover:text-green hover:-translate-y-1 transition-all duration-300">
            <a href="https://www.linkedin.com/in/BharathGaddam06" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </li>
          <li className="hover:text-green hover:-translate-y-1 transition-all duration-300">
            <a href="https://hashnode.com/@BharathGaddam" target="_blank" rel="noreferrer" aria-label="Hashnode"><Hash size={20} /></a>
          </li>
          <li className="hover:text-green hover:-translate-y-1 transition-all duration-300">
            <a href="https://leetcode.com/u/Bharath_Gaddam" target="_blank" rel="noreferrer" aria-label="LeetCode"><Code size={20} /></a>
          </li>
          <li className="hover:text-green hover:-translate-y-1 transition-all duration-300">
            <a href="mailto:22cs2013@rgipt.ac.in" aria-label="Email"><Mail size={20} /></a>
          </li>
        </ul>
      </div>

      {/* Right Side - Email */}
      <div className="hidden lg:block fixed bottom-0 right-10 z-10 w-10 text-light-slate">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-light-slate after:mx-auto after:mt-6">
          <a
            href="mailto:22cs2013@rgipt.ac.in"
            className="font-mono text-xs tracking-widest hover:text-green hover:-translate-y-1 transition-all duration-300 vertical-writing"
            style={{ writingMode: 'vertical-rl' }}
          >
            22cs2013@rgipt.ac.in
          </a>
        </div>
      </div>
    </>
  );
};

export default Socials;
