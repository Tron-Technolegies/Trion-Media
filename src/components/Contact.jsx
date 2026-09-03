import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#050505]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12 grid lg:grid-cols-[1fr_400px] gap-20 items-center">
        
        {/* Left Column */}
        <div>
          <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
            CONTACT US
          </span>
          <h2 className="text-4xl md:text-[56px] font-montserrat font-light leading-[1.1] mb-8 text-white-touch">
            Let's Create Something <span className="font-playfair italic text-gold">Amazing</span> Together.
          </h2>
          <p className="text-white-touch/60 text-[14px] font-poppins font-light leading-[1.8] max-w-xl mb-12">
            Whether you're launching a new brand, promoting a business, or needing memorable visual content, we're here to help.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="bg-gold text-black px-10 py-[14px] font-montserrat tracking-[0.15em] text-[10px] font-medium hover:bg-white-touch transition-all duration-300 cursor-pointer">
              EMAIL THE STUDIO
            </button>
            <button className="border border-white-touch/20 text-white-touch px-10 py-[14px] font-montserrat tracking-[0.15em] text-[10px] font-medium hover:border-gold hover:text-gold transition-all duration-300 cursor-pointer">
              +974 71741112
            </button>
          </div>
        </div>

        {/* Right Column: Contact Details Box */}
        <div className="bg-[#111] p-10 flex flex-col space-y-8">
          
          <div className="flex items-start space-x-4 border-b border-white-touch/10 pb-6">
            <FaMapMarkerAlt className="text-gold mt-1 text-sm flex-shrink-0" />
            <span className="text-white-touch/80 font-poppins font-light text-[13px] leading-relaxed">
              Doha, Qatar
            </span>
          </div>

          <div className="flex items-center space-x-4 border-b border-white-touch/10 pb-6">
            <FaPhoneAlt className="text-gold text-sm flex-shrink-0" />
            <span className="text-white-touch/80 font-poppins font-light text-[13px]">
              +974 71741112
            </span>
          </div>

          <div className="flex items-center space-x-4 border-b border-white-touch/10 pb-6">
            <FaEnvelope className="text-gold text-sm flex-shrink-0" />
            <span className="text-white-touch/80 font-poppins font-light text-[13px]">
              info@trionmediaphotography.com
            </span>
          </div>

          <div className="flex items-center space-x-4 border-b border-white-touch/10 pb-6">
            <FaGlobe className="text-gold text-sm flex-shrink-0" />
            <span className="text-white-touch/80 font-poppins font-light text-[13px]">
              trionmediaphotography.com
            </span>
          </div>

          <div className="pt-4">
            <span className="text-[9px] font-montserrat tracking-[0.2em] text-white-touch/40 uppercase mb-4 block">
              SOCIAL &mdash; TRION MEDIA
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'INSTAGRAM', url: 'https://www.instagram.com/trion_media_qa?igsi=MW81NWZ1ZjBtOTZpYg==' },
                { name: 'FACEBOOK', url: '#' },
                { name: 'LINKEDIN', url: '#' },
                { name: 'YOUTUBE', url: '#' }
              ].map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="px-3 py-2 border border-white-touch/10 text-[8px] font-montserrat tracking-[0.1em] text-white-touch/60 hover:text-gold hover:border-gold transition-colors duration-300">
                  {social.name}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
