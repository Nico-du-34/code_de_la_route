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
  if (new Set(selected).size !== selected.length) return false;
  if (selected.length !== question.answers.length) return false;
  const a = [...selected].sort((x, y) => x - y);
  const b = [...question.answers].sort((x, y) => x - y);
  return a.every((value, index) => value === b[index]);
}

/** Quotas de référence publiés par Ornikar pour une série de 40 questions. */
export const EXAM_BLUEPRINT = [
  { theme: 'conducteur', count: 10 },
  { theme: 'usagers', count: 5 },
  { theme: 'circulation', count: 4 },
  { theme: 'route', count: 4 },
  { theme: 'mecanique', count: 4 },
  { theme: 'notions-diverses', count: 3 },
  { theme: 'prendre-quitter-vehicule', count: 3 },
  { theme: 'securite', count: 3 },
  { theme: 'environnement', count: 3 },
  { theme: 'premiers-secours', count: 1 },
] as const;

export function makeExam(pool: Question[], count = 40): Question[] {
  const unique = Array.from(new Map(pool.map((q) => [q.id, q])).values());
  if (unique.length < count) throw new Error(`Il faut au moins ${count} questions différentes.`);
  if (count === 40) {
    const selected: Question[] = [];
    for (const quota of EXAM_BLUEPRINT) {
      const available = shuffle(unique.filter((question) => question.theme === quota.theme));
      if (available.length < quota.count) {
        throw new Error(`Banque insuffisante pour « ${quota.theme} » : ${available.length}/${quota.count}.`);
      }
      selected.push(...available.slice(0, quota.count));
    }
    return shuffle(selected);
  }
  const groups = shuffle(Array.from(unique.reduce((map, question) => {
    const group = map.get(question.theme) ?? [];
    group.push(question);
    map.set(question.theme, group);
    return map;
  }, new Map<string, Question[]>()).entries()).map(([theme, questions]) => ({
    theme, questions: shuffle(questions), cursor: 0,
  })));
  const selected: Question[] = [];
  while (selected.length < count) {
    let added = false;
    for (const group of groups) {
      if (selected.length >= count) break;
      const next = group.questions[group.cursor];
      if (next) { selected.push(next); group.cursor += 1; added = true; }
    }
    if (!added) break;
  }
  if (selected.length !== count) throw new Error('La banque ne contient pas assez de questions différentes.');
  return shuffle(selected);
}
