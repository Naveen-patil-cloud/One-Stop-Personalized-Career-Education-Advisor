
import React from 'react';
import { Section } from '../types';

interface FooterProps {
  setActiveSection: (section: Section) => void;
}

const FooterLink: React.FC<{ section: Section, title: string, setActiveSection: (section: Section) => void }> = ({ section, title, setActiveSection }) => (
  <li>
    <a
      href={`#${section}`}
      onClick={(e) => { e.preventDefault(); setActiveSection(section); }}
      className="text-slate-300 hover:text-white transition-colors duration-200"
    >
      {title}
    </a>
  </li>
);

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold">Career & Education Advisor</h3>
            <p className="text-slate-400 text-sm mt-2">
              Your one-stop platform for academic and career guidance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase text-slate-400 text-sm">Navigate</h4>
            <ul className="mt-4 space-y-2">
              <FooterLink section="home" title="Home" setActiveSection={setActiveSection} />
              <FooterLink section="about" title="About Us" setActiveSection={setActiveSection} />
              <FooterLink section="quiz" title="Aptitude Quiz" setActiveSection={setActiveSection} />
              <FooterLink section="careers" title="Career Paths" setActiveSection={setActiveSection} />
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold tracking-wider uppercase text-slate-400 text-sm">Resources</h4>
            <ul className="mt-4 space-y-2">
              <FooterLink section="colleges" title="Colleges" setActiveSection={setActiveSection} />
              <FooterLink section="loans" title="Edu Loans" setActiveSection={setActiveSection} />
              <FooterLink section="resources" title="Materials" setActiveSection={setActiveSection} />
              <FooterLink section="impact" title="Impact" setActiveSection={setActiveSection} />
              <FooterLink section="chatbot" title="AI Chatbot" setActiveSection={setActiveSection} />
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm order-2 sm:order-1 mt-4 sm:mt-0">
              &copy; {new Date().getFullYear()} Career Advisor. All rights reserved.
            </p>
            <div className="flex space-x-6 order-1 sm:order-2">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;