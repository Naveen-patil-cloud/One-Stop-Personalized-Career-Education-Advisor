import React, { useEffect, useRef, useState } from 'react';
import { CareerOption } from '../types';

interface CareerDetailModalProps {
  career: CareerOption;
  onClose: () => void;
}

const CareerDetailModal: React.FC<CareerDetailModalProps> = ({ career, onClose }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsShowing(true), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsShowing(false);
    setTimeout(onClose, 300); // Wait for animation to finish
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { top, left, width, height } = cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    const rotateX = -((y - height / 2) / (height / 2)) * 6; // Max rotation
    const rotateY = ((x - width / 2) / (width / 2)) * 6;

    cardRef.current.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };
  
  const getIconForType = (type: string) => {
    switch (type) {
      case 'Government Job': return 'fa-solid fa-building-columns';
      case 'Private Job': return 'fa-solid fa-briefcase';
      case 'Higher Studies': return 'fa-solid fa-user-graduate';
      case 'Entrepreneurship': return 'fa-solid fa-lightbulb';
      default: return 'fa-solid fa-arrow-right';
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isShowing ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div
        ref={cardRef}
        className={`relative w-full max-w-3xl bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl transition-all duration-300 [transform-style:preserve-3d] ${isShowing ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        onClick={e => e.stopPropagation()}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-slate-500/30 text-white rounded-full hover:bg-slate-500/60 transition-colors"
          aria-label="Close career details"
        >
          <i className="fa-solid fa-times"></i>
        </button>

        <div className="p-8 [transform:translateZ(40px)]">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900">{career.name}</h2>
                    <div className="flex items-center mt-2">
                        <i className={`${getIconForType(career.type)} mr-2 text-indigo-500`}></i>
                        <span className="text-md text-slate-600">{career.type}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-6 text-sm">
                <div>
                    <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center"><i className="fa-solid fa-clipboard-list mr-2 text-cyan-500"></i>A Day in the Life</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 pl-2">
                        {career.details.dailyTasks.map(task => <li key={task}>{task}</li>)}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center"><i className="fa-solid fa-star mr-2 text-amber-500"></i>Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                        {career.details.requiredSkills.map(skill => (
                          <span key={skill} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-full">{skill}</span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center"><i className="fa-solid fa-route mr-2 text-emerald-500"></i>Educational Pathway</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-1 pl-2">
                        {career.details.educationalPathways.map(path => <li key={path}>{path}</li>)}
                    </ul>
                </div>
                
                <div className="bg-slate-200/50 p-4 rounded-lg border border-slate-300/50">
                    <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center"><i className="fa-solid fa-sack-dollar mr-2 text-purple-500"></i>Salary Insights</h4>
                    <p className="text-slate-700 font-semibold text-lg">{career.details.salaryRange}</p>
                    <p className="text-xs text-slate-500 mt-1">*Salary ranges are estimates for positions in India and can vary based on experience, location, and company.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailModal;
