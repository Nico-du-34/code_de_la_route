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

/**
 * Builds a balanced mock exam: the round-robin selection spreads questions
 * across available themes before taking a second question from any theme.
 */
export function makeExam(pool: Question[], count = 40): Question[] {
  const unique = Array.from(new Map(pool.map((q) => [q.id, q])).values());
  if (unique.length < count) {
    throw new Error(`Il faut au moins ${count} questions différentes.`);
  }

  const grouped = new Map<string, Question[]>();
  for (const question of unique) {
    const group = grouped.get(question.theme) ?? [];
    group.push(question);
    grouped.set(question.theme, group);
  }

  const groups = shuffle(
    Array.from(grouped.entries()).map(([theme, questions]) => ({
      theme,
      questions: shuffle(questions),
      cursor: 0,
    })),
  );
  const selected: Question[] = [];

  while (selected.length < count) {
    let addedThisRound = false;
    for (const group of groups) {
      if (selected.length >= count) break;
      const next = group.questions[group.cursor];
      if (next) {
        selected.push(next);
        group.cursor += 1;
        addedThisRound = true;
      }
    }
    if (!addedThisRound) break;
  }

  if (selected.length !== count) {
    throw new Error('La banque ne contient pas assez de questions réparties entre les thèmes.');
  }
  return shuffle(selected);
}
