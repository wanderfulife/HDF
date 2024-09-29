export const questions = [
	{ 
		id: "Q1",
			text: "Poste",
			options: [
				{ text: "P2a - Sud/Nord - RN25 - Dainville", next: "Q6" },
				{ text: "P2b - Nord/Sud - RN25 - Beaumetz-lès-Loges", next: "Q6" },
				{ text: "P5 - Est / Ouest - RN151 - Saint - Germain - du - Puy", next: "Q6" },
				{ text: "P1a - Sud/Nord- Péage Abbeville ", next: "Q6" },
				{ text: "P1b - Nord/Sud - Péage Abbeville ", next: "Q6" },
				{ text: "P3a - Sud/Nord - A1 Péage de Chamant", next: "Q6" },
				{ text: "P3b - Nord/Sud- A1 Péage de Chamant", next: "Q6" },
				{ text: "P4a - Sud/Nord - A16 Péage d'Amblainville ", next: "Q6" },
				{ text: "P4b - Nord/Sud- A16 Péage d'Amblainville ", next: "Q6" },
				{ text: "P6 - Nord / Sud - A77 Péage de Myennes ", next: "Q6" },
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
			{ text: "VL", next: "Q8" },
			{ text: "VL + caravane ou remorque", next: "Q8" },
			{ text: "Camping-Car", next: "Q8" },
			{ text: "transportant du matériel (artisan…)", next: "Q8" },
			{ text: "Fourgonnettes et utilitaires transportant de la marchandise", next: "Q8" },
			{ text: "PL porteur", next: "Q8" },
			{ text: "PL articulé, semi-remorque", next: "Q8" },
			{ text: "PL train routier (porteur + remorque)", next: "Q8" },
		],
	},
	{
		id: "Q8",
		text: "Nombre d'occupants",
		options: [
			{ text: "1", next: "Q9" },
			{ text: "2", next: "Q9" },
			{ text: "3", next: "Q9" },
			{ text: "4", next: "Q9" },
			{ text: "5", next: "Q9" },
			{ text: "6", next: "Q9" },
			{ text: "7", next: "Q9" },
			{ text: "8", next: "Q9" },
			{ text: "9", next: "Q9" },
		],
	},
	{
		id: "Q9",
		text: "Quelle est l'origine de votre déplacement ?",
		usesCommuneSelector: true,  // Add this flag to indicate it uses CommuneSelector
		next: "Q10"  // Explicitly set the next question
	},
	{
		id: "Q10",
		text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
		freeText: true,
		next: "end",
	},
];




