export type Lesson = {
  id: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string; points: string[] }[];
  reminders: string[];
  source: string;
};

export const lessons: Lesson[] = [
  {
    id: 'circulation',
    title: 'Circulation routière',
    intro: 'Maîtriser la circulation, c’est savoir lire la route, anticiper les trajectoires des autres et appliquer la bonne règle au bon endroit. La signalisation, les feux et les agents priment sur les règles générales.',
    sections: [
      { heading: 'Lire la signalisation dans le bon ordre', body: 'Avant de franchir une intersection ou de changer de direction, cherche d’abord les instructions données par un agent, les feux, les panneaux et le marquage. N’applique une règle générale que lorsqu’aucune règle particulière ne tranche la situation.', points: [
        'Les indications d’un agent chargé de la circulation priment sur les feux, panneaux et règles ordinaires.',
        'Un feu en fonctionnement commande le passage selon sa couleur et ses flèches éventuelles.',
        'Les panneaux et panonceaux précisent la règle applicable à une voie, une direction, une catégorie de véhicule ou une période.',
        'Le marquage au sol complète la signalisation verticale : ligne continue, ligne discontinue, flèches, zébras et lignes d’arrêt.',
        'Une signalisation temporaire de chantier ou de danger doit être prise en compte ; elle peut modifier les conditions habituelles de circulation.'
      ]},
      { heading: 'Priorités et intersections', body: 'Une intersection se prépare tôt : ralentis, observe les voies qui arrivent, identifie la signalisation et assure-toi de pouvoir dégager le carrefour avant de t’engager.', points: [
        'Sans signalisation particulière, la priorité à droite s’applique en principe.',
        'Un STOP impose un arrêt complet à la ligne d’arrêt ou, à défaut, à la limite de la chaussée abordée. Il faut ensuite céder le passage.',
        'Un cédez-le-passage impose de laisser passer les usagers prioritaires ; l’arrêt n’est nécessaire que si la situation l’exige.',
        'Un panneau de route prioritaire indique le régime applicable jusqu’à sa fin ou jusqu’à une signalisation qui le modifie.',
        'À l’entrée d’un carrefour à sens giratoire signalé par un cédez-le-passage, tu cèdes aux véhicules déjà engagés. Ne confonds pas giratoire et rond-point sans cette signalisation.',
        'Ne t’engage pas si tu risques de rester immobilisé au milieu de l’intersection.'
      ]},
      { heading: 'Feux tricolores et signaux lumineux', body: 'Un feu vert autorise le passage mais ne donne jamais le droit de provoquer un accident ou de bloquer le carrefour. Observe les piétons, cyclistes et véhicules qui peuvent encore se trouver sur la chaussée.', points: [
        'Vert : passage autorisé si la voie est libre et si tu peux franchir sans danger.',
        'Jaune fixe : arrêt, sauf si tu ne peux plus t’arrêter dans des conditions de sécurité suffisantes.',
        'Rouge : arrêt avant la ligne d’effet du feu ; ne la franchis pas.',
        'Une flèche directionnelle peut autoriser un mouvement précis tout en imposant de céder le passage aux usagers concernés.',
        'Un feu jaune clignotant appelle à la prudence ; respecte la signalisation de priorité présente ou, à défaut, les règles générales.',
        'Un feu rouge clignotant à un passage à niveau ou à un pont mobile impose l’arrêt absolu.'
      ]},
      { heading: 'Positionnement, voies et changements de direction', body: 'La position doit rendre ton intention compréhensible et préserver une marge de sécurité. Signaler une manœuvre ne donne pas la priorité : tu dois toujours vérifier qu’elle est possible.', points: [
        'Circule normalement sur la voie la plus à droite disponible, sauf nécessité de dépasser, de suivre une direction ou de respecter une voie dédiée.',
        'Avant de te déporter : observe loin devant, contrôle les rétroviseurs, vérifie l’angle mort, signale puis déplace-toi progressivement.',
        'Place-toi à l’avance pour tourner, sans couper une voie ni surprendre les usagers qui continuent tout droit.',
        'Le clignotant indique une intention, pas une priorité. Maintiens-le pendant la manœuvre puis éteins-le.',
        'Respecte les voies réservées, les couloirs de bus, les pistes cyclables et les voies d’insertion selon leur signalisation.',
        'Évite de rester dans l’angle mort d’un poids lourd ou d’un deux-roues.'
      ]},
      { heading: 'Croisement et dépassement', body: 'Un dépassement est une manœuvre à risque. Il n’est permis que si la visibilité, la signalisation, la vitesse et l’espace disponible permettent de dépasser puis de se rabattre sans danger.', points: [
        'Vérifie qu’aucun véhicule derrière toi n’a déjà commencé à dépasser et que personne n’arrive en sens inverse.',
        'Ne dépasse pas lorsque la visibilité est insuffisante, à l’approche d’un sommet de côte ou dans un virage sans visibilité.',
        'Respecte les lignes au sol et les interdictions de dépasser ; certaines situations disposent de règles particulières, notamment pour les cyclistes.',
        'Laisse une distance latérale d’au moins 1 m en agglomération et 1,50 m hors agglomération lorsque tu dépasses un cycliste ou un piéton.',
        'Après le dépassement, rabats-toi uniquement lorsque tu disposes d’un espace suffisant, sans couper la route au véhicule dépassé.',
        'Lors d’un croisement difficile, ralentis et facilite le passage de l’usager qui a le moins de place pour manœuvrer.'
      ]},
      { heading: 'Distances de sécurité et distance d’arrêt', body: 'La distance d’arrêt est la somme de la distance parcourue pendant le temps de réaction et de la distance de freinage. Elle augmente avec la vitesse et peut fortement s’allonger sur chaussée mouillée, enneigée ou dégradée.', points: [
        'Conserve au moins deux secondes avec le véhicule qui précède ; augmente cette marge si les conditions sont défavorables.',
        'Le temps de réaction est le délai entre la perception du danger et le début de l’action. La fatigue, l’alcool et les distractions l’allongent.',
        'La distance de freinage dépend notamment de la vitesse, de l’adhérence, des pneus, des freins et de l’état de la chaussée.',
        'À vitesse doublée, la distance de freinage augmente beaucoup plus que proportionnellement : ne raisonne pas seulement en mètres parcourus.',
        'Sur autoroute, utilise les repères de la bande d’arrêt d’urgence : deux lignes de rive espacées constituent un repère pratique de sécurité.',
        'Ne colle pas un véhicule pour l’empêcher de dépasser ou pour le pousser à accélérer.'
      ]},
      { heading: 'Arrêt, stationnement et manœuvres', body: 'Un véhicule arrêté ou stationné ne doit ni créer un danger ni gêner les déplacements des autres. Une manœuvre lente reste une manœuvre à risque : contrôle tout autour du véhicule.', points: [
        'Distingue l’arrêt (immobilisation momentanée liée à la montée, à la descente ou au chargement, conducteur restant aux commandes ou à proximité) du stationnement.',
        'Respecte les panneaux, panonceaux, marquages et règles locales de stationnement.',
        'Ne stationne pas sur un passage piéton, une piste cyclable, un trottoir ou un emplacement réservé lorsque cela est interdit.',
        'Avant une marche arrière ou un créneau, observe les angles morts et l’environnement direct ; les capteurs et caméras ne remplacent pas les contrôles.',
        'Immobilise correctement le véhicule en pente et évite tout risque de déplacement involontaire.',
        'Avant d’ouvrir une portière, vérifie rétroviseur et angle mort, puis ouvre progressivement.'
      ]}
    ],
    reminders: [
      'Agent, feux, panneaux et marquages : identifie toujours la règle qui commande la situation.',
      'Sans règle contraire, applique la priorité à droite.',
      'STOP : arrêt complet. Cédez-le-passage : arrêt seulement si nécessaire.',
      'Contrôles, clignotant, puis déplacement : le clignotant ne donne pas la priorité.',
      'Au moins deux secondes de distance avec le véhicule qui précède.'
    ],
    source: 'Code de la route, notamment R412, R414 et R415 ; Sécurité routière, dossier « Code de la route » : https://www.onisr.securite-routiere.gouv.fr/politique-de-securite-routiere/code-de-la-route'
  },
  {
    id: 'conducteur',
    title: 'Le conducteur',
    intro: 'Le conducteur doit être capable de percevoir, comprendre et anticiper les situations. Son état physique, émotionnel et les produits consommés influencent directement ses capacités.',
    sections: [
      { heading: 'Voir, comprendre et réagir', body: 'Conduire demande de répartir son attention entre la trajectoire, les autres usagers, les panneaux et les événements imprévus. Regarder ne suffit pas : il faut analyser et décider.', points: [
        'Porte le regard loin devant pour anticiper, tout en balayant régulièrement les côtés et les rétroviseurs.',
        'Adapte tes contrôles à la situation : intersection, dépassement, changement de voie, marche arrière ou ouverture de portière.',
        'Les angles morts sont les zones qui ne sont pas visibles directement dans les rétroviseurs ; un contrôle visuel complémentaire est indispensable.',
        'La vitesse élevée réduit le champ visuel et laisse moins de temps pour analyser un danger.',
        'La nuit, sous la pluie ou dans le brouillard, la perception des distances et des obstacles devient plus difficile.'
      ]},
      { heading: 'Temps de réaction et fatigue', body: 'La fatigue diminue la vigilance et peut provoquer une somnolence soudaine. Le risque n’est pas limité aux longs trajets ou aux autoroutes.', points: [
        'Bâillements répétés, paupières lourdes, raideur, trajectoire irrégulière et oublis des derniers kilomètres sont des signes d’alerte.',
        'Prévois une pause au moins toutes les deux heures et davantage si tu ressens la fatigue.',
        'Dès les premiers signes de somnolence, arrête-toi dans un lieu sûr et repose-toi ; musique forte, fenêtre ouverte et café ne remplacent pas le sommeil.',
        'Évite les départs après une nuit trop courte, après un repas très copieux ou à une heure où tu as habituellement sommeil.',
        'La fatigue peut être aggravée par certains médicaments, maladies, stress et horaires irréguliers.'
      ]},
      { heading: 'Alcool et stupéfiants', body: 'L’alcool et les stupéfiants altèrent les capacités de conduite même lorsque le conducteur se sent en état. Les effets peuvent persister après la consommation.', points: [
        'Pour un permis classique, il est interdit de conduire à partir de 0,5 g/L de sang (0,25 mg/L d’air expiré).',
        'Pour un conducteur en période probatoire ou soumis à une règle spécifique plus stricte, le seuil est de 0,2 g/L de sang (0,10 mg/L d’air expiré). En pratique, la règle sûre est de ne pas boire avant de conduire.',
        'L’alcool réduit les capacités d’analyse, favorise la prise de risque et allonge le temps de réaction.',
        'La conduite après usage de stupéfiants est interdite ; aucun produit ne permet de garantir une conduite sûre.',
        'Mélanger alcool, stupéfiants ou médicaments accroît les risques. Ne te fie ni à ton ressenti ni à une estimation du nombre de verres.'
      ]},
      { heading: 'Médicaments et état de santé', body: 'Un médicament peut provoquer somnolence, vertiges, troubles de la vision ou baisse de vigilance. L’effet dépend de la molécule, de la dose, de la personne et des associations.', points: [
        'Lis la notice et le pictogramme de conduite avant de prendre le volant.',
        'Demande conseil à ton médecin ou pharmacien en cas de doute, de nouveau traitement ou de changement de dose.',
        'Ne conduis pas si tu ressens un effet incompatible avec la conduite.',
        'La fatigue, la douleur, le stress, une forte émotion ou un malaise peuvent rendre la conduite dangereuse.',
        'En cas de malaise au volant, ralentis, signale si nécessaire et arrête-toi dès que possible en sécurité.'
      ]},
      { heading: 'Téléphone et autres distractions', body: 'Une distraction détourne les yeux, les mains, l’attention ou l’audition de la conduite. Le téléphone cumule plusieurs formes de distraction.', points: [
        'Le téléphone tenu en main est interdit en conduisant. Ne le manipule pas à un feu rouge ou dans un embouteillage.',
        'Le port à l’oreille d’un dispositif émettant du son est interdit en circulation, sauf exceptions prévues pour les appareils correcteurs de surdité.',
        'Prépare le GPS, la musique et l’itinéraire avant le départ ; programme une pause dans un endroit autorisé pour toute manipulation.',
        'Une conversation téléphonique, même avec un dispositif mains libres, détourne l’attention et peut réduire la perception de l’environnement.',
        'Évite de manger, chercher un objet, régler un écran ou te retourner vers un passager en roulant.'
      ]},
      { heading: 'Comportement, émotions et partage de la route', body: 'Un conducteur prudent garde une marge de sécurité et ne cherche pas à imposer son passage. La courtoisie ne remplace pas les règles, mais contribue à rendre la circulation plus prévisible.', points: [
        'Ne réponds pas à une provocation ; garde tes distances et laisse retomber la tension.',
        'Ne prends pas le volant si tu es en colère, paniqué ou incapable de te concentrer.',
        'Anticipe les erreurs possibles des autres sans supposer qu’ils t’ont vu.',
        'Adopte une conduite souple, prévisible et adaptée, même lorsque la route paraît libre.',
        'Le conducteur reste responsable de son comportement et de la sécurité des passagers.'
      ]}
    ],
    reminders: [
      'Fatigue : pause et repos, pas de solution miracle.',
      'Alcool : 0,5 g/L en règle générale ; 0,2 g/L en probatoire et dans les cas concernés.',
      'Stupéfiants : aucune conduite après usage.',
      'Téléphone tenu en main interdit ; prépare les réglages avant le départ.',
      'Un traitement médical peut rendre la conduite dangereuse : lis la notice et demande conseil.'
    ],
    source: 'Sécurité routière : téléphone et conduite https://www.securite-routiere.gouv.fr/dangers-de-la-route/le-telephone-et-la-conduite ; Service-Public : alcool au volant, fiche vérifiée le 27 août 2026 https://www.service-public.fr/particuliers/vosdroits/F36485'
  },
  {
    id: 'route',
    title: 'La route et ses conditions',
    intro: 'La route, la météo et la visibilité modifient l’adhérence et la distance nécessaire pour s’arrêter. Les limitations sont des plafonds : elles ne garantissent jamais que la vitesse est adaptée.',
    sections: [
      { heading: 'Types de routes et limitations générales', body: 'Les limitations dépendent de la catégorie de voie, de la signalisation, du temps, de la visibilité et du statut du conducteur. Une limitation locale plus basse doit être respectée.', points: [
        'En agglomération, la limite générale est de 50 km/h, sauf signalisation ou régime particulier comme une zone 30 ou une zone de rencontre.',
        'Sur une route à double sens sans séparateur central, la limite générale est de 80 km/h ; certaines sections peuvent être relevées à 90 km/h par décision applicable.',
        'Sur une route à chaussées séparées par un terre-plein central, la limite générale est de 110 km/h.',
        'Sur autoroute, la limite générale est de 130 km/h.',
        'Un conducteur en période probatoire est soumis à des plafonds spécifiques plus bas : 110 km/h sur autoroute, 100 km/h sur chaussées séparées et 80 km/h sur les autres routes concernées.',
        'Par temps de pluie ou autres précipitations, les plafonds sont abaissés sur autoroute et sur chaussées séparées ; vérifie la catégorie de route et la signalisation.',
        'Lorsque la visibilité est inférieure à 50 mètres, la vitesse maximale est de 50 km/h sur tous les réseaux.',
        'Même sous le plafond légal, ralentis si la circulation, la chaussée, le chargement ou la visibilité l’exigent.'
      ]},
      { heading: 'Pluie, neige, verglas et aquaplanage', body: 'L’adhérence dépend de l’état de la chaussée, de la qualité des pneus, de la vitesse et de la manière de commander le véhicule.', points: [
        'Sous la pluie, augmente les distances, ralentis et évite les accélérations, freinages et changements de direction brusques.',
        'Les premières pluies après une période sèche peuvent rendre la chaussée particulièrement glissante.',
        'Sur neige ou verglas, utilise des commandes progressives et augmente fortement les distances de sécurité.',
        'En cas d’aquaplanage, garde une trajectoire aussi régulière que possible, relâche progressivement l’accélérateur et évite les gestes brusques.',
        'Ne freine pas brutalement et ne donne pas de coup de volant pour corriger une perte d’adhérence.',
        'Dans les zones montagneuses soumises à l’obligation d’équipements hivernaux, respecte la signalisation et les équipements autorisés.'
      ]},
      { heading: 'Brouillard, nuit et visibilité', body: 'Voir et être vu est une condition de sécurité. Adapte les feux à la visibilité réelle et évite d’éblouir les autres usagers.', points: [
        'Utilise les feux de croisement lorsque la luminosité ou la visibilité l’exige, et vérifie leur bon fonctionnement.',
        'Les feux de route ne doivent pas éblouir ; repasse en feux de croisement à l’approche ou derrière un autre véhicule.',
        'Les feux de brouillard avant et arrière s’utilisent uniquement dans les conditions prévues par la réglementation ; le feu arrière peut éblouir sous la pluie.',
        'En cas de visibilité inférieure à 50 mètres, ne dépasse pas 50 km/h, même sur autoroute.',
        'Nettoie pare-brise, vitres, rétroviseurs, optiques et plaques ; désembue avant de partir.',
        'Adapte ton allure à la distance réellement éclairée par les feux et à la possibilité de t’arrêter dans l’espace visible.'
      ]},
      { heading: 'Autoroute et voie rapide', body: 'Les vitesses sont élevées et les distances d’arrêt importantes. Les voies ont des fonctions différentes et les manœuvres de demi-tour ou de marche arrière sont extrêmement dangereuses et interdites.', points: [
        'À l’insertion, adapte ta vitesse sur la voie d’accélération, contrôle les rétroviseurs et l’angle mort, puis insère-toi sans obliger les autres à freiner brutalement.',
        'Circule sur la voie la plus à droite ; utilise les voies de gauche pour dépasser puis rabats-toi lorsque tu peux le faire sans danger.',
        'Respecte les distances de sécurité et anticipe les ralentissements en regardant loin devant.',
        'Ne circule jamais sur la bande d’arrêt d’urgence sauf situation autorisée ou urgence.',
        'En cas de panne, rejoins la bande d’arrêt d’urgence si possible, allume les feux de détresse, enfile le gilet avant de sortir si tu peux le faire sans danger et mets les occupants à l’abri derrière la glissière.',
        'N’effectue jamais de marche arrière ni de demi-tour ; rejoins une aire ou une sortie.',
        'Sur une aire de repos, reste vigilant aux piétons, véhicules en manœuvre et zones d’accès.'
      ]},
      { heading: 'Tunnels, passages à niveau et zones de travaux', body: 'Ces zones imposent une anticipation renforcée : les possibilités d’évitement sont réduites et les situations peuvent évoluer rapidement.', points: [
        'Dans un tunnel, allume les feux adaptés, respecte les distances, les feux et les panneaux ; ne fais jamais demi-tour ni marche arrière.',
        'En cas d’arrêt dans un tunnel, conserve une distance suffisante, allume les feux de détresse si nécessaire et suis les consignes affichées.',
        'Au passage à niveau, ne t’engage que si tu peux le franchir entièrement sans risque de rester bloqué.',
        'Un feu rouge clignotant ou les barrières en mouvement imposent l’arrêt absolu ; ne passe jamais sous une barrière qui se ferme.',
        'Sur un chantier, respecte la signalisation temporaire, les limitations et les indications des agents.',
        'Anticipe les ouvriers, les changements de voie, les chaussées rétrécies et les gravillons.'
      ]},
      { heading: 'Routes rurales, pentes et conduite de nuit', body: 'Les routes étroites, sinueuses ou non éclairées cachent parfois des usagers et des obstacles. La vitesse doit tenir compte de la visibilité et de la largeur disponible.', points: [
        'Ralentis à l’approche des virages, sommets de côte, intersections et entrées de hameaux.',
        'Sur une longue descente, utilise un rapport adapté et le frein moteur pour éviter l’échauffement des freins.',
        'Attention aux animaux, engins agricoles, cyclistes et piétons peu visibles.',
        'Ne stationne pas dans un virage, au sommet d’une côte ou à un endroit qui masque la visibilité.',
        'La nuit, adapte ton allure à la portée des feux et conserve une marge permettant de t’arrêter.',
        'Sur chaussée étroite, facilite le croisement sans quitter la partie praticable ni prendre de risque.'
      ]}
    ],
    reminders: [
      'Les limites de vitesse sont des maxima, pas des objectifs.',
      'Visibilité inférieure à 50 m : 50 km/h au maximum, tous réseaux.',
      'Pluie, neige, verglas : allure réduite et distances augmentées.',
      'Autoroute : voie de droite hors dépassement ; pas de marche arrière ni demi-tour.',
      'Gilet et mise en sécurité des personnes en cas de panne.'
    ],
    source: 'Sécurité routière, dépliant « Les limitations de vitesse » (mise à jour 2026) : https://www.securite-routiere.gouv.fr/ ; Code de la route, articles R413 et R416.'
  },
  {
    id: 'usagers',
    title: 'Les autres usagers',
    intro: 'La circulation est un espace partagé. Les usagers n’ont ni la même protection, ni la même vitesse, ni la même visibilité. Identifie leurs besoins et anticipe leurs trajectoires.',
    sections: [
      { heading: 'Piétons et personnes à mobilité réduite', body: 'Les piétons peuvent être masqués par un véhicule stationné, un bus ou un obstacle. Certaines personnes mettent plus de temps à traverser ou ne peuvent pas réagir rapidement.', points: [
        'Cède le passage au piéton engagé ou manifestant clairement l’intention de traverser, dans les conditions prévues par le Code.',
        'Ralentis à l’approche d’un passage piéton et contrôle aussi les trottoirs et les abords.',
        'Sois particulièrement vigilant près des écoles, arrêts de transport, marchés, parkings et véhicules de livraison.',
        'Laisse aux personnes à mobilité réduite le temps et l’espace nécessaires ; ne bloque pas les cheminements et abaissés de trottoir.',
        'Ne t’arrête jamais sur un passage piéton et ne masque pas la visibilité de ceux qui veulent traverser.'
      ]},
      { heading: 'Cyclistes et nouveaux engins de déplacement', body: 'Un cycliste peut être déséquilibré par un écart d’air, un nid-de-poule ou une portière. Les engins de déplacement personnel motorisés (EDPM) sont également vulnérables et parfois difficiles à percevoir.', points: [
        'Laisse au moins 1 m en agglomération et 1,50 m hors agglomération lors du dépassement d’un cycliste ou d’un piéton.',
        'Contrôle les pistes cyclables et bandes cyclables avant de tourner, stationner ou ouvrir une portière.',
        'Ne coupe pas la trajectoire d’un vélo qui continue tout droit lorsque tu tournes.',
        'Respecte les sas vélos, les feux et les panonceaux autorisant certains mouvements aux cyclistes.',
        'Ne stationne pas sur une piste cyclable et évite de t’y arrêter même brièvement.',
        'Observe les EDPM et leurs trajectoires ; leurs règles d’accès et de vitesse dépendent de la voie et de la signalisation.'
      ]},
      { heading: 'Motocyclistes et cyclomotoristes', body: 'Les deux-roues motorisés accélèrent rapidement mais sont moins visibles et plus exposés. Une mauvaise appréciation de leur vitesse peut provoquer une collision.', points: [
        'Vérifie les angles morts avant un changement de voie ou un virage.',
        'Ne te rabats pas immédiatement devant une moto après l’avoir dépassée.',
        'Laisse une marge latérale suffisante et évite de les serrer contre le bord de chaussée.',
        'Anticipe leur présence aux intersections, dans les files et lors des remontées de circulation autorisées.',
        'Attention aux chaussées glissantes, gravillons, plaques métalliques et marquages qui peuvent réduire leur adhérence.'
      ]},
      { heading: 'Poids lourds, bus et transports scolaires', body: 'Les véhicules longs et lourds ont des angles morts importants, une distance d’arrêt plus longue et parfois besoin de plusieurs voies pour manœuvrer.', points: [
        'Ne reste pas dans les angles morts d’un poids lourd, notamment à droite, devant la cabine et juste derrière.',
        'Laisse un espace suffisant devant un camion : il peut avoir besoin de place pour tourner.',
        'Ne dépasse pas un poids lourd si tu ne peux pas terminer la manœuvre sans danger.',
        'Près d’un bus ou d’un car scolaire à l’arrêt, ralentis et prépare-toi à voir surgir des piétons, notamment des enfants.',
        'Reste attentif aux bus qui quittent leur arrêt ; les règles de priorité dépendent du lieu et de la signalisation.',
        'Ne bloque pas un arrêt de bus ou un passage destiné aux voyageurs.'
      ]},
      { heading: 'Véhicules prioritaires et d’intérêt général', body: 'Les véhicules prioritaires peuvent bénéficier de facilités de passage lorsqu’ils utilisent leurs avertisseurs spéciaux selon les règles. Il faut leur faciliter le passage sans créer un autre accident.', points: [
        'Identifie les véhicules prioritaires grâce à leurs catégories et avertisseurs réglementaires.',
        'Ralentis et dégage le passage dès que possible, en tenant compte des autres usagers.',
        'Ne franchis pas un feu rouge et ne commets pas une manœuvre dangereuse pour leur céder le passage.',
        'Ne suis jamais un véhicule prioritaire pour profiter de son passage.',
        'Distingue les véhicules prioritaires des véhicules bénéficiant de facilités de passage : leurs droits ne sont pas identiques.'
      ]},
      { heading: 'Animaux et situations particulières', body: 'Les animaux peuvent surgir, être effrayés par le bruit ou se déplacer de manière imprévisible. Les véhicules lents et agricoles peuvent aussi surprendre sur les routes rurales.', points: [
        'Ralentis et évite de klaxonner inutilement à proximité d’un animal.',
        'Ne cherche pas à éviter un animal par un écart violent si cela crée un danger plus important ; freine de façon maîtrisée.',
        'Garde une grande distance derrière un véhicule agricole ou un attelage.',
        'Attention aux cavaliers et aux animaux conduits sur la chaussée : ralentis et dépasse avec beaucoup de marge.',
        'Respecte les zones de rencontre et les espaces partagés où les piétons peuvent être présents sur toute la chaussée.'
      ]}
    ],
    reminders: [
      'Piéton engagé ou manifestant son intention : priorité dans les conditions prévues par le Code.',
      'Dépassement d’un cycliste ou piéton : 1 m en ville, 1,50 m hors agglomération.',
      'Véhicule lourd : ne reste jamais dans son angle mort.',
      'Bus scolaire à l’arrêt : vigilance maximale pour les enfants.',
      'Faciliter un véhicule prioritaire sans se mettre en danger ni commettre une infraction.'
    ],
    source: 'Code de la route, notamment R412-6, R414-4 et R415-11 ; Observatoire national interministériel de la sécurité routière : https://www.onisr.securite-routiere.gouv.fr/'
  },
  {
    id: 'reglementation',
    title: 'Réglementation et permis B',
    intro: 'Cette leçon rassemble les règles administratives et les obligations essentielles du conducteur. Les catégories, restrictions et textes peuvent évoluer : les sources officielles priment toujours.',
    sections: [
      { heading: 'L’épreuve théorique générale (ETG)', body: 'L’examen du code est une épreuve de connaissances et d’analyse de situations. Il faut comprendre la scène, distinguer les informations utiles et appliquer la règle adaptée.', points: [
        'L’épreuve comporte 40 questions ; il faut obtenir au moins 35 réponses justes pour être reçu.',
        'Une question peut attendre une ou plusieurs réponses ; lis toujours l’indication affichée.',
        'Les questions officielles utilisent des photos ou vidéos et peuvent présenter des situations du point de vue d’un autre usager.',
        'Ne réponds pas uniquement par réflexe : observe la signalisation, les usagers, la position du véhicule et le contexte.',
        'Les questions pédagogiques de cette application ne sont pas les questions de la banque officielle ETG.'
      ]},
      { heading: 'Ce que permet le permis B', body: 'La catégorie B concerne principalement les voitures et certains véhicules légers, dans les limites de masse, de places et de conditions prévues par les textes.', points: [
        'Le permis B autorise notamment les véhicules dont le PTAC ne dépasse pas 3,5 tonnes et conçus pour transporter au maximum 9 personnes conducteur compris, sous réserve des conditions réglementaires.',
        'Certaines remorques et certains ensembles nécessitent une vérification de la masse totale et parfois une formation ou une catégorie complémentaire.',
        'Les mentions et restrictions inscrites sur le titre doivent être respectées.',
        'Ne conduis pas un véhicule dont la catégorie, le poids ou les caractéristiques ne sont pas couverts par ton permis.',
        'En cas de doute sur un ensemble voiture-remorque, vérifie les règles de PTAC, PTRA et la catégorie requise sur Service-Public.'
      ]},
      { heading: 'Permis probatoire et signe A', body: 'Le permis probatoire concerne les conducteurs novices. Il s’accompagne d’un capital initial de points, de limitations spécifiques et d’un signe distinctif à afficher.', points: [
        'Le capital initial est de 6 points au début de la période probatoire.',
        'La durée et la progression du capital dépendent notamment de la filière d’apprentissage et de l’absence de retrait de points.',
        'Le disque A doit être apposé de façon visible à l’arrière du véhicule pendant la période où il est obligatoire.',
        'Les limitations de vitesse et le seuil d’alcool sont plus stricts pour le conducteur probatoire.',
        'Une infraction entraînant un retrait de points peut compromettre la progression du capital et entraîner des obligations de stage.'
      ]},
      { heading: 'Documents, assurance et contrôle du véhicule', body: 'Le conducteur doit pouvoir justifier de son droit à conduire et le véhicule doit être en règle. Les modalités de preuve peuvent être dématérialisées ou évoluer.', points: [
        'Assure-toi que le véhicule est couvert par une assurance obligatoire avant de l’utiliser.',
        'Pour les véhicules immatriculés, depuis le 1er avril 2024, la preuve d’assurance est consultable par les forces de l’ordre via le Fichier des véhicules assurés ; la carte verte n’est plus exigée comme justificatif habituel.',
        'Le certificat d’immatriculation doit correspondre au véhicule et être présenté selon les règles en vigueur.',
        'Le permis doit être valide et adapté à la catégorie du véhicule ; respecte les éventuelles restrictions médicales ou administratives.',
        'Le contrôle technique doit être effectué dans les délais applicables à la catégorie et à l’âge du véhicule.',
        'Vérifie les règles et justificatifs à jour sur Service-Public : les dates et modalités peuvent changer.'
      ]},
      { heading: 'Alcool, stupéfiants et téléphone : obligations majeures', body: 'Ces comportements sont interdits ou strictement encadrés parce qu’ils diminuent les capacités du conducteur et augmentent le risque pour les autres.', points: [
        'Seuil d’alcool général : 0,5 g/L de sang ; seuil probatoire et autres situations particulières : 0,2 g/L.',
        'La conduite après usage de stupéfiants est interdite ; les sanctions peuvent être aggravées en cas de cumul avec l’alcool.',
        'Le téléphone tenu en main est interdit en circulation et entraîne notamment un retrait de points.',
        'Le port à l’oreille d’un dispositif sonore est interdit en circulation, sauf exceptions légales.',
        'Un conducteur doit rester en état et en position d’exécuter les manœuvres nécessaires ; il ne doit pas être gêné par un objet ou une installation.'
      ]},
      { heading: 'Infractions, points et sanctions', body: 'Le non-respect du Code peut entraîner une contravention ou un délit, une amende, un retrait de points, une suspension ou une invalidation selon la gravité et la situation.', points: [
        'Le barème de retrait de points dépend de l’infraction et des circonstances ; ne mémorise pas un chiffre sans vérifier la règle actuelle.',
        'Le retrait de points intervient selon la procédure prévue, après que l’infraction est établie.',
        'Un capital nul peut conduire à l’invalidation du permis et à l’interdiction de conduire.',
        'Certaines infractions peuvent entraîner une suspension, une immobilisation du véhicule ou une obligation de stage.',
        'En période probatoire, certaines pertes de points déclenchent une obligation de stage.',
        'Consulte le relevé d’information intégral et les services officiels pour connaître ta situation réelle.'
      ]},
      { heading: 'Zones réglementées et règles locales', body: 'La signalisation locale peut imposer des restrictions supplémentaires selon le lieu, le véhicule, l’horaire ou la qualité de l’usager.', points: [
        'Les zones à faibles émissions (ZFE) peuvent limiter l’accès selon la vignette Crit’Air, les véhicules et les horaires ; les règles varient selon la collectivité.',
        'Les zones 30, zones de rencontre, aires piétonnes et voies réservées modifient les règles habituelles.',
        'Les équipements hivernaux peuvent être obligatoires dans certaines communes et périodes définies par la réglementation.',
        'Lis les panneaux d’entrée, panonceaux et informations locales avant de circuler.',
        'Ne transpose pas automatiquement une règle locale à une autre ville ou à une autre période.'
      ]}
    ],
    reminders: [
      'ETG : 40 questions et 35 bonnes réponses minimum.',
      'Permis B : vérifie PTAC, nombre de places et remorque.',
      'Permis probatoire : 6 points initiaux, disque A et règles spécifiques.',
      'Assurance obligatoire ; pour les véhicules immatriculés, preuve via le FVA depuis avril 2024.',
      'Les règles locales (ZFE, stationnement, équipements hivernaux) doivent être vérifiées avant le trajet.'
    ],
    source: 'Sécurité routière : préparation ETG https://validation.securite-routiere.gouv.fr/passer-son-permis-de-conduire/preparation-de-lexamen-du-code-de-la-route/se-preparer-lexamen-du ; Service-Public : https://www.service-public.fr/ ; Légifrance : https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006074228/'
  },
  {
    id: 'premiers-secours',
    title: 'Premiers secours et accident',
    intro: 'En cas d’accident, chaque geste doit éviter un suraccident, transmettre une alerte utile et aider les victimes sans aggraver leur état. Ta propre sécurité reste prioritaire.',
    sections: [
      { heading: 'Protéger sans se mettre en danger', body: 'Avant de secourir, évalue la circulation, les risques d’incendie, de fuite de carburant, d’électricité ou de chute. Ne deviens pas une victime supplémentaire.', points: [
        'Arrête-toi dans un endroit qui ne crée pas un danger, allume les feux de détresse et sécurise le véhicule.',
        'Enfile un gilet de haute visibilité avant de sortir lorsque cela peut être fait sans danger.',
        'Sur route rapide, ne traverse pas les voies et ne marche pas sur la chaussée pour poser un triangle si cela t’expose.',
        'Éloigne les personnes non impliquées de la circulation et mets-les à l’abri derrière une protection lorsqu’elle existe.',
        'N’approche pas d’un véhicule en feu, d’une ligne électrique tombée ou d’un risque que tu ne peux pas maîtriser.'
      ]},
      { heading: 'Alerter les secours', body: 'Une alerte claire et précise permet aux secours de choisir les moyens adaptés et de trouver rapidement le lieu de l’accident.', points: [
        'Appelle le 112, numéro d’urgence européen, ou le service adapté selon la situation.',
        'Indique le lieu exact, le sens de circulation, le point kilométrique ou le repère le plus proche.',
        'Précise le nombre de véhicules et de victimes, leur état apparent et les dangers présents.',
        'Réponds aux questions, suis les consignes et ne raccroche pas avant l’autorisation de l’opérateur.',
        'Demande à une personne précise d’aller guider les secours si le lieu est difficile à trouver, sans l’exposer au danger.'
      ]},
      { heading: 'Secourir et surveiller', body: 'Après l’alerte, reste auprès des victimes si les lieux sont sûrs. Applique les gestes que tu connais et suis les instructions du régulateur.', points: [
        'Rassure la victime, protège-la du froid et surveille régulièrement son état.',
        'Ne déplace pas une victime, sauf danger réel, immédiat et impossible à supprimer autrement.',
        'Ne retire pas le casque d’un motard accidenté et ne manipule pas inutilement le cou ou le dos.',
        'Ne donne ni à boire, ni à manger, ni médicament à une victime.',
        'Si la victime ne répond pas et ne respire pas normalement, alerte ou fais alerter et suis immédiatement les instructions des secours concernant la réanimation et le défibrillateur.'
      ]},
      { heading: 'Victime inconsciente ou qui saigne', body: 'Une victime inconsciente, qui respire mal ou qui présente une hémorragie importante nécessite une prise en charge urgente. Ne retarde pas l’alerte pour essayer de tout faire seul.', points: [
        'Si une personne ne répond pas, vérifie la respiration selon les consignes de premiers secours que tu connais et alerte immédiatement.',
        'Si elle ne respire pas normalement, commence la réanimation selon les instructions du service d’urgence et utilise un défibrillateur dès que possible.',
        'En cas de saignement abondant, protège-toi si possible et exerce une pression directe sur la plaie si tu peux le faire sans danger.',
        'Ne retire pas un objet planté dans une plaie ; stabilise-le et attends les secours.',
        'Si la victime respire mais est inconsciente, suis les consignes des secours ; la position latérale de sécurité peut être indiquée en l’absence de traumatisme incompatible.'
      ]},
      { heading: 'Panne et arrêt d’urgence', body: 'Une panne peut être aussi dangereuse qu’un accident, particulièrement sur autoroute, tunnel ou voie rapide.', points: [
        'Rejoins une zone d’arrêt sûre si le véhicule peut encore rouler sans danger.',
        'Allume les feux de détresse et place le gilet avant de sortir lorsque cela est possible sans risque.',
        'Sur autoroute, mets les occupants à l’abri derrière la glissière et utilise une borne d’appel ou le moyen d’alerte adapté.',
        'N’effectue pas de réparation sur une voie circulée et n’essaie pas de pousser le véhicule au milieu du trafic.',
        'Le triangle ne doit être placé que si sa mise en place peut être réalisée sans danger.'
      ]},
      { heading: 'Ordre de conduite à tenir', body: 'Le moyen mnémotechnique classique est Protéger, Alerter, Secourir (PAS). L’ordre guide les priorités, mais les actions doivent s’adapter à la situation réelle.', points: [
        'Protéger : supprimer ou réduire le danger sans s’exposer.',
        'Alerter : appeler les secours avec une localisation et des informations utiles.',
        'Secourir : appliquer les gestes connus et suivre les instructions des secours.',
        'Ne déplace pas une victime pour libérer la chaussée si cela la met en danger ; sécurise plutôt la zone et attends les secours.',
        'Après l’événement, reste disponible pour les secours et transmets uniquement des faits observés.'
      ]}
    ],
    reminders: [
      'PAS : Protéger, Alerter, Secourir.',
      '112 : numéro d’urgence européen.',
      'Ne te mets jamais en danger pour poser un triangle ou porter secours.',
      'Victime : ne pas déplacer sauf danger immédiat ; ne rien donner à boire ou manger.',
      'Attends les consignes des secours et ne raccroche pas avant leur accord.'
    ],
    source: 'Sécurité civile et services d’urgence ; numéro d’urgence européen 112 : https://www.service-public.fr/particuliers/vosdroits/F33954'
  },
  {
    id: 'mecanique',
    title: 'Mécanique et équipements',
    intro: 'Un véhicule fiable se prépare avant le départ et se surveille pendant le trajet. Savoir reconnaître une anomalie permet d’éviter une panne ou une perte de contrôle.',
    sections: [
      { heading: 'Pneumatiques et adhérence', body: 'Les pneus assurent le contact avec la chaussée. Une mauvaise pression ou une usure excessive dégrade le freinage, la tenue de route et la consommation.', points: [
        'Contrôle la pression à froid selon les valeurs du constructeur, en tenant compte du chargement.',
        'Vérifie l’usure de la bande de roulement et les témoins d’usure ; respecte les limites légales.',
        'Inspecte les flancs à la recherche de coupures, hernies, déformations ou corps étrangers.',
        'Une usure irrégulière peut révéler une pression inadaptée, un défaut de géométrie ou un problème mécanique.',
        'Une roue de secours, un kit anticrevaison ou un système de surveillance de pression ne dispense pas de vérifier l’état des pneus.',
        'En zone montagneuse soumise à l’obligation hivernale, utilise les équipements autorisés et adaptés.'
      ]},
      { heading: 'Freinage, direction et suspension', body: 'Ces organes participent directement à la maîtrise du véhicule. Tout changement de comportement doit être pris au sérieux.', points: [
        'Une pédale de frein anormalement molle, dure ou qui s’enfonce nécessite un contrôle immédiat.',
        'Des vibrations, un bruit inhabituel ou une voiture qui tire d’un côté au freinage peuvent signaler une anomalie.',
        'Un niveau de liquide de frein qui baisse de façon inhabituelle doit être contrôlé par un professionnel.',
        'Un jeu important dans la direction ou une tenue de route dégradée impose de faire vérifier le véhicule.',
        'N’attends pas une panne complète pour faire contrôler un organe de sécurité.'
      ]},
      { heading: 'Voyants et niveaux', body: 'Les voyants doivent être interprétés selon le manuel du constructeur. Un voyant rouge indique généralement une anomalie qui nécessite un arrêt dès que possible en sécurité.', points: [
        'Pression d’huile : arrête le véhicule en sécurité et coupe le moteur dès que possible.',
        'Surchauffe : arrête-toi, laisse refroidir et n’ouvre jamais un circuit de refroidissement chaud sous pression.',
        'Voyant de frein : vérifie le frein de stationnement et fais contrôler le véhicule si l’alerte persiste.',
        'Voyant moteur ou système antipollution : consulte le manuel et fais diagnostiquer l’anomalie ; un clignotement peut demander une réaction rapide.',
        'Contrôle les niveaux d’huile, liquide de refroidissement, lave-glace et autres fluides conformément aux préconisations du constructeur.',
        'Ne complète jamais un fluide au hasard et respecte les spécifications du véhicule.'
      ]},
      { heading: 'Éclairage et visibilité', body: 'Les feux et équipements de visibilité servent à voir, être vu et signaler ses intentions. Ils doivent être propres et en état de fonctionnement.', points: [
        'Vérifie les feux de position, croisement, route, stop, clignotants, recul et éclairage de plaque.',
        'Nettoie les optiques ; des phares sales ou mal réglés réduisent la visibilité ou éblouissent.',
        'Des essuie-glaces usés laissent un voile et réduisent la vision, surtout de nuit.',
        'Maintiens le lave-glace rempli avec un produit adapté aux conditions météorologiques.',
        'Désembue les vitres et retire la neige ou le givre avant de prendre la route.',
        'Ne roule pas avec un chargement ou un accessoire qui masque les feux, la plaque ou le champ de vision.'
      ]},
      { heading: 'Batterie, moteur et équipements', body: 'La batterie, le moteur et les accessoires électriques assurent le démarrage et le fonctionnement du véhicule. Un entretien préventif limite les pannes.', points: [
        'Une difficulté de démarrage ou un voyant de charge peut révéler une batterie faible ou un défaut de circuit.',
        'Évite de laisser fonctionner longtemps les équipements électriques moteur arrêté si cela peut décharger la batterie.',
        'Respecte le calendrier d’entretien du constructeur et les contrôles périodiques.',
        'En cas d’odeur de carburant, de fumée ou de bruit mécanique inhabituel, arrête-toi en sécurité et demande un avis professionnel.',
        'Ne touche pas aux éléments chauds, mobiles ou sous haute tension d’un véhicule hybride ou électrique.'
      ]},
      { heading: 'Contrôle technique et entretien préventif', body: 'Le contrôle technique vérifie certains points réglementaires à un instant donné. Il ne remplace pas l’entretien courant ni la responsabilité du conducteur.', points: [
        'Respecte les échéances du contrôle technique applicables à l’âge et à la catégorie du véhicule.',
        'Un véhicule peut nécessiter des réparations même si son contrôle technique est encore valide.',
        'Surveille les bruits, odeurs, vibrations, fuites et changements de comportement.',
        'Vérifie avant un long trajet les pneus, les niveaux, les feux, les essuie-glaces et le chargement.',
        'Confie les réparations des systèmes de sécurité à un professionnel qualifié.'
      ]}
    ],
    reminders: [
      'Pression des pneus à froid et usure régulière.',
      'Voyant rouge : arrêt en sécurité et vérification de la consigne constructeur.',
      'Ne jamais ouvrir un circuit de refroidissement chaud.',
      'Feux, essuie-glaces et vitres propres avant chaque trajet.',
      'Le contrôle technique ne remplace pas l’entretien courant.'
    ],
    source: 'Sécurité routière, conseils pour l’équipement de la voiture : https://validation.securite-routiere.gouv.fr/chacun-son-mode-de-deplacement/dangers-de-la-route-en-voiture/equipement-de-la-voiture/conseils ; notice du constructeur.'
  },
  {
    id: 'securite',
    title: 'Sécurité du véhicule et des passagers',
    intro: 'La sécurité passive protège en cas de choc ; la sécurité active aide à éviter l’accident. Aucun équipement ne remplace une conduite attentive et adaptée.',
    sections: [
      { heading: 'Ceinture de sécurité', body: 'La ceinture maintient le corps et répartit les efforts lors d’un choc. Elle doit être utilisée par le conducteur et les passagers, à l’avant comme à l’arrière, sauf dérogations légales particulières.', points: [
        'Attache la ceinture avant de démarrer, même pour un trajet très court.',
        'La sangle doit être à plat, non vrillée, passer sur l’épaule et le bassin et être correctement tendue.',
        'Ne place pas la sangle sous le bras ou derrière le dos.',
        'Une ceinture mal positionnée peut provoquer des blessures graves et perdre une grande partie de son efficacité.',
        'Vérifie que chaque passager dispose d’une place et d’une ceinture adaptées.'
      ]},
      { heading: 'Enfants et sièges auto', body: 'Un enfant doit être retenu par un dispositif adapté à sa morphologie et homologué. La facilité d’installation ne doit pas primer sur la compatibilité et le bon ajustement.', points: [
        'En règle générale, les enfants de moins de 10 ans doivent être installés dans un dispositif de retenue adapté et homologué.',
        'Choisis le siège en fonction de la taille, du poids, de l’homologation et des instructions du fabricant.',
        'Respecte les points d’ancrage, le cheminement de la ceinture et les indications de serrage.',
        'Un siège dos à la route installé à l’avant nécessite la désactivation de l’airbag frontal passager selon les règles et instructions applicables.',
        'Ne place jamais un enfant dans un siège ou une position incompatible avec le véhicule.',
        'Vérifie régulièrement que le siège est toujours correctement fixé et que l’enfant est bien attaché.'
      ]},
      { heading: 'Airbags, appuie-têtes et position de conduite', body: 'Les airbags sont des dispositifs complémentaires à la ceinture. Une mauvaise position peut augmenter les blessures en cas de déclenchement.', points: [
        'L’airbag ne remplace jamais la ceinture de sécurité.',
        'Respecte la distance de sécurité recommandée entre le conducteur, le volant et l’airbag.',
        'Régle l’appuie-tête à la hauteur appropriée et le plus près possible de la tête selon les recommandations du véhicule.',
        'Règle le siège pour atteindre les pédales sans tendre complètement les jambes et garder le contrôle du volant.',
        'Ajuste les rétroviseurs avant de partir et vérifie que les passagers ne gênent pas la visibilité.'
      ]},
      { heading: 'Chargement, remorque et objets transportés', body: 'Un objet mal arrimé peut devenir un projectile. Une surcharge modifie les distances de freinage, la stabilité et le comportement du véhicule.', points: [
        'Respecte le PTAC, les charges maximales par essieu et les limites prévues par le constructeur.',
        'Place les objets lourds bas et répartis, puis arrime-les afin qu’ils ne bougent pas.',
        'Ne masque ni les feux, ni la plaque, ni la visibilité du conducteur.',
        'Vérifie les règles de dépassement de dimensions et la signalisation obligatoire du chargement.',
        'Avant de tracter, vérifie les masses autorisées, la compatibilité de l’attelage et la catégorie de permis nécessaire.',
        'Contrôle l’attelage, le câble de sécurité, les feux et la répartition de la charge avant le départ.'
      ]},
      { heading: 'Aides à la conduite et limites', body: 'ABS, ESP, freinage automatique et aide au maintien dans la voie peuvent assister le conducteur, mais leurs capacités sont limitées par les capteurs, la météo et la situation.', points: [
        'L’ABS aide à conserver la capacité de diriger lors d’un freinage appuyé ; il ne réduit pas toutes les distances de freinage.',
        'L’ESP aide à stabiliser le véhicule dans certaines situations, sans supprimer les lois physiques ni le risque de dérapage.',
        'Les aides à la conduite ne dispensent jamais de surveiller la route et de garder les mains et l’attention nécessaires.',
        'Caméras, radars et capteurs peuvent être gênés par la pluie, la neige, la saleté ou un obstacle.',
        'Lis le manuel du véhicule pour comprendre les alertes, les limites et les conditions de fonctionnement des systèmes.'
      ]},
      { heading: 'Gilet, triangle et équipement de sécurité', body: 'Certains équipements doivent être présents ou utilisés selon la situation. Leur rôle est de réduire le risque lors d’un arrêt imprévu.', points: [
        'Dispose d’un gilet de haute visibilité accessible depuis l’habitacle et mets-le avant de sortir lorsque cela peut être fait sans danger.',
        'Le triangle de présignalisation doit être utilisé dans les conditions prévues, mais ne doit jamais être posé si cela expose à un danger.',
        'Garde les objets nécessaires à la sécurité accessibles sans les laisser libres dans l’habitacle.',
        'Vérifie les équipements et leurs dates ou états lorsque cela s’applique.',
        'Ne confonds pas équipement conseillé, équipement obligatoire et équipement obligatoire seulement dans certaines zones ou circonstances.'
      ]}
    ],
    reminders: [
      'Une personne, une place, une ceinture.',
      'Enfant de moins de 10 ans : dispositif adapté et homologué en règle générale.',
      'Siège dos à la route à l’avant : airbag passager à désactiver selon les instructions.',
      'Charge lourde : basse, répartie et arrimée.',
      'Les aides à la conduite assistent ; elles ne remplacent jamais le conducteur.'
    ],
    source: 'Sécurité routière, équipement de la voiture : https://validation.securite-routiere.gouv.fr/chacun-son-mode-de-deplacement/dangers-de-la-route-en-voiture/equipement-de-la-voiture/conseils ; dépliant siège auto : https://www.securite-routiere.gouv.fr/'
  },
  {
    id: 'environnement',
    title: 'Environnement et conduite responsable',
    intro: 'La conduite responsable vise à réduire la consommation, les émissions, le bruit et l’usure tout en conservant la sécurité comme priorité absolue.',
    sections: [
      { heading: 'Éco-conduite et anticipation', body: 'Une allure souple permet de limiter les accélérations inutiles et de mieux prévoir les ralentissements. Elle rend aussi la conduite plus confortable.', points: [
        'Observe loin devant et anticipe feux, intersections, ralentissements et changements de limitation.',
        'Accélère progressivement et utilise un rapport adapté au moteur et à la circulation.',
        'Évite les freinages brusques en levant le pied tôt lorsque la situation le permet.',
        'Maintiens une vitesse régulière sans dépasser les limites ni gêner la circulation.',
        'Ne laisse pas le moteur tourner inutilement pendant un arrêt prolongé si les conditions le permettent.',
        'Une conduite économique n’autorise jamais à rouler trop lentement ou à retarder une manœuvre nécessaire.'
      ]},
      { heading: 'Entretien et consommation', body: 'L’état du véhicule influe sur la consommation et les émissions. Un entretien adapté améliore aussi la sécurité et la fiabilité.', points: [
        'Vérifie la pression des pneus à froid et respecte les préconisations du constructeur.',
        'Retire les accessoires extérieurs inutilisés qui augmentent la résistance à l’air.',
        'Évite de transporter des objets ou charges inutiles.',
        'Respecte les échéances d’entretien et surveille les anomalies moteur.',
        'Utilise une climatisation et un chauffage adaptés ; évite les réglages extrêmes inutiles.',
        'Prépare ton trajet pour limiter les détours, les embouteillages et les déplacements évitables.'
      ]},
      { heading: 'Pollution, bruit et santé', body: 'Le trafic génère des polluants et du bruit qui affectent les riverains et les usagers. Le comportement du conducteur peut réduire une partie de ces nuisances.', points: [
        'Évite les accélérations brutales et les régimes moteur excessifs.',
        'Ne fais pas tourner le moteur à l’arrêt sans nécessité.',
        'Évite les coups de klaxon injustifiés et adapte ton comportement dans les zones habitées.',
        'Ne jette aucun déchet depuis le véhicule ; conserve-le jusqu’à une poubelle.',
        'Un véhicule mal entretenu peut consommer davantage et émettre plus de polluants.'
      ]},
      { heading: 'Zones à faibles émissions et restrictions locales', body: 'Les règles d’accès aux zones à faibles émissions peuvent dépendre de la vignette Crit’Air, du véhicule, de la commune et des horaires. Elles peuvent changer.', points: [
        'Vérifie avant ton trajet si la destination est dans une ZFE et quelles catégories de véhicules sont autorisées.',
        'La vignette Crit’Air classe les véhicules selon leurs caractéristiques ; elle ne garantit pas à elle seule l’accès à toutes les zones.',
        'Lis les panneaux d’entrée et les arrêtés locaux, notamment les horaires, dérogations et restrictions temporaires.',
        'N’utilise pas une information ancienne pour décider d’un trajet : les règles et périmètres locaux peuvent évoluer.',
        'En cas de doute, consulte les informations officielles de la métropole ou de la collectivité concernée.'
      ]},
      { heading: 'Choix du déplacement', body: 'Le moyen de déplacement le plus adapté dépend de la distance, du chargement, du nombre de personnes et de la sécurité.', points: [
        'Pour les trajets courts lorsque cela est possible, la marche et le vélo réduisent l’usage de la voiture.',
        'Les transports collectifs et le covoiturage peuvent réduire le nombre de véhicules en circulation.',
        'Regroupe les déplacements et prépare les itinéraires pour éviter les trajets à vide.',
        'Respecte les règles de partage des voies et la sécurité des usagers lors des changements de mode de transport.',
        'La réduction de consommation ne doit jamais compromettre la visibilité, les distances ou la maîtrise du véhicule.'
      ]}
    ],
    reminders: [
      'Anticiper, accélérer progressivement et éviter les freinages inutiles.',
      'Pneus correctement gonflés et véhicule entretenu.',
      'Retirer les accessoires extérieurs inutiles et les charges superflues.',
      'Vérifier les règles ZFE et Crit’Air propres à la destination.',
      'La sécurité passe toujours avant l’économie de carburant.'
    ],
    source: 'Sécurité routière et collectivités locales ; vérifier les règles ZFE sur le site officiel de la collectivité avant tout déplacement.'
  },
  {
    id: 'divers',
    title: 'Situations particulières et notions diverses',
    intro: 'Cette partie rassemble les situations transversales qui demandent une lecture précise de l’environnement : signalisation temporaire, panne, documents, partage de la chaussée et manœuvres peu fréquentes.',
    sections: [
      { heading: 'Marquages au sol et signalisation temporaire', body: 'Les lignes, flèches et inscriptions au sol guident le positionnement et les mouvements. En présence de travaux, la signalisation provisoire peut modifier le régime habituel.', points: [
        'Une ligne continue ne doit pas être franchie ou chevauchée, sauf exceptions prévues par les textes.',
        'Une ligne discontinue peut être franchie si la manœuvre est autorisée et sans danger.',
        'Les flèches directionnelles indiquent les directions possibles depuis la voie ; place-toi avant la zone de sélection.',
        'Les zébras et voies neutralisées ne sont pas des voies de circulation ordinaires.',
        'La signalisation temporaire de chantier doit être respectée ; adapte ta vitesse et garde une marge avec les agents et ouvriers.',
        'Les indications données par un agent sur un chantier commandent la circulation dans les conditions prévues.'
      ]},
      { heading: 'Passages à niveau et ponts mobiles', body: 'Un passage à niveau croise une voie ferrée. Un véhicule immobilisé sur les rails expose ses occupants et les passagers du train à un danger extrême.', points: [
        'Ne t’engage que si tu peux traverser entièrement et immédiatement.',
        'Arrête-toi dès que les signaux lumineux l’imposent ou que les barrières se ferment.',
        'Ne contourne jamais une demi-barrière et ne tente pas de passer après le déclenchement des signaux.',
        'En cas d’immobilisation sur les voies, évacue les personnes si cela peut être fait sans danger et alerte immédiatement selon les dispositifs présents.',
        'Respecte les limitations et feux spécifiques aux ponts mobiles et ouvrages à ouverture.'
      ]},
      { heading: 'Transport, chargement et remorque', body: 'Le conducteur doit s’assurer que le véhicule et son chargement restent dans les limites autorisées et ne compromettent pas la visibilité ou la stabilité.', points: [
        'Respecte les dimensions et masses maximales autorisées du véhicule et de l’ensemble attelé.',
        'Arrime les objets, protège ce qui peut tomber et répartis correctement la charge.',
        'Ne masque pas les feux, la plaque d’immatriculation ni la visibilité vers l’arrière.',
        'Vérifie la fixation de la remorque, le câble de sécurité, les feux et les pneumatiques.',
        'Une remorque modifie le comportement, les distances de freinage et les manœuvres ; prends le temps de t’entraîner en lieu sûr.',
        'La catégorie de permis nécessaire dépend des masses réglementaires de l’ensemble.'
      ]},
      { heading: 'Ouverture des portières et sortie du véhicule', body: 'Un occupant peut surprendre un cycliste ou un deux-roues en ouvrant brusquement une portière. La sécurité doit être vérifiée avant toute sortie.', points: [
        'Contrôle le rétroviseur et l’angle mort avant d’ouvrir.',
        'Ouvre progressivement et vérifie l’arrivée d’un vélo, d’une moto ou d’un piéton.',
        'Fais sortir les passagers du côté le plus sûr lorsque la situation le permet.',
        'Ne laisse pas une portière ouverte sur la chaussée ou une piste cyclable.',
        'Avant de repartir, vérifie que toutes les portières sont correctement fermées.'
      ]},
      { heading: 'Panne, accident et constat', body: 'Après un incident, protège les personnes avant de t’occuper du véhicule ou des formalités. La collecte d’informations ne doit jamais augmenter le danger.', points: [
        'Mets les feux de détresse et place-toi en sécurité.',
        'En cas de victime ou de danger, alerte les secours avant de remplir un constat.',
        'Échange les informations utiles avec les personnes concernées et les témoins, sans reconnaître une responsabilité à chaud.',
        'Prends des photos uniquement depuis un endroit sûr et sans gêner les secours.',
        'Un constat amiable sert à décrire les faits et circonstances ; remplis-le lisiblement et vérifie les informations avant signature.',
        'En cas de désaccord, reste factuel et demande conseil à ton assureur.'
      ]},
      { heading: 'Règles locales, stationnement et partage de l’espace', body: 'Les villes peuvent organiser les déplacements au moyen de zones 30, zones de rencontre, aires piétonnes, voies réservées et restrictions temporaires.', points: [
        'Lis les panneaux d’entrée et de sortie de zone, ainsi que les panonceaux de durée et de catégorie.',
        'Dans une zone de rencontre, les piétons peuvent utiliser la chaussée selon le régime réglementaire ; adapte ton allure et cède la priorité prévue.',
        'Dans une aire piétonne, l’accès des véhicules est limité aux catégories et conditions autorisées.',
        'Respecte les emplacements réservés, les places PMR et les zones de livraison selon leur signalisation.',
        'Ne te fie pas à une habitude locale : la signalisation en place et la réglementation applicable commandent la situation.'
      ]}
    ],
    reminders: [
      'Le marquage au sol est une signalisation à part entière.',
      'Travaux : signalisation temporaire et agents à respecter.',
      'Passage à niveau : ne jamais s’engager sans pouvoir dégager entièrement.',
      'Chargement : masse, dimensions, visibilité et arrimage.',
      'Après un accident : sécurité et secours avant les formalités.'
    ],
    source: 'Code de la route sur Légifrance : https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000006074228/ ; Service-Public : https://www.service-public.fr/'
  }
];
