const Stats = () => {
  const stats = [
    { value: '50+', label: 'PROJECTS COMPLETED' },
    { value: '20+', label: 'HAPPY CLIENTS' },
    { value: '100%', label: 'CREATIVE COMMITMENT' },
    { value: '2026', label: 'FOUNDED' },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-montserrat font-light text-gold mb-3">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs font-montserrat tracking-widest text-white-touch/60 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
