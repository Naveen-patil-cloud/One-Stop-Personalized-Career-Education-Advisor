import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuizResult, QuizAnswers } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useLocalStorage<QuizResult | null>('quizResult', null);

  const handleOptionToggle = (stream: string) => {
    const currentAnswers = answers[currentQuestionIndex] || [];
    const newAnswers = currentAnswers.includes(stream)
      ? currentAnswers.filter(s => s !== stream)
      : [...currentAnswers, stream];
    setAnswers({ ...answers, [currentQuestionIndex]: newAnswers });
  };

  const calculateResult = () => {
    const scores: QuizResult = { Science: 0, Arts: 0, Commerce: 0, Vocational: 0 };
    Object.values(answers).flat().forEach((stream) => {
      scores[stream as keyof QuizResult]++;
    });
    setResult(scores);
    setShowResult(true);
  };
  
  const resetQuiz = () => {
      setCurrentQuestionIndex(0);
      setAnswers({});
      setShowResult(false);
      setResult(null);
  }

  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;
  
  const getResultData = () => {
      if(!result) return [];
      const totalAnswers = Object.values(answers).flat().length;
      return Object.entries(result).map(([name, value]) => ({ 
        name, 
        score: value,
        percentage: totalAnswers > 0 ? (value / totalAnswers) * 100 : 0
      }));
  }

  const getRecommendedStreams = () => {
      if(!result) return [];
      const sortedStreams = Object.entries(result).sort(([, a], [, b]) => b - a);
      if (sortedStreams.length === 0 || sortedStreams[0][1] === 0) return [];
      const topScore = sortedStreams[0][1];
      return sortedStreams.filter(([, score]) => score === topScore).map(([name]) => name);
  }

  return (
    <section id="quiz" className="py-12 bg-slate-100 rounded-lg">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Aptitude & Interest Quiz</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          {!showResult ? (
            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-indigo-700">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-6">{QUIZ_QUESTIONS[currentQuestionIndex].question}</h3>
              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, index) => {
                   const isSelected = answers[currentQuestionIndex]?.includes(option.stream) || false;
                   return (
                     <button
                       key={index}
                       onClick={() => handleOptionToggle(option.stream)}
                       className={`w-full text-left p-4 border rounded-lg transition-all duration-200 flex items-center space-x-4
                         ${isSelected ? 'bg-indigo-100 border-indigo-500 ring-2 ring-indigo-300' : 'bg-white border-slate-300 hover:bg-indigo-50 hover:border-indigo-400'}`}
                     >
                       <div className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center ${isSelected ? 'bg-indigo-600 border-indigo-600' : 'border-slate-400'}`}>
                         {isSelected && <i className="fa-solid fa-check text-white text-xs"></i>}
                       </div>
                       <span>{option.text}</span>
                     </button>
                   );
                })}
              </div>
               <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                  disabled={currentQuestionIndex === 0}
                  className="bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-full hover:bg-slate-300 transition duration-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
                >
                  <i className="fa-solid fa-arrow-left mr-2"></i> Previous
                </button>
                {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                    className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
                  >
                    Next <i className="fa-solid fa-arrow-right ml-2"></i>
                  </button>
                ) : (
                  <button
                    onClick={calculateResult}
                    className="bg-emerald-500 text-white font-bold py-2 px-6 rounded-full hover:bg-emerald-600 transition duration-300"
                  >
                    See My Results <i className="fa-solid fa-flag-checkered ml-2"></i>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
              <p className="text-slate-600 mb-6">Based on your answers, here is your interest profile:</p>
              
              <div className="w-full px-4 pt-4">
                {getResultData().map((item, index) => (
                    <div key={index} className="mb-4 text-left">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-slate-700">{item.name}</span>
                            <span className="text-sm font-medium text-slate-700">{item.score} selections ({item.percentage.toFixed(0)}%)</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4">
                            <div className="bg-indigo-600 h-4 rounded-full transition-width duration-500" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                    </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-indigo-800">
                    {getRecommendedStreams().length > 1 ? 'Top Recommendations' : 'Top Recommendation'}
                  </h4>
                  <p className="text-2xl font-bold text-indigo-600">{getRecommendedStreams().join(' & ')}</p>
                   <div className="text-sm text-indigo-900 mt-4 space-y-3 text-left">
                    {getRecommendedStreams().includes('Science') && (
                        <div>
                            <p className="font-semibold">If you enjoy Science:</p>
                            <p>You show a strong aptitude for analytical and logical thinking. Consider pursuing courses like B.Sc. (Physics, Chemistry), B.Tech/B.E. (Computer Science, Engineering), or medical degrees (MBBS).</p>
                        </div>
                    )}
                    {getRecommendedStreams().includes('Arts') && (
                         <div>
                            <p className="font-semibold">If you enjoy Arts/Humanities:</p>
                            <p>You have an interest in human culture, society, and creative expression. Great course options include B.A. (History, Political Science), Bachelor of Fine Arts (BFA), or Law (LLB).</p>
                        </div>
                    )}
                    {getRecommendedStreams().includes('Commerce') && (
                        <div>
                           <p className="font-semibold">If you enjoy Commerce:</p>
                           <p>Your strengths may lie in understanding business, finance, and economics. Look into courses such as B.Com, BBA, Chartered Accountancy (CA), or Company Secretary (CS).</p>
                       </div>
                    )}
                    {getRecommendedStreams().includes('Vocational') && (
                        <div>
                           <p className="font-semibold">If you enjoy Vocational subjects:</p>
                           <p>You enjoy practical, skill-based work. You might excel in courses like Bachelor of Vocational Studies (B.Voc), Diplomas in Graphic Design or Web Development, or ITI courses.</p>
                       </div>
                    )}
                </div>
                  <p className="text-sm text-indigo-700 mt-4 font-semibold">For more personalized suggestions, save this result and visit your Dashboard!</p>
              </div>
              <button onClick={resetQuiz} className="mt-8 bg-slate-600 text-white font-bold py-2 px-6 rounded-full hover:bg-slate-700 transition duration-300">
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;