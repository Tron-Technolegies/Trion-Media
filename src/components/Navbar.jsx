import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', path: '#about' },
    { name: 'SERVICES', path: '#services' },
    { name: 'PORTFOLIO', path: '#portfolio' },
    { name: 'PROCESS', path: '#process' },
    { name: 'CONTACT', path: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white-touch/10 py-8' : 'bg-transparent py-8'}`}>
      <div className="max-w-[90rem] mx-auto px-8 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/trion-logo.png" alt="Trion Media" className="h-16 object-contain " />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className="text-[10px] font-montserrat tracking-[0.25em] text-white-touch hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Start A Project Button */}
        <div className="hidden md:block">
          <a href="#contact" className="px-6 py-3 border border-white-touch/20 text-white-touch text-[9px] font-montserrat tracking-[0.25em] hover:border-gold hover:text-gold transition-all duration-300">
            START A PROJECT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white-touch text-2xl focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white-touch/10 py-6 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-base font-poppins text-white-touch/80 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-8 py-3 border border-gold text-gold text-sm font-medium hover:bg-gold hover:text-black transition-all duration-300 rounded-sm">
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
