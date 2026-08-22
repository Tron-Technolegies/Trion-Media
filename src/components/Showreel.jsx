import { FaPlay } from 'react-icons/fa';

const Showreel = () => {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-8 flex flex-col items-center">
        <span className="text-gold text-[10px] tracking-[0.3em] font-montserrat font-semibold uppercase mb-6 block">
          SHOWREEL
        </span>
        <h2 className="text-4xl md:text-[56px] font-montserrat font-light leading-[1.1] mb-6 text-white-touch">
          Experience Creativity in<br/>Motion
        </h2>
        <p className="text-white-touch/60 text-[13px] md:text-[14px] font-poppins font-light leading-relaxed max-w-2xl mb-12">
          Explore a collection of our latest productions showcasing cinematic storytelling, commercial campaigns, and creative visual experiences.
        </p>
        
        <button className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 group">
          <FaPlay className="ml-1 text-sm group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Showreel;
