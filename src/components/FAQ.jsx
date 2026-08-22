import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does a project take?',
      answer: 'Project timelines vary depending on complexity. A typical commercial video takes 2-4 weeks from concept to final delivery.'
    },
    {
      question: 'Do you provide script writing?',
      answer: 'Yes, our creative team can handle concept development, scriptwriting, and storyboarding for your project.'
    },
    {
      question: 'Can you shoot outside Qatar?',
      answer: 'Absolutely. While we are based in Doha, our team is equipped and available to travel for international productions.'
    },
    {
      question: 'Do you offer photography along with video production?',
      answer: 'Yes, we offer comprehensive photography services including commercial, portrait, product, and event coverage.'
    },
    {
      question: 'Do you edit videos captured by clients?',
      answer: 'We do offer professional post-production and editing services for footage you have already captured.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-black">
      <div className=" mx-auto px-8 md:px-12">
        
        <div className="mb-16">
          <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-[52px] font-montserrat font-light leading-[1.1] mb-8 text-white-touch">
            Good to know.
          </h2>
        </div>

        <div className="w-full border-t border-white-touch/10">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-white-touch/10"
            >
              <button
                className="w-full flex justify-between items-center py-8 text-left group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-[15px] font-poppins font-light transition-colors duration-300 ${activeIndex === index ? 'text-gold' : 'text-white-touch group-hover:text-gold'}`}>
                  {faq.question}
                </span>
                <span className="text-gold text-[10px] ml-4 transition-transform duration-300 cursor-pointer">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-40 pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white-touch/60 text-[14px] font-poppins font-light leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
