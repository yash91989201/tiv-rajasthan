export interface Destination {
	description: string;
	image: string;
	name: string;
	region: string;
	subtitle: string;
}

export const destinations: Destination[] = [
	{
		name: "Jaipur",
		subtitle: "Before the city blushes",
		description:
			"Hawa Mahal before the pavement warms, jewel ateliers with the shutters half raised, and dinner where frescoed walls keep their own counsel.",
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
		region: "Amber Valley",
	},
	{
		name: "Jaisalmer",
		subtitle: "Sandstone after heat",
		description:
			"A living fort above the Thar, then canvas, fire, songs passed between families, and the dense silence that arrives after the wind drops.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
		region: "Thar Desert",
	},
	{
		name: "Udaipur",
		subtitle: "Water, marble, hush",
		description:
			"A boat crossing before aperitif hour, marble still holding the day, and evenings for people who notice how a city doubles itself in water.",
		image:
			"https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200",
		region: "Aravalli Lakes",
	},
	{
		name: "Bikaner",
		subtitle: "Where sand meets ceremony",
		description:
			"Red sandstone palaces the guidebooks skip, a private audience with frescoed ceilings, and the old town at the hour when the light turns everything gilt.",
		image:
			"https://images.unsplash.com/photo-1595651443546-9a6e5e3e2521?q=80&w=1200&auto=format&fit=crop",
		region: "Northern Desert",
	},
	{
		name: "Jodhpur",
		subtitle: "The blue hour, held longer",
		description:
			"The Mehrangarh ramparts at their most honest, a walk through the indigo quarter before the afternoon fills it, and dinner with a view that makes the city feel held.",
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
		region: "Marwar Plateau",
	},
	{
		name: "Sariska",
		subtitle: "The palace in the forest",
		description:
			"A former hunting lodge turned quiet retreat, dawn drives through scrubland, and evenings where the only audience is the canopy.",
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
		region: "Aravalli Range",
	},
	{
		name: "Jawai",
		subtitle: "Granite, water, leopards",
		description:
			"Leopard country where granite hills hold the stillness, a lake at first light, and the kind of camp that knows when not to speak.",
		image:
			"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
		region: "Aravalli Hills",
	},
	{
		name: "Pushkar",
		subtitle: "Pilgrim town, softened",
		description:
			"A sacred lake with fewer visitors, rooftop light that arrives early and lingers, and the quiet bazaar between seasons.",
		image:
			"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
		region: "Central Rajasthan",
	},
	{
		name: "Kumbalgarh",
		subtitle: "The wall you have not heard of",
		description:
			"A fort wall second only to the Great Wall, lit by afternoon sun, and the kind of silence that makes you check if you are still moving.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
		region: "Aravalli Range",
	},
	{
		name: "Ranthambore",
		subtitle: "The forest keeps score",
		description:
			"Early drives through tiger country, ruined pavilions in the scrub, lunch that refuses to hurry, and dusk kept close to the forest line.",
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
		region: "Sawai Madhopur",
	},
] as const;
