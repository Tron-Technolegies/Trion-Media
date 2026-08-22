const About = () => {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12 grid lg:grid-cols-[1.2fr_1fr] gap-20 items-start">
        {/* Left Column: Heading & Vision */}
        <div>
          <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
            ABOUT TRION
          </span>
          <h2 className="text-5xl md:text-[64px] font-montserrat font-normal leading-[1.1] mb-8 text-white-touch">
            Every great story<br/>begins with an idea.
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-gold/80 to-transparent mb-12"></div>
          <div className="space-y-6 text-white-touch/60 font-poppins text-[15px] leading-[1.8] font-light mb-12 max-w-xl">
            <p>
              Trion Media was founded in 2026 by three friends who shared one vision — to transform creative ideas into powerful visual experiences. What started as a shared passion for filmmaking, storytelling, and visual design quickly evolved into a professional production house dedicated to helping brands communicate with impact.
            </p>
            <p>
              At Trion, we believe that every business has a story worth telling. Our goal is to capture those stories through cinematic visuals, strategic creativity, and high quality production.
            </p>
            <p>
              Whether it's a commercial advertisement, brand film, corporate video, social media campaign, or event coverage, we combine creativity with technical excellence to produce content that connects with audiences and delivers results.
            </p>
          </div>
          
          <blockquote className="font-playfair italic text-[28px] md:text-[32px] text-white-touch leading-tight max-w-lg">
            Create with purpose. Produce with passion. Deliver with excellence.
          </blockquote>
        </div>

        {/* Right Column: Mission, Vision, Values */}
        <div className="space-y-6 mt-16 lg:mt-0">
          <div className="bg-[#0c0c0c] p-10 md:p-12">
            <h3 className="text-gold font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">OUR MISSION</h3>
            <p className="text-white-touch/60 text-[14px] font-poppins font-light leading-[1.8]">
              To empower businesses, brands, and creators through high quality visual storytelling that inspires, engages, and creates lasting impact.
            </p>
          </div>
          
          <div className="bg-[#0c0c0c] p-10 md:p-12">
            <h3 className="text-gold font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">OUR VISION</h3>
            <p className="text-white-touch/60 text-[14px] font-poppins font-light leading-[1.8]">
              To become one of the most trusted creative production companies in the region, recognized for innovation, cinematic excellence, and meaningful storytelling.
            </p>
          </div>

          <div className="bg-[#0c0c0c] p-10 md:p-12">
            <h3 className="text-gold font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase mb-8">OUR VALUES</h3>
            <ul className="space-y-5">
              {['Creativity First', 'Quality Without Compromise', 'Honest Collaboration', 'Innovation Every Day', 'Client Success Matters'].map((value, index) => (
                <li key={index} className="flex items-center text-white-touch/70 text-[14px] font-poppins font-light">
                  <span className="w-5 h-[1px] bg-white-touch/20 mr-4"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
