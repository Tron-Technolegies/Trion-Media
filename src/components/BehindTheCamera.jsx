const BehindTheCamera = () => {
  const images = [
    { img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop", text: "CAMERA SETUP" },
    { img: "https://images.unsplash.com/photo-1576714645597-7833a7a8c330?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", text: "DIRECTOR AT WORK" },
    { img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop", text: "LIGHTING SETUP" },
    { img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2070&auto=format&fit=crop", text: "DRONE OPERATIONS" },
    { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", text: "SET DESIGN PREPARATION" },
    { img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop", text: "EDITING SUITE" },
    { img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop", text: "COLOR GRADING" },
    { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", text: "PRODUCTION WORKFLOW" }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12">

        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-[40px] font-montserrat font-light leading-[1.2] mb-6 text-white-touch">
            Every Great Production Begins Behind<br />The Camera
          </h2>
          <p className="text-white-touch/60 text-[13px] md:text-[14px] font-poppins font-light leading-relaxed">
            Behind every successful project is careful planning, teamwork, creativity, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((item, index) => (
            <div key={index} className="relative aspect-video bg-[#111] overflow-hidden group">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white-touch tracking-widest text-[8px] md:text-[9px] font-montserrat font-semibold uppercase">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BehindTheCamera;
