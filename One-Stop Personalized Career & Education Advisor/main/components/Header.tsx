
import React, { useState } from 'react';
import { Section, AuthUser } from '../types';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  currentUser: AuthUser | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, currentUser, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems: { id: Section; title: string }[] = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About Us' },
    { id: 'quiz', title: 'Aptitude Quiz' },
    { id: 'careers', title: 'Career Paths' },
    { id: 'colleges', title: 'Colleges' },
    { id: 'timeline', title: 'Timeline' },
    { id: 'loans', title: 'Edu Loans' },
    { id: 'chatbot', title: 'AI Chatbot' },
    { id: 'dashboard', title: 'Dashboard' },
    { id: 'resources', title: 'Resources' },
    { id: 'impact', title: 'Impact' },
  ];

  const NavLink: React.FC<{ item: { id: Section; title: string }, isMobile?: boolean }> = ({ item, isMobile }) => {
    // Hide dashboard and chatbot link if not logged in
    if ((item.id === 'dashboard' || item.id === 'chatbot') && !currentUser) return null;

    const baseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
    const mobileClasses = isMobile ? "block" : "";
    const activeClasses = activeSection === item.id ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900';

    return (
      <a
        href={`#${item.id}`}
        onClick={(e) => {
          e.preventDefault();
          setActiveSection(item.id);
          setIsMenuOpen(false);
        }}
        className={`${baseClasses} ${mobileClasses} ${activeClasses}`}
      >
        {item.title}
      </a>
    );
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
             <a href="#home" onClick={(e) => {e.preventDefault(); setActiveSection('home')}} className="flex items-center space-x-2">
                <i className="fa-solid fa-graduation-cap text-2xl text-indigo-600"></i>
                <span className="text-xl font-bold text-slate-800">CareerAdvisor</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => <NavLink key={item.id} item={item} />)}
              {!currentUser ? (
                <>
                  <button onClick={() => setActiveSection('login')} className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-200">Login</button>
                  <button onClick={() => setActiveSection('register')} className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Register</button>
                </>
              ) : (
                <>
                  <span className="px-3 py-2 text-sm font-medium text-slate-700">Welcome, {currentUser.name}!</span>
                  <button onClick={onLogout} className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-200">Logout</button>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-slate-200 inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map((item) => <NavLink key={item.id} item={item} isMobile />)}
             <div className="border-t border-slate-200 mt-2 pt-2">
                {!currentUser ? (
                  <>
                    <a href="#login" onClick={(e) => {e.preventDefault(); setActiveSection('login'); setIsMenuOpen(false);}} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Login</a>
                    <a href="#register" onClick={(e) => {e.preventDefault(); setActiveSection('register'); setIsMenuOpen(false);}} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Register</a>
                  </>
                ) : (
                  <>
                    <div className="px-3 py-2 text-base font-medium text-slate-700">Welcome, {currentUser.name}!</div>
                    <a href="#logout" onClick={(e) => {e.preventDefault(); onLogout(); setIsMenuOpen(false);}} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-200">Logout</a>
                  </>
                )}
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;