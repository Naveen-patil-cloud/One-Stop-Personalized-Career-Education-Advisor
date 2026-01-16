import React, { useEffect, useState } from 'react';
import { Notification } from '../types';

interface TimelineDetailModalProps {
  notification: Notification;
  onClose: () => void;
}

const TimelineDetailModal: React.FC<TimelineDetailModalProps> = ({ notification, onClose }) => {
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

  const getCategoryInfo = (category: Notification['category']): { icon: string; color: string; } => {
    switch(category) {
        case 'Scholarship': return { icon: 'fa-award', color: 'text-amber-500' };
        case 'Entrance Exam': return { icon: 'fa-pen-to-square', color: 'text-sky-500' };
        case 'Admission': return { icon: 'fa-door-open', color: 'text-emerald-500' };
        case 'Counseling': return { icon: 'fa-users', color: 'text-purple-500' };
        default: return { icon: 'fa-calendar-days', color: 'text-slate-500' };
    }
  }

  const categoryInfo = getCategoryInfo(notification.category);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isShowing ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div
        className={`relative w-full max-w-lg bg-white rounded-xl shadow-2xl transition-all duration-300 ${isShowing ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
          aria-label="Close details"
        >
          <i className="fa-solid fa-times"></i>
        </button>

        <div className="p-8">
            <div className="flex items-start mb-6">
                <div className={`flex-shrink-0 w-12 h-12 bg-slate-100 ${categoryInfo.color} rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`fa-solid ${categoryInfo.icon} text-xl`}></i>
                </div>
                <div>
                    <p className={`font-semibold ${categoryInfo.color}`}>{notification.category}</p>
                    <h2 className="text-2xl font-bold text-slate-800">{notification.title}</h2>
                </div>
            </div>

            <div className="space-y-4 text-slate-700">
                <div className="flex items-center">
                    <i className="fa-solid fa-calendar-alt w-5 text-center mr-2 text-slate-400"></i>
                    <span className="font-semibold">{notification.date}</span>
                </div>
                <div>
                    <p className="leading-relaxed">{notification.description}</p>
                    <p className="mt-4 text-sm text-slate-500">
                        This is an important deadline. Make sure to check the official websites for the most up-to-date information, required documents, and application procedures.
                    </p>
                </div>
            </div>
             <div className="mt-8 text-right">
                <button 
                    onClick={handleClose}
                    className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                    Close
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineDetailModal;