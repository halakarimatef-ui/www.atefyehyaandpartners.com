
import React from 'react';

const PracticeAreas: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Auditing & Assurance",
      description: "Comprehensive statutory and internal auditing services ensuring financial transparency and compliance with international standards.",
      icon: "task_alt"
    },
    {
      id: 2,
      title: "Tax Planning",
      description: "Strategic tax advisory designed to optimize your financial position while maintaining full adherence to local and international regulations.",
      icon: "architecture"
    },
    {
      id: 3,
      title: "Tax Services (All Stages)",
      description: "End-to-end tax representation and compliance, covering registration, filing, and representation during all stages of tax authority review.",
      icon: "receipt_long"
    },
    {
      id: 4,
      title: "Evaluate Internal Audit Systems",
      description: "Rigorous assessment of internal controls to identify risks, improve operational efficiency, and safeguard company assets.",
      icon: "fact_check"
    },
    {
      id: 5,
      title: "Organizational Restructuring",
      description: "Expert administrative and organizational restructuring to streamline operations and enhance corporate agility and performance.",
      icon: "account_tree"
    },
    {
      id: 6,
      title: "Feasibility Studies",
      description: "In-depth market and financial feasibility studies to support informed investment decisions and strategic growth initiatives.",
      icon: "analytics"
    },
    {
      id: 7,
      title: "Company Establishment",
      description: "Professional services for the formation and registration of all legal company entities within the Egyptian corporate framework.",
      icon: "business"
    },
    {
      id: 8,
      title: "Cost Systems Design",
      description: "Bespoke design and implementation of cost accounting systems tailored to your specific industry and operational needs.",
      icon: "calculate"
    },
    {
      id: 9,
      title: "Capital Valuation",
      description: "Precise evaluation of company capital and assets for mergers, acquisitions, or financial reporting purposes.",
      icon: "equalizer"
    },
    {
      id: 10,
      title: "Financial Due Diligence",
      description: "Comprehensive 'Examination of Ignorance' or due diligence reports to mitigate risk in commercial transactions and investments.",
      icon: "search_insights"
    },
    {
      id: 11,
      title: "Salary Scale Evaluation",
      description: "Expert assessment and design of company salary scales and compensation structures to ensure market competitiveness and fairness.",
      icon: "payments"
    }
  ];

  return (
    <div className="bg-white dark:bg-background-dark transition-colors duration-300">
      {/* Header */}
      <header className="relative pt-40 pb-24 bg-pearl dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[400px] -mr-32 -mt-20">contract</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="text-accent tracking-[0.4em] uppercase text-[10px] font-bold">Office Services</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl mb-10 text-primary dark:text-white leading-[1.1]">
            Expert <span className="italic font-normal">Practice Areas</span>
          </h1>
          <p className="max-w-2xl text-xl text-accent font-light leading-relaxed">
            Atef Yehya & Partners provides a multi-disciplinary suite of professional services designed to navigate the complexities of the Egyptian financial and legal landscape.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white dark:bg-background-dark p-12 hover:bg-pearl dark:hover:bg-slate-900 transition-all duration-500 group flex flex-col h-full"
              >
                <div className="mb-10 text-primary dark:text-white group-hover:scale-110 transition-transform origin-left">
                  <span className="material-symbols-outlined text-4xl font-light">
                    {service.icon}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-accent/30 font-display text-sm">0{service.id}</span>
                    <h3 className="font-display text-2xl text-primary dark:text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-accent font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-50 dark:border-slate-800 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/50 group-hover:text-primary dark:group-hover:text-white transition-colors">
                    Core Practice
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-primary dark:text-white leading-tight">
              Our Approach to <br />Professional Service
            </h2>
            <div className="h-px w-24 bg-accent/30 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-1 gap-12">
            <div className="space-y-12">
              <div className="flex items-start space-x-8">
                <span className="material-symbols-outlined text-accent mt-1 text-3xl">verified</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-3 dark:text-white">Precision & Accuracy</h4>
                  <p className="text-accent font-light leading-relaxed text-lg">Every audit and evaluation is performed with exhaustive attention to detail, ensuring no variance goes unexplained and every figure is verified.</p>
                </div>
              </div>
              <div className="flex items-start space-x-8">
                <span className="material-symbols-outlined text-accent mt-1 text-3xl">gavel</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-3 dark:text-white">Regulatory Vigilance</h4>
                  <p className="text-accent font-light leading-relaxed text-lg">We maintain deep, current knowledge of Egyptian tax laws and corporate regulations to keep your business fully compliant and legally protected.</p>
                </div>
              </div>
              <div className="flex items-start space-x-8">
                <span className="material-symbols-outlined text-accent mt-1 text-3xl">handshake</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-3 dark:text-white">Long-term Partnership</h4>
                  <p className="text-accent font-light leading-relaxed text-lg">We view our services not as one-off transactions, but as part of a lasting commitment to your financial health and sustainable corporate growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
