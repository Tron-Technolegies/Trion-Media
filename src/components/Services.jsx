const Services = () => {
  const services = [
    {
      num: '01',
      title: 'Commercial Video Production',
      description: 'High quality advertisements designed for television, digital platforms, and social media campaigns.',
    },
    {
      num: '02',
      title: 'Brand Films',
      description: 'Creative storytelling that introduces your brand, mission, and identity in a cinematic way.',
    },
    {
      num: '03',
      title: 'Corporate Videos',
      description: 'Professional business videos for presentations, marketing, recruitment, and company profiles.',
    },
    {
      num: '04',
      title: 'Photography',
      description: 'Commercial, food, and product photography, corporate portraits, and event coverage.',
    },
    {
      num: '05',
      title: 'Drone Cinematography',
      description: 'Professional aerial photography and cinematic drone footage.',
    },
    {
      num: '06',
      title: 'Social Media Content',
      description: 'Instagram Reels, TikTok videos, YouTube Shorts, promotional and campaign content.',
    }
  ];

  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12">
        <div className="mb-16">
          <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-[56px] font-montserrat font-light leading-[1.1] mb-6 text-white-touch">
            Full-service production, end to end.
          </h2>
          <p className="text-white-touch/60 text-[14px] font-poppins font-light leading-relaxed max-w-lg mb-10">
            Ten disciplines under one roof — from the first concept sketch to the final delivery master.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-gold/80 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 md:p-12 
                ${index < 3 ? 'lg:border-b lg:border-white-touch/10' : ''} 
                ${index % 3 !== 2 ? 'lg:border-r lg:border-white-touch/10' : ''}
                ${index < 4 ? 'md:border-b md:border-white-touch/10 lg:border-b-0' : ''}
                ${index % 2 !== 1 ? 'md:border-r md:border-white-touch/10 lg:border-r-0' : ''}
                border-b border-white-touch/10 md:border-b-0 last:border-b-0
                hover:bg-white-touch/[0.02] transition-colors duration-300
              `}
            >
              <span className="text-gold text-[10px] font-montserrat font-semibold tracking-widest mb-6 block">
                {service.num}
              </span>
              <h3 className="text-[22px] font-montserrat font-light mb-4 text-white-touch">
                {service.title}
              </h3>
              <p className="text-white-touch/50 text-[13px] font-poppins font-light leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <a href="#services" className="text-white-touch font-montserrat text-[13px] font-medium tracking-wide hover:text-gold transition-colors duration-300">
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
