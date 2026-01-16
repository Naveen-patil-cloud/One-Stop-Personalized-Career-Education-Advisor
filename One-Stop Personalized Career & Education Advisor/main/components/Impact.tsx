
import React from 'react';

const ImpactCard: React.FC<{ icon: string; title: string; description: string; value: string }> = ({ icon, title, description, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="w-16 h-16 mx-auto bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
            <i className={`${icon} text-3xl`}></i>
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-4xl font-extrabold text-indigo-600 my-2">{value}</p>
        <p className="text-slate-600 text-sm">{description}</p>
    </div>
);

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Impact</h2>
        <p className="text-center text-slate-600 mb-12">Fostering informed decisions to build brighter futures and stronger communities.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactCard 
                icon="fa-solid fa-arrow-trend-up"
                title="Increased Enrollment"
                value="+15%"
                description="Our guidance helps more students recognize the value of degree programs in government colleges."
            />
            <ImpactCard 
                icon="fa-solid fa-person-circle-check"
                title="Reduced Dropouts"
                value="-10%"
                description="By aligning student interests with courses, we improve retention and academic success."
            />
            <ImpactCard 
                icon="fa-solid fa-bullhorn"
                title="Promoting Colleges"
                value="50+ Colleges"
                description="We highlight the strengths and facilities of government colleges, increasing their visibility."
            />
        </div>
      </div>
    </section>
  );
};

export default Impact;
