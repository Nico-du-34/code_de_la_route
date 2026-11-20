import type { Question } from '@/data/questions';

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function isCorrect(question: Question, selected: number[]): boolean {
  if (selected.length !== question.answers.length) return false;
  const a = [...selected].sort((x, y) => x - y);
  const b = [...question.answers].sort((x, y) => x - y);
  return a.every((value, index) => value === b[index]);
}

export function makeExam(pool: Question[], count = 40): Question[] {
  if (pool.length < count) throw new Error(`Il faut au moins ${count} questions différentes.`);
  return shuffle(pool).slice(0, count);
}
