const Process = () => {
  const steps = [
    { num: '01', title: 'Discover', desc: 'We understand your brand, audience, and objectives.' },
    { num: '02', title: 'Plan', desc: 'Creative concepts, scripting, and production planning.' },
    { num: '03', title: 'Produce', desc: 'Professional filming using industry standard equipment.' },
    { num: '04', title: 'Edit', desc: 'Editing, color grading, sound design, and motion graphics.' },
    { num: '05', title: 'Review', desc: 'Feedback, revisions, and final refinements.' },
    { num: '06', title: 'Deliver', desc: 'Ready to publish content optimized for every platform.' },
  ];

  return (
    <section id="process" className="py-32 bg-black">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12">
        <div className="mb-20">
          <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-[52px] font-montserrat font-light leading-[1.1] mb-8 text-white-touch">
            Six deliberate steps.
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-gold/80 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`p-10 md:p-12 
                ${index < 3 ? 'lg:border-b lg:border-white-touch/10' : ''} 
                ${index % 3 !== 2 ? 'lg:border-r lg:border-white-touch/10' : ''}
                ${index < 4 ? 'md:border-b md:border-white-touch/10 lg:border-b-0' : ''}
                ${index % 2 !== 1 ? 'md:border-r md:border-white-touch/10 lg:border-r-0' : ''}
                border-b border-white-touch/10 md:border-b-0 last:border-b-0
              `}
            >
              <span className="text-gold text-[14px] font-montserrat font-normal tracking-wide mb-6 block">
                {step.num}
              </span>
              <h3 className="text-[20px] font-montserrat font-light mb-4 text-white-touch">
                {step.title}
              </h3>
              <p className="text-white-touch/50 text-[13px] font-poppins font-light leading-[1.8]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
