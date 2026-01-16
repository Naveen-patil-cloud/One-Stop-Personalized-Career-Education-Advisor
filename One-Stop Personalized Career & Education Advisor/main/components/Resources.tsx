
import React from 'react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  const getIconForType = (type: string) => {
    switch(type) {
      case 'E-Book': return 'fa-solid fa-book-open';
      case 'Study Material': return 'fa-solid fa-file-alt';
      case 'Scholarship': return 'fa-solid fa-award';
      default: return 'fa-solid fa-link';
    }
  };
  
  return (
    <section id="resources" className="py-12 bg-slate-100 rounded-lg">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Helpful Resources</h2>
        <p className="text-center text-slate-600 mb-8">Access free e-books, study materials, and scholarship portals.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESOURCES.map((resource, index) => (
            <a 
              key={index} 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <i className={getIconForType(resource.type)}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">{resource.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{resource.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
