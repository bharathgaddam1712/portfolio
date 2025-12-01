
import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50 && !isOpen) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  // Resize logic
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Escape key logic
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Click outside logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && 
          navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-sm transition-transform duration-300 ease-in-out-cubic shadow-lg ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="text-green font-mono text-xl font-bold border-2 border-green rounded-full w-10 h-10 flex items-center justify-center hover:bg-green/10 cursor-pointer transition-colors z-50">
            <a href="/" aria-label="Home">BG</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <ol className="flex space-x-8">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.name} className="font-mono text-xs lg:text-sm">
                  <span className="text-green mr-1">0{index + 1}.</span>
                  <a href={item.url} className="text-lightest-slate hover:text-green transition-colors">
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

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden relative z-50 flex justify-center items-center w-12 h-12 -mr-3 text-green focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div className="relative w-8 h-6">
              {/* Top Line (Pseudo-element behavior) */}
              <div 
                className={`absolute right-0 h-[2px] bg-green rounded transition-all duration-200 ease-in-out
                  ${isOpen ? 'w-full top-1/2 -translate-y-1/2 rotate-[225deg]' : 'w-[120%] top-0'}
                `}
              />
              
              {/* Middle Line */}
              <div 
                className={`absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-green rounded transition-all duration-200 ease-in-out
                  ${isOpen ? 'w-0 opacity-0' : 'w-full opacity-100'}
                `}
              />
              
              {/* Bottom Line (Pseudo-element behavior) */}
              <div 
                className={`absolute right-0 h-[2px] bg-green rounded transition-all duration-200 ease-in-out
                  ${isOpen ? 'w-full bottom-1/2 translate-y-1/2 -rotate-[315deg]' : 'w-[80%] bottom-0'}
                `}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay (Backdrop) */}
      <div 
        className={`fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 bottom-0 right-0 h-screen w-[min(75vw,400px)] bg-light-navy z-40 outline-none
          shadow-[-10px_0px_30px_-15px_rgba(2,12,27,0.7)] transform transition-transform duration-300 ease-in-out-cubic md:hidden flex flex-col justify-center items-center
          ${isOpen ? 'translate-x-0' : 'translate-x-[100vw]'}
        `}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 1 : -1}
      >
        <nav className="flex flex-col items-center justify-center w-full text-lightest-slate font-mono text-center">
          <ol className="p-0 m-0 list-none w-full">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.name} className="relative mx-auto my-5 text-lg sm:text-xl">
                <a
                  href={item.url}
                  className="inline-block w-full px-5 py-1 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex flex-col items-center">
                    <span className="block text-green text-sm mb-2">0{index + 1}.</span>
                    <span className="inline-block decoration-green hover:text-green transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ol>
          <a
            href="https://drive.google.com/drive/folders/1KJzNv_m_F7mjkjEvR0THoMl2-y5chq4v"
            target="_blank"
            rel="noreferrer"
            className="border border-green text-green text-sm px-12 py-4 rounded mt-12 hover:bg-green/10 transition-colors"
          >
            Resume
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
