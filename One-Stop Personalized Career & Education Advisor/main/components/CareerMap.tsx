import React, { useState, useMemo } from 'react';
import { CAREER_PATHS } from '../constants';
import { CareerPath, CareerOption } from '../types';
import CareerDetailModal from './CareerDetailModal';

const CareerMap: React.FC = () => {
  const [selectedDegree, setSelectedDegree] = useState<CareerPath>(CAREER_PATHS[0]);
  const [selectedCareer, setSelectedCareer] = useState<CareerOption | null>(null);

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Government Job': return 'fa-solid fa-building-columns';
      case 'Private Job': return 'fa-solid fa-briefcase';
      case 'Higher Studies': return 'fa-solid fa-user-graduate';
      case 'Entrepreneurship': return 'fa-solid fa-lightbulb';
      default: return 'fa-solid fa-arrow-right';
    }
  };

  const groupedOptions = useMemo(() => {
    return selectedDegree.options.reduce((acc, option) => {
      (acc[option.type] = acc[option.type] || []).push(option);
      return acc;
    }, {} as Record<string, typeof selectedDegree.options>);
  }, [selectedDegree]);

  const treeStyles = `
    .tree-container {
      text-align: center;
      overflow-x: auto;
      padding: 20px 0;
      white-space: nowrap;
    }
    .tree ul {
      padding-top: 20px;
      position: relative;
      transition: all 0.5s;
      display: inline-flex;
    }
    .tree li {
      flex: auto;
      text-align: center;
      list-style-type: none;
      position: relative;
      padding: 20px 5px 0 5px;
      transition: all 0.5s;
    }
    .tree li::before, .tree li::after {
      content: '';
      position: absolute;
      top: 0;
      right: 50%;
      border-top: 2px solid #d1d5db; /* gray-300 */
      width: 50%;
      height: 20px;
    }
    .tree li::after {
      right: auto;
      left: 50%;
      border-left: 2px solid #d1d5db;
    }
    .tree li:only-child::after, .tree li:only-child::before {
      display: none;
    }
    .tree li:only-child {
      padding-top: 0;
    }
    .tree li:first-child::before, .tree li:last-child::after {
      border: 0 none;
    }
    .tree li:last-child::before {
      border-right: 2px solid #d1d5db;
      border-radius: 0 5px 0 0;
    }
    .tree li:first-child::after {
      border-radius: 5px 0 0 0;
    }
    .tree ul ul::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      border-left: 2px solid #d1d5db;
      width: 0;
      height: 20px;
    }
    .tree li a {
      text-decoration: none;
      color: #1e293b; /* slate-800 */
      padding: 10px 15px;
      display: inline-block;
      border-radius: 8px;
      transition: all 0.3s;
      min-width: 150px;
    }
  `;

  return (
    <>
      <section id="careers" className="py-12">
        <style>{treeStyles}</style>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">Course-to-Career Mapping</h2>
          <p className="text-center text-slate-600 mb-8">Select a degree to explore its details and potential career opportunities.</p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CAREER_PATHS.map((path) => (
              <button
                key={path.degree}
                onClick={() => setSelectedDegree(path)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                  selectedDegree.degree === path.degree
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {path.degree}
              </button>
            ))}
          </div>
          
          {/* Degree Details Section */}
          <div key={selectedDegree.degree} className="max-w-4xl mx-auto mb-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-200/50 animate-fade-in">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{selectedDegree.degree}</h3>
              <p className="text-slate-600 mb-6">{selectedDegree.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-clock mr-2 text-indigo-500"></i>Duration</h4>
                      <p className="text-slate-600">{selectedDegree.duration}</p>
                  </div>
                  <div>
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-book mr-2 text-indigo-500"></i>Core Subjects</h4>
                      <div className="flex flex-wrap gap-2">
                          {selectedDegree.coreSubjects.map(subject => (
                              <span key={subject} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-full">{subject}</span>
                          ))}
                      </div>
                  </div>
                  <div>
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center"><i className="fa-solid fa-user-check mr-2 text-indigo-500"></i>Best For</h4>
                      <p className="text-slate-600">{selectedDegree.bestFor}</p>
                  </div>
              </div>
          </div>


          <div className="tree-container bg-slate-50/50 rounded-lg">
            <div className="tree">
              <ul>
                <li>
                  <a href="#!" onClick={e => e.preventDefault()} className="bg-indigo-600 text-white font-bold shadow-lg text-lg">
                    {selectedDegree.degree}
                  </a>
                  <ul>
                    {Object.entries(groupedOptions).map(([type, options]) => (
                      <li key={type}>
                        <a href="#!" onClick={e => e.preventDefault()} className="bg-sky-500 text-white font-semibold shadow-md">
                          <i className={`${getIconForType(type)} mr-2`}></i>
                          {type}
                        </a>
                        <ul>
                          {options.map((option, index) => (
                            <li key={index}>
                              <a href="#!" onClick={(e) => { e.preventDefault(); setSelectedCareer(option); }} className="bg-white shadow ring-1 ring-slate-200 hover:bg-indigo-50 hover:ring-indigo-300 cursor-pointer">
                                {option.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {selectedCareer && (
        <CareerDetailModal career={selectedCareer} onClose={() => setSelectedCareer(null)} />
      )}
    </>
  );
};

export default CareerMap;