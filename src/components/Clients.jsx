import { FaStar } from 'react-icons/fa';

const Clients = () => {
  const industries = [
    'RESTAURANTS', 'HOTELS', 'HEALTHCARE', 'CONSTRUCTION',
    'RETAIL', 'FASHION', 'EDUCATION', 'CORPORATE',
    'HOSPITALITY', 'REAL ESTATE', 'AUTOMOTIVE', 'BEAUTY & WELLNESS',
    'TRAVEL & TOURISM'
  ];

  const testimonials = [
    {
      text: "Professional team with outstanding creativity. The final result exceeded our expectations.",
      name: "CLIENT NAME"
    },
    {
      text: "Excellent production quality and smooth communication throughout the project.",
      name: "CLIENT NAME"
    },
    {
      text: "Highly recommended for commercial videos and branding content.",
      name: "CLIENT NAME"
    }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12">
        
        <div className="mb-16">
          <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
            OUR CLIENTS
          </span>
          <h2 className="text-4xl md:text-[52px] font-montserrat font-light leading-[1.1] mb-8 text-white-touch">
            Trusted across industries.
          </h2>
          <p className="text-white-touch/60 text-[13px] md:text-[14px] font-poppins font-light leading-relaxed max-w-xl mb-12">
            Trusted by businesses, startups, restaurants, hospitality brands, corporate companies, and entrepreneurs across multiple industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white-touch/10 mb-24">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="px-6 py-10 border-r border-b border-white-touch/10 flex items-center justify-center text-center"
            >
              <span className="text-[10px] font-montserrat tracking-[0.2em] text-white-touch/50 uppercase font-medium">
                {industry}
              </span>
            </div>
          ))}
          {/* Fill empty cells to complete grid */}
          {[...Array(3)].map((_, index) => (
             <div key={`empty-${index}`} className="px-6 py-10 border-r border-b border-white-touch/10 hidden md:block"></div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-10 border border-white-touch/5">
              <div className="flex text-gold mb-6 text-[10px] space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-white-touch/80 text-[14px] font-poppins font-light leading-[1.8] mb-8 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center text-[9px] font-montserrat tracking-[0.2em] text-white-touch/50 uppercase">
                <span className="w-4 h-[1px] bg-gold mr-3"></span>
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
