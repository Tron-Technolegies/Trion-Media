const Hero = () => {
  return (
    <section className="relative h-[100vh] flex items-center pt-32">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 z-0"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-8 md:px-12 w-full">
        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-[52px] font-montserrat font-normal tracking-wide leading-[1.2] mb-6 text-white-touch">
            We Don't Just Produce.<br />
            <span className="text-gold">We Create Stories That Build Brands.</span>
          </h1>
          <p className="text-white-touch/60 text-[13px] md:text-[14px] mb-12 max-w-[42rem] font-poppins font-light leading-relaxed">
Trion Media is a creative production house based in Doha, Qatar, delivering cinematic visuals, commercial productions, brand films, photography, and digital content for businesses, institutions, and organizations across Qatar.          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="bg-gold text-black px-10 py-[14px] font-montserrat tracking-[0.15em] text-[10px] font-medium hover:bg-white-touch transition-all duration-300">
              VIEW OUR WORK
            </a>
            <a href="#contact" className="border border-white-touch/20 text-white-touch px-10 py-[14px] font-montserrat tracking-[0.15em] text-[10px] font-medium hover:border-gold hover:text-gold transition-all duration-300">
              START YOUR PROJECT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
