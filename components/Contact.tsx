
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-[600px] mx-auto py-24 px-6 text-center mb-20">
      <p className="font-mono text-green text-base mb-5">04. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">Get In Touch</h2>
      <p className="text-slate text-lg mb-12">
        I am open to internships,Research collaborations in AI. Iam open for building Ai Agents.Whether you have a question or want to partner, I'll be available!
      </p>
      <a
        href="mailto:22cs2013@rgipt.ac.in"
        className="inline-block border border-green text-green font-mono px-8 py-4 rounded hover:bg-green/10 transition-colors"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
