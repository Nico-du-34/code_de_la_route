export type Progress = {
  answered:number;
  correct:number;
  wrongIds:string[];
  favorites:string[];
  mastered:string[];
  history:{date:string;score:number;total:number;mode:string}[];
  dailyGoal:number;
  lastTheme:string|null;
};
export const STORAGE_KEY='code-route-progress-v1';
export const initialProgress:Progress={answered:0,correct:0,wrongIds:[],favorites:[],mastered:[],history:[],dailyGoal:20,lastTheme:null};
export function normalizeProgress(value:unknown):Progress {
  if(!value||typeof value!=='object')return initialProgress;
  const data=value as Partial<Progress>;
  return {
    answered:Number.isFinite(data.answered)?Math.max(0,Number(data.answered)):0,
    correct:Number.isFinite(data.correct)?Math.max(0,Number(data.correct)):0,
    wrongIds:Array.isArray(data.wrongIds)?data.wrongIds.filter((x):x is string=>typeof x==='string'):[],
    favorites:Array.isArray(data.favorites)?data.favorites.filter((x):x is string=>typeof x==='string'):[],
    mastered:Array.isArray(data.mastered)?data.mastered.filter((x):x is string=>typeof x==='string'):[],
    history:Array.isArray(data.history)?data.history.filter(x=>!!x&&typeof x.date==='string'&&typeof x.score==='number'&&typeof x.total==='number'&&typeof x.mode==='string').slice(0,100):[],
    dailyGoal:[10,20,30,40].includes(Number(data.dailyGoal))?Number(data.dailyGoal):20,
    lastTheme:typeof data.lastTheme==='string'?data.lastTheme:null,
  };
}
export function loadProgress():Progress {
  if(typeof window==='undefined')return initialProgress;
  try {const raw=localStorage.getItem(STORAGE_KEY);return raw?normalizeProgress(JSON.parse(raw)):initialProgress;}catch{return initialProgress;}
}
export function saveProgress(progress:Progress){
  if(typeof window==='undefined')return;
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(normalizeProgress(progress)));}catch(error){console.warn('Impossible de sauvegarder la progression localement.',error);}
}
