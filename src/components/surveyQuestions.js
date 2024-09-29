import PORTS from './Ports.js';
export const questions = [
	{
		id: "Q1",
		text: "Poste",
		options: [
			{ id: 1, text: "P2a - Sud/Nord - RN25 - Dainville", next: "Q6" },
			{ id: 2, text: "P2b - Nord/Sud - RN25 - Beaumetz-lès-Loges", next: "Q6" },
			{ id: 3, text: "P5 - Est / Ouest - RN151 - Saint - Germain - du - Puy", next: "Q6" },
			{ id: 4, text: "P1a - Sud/Nord- Péage Abbeville ", next: "Q6" },
			{ id: 5, text: "P1b - Nord/Sud - Péage Abbeville ", next: "Q6" },
			{ id: 6, text: "P3a - Sud/Nord - A1 Péage de Chamant", next: "Q6" },
			{ id: 7, text: "P3b - Nord/Sud- A1 Péage de Chamant", next: "Q6" },
			{ id: 8, text: "P4a - Sud/Nord - A16 Péage d'Amblainville ", next: "Q6" },
			{ id: 9, text: "P4b - Nord/Sud- A16 Péage d'Amblainville ", next: "Q6" },
			{ id: 10, text: "P6 - Nord / Sud - A77 Péage de Myennes ", next: "Q6" },
		]
	},
	{
		id: "Q6",
		text: "Code Pays - immatriculation du véhicule",
		freeText: true,
		freeTextPlaceholder: "Plaque à l'avant",
		next: "Q7",
	},
	{
		id: "Q7",
		text: "Type de véhicule",
		options: [
			{ id: 1, text: "VL", next: "Q8" },
			{ id: 2, text: "VL + caravane ou remorque", next: "Q8" },
			{ id: 3, text: "Camping-Car", next: "Q8" },
			{ id: 4, text: "transportant du matériel (artisan…)", next: "Q8" },
			{ id: 5, text: "Fourgonnettes et utilitaires transportant de la marchandise", next: "Q7bisPL" },
			{ id: 6, text: "PL porteur", next: "Q7bisPL" },
			{ id: 7, text: "PL articulé, semi-remorque", next: "Q7bisPL" },
			{ id: 8, text: "PL train routier (porteur + remorque)", next: "Q7bisPL" },
		],
	},
	{
		id: "Q8",
		text: "Nombre d'occupants",
		options: [
			{ id: 1, text: "1", next: "Q9" },
			{ id: 2, text: "2", next: "Q9" },
			{ id: 3, text: "3", next: "Q9" },
			{ id: 4, text: "4", next: "Q9" },
			{ id: 5, text: "5", next: "Q9" },
			{ id: 6, text: "6", next: "Q9" },
			{ id: 7, text: "7", next: "Q9" },
			{ id: 8, text: "8", next: "Q9" },
			{ id: 9, text: "9", next: "Q9" },
		],
	},
	{
		id: "Q9",
		text: "D'ou venez vous ?",
		usesCommuneSelector: true,  // Add this flag to indicate it uses CommuneSelector
		next: "Q10"  // Explicitly set the next question
	},
	{
		id: "Q10",
		text: "Motif origine",
		options: [
			{ id: 1, text: "Domicile", next: "Q11" },
			{ id: 2, text: "Travail", next: "Q11" },
			{ id: 3, text: "Affaires professionnelles", next: "Q11" },
			{ id: 4, text: "Études", next: "Q11" },
			{ id: 5, text: "Achats", next: "Q11" },
			{ id: 6, text: "Soins, démarches admin", next: "Q11" },
			{ id: 7, text: "Loisirs", next: "Q11" },
			{ id: 8, text: "Visites", next: "Q11" },
			{ id: 9, text: "Vacances, week-end, tourisme", next: "Q11" },
			{ id: 10, text: "Rabattement sur transport en commun", next: "Q11" },
			{ id: 11, text: "Accompagnement + domicile", next: "Q11" },
			{ id: 12, text: "Accompagnement + travail", next: "Q11" },
			{ id: 13, text: "Accompagnement + affaires professionnelles", next: "Q11" },
			{ id: 14, text: "Accompagnement + études", next: "Q11" },
			{ id: 15, text: "Accompagnement + achats", next: "Q11" },
			{ id: 16, text: "Accompagnement + soins, démarches admin", next: "Q11" },
			{ id: 17, text: "Accompagnement + loisirs", next: "Q11" },
			{ id: 18, text: "Accompagnement + visites", next: "Q11" },
			{ id: 19, text: "Accompagnement + vacances, week-end, tourisme", next: "Q11" },
			{ id: 99, text: "Autre", next: "Q11" },
		],
	},
	{
		id: "Q11",
		text: "Ou allez vous ?",
		usesCommuneSelector: true,  // Add this flag to indicate it uses CommuneSelector
		next: "Q12"  // Explicitly set the next question
	},
	{
		id: "Q12",
		text: "Motif Destination",
		options: [
			{ id: 1, text: "Domicile", next: "Q13" },
			{ id: 2, text: "Travail", next: "Q13" },
			{ id: 3, text: "Affaires professionnelles", next: "Q13" },
			{ id: 4, text: "Études", next: "Q13" },
			{ id: 5, text: "Achats", next: "Q13" },
			{ id: 6, text: "Soins, démarches admin", next: "Q13" },
			{ id: 7, text: "Loisirs", next: "Q13" },
			{ id: 8, text: "Visites", next: "Q13" },
			{ id: 9, text: "Vacances, week-end, tourisme", next: "Q13" },
			{ id: 10, text: "Rabattement sur transport en commun", next: "Q13" },
			{ id: 11, text: "Accompagnement + domicile", next: "Q13" },
			{ id: 12, text: "Accompagnement + travail", next: "Q13" },
			{ id: 13, text: "Accompagnement + affaires professionnelles", next: "Q13" },
			{ id: 14, text: "Accompagnement + études", next: "Q13" },
			{ id: 15, text: "Accompagnement + achats", next: "Q13" },
			{ id: 16, text: "Accompagnement + soins, démarches admin", next: "Q13" },
			{ id: 17, text: "Accompagnement + loisirs", next: "Q13" },
			{ id: 18, text: "Accompagnement + visites", next: "Q13" },
			{ id: 19, text: "Accompagnement + vacances, week-end, tourisme", next: "Q13" },
			{ id: 99, text: "Autre", next: "Q13" },
		],
	},
	{
		id: "Q13",
		text: (answers) => {
			console.log('Q13 text function called. Answers:', answers);
			const q1Response = parseInt(answers.Q1);
			console.log('Q1 response:', q1Response);
			return q1Response >= 1 && q1Response <= 3 ? "Fréquence du déplacement" : "Sexe du conducteur";
		},
		options: (answers) => {
			console.log('Q13 options function called. Answers:', answers);
			const q1Response = parseInt(answers.Q1);
			console.log('Q1 response in options:', q1Response);
			if (q1Response >= 1 && q1Response <= 3) {
				return [
					{ id: 1, text: "tous les jours ou presque", next: "end" },
					{ id: 2, text: "une a deux fois par semaine", next: "end" },
					{ id: 3, text: "3 a 4 fois par mois", next: "end" },
					{ id: 4, text: "plus rarement", next: "end" },
				];
			} else {
				return [
					{ id: 1, text: "Masculin", next: "end" },
					{ id: 2, text: "Féminin", next: "end" },
				];
			}
		},
	},
	{
		id: "Q7bisPL",
		text: "Type de carrosserie",
		options: [
			{ id: 1, text: "conteneur", next: "Q8PL" },
			{ id: 2, text: "messagerie", next: "Q8PL" },
			{ id: 3, text: "citerne", next: "Q8PL" },
			{ id: 4, text: "frigorifique", next: "Q8PL" },
			{ id: 5, text: "benne basculante", next: "Q8PL" },
			{ id: 6, text: "plateau", next: "Q8PL" },
			{ id: 7, text: "bâché (ou savoyarde)", next: "Q8PL" },
			{ id: 99, text: "autres", next: "Q8PL" },
		]
	},
	{
		id: "Q8PL",
		text: "Nb d'essieux qui touchent le sol",
		freeText: true,
		next: "Q9PL",
	},
    {
        id: "Q9PL",
        text: "D'ou venez vous ?",
        usesCommuneSelector: true,
        next: (answers) => {
            const selectedCommune = answers["Q9PL_COMMUNE"] || answers["Q9PL_COMMUNE_LIBRE"];
            const isPortCity = PORTS.some(port => port.CITY.toLowerCase() === selectedCommune.toLowerCase());
            return isPortCity ? "Q9bisPL" : "Q10PL";
        }
    },
    {
        id: "Q9bisPL",
        text: "Venez vous du port",
        onEnter: (answers) => {
            const selectedCommune = answers["Q9PL_COMMUNE"] || answers["Q9PL_COMMUNE_LIBRE"];
            const port = PORTS.find(port => port.CITY.toLowerCase() === selectedCommune.toLowerCase());
            if (port) {
                answers["PORT_ID_ORIGIN"] = port.PORT_ID;
            }
        },
        options: [
            { id: 1, text: "oui", next: "Q10PL" },
            { id: 2, text: "non", next: "Q10PL" },
        ],
    },
	{
		id: "Q10PL",
		text: "Motif origine",
		options: [
			{ id: 0, text: "Domicile", next: "Q11PL" },
			{ id: 1, text: "Chargement", next: "Q11PL" },
			{ id: 2, text: "Dechargement", next: "Q11PL" },
			{ id: 3, text: "Mixte chargement et déchargement", next: "Q11PL" },
			{ id: 4, text: "Prise / Retour vehicule", next: "Q11PL" },
			{ id: 5, text: "Dedouanement", next: "Q11PL" },
			{ id: 99, text: "Autre", next: "Q11PL" },
		],
	},
	{
        id: "Q11PL",
        text: "Ou allez vous ?",
        usesCommuneSelector: true,
        next: (answers) => {
            const selectedCommune = answers["Q11PL_COMMUNE"] || answers["Q11PL_COMMUNE_LIBRE"];
            const isPortCity = PORTS.some(port => port.CITY.toLowerCase() === selectedCommune.toLowerCase());
            return isPortCity ? "Q11bisPL" : "Q12PL";
        }
    },
    {
        id: "Q11bisPL",
        text: "Allez vous au port",
        onEnter: (answers) => {
            const selectedCommune = answers["Q11PL_COMMUNE"] || answers["Q11PL_COMMUNE_LIBRE"];
            const port = PORTS.find(port => port.CITY.toLowerCase() === selectedCommune.toLowerCase());
            if (port) {
                answers["PORT_ID_DESTINATION"] = port.PORT_ID;
            }
        },
        options: [
            { id: 1, text: "oui", next: "Q12PL" },
            { id: 2, text: "non", next: "Q12PL" },
        ],
    },
	{
		id: "Q12PL",
		text: "Motif destination",
		options: [
			{ id: 0, text: "Domicile", next: "Q13PL" },
			{ id: 1, text: "Chargement", next: "Q13PL" },
			{ id: 2, text: "Dechargement", next: "Q13PL" },
			{ id: 3, text: "Mixte chargement et déchargement", next: "Q13PL" },
			{ id: 4, text: "Prise / Retour vehicule", next: "Q13PL	" },
			{ id: 5, text: "Dedouanement", next: "Q13PL" },
			{ id: 99, text: "Autre", next: "Q13PL" },
		],
	},
	{
		id: "Q13PL",
		text: "à vide ou poids de la marchandise en tonnes",
		freeText: true,
		freeTextPlaceholder: "Vide = 0 ou alors indiquez le poids en tonne (1 tonne = 1000 Kgs)",
		next: "end",
	},
];




