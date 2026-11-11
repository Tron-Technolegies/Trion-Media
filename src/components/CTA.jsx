const CTA = () => {
  const reasons = [
    'CINEMATIC STORYTELLING',
    'CREATIVE DIRECTION',
    'PREMIUM PRODUCTION QUALITY',
    'PROFESSIONAL TEAM',
    'FAST TURNAROUND',
    'END-TO-END PRODUCTION',
    'MODERN EQUIPMENT',
    'CLIENT-FOCUSED WORKFLOW',
    'DETAIL-ORIENTED EXECUTION',
    'CREATIVE SOLUTIONS'
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12">

        <div className="mb-16">
          <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
            WHY CLIENTS CHOOSE TRION
          </span>
          <h2 className="text-4xl md:text-[50px] font-montserrat font-light leading-[1.1] mb-8 text-white-touch">
            Craft you can measure.
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-gold/80 to-transparent"></div>
        </div>

        <div className="flex flex-wrap gap-4 w-full">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="px-6 py-4 border border-white-touch/10 hover:border-white-touch/30 transition-colors duration-300 bg-[#0a0a0a]"
            >
              <span className="text-[10px] font-montserrat tracking-[0.2em] text-white-touch/70 uppercase font-semibold">
                {reason}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CTA;
