export const categories = [
	"All",
	"Royal Heritage",
	"Desert Escapes",
	"Wildlife",
	"Honeymoon",
	"Family",
	"Weekend Retreats",
	"Slow Luxury",
] as const;

export type Category = (typeof categories)[number];

export interface Itinerary {
	id: string;
	title: string;
	subtitle: string;
	duration: string;
	categories: Category[];
	route: string[];
	highlights: string[];
	dayPreview: string[];
	description: string;
	image: string;
	featured?: boolean;
}

export const itineraries: Itinerary[] = [
	{
		id: "royal-circuit",
		title: "Rajasthan Royal Circuit",
		subtitle: "A curated journey through Jaipur, Jodhpur, and Udaipur",
		duration: "10 Days",
		categories: ["Royal Heritage", "Slow Luxury"],
		route: ["Jaipur", "Jodhpur", "Udaipur"],
		highlights: [
			"Palace Hotels",
			"Private Dining",
			"Heritage Walks",
			"Cultural Evenings",
		],
		dayPreview: [
			"Day 1–3: Jaipur palaces and quiet bazaars",
			"Day 4–6: Jodhpur forts and blue-city lanes",
			"Day 7–10: Udaipur lakes and private courtyards",
		],
		description:
			"The grand tour, slowed down. Palace rooms opened with time to linger, dinners in havelis after the house settles, and each city revealed before the first hotel launch crosses the lake.",
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
		featured: true,
	},
	{
		id: "desert-slowly",
		title: "The Desert Taken Slowly",
		subtitle: "Living forts, dune light, nights under canvas",
		duration: "8 Days",
		categories: ["Desert Escapes", "Slow Luxury"],
		route: ["Jaisalmer", "Bikaner", "Jodhpur"],
		highlights: [
			"Canvas Camp",
			"Fort Lanes",
			"Sunset Rides",
			"Starlit Dinners",
		],
		dayPreview: [
			"Day 1–2: Jaisalmer fort and golden lanes",
			"Day 3–5: Dune camp placed for stars, not spectacle",
			"Day 6–8: Bikaner and Jodhpur at desert's edge",
		],
		description:
			"A canvas camp placed for stars, not spectacle. A morning inside fort lanes while the day is being set out. A slow ride when the sand begins to cool.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		id: "forest-temples",
		title: "Forest, Temples, Still Water",
		subtitle: "Ranthambore, Pushkar, unforced rest",
		duration: "7 Days",
		categories: ["Wildlife", "Slow Luxury"],
		route: ["Ranthambore", "Pushkar", "Jaipur"],
		highlights: [
			"Dawn Drives",
			"Naturalist Guides",
			"Shaded Gardens",
			"Early Light",
		],
		dayPreview: [
			"Day 1–3: Dawn drives with naturalists who know when to wait",
			"Day 4–5: Pushkar at first light, before the microphones begin",
			"Day 6–7: Rest in shaded palace gardens",
		],
		description:
			"Dawn drives with naturalists who know when to wait. Bodywork and rest in shaded palace gardens. Pushkar at first light, before the microphones begin.",
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		id: "blue-city-weekend",
		title: "Golden Hours in the Blue City",
		subtitle: "A short, deep immersion into Jodhpur's character",
		duration: "4 Days",
		categories: ["Weekend Retreats", "Royal Heritage"],
		route: ["Jodhpur"],
		highlights: [
			"Mehrangarh Fort",
			"Old City Lanes",
			"Rooftop Evenings",
			"Local Crafts",
		],
		dayPreview: [
			"Day 1: Arrival and sunset at the fort",
			"Day 2: Old city walks and hidden courtyards",
			"Day 3: Craft visits and rooftop dinner",
			"Day 4: Morning light, then departure",
		],
		description:
			"Just enough time to let Jodhpur settle around you. Morning walks before the heat, afternoons in courtyards, and evenings when the fort turns gold.",
		image:
			"https://images.unsplash.com/photo-1561363702-e07252da339b?q=80&w=1200&auto=format&fit=crop",
	},
	{
		id: "dunes-starlight",
		title: "Dunes and Starlight",
		subtitle: "A private canvas camp journey for two",
		duration: "6 Days",
		categories: ["Honeymoon", "Desert Escapes"],
		route: ["Jaisalmer", "Jodhpur"],
		highlights: [
			"Private Camp",
			"Sunset Dinners",
			"Couple's Spa",
			"Fort Dinners",
		],
		dayPreview: [
			"Day 1–2: Jaisalmer fort and haveli stays",
			"Day 3–5: Private dunes, starlit dinners, slow mornings",
			"Day 6: Jodhpur and farewell",
		],
		description:
			"A journey designed for presence, not performance. Private dunes, dinners under cumulative stars, and rooms chosen because the evening light settles well there.",
		image:
			"https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
	},
	{
		id: "family-fort-route",
		title: "The Family Fort Route",
		subtitle: "Palaces, lakes, and stories children remember",
		duration: "9 Days",
		categories: ["Family", "Royal Heritage"],
		route: ["Jaipur", "Kumbalgarh", "Udaipur"],
		highlights: [
			"Elephant Rides",
			"Fort Stories",
			"Lake Activities",
			"Family Suites",
		],
		dayPreview: [
			"Day 1–3: Jaipur palaces with stories that hold attention",
			"Day 4–6: Kumbalgarh walls and countryside rides",
			"Day 7–9: Udaipur lakes and slow family evenings",
		],
		description:
			"Pace built around attention spans. Guides who know when to stop talking. Rooms with space to spread out, and evenings that become the stories children repeat.",
		image:
			"https://images.unsplash.com/photo-1595658658481-d53d3f999875?q=80&w=1200&auto=format&fit=crop",
	},
	{
		id: "pushkar-silence",
		title: "Pushkar in Silence",
		subtitle: "A lakeside retreat before the world arrives",
		duration: "5 Days",
		categories: ["Slow Luxury", "Weekend Retreats"],
		route: ["Pushkar", "Jaipur"],
		highlights: [
			"Lake Rituals",
			"Morning Walks",
			"Desert Outskirts",
			"Quiet Stays",
		],
		dayPreview: [
			"Day 1–2: Arrival and lakeside settling",
			"Day 3–4: Temple walks and desert edge rides",
			"Day 5: Return through Jaipur",
		],
		description:
			"For those who want Rajasthan without the itinerary. Pushkar at the hour when the ghats belong to pilgrims, not photographers. Rest, then a gentle return.",
		image:
			"https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1200&auto=format&fit=crop",
	},
];
