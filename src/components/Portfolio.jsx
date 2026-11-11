const Portfolio = () => {
  const categories = [
    'ALL PROJECTS',
    'COMMERCIAL PRODUCTIONS',
    'BRAND FILMS',
    'CORPORATE VIDEOS',
    'PHOTOGRAPHY',
    'SOCIAL MEDIA CAMPAIGNS',
    'DRONE CINEMATOGRAPHY',
    'EVENT COVERAGE'
  ];

  const projects = [
    {
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop",
      category: "CORPORATE VIDEOS",
      title: "Corporate Company Profile"
    },
    {
      img: "https://images.unsplash.com/photo-1602261320832-b087fc36979a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      category: "COMMERCIAL PRODUCTIONS",
      title: "Product Advertisement"
    },
    {
      img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop",
      category: "BRAND FILMS",
      title: "Restaurant Brand Commercial"
    },
    {
      img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      category: "PHOTOGRAPHY",
      title: "Editorial Fashion Shoot"
    },
    {
      img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop",
      category: "DRONE CINEMATOGRAPHY",
      title: "Coastal Resort Overview"
    },
    {
      img: "https://images.unsplash.com/photo-1541300613939-71366b37c92e?q=80&w=2104&auto=format&fit=crop",
      category: "DRONE CINEMATOGRAPHY",
      title: "Coastal Resort Overview"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
            PROJECT GALLERY
          </span>
          <h2 className="text-4xl md:text-[56px] font-montserrat font-light leading-[1.1] mb-6 text-white-touch">
            Creativity Across Every<br />Frame
          </h2>
          <p className="text-white-touch/60 text-[14px] font-poppins font-light leading-relaxed max-w-xl mb-10">
            Our portfolio reflects our passion for visual storytelling, cinematic production, and creative excellence.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-gold/80 to-transparent"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-[10px] text-[9px] tracking-[0.1em] font-montserrat transition-all duration-300 border cursor-pointer ${index === 0
                ? 'bg-gold border-gold text-black font-semibold'
                : 'bg-transparent border-white-touch/20 text-white-touch/70 hover:border-white-touch hover:text-white-touch font-medium'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden aspect-[4/3] bg-[#111]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gold tracking-[0.2em] text-[8px] font-montserrat font-bold uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-white-touch text-[18px] font-montserrat font-light">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="flex justify-end mt-12">
          <a href="#portfolio" className="text-white-touch font-montserrat text-[13px] font-medium tracking-wide hover:text-gold border-b border-white-touch hover:border-gold transition-all duration-300 pb-1">
            View More
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
