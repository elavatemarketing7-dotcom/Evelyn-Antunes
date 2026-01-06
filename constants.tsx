
import React from 'react';
import { Shield, Sparkles, Heart, Star, MapPin, MessageCircle } from 'lucide-react';

export const EXPERT = {
  name: 'Evelyn Antunes',
  profession: 'Harmonização Facial',
  locations: 'Brasília – DF | Unaí – MG',
  whatsapp: 'https://api.whatsapp.com/message/MMDCO2UCI44FP1?autoload=1&app_absent=0&utm_source=ig',
  instagram: 'https://www.instagram.com/draevelynantunes/',
  heroImg: 'https://i.imgur.com/keDeogF.png',
  altHeroImg: 'https://i.imgur.com/XtsclfA.png',
};

export const GALLERY_BEFORE_AFTER = [
  'https://i.imgur.com/qCy360H.png',
  'https://i.imgur.com/jIhshvM.png',
  'https://i.imgur.com/wVTFvEY.png',
  'https://i.imgur.com/cRe8wQu.png',
  'https://i.imgur.com/zBsTuKa.png',
  'https://i.imgur.com/vKBHfOR.png',
  'https://i.imgur.com/ep3XCdI.png',
  'https://i.imgur.com/3bJBpr6.png',
  'https://i.imgur.com/NjzcpD1.png',
  'https://i.imgur.com/vo2zNVU.png',
  'https://i.imgur.com/HQaKjIY.png',
  'https://i.imgur.com/T0Mg9HH.png',
  'https://i.imgur.com/4oA5g2A.png',
  'https://i.imgur.com/LPmfz0X.png',
  'https://i.imgur.com/hFrOiC6.png',
  'https://i.imgur.com/Xc12nMu.png',
  'https://i.imgur.com/yhdZ5r3.png',
  'https://i.imgur.com/V1CIrUp.png',
  'https://i.imgur.com/VmyAUcE.png',
  'https://i.imgur.com/SLzuCWR.png',
];

export const GALLERY_LIFESTYLE = [
  'https://i.imgur.com/1BKR7BP.png',
  'https://i.imgur.com/MLQPhn6.png',
  'https://i.imgur.com/5sq6QsT.png',
  'https://i.imgur.com/5WbSL81.png',
  'https://i.imgur.com/k2lrdOX.png',
  'https://i.imgur.com/Go3xxkH.png',
  'https://i.imgur.com/AgbywXr.png',
  'https://i.imgur.com/5kWVRoT.png',
  'https://i.imgur.com/VMree4B.png',
  'https://i.imgur.com/C9ixieJ.png',
  'https://i.imgur.com/Es3oWWN.png',
  'https://i.imgur.com/nlvKF7s.png',
];

export const DIFFERENTIALS = [
  {
    icon: <Sparkles className="w-6 h-6 text-amber-600" />,
    title: 'Naturalidade',
    desc: 'O foco é realçar sua beleza, nunca criar um aspecto artificial.'
  },
  {
    icon: <Shield className="w-6 h-6 text-amber-600" />,
    title: 'Segurança Total',
    desc: 'Uso das melhores técnicas e produtos do mercado mundial.'
  },
  {
    icon: <Heart className="w-6 h-6 text-amber-600" />,
    title: 'Atenção Individual',
    desc: 'Cada rosto é único e merece um planejamento exclusivo.'
  },
  {
    icon: <Star className="w-6 h-6 text-amber-600" />,
    title: 'Pós-atendimento',
    desc: 'Suporte completo após o procedimento para sua tranquilidade.'
  }
];

export const QUESTIONS = [
  {
    id: 1,
    text: "O que mais incomoda você hoje ao se olhar no espelho?",
    options: ["Sinais de envelhecimento", "Formato do rosto/lábios", "Perda de volume", "Olhar cansado"]
  },
  {
    id: 2,
    text: "Qual é o seu maior medo em relação a procedimentos estéticos?",
    options: ["Ficar com aspecto artificial", "Sentir dor", "O resultado não durar", "O investimento não valer a pena"]
  },
  {
    id: 3,
    text: "Você já realizou algum procedimento de harmonização facial antes?",
    options: ["Sim, e amei", "Sim, mas não tive boa experiência", "Nunca realizei"]
  },
  {
    id: 4,
    text: "Qual nível de naturalidade você busca?",
    options: ["Super natural (ninguém percebe)", "Transformação visível", "Equilíbrio e simetria"]
  }
];
