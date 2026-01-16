
import React, { useState } from 'react';
import { AuthUser } from '../types';

interface LoginProps {
  onLoginSuccess: (user: AuthUser) => void;
  switchToRegister: () => void;
  switchToPasswordReset: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, switchToRegister, switchToPasswordReset }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // NOTE: This is an insecure way to handle user data for demo purposes.
    const users: AuthUser[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Pass user object without password to the parent
      onLoginSuccess({ name: user.name, email: user.email });
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <section id="login" className="py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Log In</h2>
          {error && <div className="mb-4 text-center p-3 bg-red-100 text-red-800 rounded-md">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                required 
              />
            </div>
            <div>
              <label htmlFor="password" aria-label="Password" className="block text-sm font-medium text-slate-700">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password" 
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                required 
              />
              <div className="text-right mt-2">
                <button 
                  type="button" 
                  onClick={switchToPasswordReset} 
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot Password?
                </button>
              </div>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Log In
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <button onClick={switchToRegister} className="font-medium text-indigo-600 hover:text-indigo-500">
              Register here
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;