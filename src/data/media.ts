export type LearningScene = { id:string; title:string; theme:string; src:string; alt:string; description:string; };
export const mediaScenes:LearningScene[]=[
{id:'priority',title:'Priorité à droite',theme:'circulation',src:'/scenes/intersection-priority.svg',alt:'Schéma vu du dessus d’une intersection avec deux voitures arrivant de rues différentes.',description:'Repérer l’usager qui arrive de sa droite et appliquer la priorité en l’absence de signalisation particulière.'},
{id:'stop',title:'Marquer l’arrêt au STOP',theme:'circulation',src:'/scenes/stop.svg',alt:'Schéma d’un véhicule qui s’immobilise à la ligne d’arrêt d’un panneau STOP.',description:'L’arrêt doit être complet avant de contrôler la chaussée abordée.'},
{id:'traffic-lights',title:'Feux tricolores',theme:'circulation',src:'/scenes/traffic-lights.svg',alt:'Schéma d’un carrefour équipé de feux tricolores.',description:'Lire les feux et ne pas s’engager si le carrefour ne peut pas être dégagé.'},
{id:'pedestrians',title:'Passage piéton',theme:'usagers',src:'/scenes/pedestrian-crossing.svg',alt:'Voiture approchant un passage piéton où une personne souhaite traverser.',description:'Anticiper la traversée et céder le passage au piéton engagé ou manifestant clairement son intention de traverser.'},
{id:'roundabout',title:'Carrefour à sens giratoire',theme:'circulation',src:'/scenes/roundabout.svg',alt:'Schéma en vue de dessus d’un carrefour à sens giratoire avec plusieurs voitures.',description:'Contrôler les véhicules déjà engagés et céder le passage à l’entrée lorsque la signalisation l’impose.'},
{id:'cyclists',title:'Dépasser un cycliste',theme:'usagers',src:'/scenes/cyclist-overtaking.svg',alt:'Voiture et cycliste côte à côte sur une route avec indication de l’écart latéral.',description:'Respecter la distance latérale réglementaire et renoncer au dépassement si l’espace manque.'},
{id:'blind-spots',title:'Angles morts des poids lourds',theme:'usagers',src:'/scenes/truck-blind-spots.svg',alt:'Camion vu du dessus avec zones d’angles morts colorées et cycliste à proximité.',description:'Ne jamais rester à côté d’un poids lourd, particulièrement à droite lorsqu’il tourne.'},
{id:'motorway',title:'Insertion sur autoroute',theme:'route',src:'/scenes/motorway.svg',alt:'Schéma d’une voie d’accélération qui rejoint une autoroute.',description:'Adapter sa vitesse, contrôler et s’insérer sans obliger les autres conducteurs à freiner brutalement.'},
{id:'wet-road',title:'Pluie et adhérence',theme:'route',src:'/scenes/wet-road.svg',alt:'Voiture circulant sur chaussée mouillée sous la pluie.',description:'Réduire la vitesse, augmenter les distances et éviter les gestes brusques.'},
{id:'accident',title:'Protéger après un accident',theme:'premiers-secours',src:'/scenes/accident-protection.svg',alt:'Illustration d’un accident de circulation avec triangle de présignalisation.',description:'Se protéger et empêcher le suraccident avant d’alerter et de porter assistance.'},
{id:'tunnel',title:'Circuler dans un tunnel',theme:'route',src:'/scenes/tunnel.svg',alt:'Schéma de deux voitures à l’intérieur d’un tunnel éclairé.',description:'Respecter les distances, les feux et les consignes de sécurité ; ne jamais faire demi-tour.'},
{id:'child-seat',title:'Installer un enfant',theme:'securite',src:'/scenes/child-seat.svg',alt:'Vue schématique d’un siège enfant dans une voiture avec rappel sur l’airbag passager.',description:'Choisir un dispositif adapté à l’enfant et appliquer les consignes relatives à l’airbag.'},
{id:'vehicle-check',title:'Contrôles du véhicule',theme:'mecanique',src:'/scenes/vehicle-check.svg',alt:'Vue schématique d’une voiture et de ses quatre roues avec repères de contrôle.',description:'Vérifier notamment pneus, feux, niveaux et essuie-glaces avant un trajet.'},
{id:'seatbelt-cargo',title:'Ceintures et bagages',theme:'securite',src:'/scenes/seatbelt-cargo.svg',alt:'Habitacle vu du dessus montrant des ceintures et un bagage.',description:'Attacher les passagers et arrimer les objets pour éviter qu’ils deviennent des projectiles.'},
{id:'door-opening',title:'Ouvrir une portière',theme:'usagers',src:'/scenes/door-opening.svg',alt:'Voiture stationnée à côté d’un cycliste avec trajectoire de portière illustrée.',description:'Contrôler rétroviseurs et angle mort avant d’ouvrir une portière.'},
{id:'agent',title:'Ordres d’un agent',theme:'circulation',src:'/scenes/agent-traffic.svg',alt:'Agent réglant la circulation à un carrefour équipé de feux.',description:'Les indications de l’agent chargé de la circulation priment sur les feux et panneaux.'},
{id:'level-crossing',title:'Passage à niveau',theme:'circulation',src:'/scenes/level-crossing.svg',alt:'Voiture arrêtée devant un passage à niveau dont les feux rouges clignotent.',description:'Arrête-toi aux feux rouges et ne t’engage que si tu peux dégager complètement la voie ferrée.'},
{id:'fog',title:'Brouillard et visibilité',theme:'route',src:'/scenes/fog.svg',alt:'Voiture circulant dans une nappe de brouillard dense.',description:'Réduis ta vitesse et adapte tes feux à la visibilité réelle.'},
{id:'fatigue',title:'Fatigue au volant',theme:'conducteur',src:'/scenes/fatigue.svg',alt:'Conducteur fatigué au volant, signalé par un pictogramme d’alerte.',description:'Les signes de fatigue imposent de faire une pause dans un endroit sécurisé.'},
{id:'breakdown',title:'Panne sur autoroute',theme:'route',src:'/scenes/breakdown.svg',alt:'Véhicule en panne sur la bande d’arrêt d’urgence d’une autoroute.',description:'Mets les occupants à l’abri derrière la glissière et respecte les consignes de sécurité.'}
];
export const animatedScenes=[
{id:'motion-roundabout',title:'Observation d’un carrefour à sens giratoire',theme:'circulation',src:'/scenes/video-roundabout.svg',alt:'Séquence animée montrant un véhicule déjà engagé dans un giratoire et un autre qui approche.',description:'Observe les véhicules déjà engagés et le marquage avant de t’insérer.'},
{id:'motion-pedestrian',title:'Observation d’un passage piéton',theme:'usagers',src:'/scenes/video-pedestrian.svg',alt:'Séquence animée montrant une voiture qui ralentit pour laisser traverser un piéton.',description:'Repère l’intention de traverser et la distance nécessaire pour t’arrêter.'},
{id:'motion-fatigue',title:'Trajectoire et fatigue',theme:'conducteur',src:'/scenes/video-fatigue.svg',alt:'Séquence animée en vue conducteur montrant une trajectoire qui devient irrégulière.',description:'Une perte de régularité de la trajectoire peut révéler une baisse de vigilance.'},
{id:'motion-fog',title:'Brouillard qui s’épaissit',theme:'route',src:'/scenes/video-fog.svg',alt:'Séquence animée montrant une visibilité qui diminue progressivement sur la route.',description:'Adapte ton allure à la distance réellement visible et garde une marge de sécurité.'}
];
export const lessonMedia:Record<string,string[]> = {
circulation:['priority','stop','traffic-lights','roundabout','level-crossing'],
conducteur:['fatigue','wet-road'],
route:['wet-road','fog','motorway','tunnel','breakdown'],
usagers:['pedestrians','cyclists','blind-spots','door-opening'],
'notions-diverses':['agent'],
'premiers-secours':['accident'],
mecanique:['vehicle-check'],
securite:['child-seat','seatbelt-cargo'],
environnement:['motorway','wet-road'],
'prendre-quitter-vehicule':['seatbelt-cargo','door-opening']
};
export const videoLessons=[
{id:'KNt4a8tQP0o',title:'Entraînement : circulation routière',theme:'Circulation',type:'Série vidéo',description:'20 questions d’entraînement consacrées à la circulation, avec correction après chaque question.',source:'digiSchool Code · 30 janvier 2019 · ressource d’archive'},
{id:'cC6cjKNfx-8',title:'Entraînement : le conducteur',theme:'Conducteur',type:'Série vidéo',description:'20 questions sur la vigilance, le comportement et les capacités du conducteur.',source:'digiSchool Code · 28 janvier 2019 · ressource d’archive'},
{id:'iqDpKHtJcps',title:'Entraînement : la route',theme:'La route',type:'Série vidéo',description:'Une série de 20 questions pour réviser les situations liées à la route.',source:'digiSchool Code · 28 janvier 2019 · ressource d’archive'},
{id:'wUftgqGNVu8',title:'Entraînement : l’environnement',theme:'Environnement',type:'Série vidéo',description:'20 questions autour de la conduite responsable et de l’environnement.',source:'digiSchool Code · 28 janvier 2019 · ressource d’archive'},
{id:'231zVAtnqeU',title:'Les questions pièges du code',theme:'Multi-thèmes',type:'Replay vidéo',description:'Un replay de questions commentées proposé publiquement par Ornikar.',source:'Ornikar · replay public'},
{id:'1dZFEG-C34U',title:'40 questions en conditions d’examen',theme:'Examen',type:'Examen vidéo',description:'Un entraînement vidéo complet sur une série de 40 questions.',source:'Ornikar · replay public'}
];
export const officialResources=[
{title:'Je repasse le code — module officiel',description:'80 questions issues de la base officielle, en séries de 10 ou 40, avec photos et vidéos.',url:'https://www.securite-routiere.gouv.fr/les-medias/nos-quiz/je-repasse-le-code',label:'Lancer le module officiel'},
{title:'24 exemples de questions ETG',description:'La page de préparation officielle présente des exemples de questions illustrées et des extraits vidéo.',url:'https://validation.securite-routiere.gouv.fr/passer-son-permis-de-conduire/preparation-de-lexamen-du-code-de-la-route/se-preparer-lexamen-du',label:'Voir les exemples'},
{title:'Mon auto-école à la maison',description:'Chaîne de formation créée avec des acteurs de l’enseignement de la conduite : cours courts et quiz vidéo.',url:'https://www.youtube.com/channel/UCwn_r0JN4cEUo66R03uddww/featured',label:'Voir la chaîne'}
];
