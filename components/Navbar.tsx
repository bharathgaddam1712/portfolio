import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50 && !isOpen) {
        setIsVisible(false); // Scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-sm transition-transform duration-300 ease-in-out-cubic shadow-lg ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="text-green font-mono text-xl font-bold border-2 border-green rounded-full w-10 h-10 flex items-center justify-center hover:bg-green/10 cursor-pointer transition-colors">
          V
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.name} className="font-mono text-xs lg:text-sm">
                <span className="text-green mr-1">0{index + 1}.</span>
                <a
                  href={item.url}
                  className="text-lightest-slate hover:text-green transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="https://drive.google.com/file/d/15hWqhFsG_s1GBBmbn6bbEMQ28SrAxIrY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="border border-green text-green font-mono text-sm px-4 py-2 rounded hover:bg-green/10 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-navy/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Nav Sidebar */}
        <aside
          className={`fixed top-0 right-0 h-full w-[75vw] bg-light-navy z-40 transform transition-transform duration-300 ease-in-out-cubic md:hidden flex flex-col justify-center items-center ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.url}
                className="group flex flex-col items-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-green font-mono text-sm mb-1">0{index + 1}.</span>
                <span className="text-lightest-slate font-sans text-lg font-semibold group-hover:text-green transition-colors">
                  {item.name}
                </span>
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/15hWqhFsG_s1GBBmbn6bbEMQ28SrAxIrY/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="border border-green text-green font-mono text-sm px-10 py-4 rounded hover:bg-green/10 transition-colors mt-4"
            >
              Resume
            </a>
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;