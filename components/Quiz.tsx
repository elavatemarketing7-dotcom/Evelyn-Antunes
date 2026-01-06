
import React, { useState, useEffect } from 'react';
import { EXPERT, QUESTIONS } from '../constants';
import { X } from 'lucide-react';

interface QuizProps {
  onFinish: (answers: string[]) => void;
  onGoToSite: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onGoToSite }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(((step) / QUESTIONS.length) * 100);
  }, [step]);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setIsAnalyzing(true);
      let p = 0;
      const interval = setInterval(() => {
        p += 10;
        if (p >= 100) {
          clearInterval(interval);
          onFinish(newAnswers);
        }
      }, 150);
    }
  };

  if (isAnalyzing) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-6 z-[60]">
        <div className="absolute inset-0 opacity-10">
          <img src={EXPERT.heroImg} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 flex flex-col items-center w-full max-w-xs">
          <div className="w-16 h-16 mb-4 rounded-full border-4 border-amber-100 border-t-amber-600 animate-spin shadow-lg"></div>
          <h2 className="text-xl font-serif text-amber-900 mb-1 uppercase tracking-tight text-center">Analisando...</h2>
          <p className="text-gray-400 text-[10px] text-center mb-6 uppercase tracking-widest font-bold">Gerando seu Perfil Exclusivo</p>
          <div className="w-full h-1 bg-amber-50 rounded-full overflow-hidden border border-amber-100">
            <div className="h-full bg-amber-600 transition-all duration-300" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = QUESTIONS[step];

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-hidden h-[100dvh]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img src={EXPERT.heroImg} className="w-full h-full object-cover opacity-[0.12]" alt="" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95"></div>
      </div>

      {/* Compact Header with Exit Button */}
      <header className="relative z-20 px-5 pt-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={onGoToSite}
            className="p-2 -ml-2 bg-amber-50 text-amber-600 rounded-full active:scale-90 transition-all shadow-sm border border-amber-100"
            aria-label="Sair do Quiz"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-lg font-serif italic text-amber-950 leading-none">{EXPERT.name}</h1>
            <span className="text-[8px] text-amber-600 uppercase tracking-[0.2em] font-bold mt-1">Avaliação Exclusiva</span>
          </div>
        </div>
        
        <div className="relative w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden shrink-0">
          <img src={EXPERT.heroImg} className="w-full h-full object-cover" alt="Dra. Evelyn" />
        </div>
      </header>

      {/* Progress Bar */}
      <div className="relative z-20 px-5 mt-1">
        <div className="w-full h-1 bg-amber-50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-600 transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Main Container */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-5 py-4">
        <div className="bg-white/85 backdrop-blur-md rounded-[2.5rem] px-5 py-8 w-full border border-white/60 shadow-xl flex flex-col items-center max-h-[85vh]">
          <span className="text-amber-700 font-bold text-[9px] uppercase tracking-widest mb-3 bg-amber-100/50 px-2.5 py-1 rounded-full">
            Pergunta {step + 1} de {QUESTIONS.length}
          </span>
          
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-6 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="w-full space-y-2.5 overflow-y-auto pr-1 no-scrollbar">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 text-left border border-amber-100 rounded-2xl bg-white/90 active:bg-amber-50 active:border-amber-400 active:scale-[0.98] transition-all duration-150 shadow-sm flex items-center justify-between group"
              >
                <span className="text-gray-700 font-medium text-sm leading-tight pr-4">
                  {option}
                </span>
                <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-200 group-active:bg-amber-600"></div>
              </button>
            ))}
          </div>

          <button 
            onClick={onGoToSite}
            className="mt-8 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold border-b border-gray-100 pb-1 active:text-amber-600 transition-colors"
          >
            Sair e ver site principal
          </button>
        </div>
      </main>

      {/* Footer Branding Decor */}
      <div className="fixed bottom-4 left-6 z-10 pointer-events-none opacity-20">
        <div className="w-10 h-10 rounded-lg border border-amber-200 overflow-hidden bg-white -rotate-6">
          <img src={EXPERT.altHeroImg} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
      
      <div className="fixed bottom-4 right-8 opacity-[0.03] pointer-events-none">
        <span className="font-serif italic text-3xl text-amber-950">{EXPERT.name}</span>
      </div>
    </div>
  );
};

export default Quiz;
