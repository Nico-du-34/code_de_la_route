# Code — Révision du permis B

Application personnelle de révision du code de la route (France), construite avec Next.js 15, React 19 et TypeScript. Interface minimaliste, mobile-first et installable en PWA.

## Démarrage

Prérequis : Node.js 20.9+ (Node 22 recommandé).

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Vérifications

```bash
npm run typecheck
npm run lint
npm run build
```

## Fonctionnalités

- Tableau de bord de progression et indicateurs personnels.
- 10 thèmes de cours, avec chapitres, points essentiels et rappels.
- 80 questions pédagogiques originales (réponses simples et multiples).
- Entraînement aléatoire, par thème, erreurs, favoris et questions non maîtrisées.
- Examens blancs de 40 questions distinctes, seuil indicatif de réussite de 35/40.
- Correction complète après examen et historique des résultats.
- Catalogue pédagogique de 24 panneaux classés par catégorie, avec recherche.
- Statistiques locales, objectif quotidien, export et import JSON.
- Service worker et manifeste PWA, avec cache des ressources visitées.

## Données personnelles

Aucun compte, API privée, abonnement ou backend utilisateur. La progression est stockée dans `localStorage` sous `code-route-progress-v1`. Elle peut être effacée par le navigateur ou lors du nettoyage de ses données. Utiliser régulièrement l'export JSON des paramètres pour conserver une sauvegarde.

## Installer sur iPhone

Déployer le site en HTTPS, ouvrir l'URL dans Safari, toucher **Partager**, puis **Sur l'écran d'accueil**. Sur ordinateur, utiliser l'option d'installation proposée par le navigateur compatible.

## Périmètre pédagogique et sources

Les 80 questions et les cours sont du contenu pédagogique original. Ils ne constituent pas une reproduction de la banque officielle ETG. Les panneaux sont des schémas pédagogiques, pas des planches réglementaires officielles. Les textes et règles peuvent évoluer : vérifier les points réglementaires auprès de :

- [Sécurité routière](https://www.securite-routiere.gouv.fr/)
- [Légifrance — Code de la route](https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006074228/)
- [Service-Public.fr](https://www.service-public.fr/)

Cette application est un outil personnel d'entraînement et ne garantit pas la réussite à l'examen.
