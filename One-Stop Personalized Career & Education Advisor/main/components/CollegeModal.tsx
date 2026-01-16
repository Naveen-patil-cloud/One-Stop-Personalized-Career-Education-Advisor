import React, { useEffect, useRef, useState } from 'react';
import { College } from '../types';

interface CollegeModalProps {
  college: College;
  onClose: () => void;
}

const CollegeModal: React.FC<CollegeModalProps> = ({ college, onClose }) => {
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

    const rotateX = -((y - height / 2) / (height / 2)) * 8; // Max rotation 8deg
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    cardRef.current.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1)';
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
        className={`relative w-full max-w-2xl bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl transition-all duration-300 [transform-style:preserve-3d] ${isShowing ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        onClick={e => e.stopPropagation()}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-slate-500/30 text-white rounded-full hover:bg-slate-500/60 transition-colors"
          aria-label="Close college details"
        >
          <i className="fa-solid fa-times"></i>
        </button>

        <div className="[transform:translateZ(40px)]">
           <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">{college.name}</h2>
                        <p className="text-md text-slate-600 flex items-center mt-2"><i className="fa-solid fa-location-dot mr-2 text-indigo-500"></i>{college.location}, {college.state}</p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                        <i className="fa-solid fa-building-columns text-2xl"></i>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Courses Offered</h4>
                            <ul className="list-disc list-inside text-slate-600 space-y-1">
                                {college.courses.slice(0, 4).map(c => <li key={c}>{c}</li>)}
                                {college.courses.length > 4 && <li>And {college.courses.length - 4} more...</li>}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Facilities</h4>
                            <div className="flex flex-wrap gap-2">
                                {college.facilities.map(f => <span key={f} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-full">{f}</span>)}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 bg-slate-200/50 p-4 rounded-lg border border-slate-300/50">
                        <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Eligibility</h4>
                            <p className="text-slate-600">{college.eligibility}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Typical Cut-off</h4>
                            <p className="text-slate-600">{college.cutoff}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Approx. Annual Fees</h4>
                            <p className="text-slate-600">{college.fees}</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeModal;