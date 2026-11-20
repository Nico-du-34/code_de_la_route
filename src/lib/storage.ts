export type Progress = {
  answered: number;
  correct: number;
  wrongIds: string[];
  favorites: string[];
  mastered: string[];
  studiedLessons: string[];
  history: { date: string; score: number; total: number; mode: string }[];
  dailyGoal: number;
  dailyDate: string | null;
  dailyAnswered: number;
  lastTheme: string | null;
};

export const STORAGE_KEY = 'code-route-progress-v1';

export const initialProgress: Progress = {
  answered: 0,
  correct: 0,
  wrongIds: [],
  favorites: [],
  mastered: [],
  studiedLessons: [],
  history: [],
  dailyGoal: 20,
  dailyDate: null,
  dailyAnswered: 0,
  lastTheme: null,
};

export function localDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function addDailyAnswers(progress: Progress, count: number): Progress {
  if (count <= 0) return progress;
  const today = localDateKey();
  return {
    ...progress,
    dailyDate: today,
    dailyAnswered: (progress.dailyDate === today ? progress.dailyAnswered : 0) + count,
  };
}

export function normalizeProgress(value: unknown): Progress {
  if (!value || typeof value !== 'object') return initialProgress;
  const data = value as Partial<Progress>;
  const answered = Number.isFinite(data.answered) ? Math.max(0, Math.floor(Number(data.answered))) : 0;
  const correct = Number.isFinite(data.correct)
    ? Math.min(answered, Math.max(0, Math.floor(Number(data.correct))))
    : 0;

  return {
    answered,
    correct,
    wrongIds: Array.isArray(data.wrongIds)
      ? Array.from(new Set(data.wrongIds.filter((x): x is string => typeof x === 'string')))
      : [],
    favorites: Array.isArray(data.favorites)
      ? Array.from(new Set(data.favorites.filter((x): x is string => typeof x === 'string')))
      : [],
    mastered: Array.isArray(data.mastered)
      ? Array.from(new Set(data.mastered.filter((x): x is string => typeof x === 'string')))
      : [],
    studiedLessons: Array.isArray(data.studiedLessons)
      ? Array.from(new Set(data.studiedLessons.filter((x): x is string => typeof x === 'string')))
      : [],
    history: Array.isArray(data.history)
      ? data.history
          .filter((x) => !!x && typeof x.date === 'string' && typeof x.score === 'number' && typeof x.total === 'number' && typeof x.mode === 'string')
          .slice(0, 100)
      : [],
    dailyGoal: [10, 20, 30, 40].includes(Number(data.dailyGoal)) ? Number(data.dailyGoal) : 20,
    dailyDate: typeof data.dailyDate === 'string' ? data.dailyDate : null,
    dailyAnswered: Number.isFinite(data.dailyAnswered) ? Math.max(0, Math.floor(Number(data.dailyAnswered))) : 0,
    lastTheme: typeof data.lastTheme === 'string' ? data.lastTheme : null,
  };
}

export function loadProgress(): Progress {
  if (typeof window === 'undefined') return initialProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeProgress(JSON.parse(raw)) : initialProgress;
  } catch {
    return initialProgress;
  }
}

export function saveProgress(progress: Progress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeProgress(progress)));
  } catch (error) {
    console.warn('Impossible de sauvegarder la progression localement.', error);
  }
}
