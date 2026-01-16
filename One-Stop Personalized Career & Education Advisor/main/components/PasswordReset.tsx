
import React, { useState } from 'react';

interface PasswordResetProps {
  switchToLogin: () => void;
}

const PasswordReset: React.FC<PasswordResetProps> = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd check if the user exists and send an email.
    // For this demo, we'll just show a confirmation message to prevent email enumeration.
    setMessage('If an account exists for this email, a password reset link has been sent.');
    setEmail(''); // Clear the input after submission
  };

  return (
    <section id="password-reset" className="py-12">
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-2">Reset Password</h2>
          <p className="text-center text-slate-600 mb-6">Enter your email to receive a reset link.</p>
          
          {message && <div className="mb-4 text-center p-3 bg-green-100 text-green-800 rounded-md">{message}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send Reset Link
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-slate-600">
            Remembered your password?{' '}
            <button onClick={switchToLogin} className="font-medium text-indigo-600 hover:text-indigo-500">
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PasswordReset;
