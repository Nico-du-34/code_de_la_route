# Code — Révision du permis B

Application personnelle Next.js 15 / React 19 / TypeScript, mobile-first et installable en PWA.

## Démarrer

Prérequis : Node.js 20.9+ (Node 22 recommandé).

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Vérifications

```bash
npm run typecheck
npm run lint
npm run build
```

## Fonctionnalités

- Tableau de bord personnel et indicateurs de progression.
- 10 cours thématiques avec chapitres, points essentiels et rappels.
- 80 questions pédagogiques originales avec réponses simples ou multiples.
- Entraînement aléatoire, par thème, erreurs, favoris et questions non maîtrisées.
- Examens blancs de 40 questions distinctes, seuil indicatif 35/40.
- Correction complète et historique des résultats.
- Catalogue de 24 panneaux schématiques, filtres et recherche.
- Statistiques locales, objectif quotidien, export et import JSON.
- PWA avec service worker et cache hors connexion des ressources déjà visitées.

## Données

Aucun compte, serveur utilisateur, abonnement ou synchronisation cloud. La progression est stockée dans `localStorage` (`code-route-progress-v1`). Elle peut être effacée par le navigateur. Exporter régulièrement sa sauvegarde JSON.

## iPhone

Déployer en HTTPS, ouvrir dans Safari, toucher Partager puis « Sur l’écran d’accueil ».

## Limites pédagogiques et sources

Les questions et cours sont originaux et ne reproduisent pas la banque officielle de l'ETG. Les panneaux sont des schémas non réglementaires. Les règles peuvent évoluer : vérifier les informations sur [Sécurité routière](https://www.securite-routiere.gouv.fr/), [Légifrance](https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006074228/) et [Service-Public.fr](https://www.service-public.fr/).

Cette application est un outil personnel d'entraînement et ne garantit pas la réussite à l'examen.
