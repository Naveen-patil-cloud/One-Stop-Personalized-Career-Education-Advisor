
import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Quiz from './components/Quiz';
import CareerMap from './components/CareerMap';
import CollegeDirectory from './components/CollegeDirectory';
import Timeline from './components/Timeline';
import Dashboard from './components/Dashboard';
import Resources from './components/Resources';
import Impact from './components/Impact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import PasswordReset from './components/PasswordReset';
import Chatbot from './components/Chatbot';
import { Section, AuthUser } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import AnimatedBackground from './components/AnimatedBackground';
import EducationalLoans from './components/EducationalLoans';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [currentUser, setCurrentUser] = useLocalStorage<AuthUser | null>('currentUser', null);

  const handleSetActiveSection = (section: Section) => {
    if ((section === 'dashboard' || section === 'chatbot') && !currentUser) {
      setActiveSection('login');
    } else {
      setActiveSection(section);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveSection('home');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Landing setActiveSection={handleSetActiveSection} />;
      case 'about':
        return <About />;
      case 'quiz':
        return <Quiz />;
      case 'careers':
        return <CareerMap />;
      case 'colleges':
        return <CollegeDirectory />;
      case 'timeline':
        return <Timeline currentUser={currentUser} />;
      case 'loans':
        return <EducationalLoans />;
      case 'chatbot':
        return currentUser ? <Chatbot /> : <Login onLoginSuccess={(user) => { setCurrentUser(user); setActiveSection('chatbot'); }} switchToRegister={() => setActiveSection('register')} switchToPasswordReset={() => setActiveSection('password-reset')} />;
      case 'dashboard':
        return currentUser ? <Dashboard currentUser={currentUser} /> : <Login onLoginSuccess={(user) => { setCurrentUser(user); setActiveSection('dashboard'); }} switchToRegister={() => setActiveSection('register')} switchToPasswordReset={() => setActiveSection('password-reset')} />;
      case 'resources':
        return <Resources />;
      case 'impact':
        return <Impact />;
      case 'login':
        return <Login onLoginSuccess={(user) => { setCurrentUser(user); setActiveSection('dashboard'); }} switchToRegister={() => setActiveSection('register')} switchToPasswordReset={() => setActiveSection('password-reset')} />;
      case 'register':
        return <Register onRegisterSuccess={(user) => { setCurrentUser(user); setActiveSection('dashboard'); }} switchToLogin={() => setActiveSection('login')} />;
      case 'password-reset':
        return <PasswordReset switchToLogin={() => setActiveSection('login')} />;
      default:
        return <Landing setActiveSection={handleSetActiveSection} />;
    }
  };

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex flex-col relative">
        <Header 
          activeSection={activeSection} 
          setActiveSection={handleSetActiveSection} 
          currentUser={currentUser}
          onLogout={handleLogout}
        />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderSection()}
        </main>
        <Footer setActiveSection={handleSetActiveSection} />
      </div>
    </>
  );
};

export default App;