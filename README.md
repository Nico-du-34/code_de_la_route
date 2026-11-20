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

- **10 thèmes officiels** : circulation, conducteur, route, autres usagers, notions diverses, premiers secours, prendre/quitter son véhicule, mécanique, sécurité du passager et du véhicule, environnement.
- **62 sections de cours** structurées avec explications, règles pratiques, exemples de vigilance et rappels.
- **280 questions originales** à choix simple ou multiple, réparties sur les dix thèmes.
- **64 fiches de signalisation** schématiques, classées par famille avec recherche et filtres.
- **20 schémas de situations routières originaux** (priorités, STOP, feux, piétons, cyclistes, angles morts, autoroute, pluie, tunnel, secours, sièges enfants, véhicule, chargement et ouverture de portière).
- **Visuels intégrés aux questions** pour illustrer les situations et guider l'observation.
- **6 vidéos pédagogiques intégrées** depuis la chaîne YouTube « Mon auto-école à la maison », avec indication de leur date de publication.
- Accès direct au module officiel « Je repasse le code » de la Sécurité routière, qui utilise des photos et vidéos de la base officielle.
- Entraînement aléatoire, par thème, erreurs, favoris et questions non maîtrisées.
- Examens blancs de **40 questions**, chronométrés à **20 secondes par question**, avec une répartition thématique de référence publiée par Ornikar et un seuil de réussite de **35/40**. Les questions restent originales et ne reproduisent pas la banque d'un éditeur.
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

Les questions de cette application sont **originales et pédagogiques** : elles ne reproduisent pas la banque officielle ETG. Les panneaux et schémas de situations sont des illustrations originales simplifiées, pas des prises de vue d'examen ni des planches réglementaires officielles. Les vidéos intégrées sont hébergées par YouTube et sélectionnées pour leur intérêt pédagogique ; certaines datent de 2020. Le module officiel « Je repasse le code » est le support recommandé pour s'exercer sur les photos et vidéos de la Sécurité routière. L'application aide à apprendre et à s'entraîner ; elle ne garantit pas la réussite à l'examen.

## Données personnelles

Aucun compte, abonnement ou serveur utilisateur. La progression est stockée sur l'appareil dans `localStorage` sous `code-route-progress-v1`. Elle peut être perdue lors du nettoyage des données du navigateur : utilise régulièrement l'export JSON.

## Installer sur iPhone

Déployer le site en HTTPS, ouvrir l'URL dans Safari, toucher **Partager**, puis **Sur l'écran d'accueil**. L'installation PWA dépend du navigateur et de l'hébergement.
