import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title }) => {
  return (
    <h2 className="flex items-center text-2xl md:text-3xl font-bold text-lightest-slate mb-10 w-full whitespace-nowrap">
      <span className="font-mono text-green text-xl md:text-2xl mr-2">{number}.</span>
      {title}
      <span className="ml-6 w-full h-[1px] bg-lightest-navy opacity-50"></span>
    </h2>
  );
};

export default SectionHeading;