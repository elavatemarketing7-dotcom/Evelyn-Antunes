
export enum AppState {
  WELCOME = 'WELCOME',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
  SITE = 'SITE'
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}
