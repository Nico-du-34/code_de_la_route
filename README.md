# Code — Révision du permis B

Application française de préparation au permis B, construite avec Next.js 15, React 19 et TypeScript. Interface responsive, mobile-first et installable en PWA.

## Démarrage

Prérequis : Node.js 20.9+ (Node 22 recommandé).

```bash
git clone https://github.com/Nico-du-34/code_de_la_route.git
cd code_de_la_route
npm ci
npm run dev
```

Puis ouvrir http://localhost:3000.

## Vérifications

```bash
npm run typecheck
npm run lint
npm run build
```

## Programme pédagogique

- **10 grands thèmes** correspondant aux principaux domaines de l'ETG.
- **62 sections de cours** structurées avec explications, règles pratiques, exemples de vigilance et rappels.
- **180 questions originales** à choix simple ou multiple, réparties sur les dix thèmes.
- **64 fiches de signalisation** schématiques, classées par famille avec recherche et filtres.
- Entraînement aléatoire, par thème, erreurs, favoris et questions non maîtrisées.
- Examens blancs de **40 questions**, répartis sur les thèmes disponibles, avec un seuil indicatif de réussite de **35/40**.
- Correction détaillée après chaque examen et historique des résultats.
- Suivi des cours étudiés, des notions maîtrisées, de l'objectif quotidien et des statistiques.
- Import/export JSON de la progression locale.
- PWA avec manifeste et service worker pour les ressources déjà mises en cache.

## Sources et limites

Contenu vérifié et liens officiels consultés le **20 novembre 2026**. Les règles détaillées sont susceptibles d'évoluer ; en cas de doute, les textes en vigueur et la signalisation réelle priment toujours.

Sources de référence :
- [Sécurité routière — se préparer à l'examen du code](https://validation.securite-routiere.gouv.fr/passer-son-permis-de-conduire/preparation-de-lexamen-du-code-de-la-route/se-preparer-lexamen-du)
- [Sécurité routière — quiz officiel d'entraînement](https://modules.securite-routiere.gouv.fr/quizz/code/)
- [Code de la route — Légifrance](https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006074228/)
- [Sécurité routière — limitations de vitesse](https://www.securite-routiere.gouv.fr/sites/default/files/2026-03/depliant_vitesse-bd.pdf)
- [Service-Public — alcool au volant](https://www.service-public.fr/particuliers/vosdroits/F36485)
- [Sécurité routière — réglementation des jeunes conducteurs](https://validation.securite-routiere.gouv.fr/reglementation-liee-lusager/reglementation-pour-les-jeunes-conducteurs)
- [Service-Public — preuve de l'assurance automobile](https://www.service-public.fr/particuliers/vosdroits/F1362)

Les questions de cette application sont **originales et pédagogiques** : elles ne reproduisent pas la banque officielle ETG. Les fiches de panneaux sont des schémas simplifiés et non des planches réglementaires officielles. L'application aide à apprendre et à s'entraîner ; elle ne garantit pas la réussite à l'examen.

## Données personnelles

Aucun compte, abonnement ou serveur utilisateur. La progression est stockée sur l'appareil dans `localStorage` sous `code-route-progress-v1`. Elle peut être perdue lors du nettoyage des données du navigateur : utilise régulièrement l'export JSON.

## Installer sur iPhone

Déployer le site en HTTPS, ouvrir l'URL dans Safari, toucher **Partager**, puis **Sur l'écran d'accueil**. L'installation PWA dépend du navigateur et de l'hébergement.
