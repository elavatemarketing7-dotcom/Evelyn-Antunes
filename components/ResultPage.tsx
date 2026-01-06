
import React from 'react';
import { EXPERT, QUESTIONS } from '../constants';
import { CheckCircle2, Send, MessageCircle, ArrowRight } from 'lucide-react';

interface ResultPageProps {
  answers: string[];
  onGoToSite: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onGoToSite }) => {
  const generateWhatsappUrl = (withEvaluation: boolean) => {
    let message = `Olá Dra. Evelyn! `;
    if (withEvaluation) {
      message += `Acabei de realizar minha avaliação personalizada e sou a paciente ideal:\n\n`;
      QUESTIONS.forEach((q, idx) => {
        message += `*${q.text}*\n_R:_ ${answers[idx]}\n\n`;
      });
      message += `Quero agendar minha consulta baseada nesse perfil!`;
    } else {
      message += `Gostaria de tirar algumas dúvidas sobre os procedimentos de harmonização facial sem compromisso.`;
    }
    return `${EXPERT.whatsapp}&text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="h-[100dvh] w-full bg-white flex flex-col items-center overflow-hidden relative font-sans">
      {/* Sophisticated Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-50/50 to-transparent -z-10" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl -z-10" />
      
      {/* Top Section: Photo & Header */}
      <div className="flex-1 w-full flex flex-col items-center justify-center px-6 pt-4 space-y-3">
        {/* Profile Image - Compact Circle with Premium Border */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-600 to-amber-200 rounded-full blur-sm opacity-40 group-hover:opacity-75 transition"></div>
          <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-xl">
            <img 
              src={EXPERT.altHeroImg} 
              className="w-full h-full object-cover" 
              alt="Dra Evelyn Antunes" 
            />
          </div>
        </div>

        {/* Text Group */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-bold text-[10px] tracking-wider uppercase mb-1">
            <CheckCircle2 className="w-3 h-3" />
            Perfil Compatível
          </div>
          
          <h1 className="text-2xl font-serif text-amber-950 leading-tight">
            Você é a <span className="italic">Paciente Ideal</span>
          </h1>
          
          <p className="text-gray-500 text-xs leading-relaxed max-w-[280px] mx-auto">
            O Método da <span className="font-bold text-amber-700">Dra. Evelyn Antunes</span> entrega a naturalidade e segurança que você busca.
          </p>
        </div>
      </div>

      {/* Action Section: The 3 Buttons */}
      <div className="w-full px-6 pb-8 space-y-3 mt-auto">
        {/* Button 1: Primary with Animation */}
        <a 
          href={generateWhatsappUrl(true)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-amber-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-amber-600/20 active:scale-95 transition-all animate-pulse text-xs uppercase tracking-widest border-b-4 border-amber-800"
        >
          <Send className="w-4 h-4" />
          1- Enviar minha avaliação à Dra
        </a>

        {/* Button 2: Secondary */}
        <a 
          href={generateWhatsappUrl(false)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-amber-50 border-2 border-amber-200 text-amber-800 font-bold py-4 rounded-2xl active:scale-95 transition-all text-xs uppercase tracking-widest"
        >
          <MessageCircle className="w-4 h-4" />
          2- Chamar no WhatsApp sem compromisso
        </a>

        {/* Button 3: Tertiary */}
        <button 
          onClick={onGoToSite}
          className="flex items-center justify-center gap-2 w-full bg-white text-gray-400 font-medium py-3 rounded-xl active:scale-95 transition-all text-[10px] uppercase tracking-widest"
        >
          3- Não enviar e continuar no site
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Signature Detail */}
      <div className="pb-4 opacity-20">
        <span className="font-serif italic text-sm text-amber-900">{EXPERT.name}</span>
      </div>
    </div>
  );
};

export default ResultPage;
