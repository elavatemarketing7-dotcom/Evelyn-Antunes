
import React, { useState } from 'react';
import { EXPERT, GALLERY_BEFORE_AFTER, GALLERY_LIFESTYLE, DIFFERENTIALS } from '../constants';
import { MessageCircle, MapPin, Instagram, ChevronRight, X, Heart, Shield, Sparkles } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white overflow-hidden pb-10">
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white p-2">
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border-2 border-amber-500/20" 
            alt="Resultado ampliado" 
          />
        </div>
      )}

      {/* Hero Section - Refined for maximum impact */}
      <section className="relative min-h-[95vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT.heroImg} 
            className="w-full h-full object-cover object-top" 
            alt="Dra Evelyn Antunes" 
          />
          {/* Enhanced Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 px-7 pb-16 text-white">
          <div className="mb-6 space-y-1">
            <div className="inline-block px-3 py-1 bg-amber-600/20 border border-amber-600/30 backdrop-blur-sm rounded-full mb-4">
              <h2 className="text-amber-400 font-bold tracking-[0.25em] uppercase text-[10px]">Expert em Beleza Natural</h2>
            </div>
            
            <p className="text-2xl font-light opacity-90 tracking-tight leading-none mb-1">Eu sou</p>
            <h1 className="text-6xl font-serif leading-none mb-6 drop-shadow-2xl">
              <span className="italic block">Evelyn</span>
              <span className="text-gold font-bold block -mt-2">Antunes</span>
            </h1>
          </div>

          <div className="max-w-xs mb-10">
            <p className="text-xl font-medium leading-relaxed drop-shadow-md">
              Especialista em realçar sua <span className="text-amber-400 italic">beleza autêntica</span> com segurança, harmonia e resultados que <span className="underline decoration-amber-500/50 underline-offset-4">não parecem artificiais</span>.
            </p>
          </div>

          <a 
            href={EXPERT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-amber-600 text-white font-bold py-6 rounded-2xl shadow-2xl btn-glow animate-pulse active:scale-95 transition-all text-lg uppercase tracking-tight"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar consulta agora
          </a>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <div className="mb-10 text-center">
             <p className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">Quem sou eu</p>
             <h3 className="text-3xl font-serif text-amber-950">Uma história de paixão por rostos reais</h3>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-amber-50">
            <img src={EXPERT.altHeroImg} className="w-full aspect-[4/5] object-cover" alt="Evelyn Antunes Perfil" />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Acredito que a harmonização não serve para mudar quem você é, mas para <span className="font-semibold text-amber-700 underline decoration-amber-100">revelar a sua melhor versão</span> que o tempo ou a genética acabaram escondendo.
            </p>
            <p>
              Meu método exclusivo foca em pontos estratégicos de sustentação, garantindo que você se reconheça no espelho todos os dias.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                "Avaliação personalizada e honesta",
                "Foco absoluto em naturalidade",
                "Uso de tecnologia de ponta",
                "Acompanhamento humanizado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base font-medium">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results Gallery (Before & After) */}
      <section className="pt-24 pb-12 px-6 bg-amber-50/30">
        <div className="max-w-md mx-auto">
          <div className="mb-12">
             <p className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2 text-center">Resultados Reais</p>
             <h3 className="text-3xl font-serif text-amber-950 text-center mb-4">Transformações <br /> com Harmonia</h3>
             <p className="text-center text-gray-400 text-sm">Toque nas imagens para ampliar</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {GALLERY_BEFORE_AFTER.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer active:scale-95 transition-transform border border-amber-100"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} className="w-full h-full object-cover" alt={`Resultado ${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery (Harmonização Facial de 💚) - Moved closer to results */}
      <section className="py-12 px-6 bg-amber-50/30">
        <div className="max-w-md mx-auto">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-serif text-amber-950 mb-2">Harmonização Facial de 💚</h3>
            <span className="text-amber-600 text-[10px] font-sans uppercase font-bold tracking-[0.2em] italic">Atendimento Personalizado & Bastidores</span>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
            {GALLERY_LIFESTYLE.map((img, idx) => (
              <div key={idx} className="min-w-[80%] snap-center rounded-3xl overflow-hidden shadow-xl border border-amber-100">
                <img src={img} className="w-full aspect-[4/5] object-cover" alt="Lifestyle Evelyn" />
              </div>
            ))}
          </div>
          
          <p className="text-center text-[10px] text-gray-400 mt-4 italic">
            *Os resultados podem variar de acordo com o biotipo e a resposta individual de cada paciente.
          </p>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-white rounded-[3rem] mx-2 shadow-2xl shadow-black/20">
        <div className="max-w-md mx-auto">
          <h3 className="text-3xl font-serif text-center mb-12">Por que confiar em mim?</h3>
          
          <div className="grid grid-cols-1 gap-8">
            {DIFFERENTIALS.map((diff, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 flex gap-6 items-start">
                <div className="shrink-0 bg-amber-500/20 p-3 rounded-2xl">
                  {diff.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-amber-400">{diff.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intermediate CTA */}
      <section className="py-24 px-6 text-center">
        <h3 className="text-3xl font-serif mb-6 leading-tight text-amber-950">Você ainda tem dúvidas <br /> se é para você?</h3>
        <p className="text-gray-600 mb-10 max-w-xs mx-auto text-lg leading-relaxed">
          O primeiro passo é uma conversa franca onde analisaremos suas necessidades reais.
        </p>
        <a 
          href={EXPERT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full max-w-xs bg-amber-600 text-white font-bold py-6 rounded-2xl shadow-xl active:scale-95 transition-all uppercase tracking-wide border-b-4 border-amber-800"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp agora
        </a>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <h3 className="text-3xl font-serif text-center mb-16">Como funciona <br /> a nossa jornada</h3>
          
          <div className="space-y-16">
            {[
              { step: "01", title: "Contato Inicial", desc: "Via WhatsApp, tiramos suas primeiras dúvidas e marcamos o seu horário." },
              { step: "02", title: "Avaliação 360º", desc: "Analisamos cada detalhe do seu rosto, simetria e histórico para o plano perfeito." },
              { step: "03", title: "Procedimento e Pós", desc: "Execução com máxima segurança e suporte total no seu período de recuperação." }
            ].map((p, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="text-6xl font-serif italic text-amber-50 absolute -top-10 z-0 select-none opacity-50">{p.step}</div>
                <h4 className="text-xl font-bold text-amber-950 relative z-10 mb-2">{p.title}</h4>
                <p className="text-gray-500 max-w-[250px] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-amber-950 text-white text-center rounded-t-[4rem]">
        <div className="max-w-sm mx-auto">
          <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl font-serif leading-tight mb-8">
            Pronta para elevar sua confiança ao próximo nível?
          </h2>
          <p className="text-amber-100/60 mb-12 text-lg">
            As vagas para avaliação este mês estão acabando. Garanta a sua agora mesmo.
          </p>
          
          <a 
            href={EXPERT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-white text-amber-950 font-black py-6 rounded-2xl shadow-2xl active:scale-95 transition-all text-xl uppercase tracking-tighter"
          >
            QUERO SABER MAIS
          </a>
          <p className="mt-6 text-sm text-amber-300/50 uppercase tracking-widest font-bold">Consultoria técnica inicial sem custos</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-amber-950 text-white border-t border-white/5">
        <div className="max-w-md mx-auto text-center">
          <p className="text-3xl font-serif italic mb-2 tracking-wide text-gold">{EXPERT.name}</p>
          <p className="text-xs text-amber-500 uppercase tracking-widest mb-8 font-bold">{EXPERT.profession}</p>
          
          <div className="flex items-center justify-center gap-6 mb-12">
            <a 
              href={EXPERT.instagram} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-full hover:bg-amber-500 transition-colors border border-white/10"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <div className="flex flex-col items-center gap-1.5">
               <MapPin className="w-5 h-5 text-amber-500" />
               <span className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">{EXPERT.locations}</span>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 opacity-30 text-[10px] uppercase tracking-widest font-bold">
            © 2024 Todos os direitos reservados.
          </div>
          <div className="mt-6 font-serif italic text-2xl opacity-40 select-none">
            {EXPERT.name}
          </div>
        </div>
      </footer>

      {/* Sticky Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href={EXPERT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white/20 animate-bounce active:scale-90 transition-all hover:bg-amber-500"
        >
          <MessageCircle className="w-8 h-8 fill-white" />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
