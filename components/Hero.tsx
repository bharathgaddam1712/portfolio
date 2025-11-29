import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="hero"
      ref={ref as any}
      className={`min-h-screen flex flex-col justify-center max-w-[1000px] px-6 sm:px-10 md:ml-[15%] transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h1 className="text-green font-mono text-base sm:text-lg mb-5 ml-1">
        Hi, my name is
      </h1>

      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4">
        Bharath Gaddam.
      </h2>

      <h3 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-slate mb-8">
        I build intelligent AI systems.
      </h3>

      <p className="text-slate text-lg max-w-[540px] mb-12 leading-relaxed">
        I'm an Integrated M.Tech student majoring in AI at <span className="text-green">Rajiv Gandhi Institute of Petroleum Technology</span>. I am open for opportunities in ML(Inference) Research & can help in Building Automated AI Solutions for your company.
      </p>

      <div>
        <a
          href="#work"
          className="inline-block px-7 py-4 border border-green text-green font-mono text-sm rounded hover:bg-green-tint transition-colors duration-300"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;
