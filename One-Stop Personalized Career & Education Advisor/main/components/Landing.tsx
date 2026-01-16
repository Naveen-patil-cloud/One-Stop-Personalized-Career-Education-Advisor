import React, { useState } from 'react';
import { Section } from '../types';
import VideoModal from './VideoModal';

interface LandingProps {
    setActiveSection: (section: Section) => void;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  gradient: string;
  onClick: () => void;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, gradient, onClick, children }) => (
  <div
    onClick={onClick}
    className="group cursor-pointer bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-200/50 
               transition-all duration-500 [transform-style:preserve-3d] 
               hover:shadow-2xl hover:shadow-indigo-200/50 hover:[transform:translateY(-0.5rem)_rotateX(10deg)]"
  >
    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradient} text-white rounded-xl mb-4
                     shadow-md transition-transform duration-300 group-hover:scale-110`}>
      <i className={`fa-solid ${icon} text-2xl`}></i>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2 transition-colors duration-300 group-hover:text-indigo-600">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </div>
);


const Landing: React.FC<LandingProps> = ({ setActiveSection }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const features = [
    {
      id: 'dashboard',
      title: 'AI-Powered Dashboard',
      description: 'Get personalized course and college suggestions based on your unique profile and quiz results. Our AI synthesizes your data to provide a clear, actionable roadmap.',
      icon: 'fa-robot',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'quiz',
      title: 'In-Depth Aptitude Quiz',
      description: 'Go beyond simple questions. Our quiz is designed to understand your core interests and strengths, providing a solid foundation for your career decisions.',
      icon: 'fa-tasks',
      gradient: 'from-sky-500 to-cyan-400'
    },
    {
      id: 'careers',
      title: 'Interactive Career Maps',
      description: 'Explore the connections between degrees and professions. Our visual maps show you the diverse opportunities available, from government jobs to entrepreneurship.',
      icon: 'fa-route',
      gradient: 'from-emerald-500 to-lime-500'
    },
    {
      id: 'colleges',
      title: 'Comprehensive College Directory',
      description: 'Filter and search through an extensive database of government colleges. Compare cut-offs, fees, facilities, and more to find your perfect match.',
      icon: 'fa-building-columns',
      gradient: 'from-amber-500 to-orange-400'
    }
  ];

  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <>
      <div id="home" className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg">
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Find Your Future, <span className="bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text">Today</span>.
                </h1>
                <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
                  Navigate the complexities of post-school decisions with a powerful AI-driven platform. We provide data-backed insights on streams, courses, colleges, and future career paths, all tailored to your unique potential.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => setActiveSection('quiz')}
                      className="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Take the Aptitude Quiz
                    </button>
                    <button
                        onClick={() => setShowVideoModal(true)}
                        className="w-full sm:w-auto bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition duration-300 transform hover:scale-105 shadow-lg border border-indigo-200 flex items-center justify-center"
                    >
                      <i className="fa-solid fa-play mr-2"></i> Watch Intro
                    </button>
                </div>
              </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">A Smarter Way to Plan Your Future</h2>
                <p className="text-slate-600 mb-12 max-w-2xl mx-auto">We provide the tools and insights you need to make confident decisions about your education and career.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">
                    <FeatureCard 
                      icon="fa-tasks" 
                      title="Discover Your Aptitude"
                      gradient="from-blue-500 to-cyan-400"
                      onClick={() => setActiveSection('quiz')}
                    >
                       Our comprehensive quiz analyzes your personality, interests, and academic inclinations to generate a detailed aptitude report, recommending the stream where you're most likely to succeed.
                    </FeatureCard>
                    <FeatureCard 
                      icon="fa-route" 
                      title="Map Your Career Path"
                      gradient="from-emerald-500 to-lime-500"
                      onClick={() => setActiveSection('careers')}
                    >
                        Visualize your future with dynamic career maps. See exactly how a degree translates into real-world jobs, higher education opportunities, and entrepreneurial ventures. Understand the paths you can take.
                    </FeatureCard>
                    <FeatureCard 
                      icon="fa-building-columns" 
                      title="Find the Right College"
                      gradient="from-amber-500 to-orange-400"
                      onClick={() => setActiveSection('colleges')}
                    >
                        Discover the best government colleges without the hassle. Filter by location and courses, and access detailed profiles including admission cut-offs, campus facilities, and fees.
                    </FeatureCard>
                </div>
            </div>
        </section>

         {/* Visual Feature Section */}
        <section className="py-20 bg-slate-100/80 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Explore Our Core Features</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">From self-discovery to college applications, we've got every step of your journey covered with powerful, easy-to-use tools.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left side: Feature list */}
                  <div className="space-y-4">
                      {features.map((feature) => (
                          <div
                              key={feature.id}
                              onClick={() => setActiveFeature(feature)}
                              className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 ${
                                  activeFeature.id === feature.id
                                      ? 'bg-white shadow-lg border-indigo-500'
                                      : 'bg-white/60 border-transparent hover:bg-white hover:shadow-md'
                              }`}
                          >
                              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                              <p className="text-slate-600 text-sm">{feature.description}</p>
                          </div>
                      ))}
                  </div>

                  {/* Right side: Visual representation */}
                  <div className="h-96 bg-white rounded-xl shadow-lg p-6 flex items-center justify-center transition-opacity duration-500">
                      <div className="text-center">
                          <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${activeFeature.gradient} text-white rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 transform scale-100`}>
                              <i className={`fa-solid ${activeFeature.icon} text-6xl`}></i>
                          </div>
                          <h4 className="text-2xl font-bold text-slate-800">{activeFeature.title}</h4>
                          <p className="text-slate-500 mt-2">Interactive visual representation</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* AI Guidance Section */}
        <section className="py-20 bg-white/80 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Get Your Personalized AI-Powered Roadmap</h2>
              <p className="text-slate-600 mb-12 max-w-3xl mx-auto">Our advanced AI analyzes your unique strengths and interests to provide guidance that's not just generic, but genuinely right for you.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                      <div className="w-20 h-20 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 text-2xl font-bold">1</div>
                      <h3 className="font-bold text-lg mt-4 mb-2">Take the Quiz</h3>
                      <p className="text-slate-600 text-sm">Answer our carefully designed questions to pinpoint your aptitude.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="w-20 h-20 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 text-2xl font-bold">2</div>
                      <h3 className="font-bold text-lg mt-4 mb-2">Complete Your Profile</h3>
                      <p className="text-slate-600 text-sm">Add details about your interests and academic background for a holistic analysis.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <div className="w-20 h-20 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 text-2xl font-bold">3</div>
                      <h3 className="font-bold text-lg mt-4 mb-2">Receive Your Plan</h3>
                      <p className="text-slate-600 text-sm">Get AI-driven suggestions for courses, colleges, and career paths on your dashboard.</p>
                  </div>
              </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 md:p-12 rounded-2xl shadow-2xl">
                  <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Build Your Future?</h2>
                  <p className="text-indigo-200 mb-8">
                      Create a free account to save your progress, access your personalized dashboard, and get AI-powered advice that lights up your path forward.
                  </p>
                  <button
                      onClick={() => setActiveSection('register')}
                      className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                      Get Started for Free
                  </button>
              </div>
          </div>
        </section>
      </div>
      {showVideoModal && <VideoModal onClose={() => setShowVideoModal(false)} />}
    </>
  );
};

export default Landing;