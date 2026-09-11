const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white-touch/10">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        {/* Left Side: Logo & Info */}
        <div>
          <img src="/trion-logo.png" alt="Trion Media" className="h-16 object-contain mb-4 " />
          <p className="text-[9px] font-montserrat tracking-[0.2em] text-white-touch/60 uppercase mb-4">
            CREATIVE PRODUCTION HOUSE &middot; DOHA, QATAR.
          </p>
          <p className="text-[9px] font-montserrat tracking-[0.1em] text-white-touch/40 uppercase">
            &copy; {new Date().getFullYear()} TRION MEDIA. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT', 'PRIVACY POLICY', 'TERMS & CONDITIONS'].map((link, index) => (
            <a 
              key={index} 
              href={`#${link.toLowerCase().replace(' ', '-')}`} 
              className="text-[9px] font-montserrat tracking-[0.1em] text-white-touch/50 hover:text-gold transition-colors duration-300 uppercase"
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
