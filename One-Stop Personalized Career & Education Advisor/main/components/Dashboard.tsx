import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { UserProfile, QuizResult, AISuggestions, AuthUser } from '../types';
import { getPersonalizedAdvice } from '../services/geminiService';

interface DashboardProps {
  currentUser: AuthUser;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
  const [profile, setProfile] = useLocalStorage<UserProfile | null>(`userProfile_${currentUser.email}`, null);
  const [quizResult] = useLocalStorage<QuizResult | null>('quizResult', null);
  const [suggestions, setSuggestions] = useState<AISuggestions | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<UserProfile>({
    name: currentUser.name,
    age: '',
    currentClass: '',
    interests: '',
    profilePicture: '',
  });

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    } else {
      // Ensure name is from the authenticated user if no profile is saved yet
      setFormData(prev => ({ ...prev, name: currentUser.name }));
    }
  }, [profile, currentUser.name]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prev => ({ ...prev, profilePicture: reader.result as string }));
        };
        reader.readAsDataURL(file);
    }
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    alert('Profile saved successfully!');
  };

  const fetchSuggestions = async () => {
    if (!profile || !quizResult) {
      // Update profile from form data before fetching, in case it's not saved.
      const currentProfile = formData;
      if (!currentProfile.age || !currentProfile.currentClass || !currentProfile.interests) {
          setError("Please complete your profile to get AI suggestions.");
          return;
      }
      if (!quizResult) {
        setError("Please complete the aptitude quiz to get AI suggestions.");
        return;
      }
    }
    setIsLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      // Use the latest profile data from the form for the API call
      const result = await getPersonalizedAdvice(formData, quizResult);
      if(result) {
        setSuggestions(result);
      } else {
        setError("Could not retrieve AI suggestions. Please try again later.");
      }
    } catch (err) {
      setError("An error occurred while fetching suggestions.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="dashboard" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Personalized Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center"><i className="fa-solid fa-user-edit mr-2 text-indigo-500"></i>Welcome, {currentUser.name}</h3>
            
            <div className="flex flex-col items-center mb-6">
                <div className="relative w-24 h-24">
                    {formData.profilePicture ? (
                        <img 
                            src={formData.profilePicture}
                            alt="Profile" 
                            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-200"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center border-4 border-indigo-200">
                            <i className="fa-solid fa-user text-4xl text-slate-500"></i>
                        </div>
                    )}
                </div>
                <input 
                    type="file" 
                    id="profilePictureInput" 
                    className="hidden" 
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange} 
                />
                <label 
                    htmlFor="profilePictureInput" 
                    className="mt-2 cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Upload Picture
                </label>
            </div>

            <form onSubmit={handleProfileSave} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" disabled />
              </div>
              <div className="relative group">
                <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age</label>
                <input type="number" name="age" id="age" value={formData.age} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required/>
                <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 bg-slate-700 text-white text-xs font-semibold rounded-md px-2 py-1">
                    Enter your current age in years
                </span>
              </div>
              <div className="relative group">
                <label htmlFor="currentClass" className="block text-sm font-medium text-slate-700">Class (e.g., 10th, 12th)</label>
                <input type="text" name="currentClass" id="currentClass" value={formData.currentClass} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required/>
                <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 bg-slate-700 text-white text-xs font-semibold rounded-md px-2 py-1">
                    Specify your current grade, e.g., '10th' or '12th'
                </span>
              </div>
              <div className="relative group">
                <label htmlFor="interests" className="block text-sm font-medium text-slate-700">Interests (e.g., Reading, Coding)</label>
                <textarea name="interests" id="interests" value={formData.interests} onChange={handleInputChange} rows={3} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" required></textarea>
                <span className="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 bg-slate-700 text-white text-xs font-semibold rounded-md px-2 py-1">
                    List your hobbies and academic interests
                </span>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Save Profile</button>
            </form>
          </div>

          {/* AI Suggestions Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center"><i className="fa-solid fa-robot mr-2 text-indigo-500"></i>AI-Driven Suggestions</h3>
            
            {!quizResult && <div className="text-center p-4 bg-yellow-100 text-yellow-800 rounded-md">Please take the Aptitude Quiz first!</div>}

            <div className="text-center mt-4">
              <button onClick={fetchSuggestions} disabled={isLoading} className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed">
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin mr-2"></i>
                    Generating...
                  </>
                ) : "Get AI-Powered Advice"}
              </button>
            </div>
            {error && <div className="mt-4 text-center p-3 bg-red-100 text-red-800 rounded-md">{error}</div>}
            
            {suggestions && (
              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-indigo-700">Recommended Stream</h4>
                  <p className="text-slate-600">{suggestions.recommendedStream}</p>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-700">Suggested Courses</h4>
                  <ul className="list-disc list-inside text-slate-600">
                    {suggestions.suggestedCourses.map(course => <li key={course}>{course}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-700">Career Outlook</h4>
                  <p className="text-slate-600">{suggestions.careerOutlook}</p>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-700">College Selection Tips</h4>
                  <p className="text-slate-600">{suggestions.collegeTips}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;