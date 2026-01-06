
import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import LandingPage from './components/LandingPage';
import { AppState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.WELCOME);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  // Smooth scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleQuizFinish = (answers: string[]) => {
    setQuizAnswers(answers);
    setView(AppState.RESULT);
  };

  const handleGoToSite = () => {
    setView(AppState.SITE);
  };

  return (
    <div className="min-h-screen">
      {view === AppState.WELCOME && (
        <div className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center p-6 text-white text-center z-50">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://i.imgur.com/keDeogF.png" 
              className="w-full h-full object-cover animate-slow-zoom" 
              alt="Dra Evelyn Antunes Background" 
            />
          </div>
          
          <div className="relative z-10 max-w-md w-full">
            <h1 className="text-4xl font-serif italic mb-2">Evelyn Antunes</h1>
            <p className="text-amber-500 tracking-widest text-xs uppercase mb-12">Harmonização Facial</p>
            
            <p className="text-lg font-light mb-10 leading-relaxed">
              Você busca uma transformação <span className="font-semibold text-amber-500 italic">natural</span> ou quer conhecer mais sobre o método?
            </p>

            <button 
              onClick={() => setView(AppState.QUIZ)}
              className="w-full bg-amber-600 text-white font-bold py-5 rounded-full mb-4 shadow-xl active:scale-95 transition-transform btn-glow text-lg uppercase tracking-tight"
            >
              Fazer Avaliação Personalizada
            </button>
            
            <button 
              onClick={handleGoToSite}
              className="w-full border border-white/30 bg-white/5 text-white font-medium py-4 rounded-full active:scale-95 transition-transform text-base"
            >
              Ir direto para o site
            </button>
          </div>
        </div>
      )}

      {view === AppState.QUIZ && (
        <Quiz onFinish={handleQuizFinish} onGoToSite={handleGoToSite} />
      )}

      {view === AppState.RESULT && (
        <ResultPage answers={quizAnswers} onGoToSite={handleGoToSite} />
      )}

      {view === AppState.SITE && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
