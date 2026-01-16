import React, { useState, useMemo } from 'react';
import { COLLEGES } from '../constants';
import { College } from '../types';
import CollegeModal from './CollegeModal';

interface CollegeCardProps {
  college: College;
  onShowDetails: (college: College) => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college, onShowDetails }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-md font-bold text-slate-800 leading-tight flex-grow">{college.name}</h3>
                <p className="text-sm text-slate-500 mt-2 mb-4 flex items-center">
                    <i className="fa-solid fa-location-dot mr-2 text-indigo-400"></i>
                    {college.location}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">Courses: {college.courses.length}</span>
                    <button onClick={() => onShowDetails(college)} className="text-indigo-500 hover:text-indigo-700 text-sm font-semibold">
                        Details <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};


const CollegeDirectory: React.FC = () => {
  const [stateFilter, setStateFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name-asc');
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  
  const states = useMemo(() => ['All', ...Array.from(new Set(COLLEGES.map(c => c.state))).sort()], []);
  
  const processedColleges = useMemo(() => {
    let colleges = [...COLLEGES];

    if (stateFilter !== 'All') {
        colleges = colleges.filter(c => c.state === stateFilter);
    }

    if (searchTerm) {
        colleges = colleges.filter(c =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    switch (sortBy) {
        case 'name-asc':
            colleges.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            colleges.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'state-asc':
            colleges.sort((a, b) => a.state.localeCompare(b.state));
            break;
        case 'state-desc':
            colleges.sort((a, b) => b.state.localeCompare(a.state));
            break;
        case 'courses-desc':
            colleges.sort((a, b) => b.courses.length - a.courses.length);
            break;
        case 'courses-asc':
            colleges.sort((a, b) => a.courses.length - b.courses.length);
            break;
        default:
            break;
    }

    return colleges;
  }, [stateFilter, searchTerm, sortBy]);
  
  const collegesByState = useMemo(() => {
    return processedColleges.reduce((acc, college) => {
        const { state } = college;
        if (!acc[state]) {
            acc[state] = [];
        }
        acc[state].push(college);
        return acc;
    }, {} as Record<string, College[]>);
  }, [processedColleges]);


  return (
    <>
      <section id="colleges" className="py-12 bg-slate-50/50 rounded-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text mb-2">
              College Directory
            </h2>
            <p className="text-slate-600">Find, compare, and sort colleges from across the nation.</p>
          </div>

          <div className="p-4 md:p-6 mb-8 bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-slate-200/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                      <input
                          type="text"
                          placeholder="Search by college name..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full bg-white border border-slate-300 text-slate-700 py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <i className="fa-solid fa-search"></i>
                      </div>
                  </div>

                  <div className="relative">
                      <select 
                          value={stateFilter} 
                          onChange={(e) => setStateFilter(e.target.value)}
                          className="appearance-none w-full bg-white border border-slate-300 text-slate-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      >
                          {states.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                          <i className="fa-solid fa-chevron-down text-xs"></i>
                      </div>
                  </div>

                  <div className="relative">
                      <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="appearance-none w-full bg-white border border-slate-300 text-slate-700 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      >
                          <option value="name-asc">Sort by Name (A-Z)</option>
                          <option value="name-desc">Sort by Name (Z-A)</option>
                          <option value="state-asc">Sort by State (A-Z)</option>
                          <option value="state-desc">Sort by State (Z-A)</option>
                          <option value="courses-desc">Sort by Courses (Most)</option>
                          <option value="courses-asc">Sort by Courses (Fewest)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                          <i className="fa-solid fa-sort text-xs"></i>
                      </div>
                  </div>
              </div>
          </div>

          <div className="space-y-12">
            {Object.keys(collegesByState).length > 0 ? (
                Object.entries(collegesByState).map(([state, collegesInState]) => (
                    <div key={state}>
                        <h3 className="text-2xl font-bold text-slate-700 mb-6 border-b-2 border-indigo-200 pb-2">{state}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {collegesInState.map(college => <CollegeCard key={college.id} college={college} onShowDetails={setSelectedCollege} />)}
                        </div>
                    </div>
                ))
            ) : (
              <p className="text-center col-span-full text-slate-500 mt-8">No colleges match your criteria.</p>
            )}
          </div>
        </div>
      </section>
      {selectedCollege && <CollegeModal college={selectedCollege} onClose={() => setSelectedCollege(null)} />}
    </>
  );
};

export default CollegeDirectory;