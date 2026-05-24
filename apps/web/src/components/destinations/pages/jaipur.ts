import type { DestinationPageData } from "../types";

const jaipurImage =
	"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2400&auto=format&fit=crop";

export const jaipurPageData: DestinationPageData = {
	slug: "jaipur",
	mood: "royal",
	hero: {
		region: "Amber Valley",
		title: "Jaipur",
		subtitle: "Before the city blushes",
		description:
			"Hawa Mahal before the pavement warms, jewel ateliers with the shutters half raised, and dinner where frescoed walls keep their own counsel.",
		image: jaipurImage,
		quickFacts: [
			{ label: "Best season", value: "October – March" },
			{ label: "Ideal stay", value: "4–6 nights" },
			{ label: "Pace", value: "Unhurried, morning-led" },
		],
		cta: { label: "Plan a private route", href: "/contact" },
	},
	editorialIntro: {
		kicker: "The opening note",
		headline: "A city that rewards the early hour and the late table",
		backgroundWord: "Pink",
		primaryImage: {
			src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
			alt: "Jaipur palace arch with warm sandstone detail",
		},
		body: "Jaipur is rarely quiet, yet it still keeps rooms for those willing to arrive before the coaches. We plan for the hour when the bazaar is being set out, when the forts hold their colour without the midday glare, and when dinner can unfold without a timetable attached.",
		aside:
			"The rarest access here is not a ticket alone. It is the sequence — palace, atelier, table — arranged so each moment has room to breathe.",
	},
	experiences: {
		kicker: "Signature hours",
		headline: "Three ways the city opens when the crowd thins",
		description:
			"Each experience is timed to a particular light, temperature, or social rhythm that Jaipur keeps for those who know when to wait.",
		items: [
			{
				label: "Before opening",
				title: "Hawa Mahal at first light",
				description:
					"The honeycomb facade before the street fills, with a historian who knows when to stop speaking and let the architecture hold the room.",
				image:
					"https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
			},
			{
				label: "Atelier hour",
				title: "Jewel workshops behind closed shutters",
				description:
					"A private visit to master cutters and enamellers in the old city, where the work is shown, not sold.",
				image:
					"https://images.unsplash.com/photo-1515562141203-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
			},
			{
				label: "After dark",
				title: "Dinner in a 300-year-old haveli",
				description:
					"Silver thali service in courtyards lit low, with dishes remembered by families who have cooked inside these walls for generations.",
				image:
					"https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
			{
				label: "Fort light",
				title: "Amber at the hour of gold",
				description:
					"A slow ascent to the fort as the valley turns amber, with time kept for the mirror halls before the day grows loud.",
				image:
					"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
			},
		],
	},
	moodboard: {
		kicker: "Visual story",
		headline: "The textures that define Jaipur",
		description:
			"Sandstone, mirror work, spice markets, and the particular hush of palace corridors after the last tour departs.",
		images: [
			{
				src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
				alt: "Palace arch detail",
				caption: "Sandstone",
				span: "tall",
			},
			{
				src: "https://images.unsplash.com/photo-1515562141203-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
				alt: "Jewellery craftsmanship",
				caption: "Atelier",
				span: "standard",
			},
			{
				src: "https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1200",
				alt: "Royal dining setting",
				caption: "Table",
				span: "wide",
			},
			{
				src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
				alt: "Hawa Mahal facade",
				caption: "Facade",
				span: "standard",
			},
			{
				src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
				alt: "Amber Fort panorama",
				caption: "Fort",
				span: "standard",
			},
		],
	},
	itineraries: {
		kicker: "Curated routes",
		headline: "Jaipur at three different tempos",
		description:
			"Starting points for private travel — each outline is adjusted around your rooms, guides, and appetite for empty hours.",
		items: [
			{
				id: "jaipur-weekend",
				title: "Royal weekend",
				duration: "3 Days",
				theme: "Palaces, old city, one unhurried table",
				highlights: [
					"Amber Fort before the first coach arrives",
					"Private atelier visit in the jewellers' quarter",
					"Dinner in a haveli after the house settles",
				],
				image: jaipurImage,
			},
			{
				id: "jaipur-heritage",
				title: "Heritage route",
				duration: "5 Days",
				theme: "Forts, gardens, artisan encounters",
				highlights: [
					"City Palace with time for the courtyards, not just the rooms",
					"Block printing and blue pottery with working artisans",
					"An evening at Rambagh when the gardens turn gold",
				],
				image:
					"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
			},
			{
				id: "jaipur-slow",
				title: "Slow Jaipur",
				duration: "7 Days",
				theme: "Recovery, culture, and mornings kept clear",
				highlights: [
					"Two nights at a palace hotel with no fixed programme",
					"Cooking with a family who still uses the old measures",
					"A final morning at Nahargarh for the city in reverse light",
				],
				image:
					"https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
			},
		],
	},
	stays: {
		kicker: "Where you stay",
		headline: "Rooms that understand Jaipur's rhythm",
		description:
			"Each property is chosen for how it receives the morning, holds the afternoon, and sends you into the evening.",
		items: [
			{
				name: "Rambagh Palace",
				location: "Central Jaipur",
				description:
					"A former royal residence where peacocks cross the lawns at breakfast and the corridors still feel inhabited, not staged.",
				image:
					"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
				tags: ["Palace Hotel", "Heritage"],
			},
			{
				name: "Samode Haveli",
				location: "Old City",
				description:
					"An intimate haveli with frescoed courtyards, a pool shaded by mango trees, and the old city within walking distance.",
				image:
					"https://images.unsplash.com/photo-1566073771259-6a8506099925?q=80&w=1200&auto=format&fit=crop",
				tags: ["Heritage Haveli", "Boutique Luxury"],
			},
			{
				name: "Amanbagh",
				location: "Aravalli Foothills",
				description:
					"A retreat in the hills outside the city, for travellers who want Jaipur's culture with the option of complete stillness.",
				image:
					"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
				tags: ["Modern Luxury", "Retreat"],
			},
		],
	},
	culturalStory: {
		kicker: "Cultural depth",
		headline: "The soul beneath the pink facade",
		blocks: [
			{
				kicker: "Rajput legacy",
				headline: "A capital built to be seen and to endure",
				body: "Jaipur was planned as a city of geometry and ceremony — wide avenues, precise markets, forts positioned to command the valley. The architecture was never merely decorative; it was a language of power, hospitality, and astronomical precision.",
				quote:
					"The city was painted pink not for beauty alone, but for welcome.",
				image: {
					src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
					alt: "Jaipur palace architecture",
				},
				imagePosition: "left",
			},
			{
				kicker: "Living craft",
				headline: "Artisan quarters that still work for a living",
				body: "In the lanes behind the main bazaar, gem cutters, block printers, and lac bangle makers continue traditions that predate the tourism economy. We arrange visits with craftspeople who treat their work as vocation, not performance.",
				image: {
					src: "https://images.unsplash.com/photo-1515562141203-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
					alt: "Jaipur artisan at work",
				},
				imagePosition: "right",
			},
		],
	},
	seasonal: {
		kicker: "Seasonal atmosphere",
		headline: "Jaipur wears a different mood each season",
		items: [
			{
				season: "Winter",
				title: "Jaipur in winter light",
				description:
					"Clear mornings, crisp fort walks, and evenings that invite long dinners under heaters in palace courtyards.",
				image: jaipurImage,
			},
			{
				season: "Monsoon",
				title: "The city after rain",
				description:
					"Sandstone deepens to rose, the air clears, and the gardens at Rambagh become the reason to stay an extra night.",
				image:
					"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
			},
		],
	},
	cuisine: {
		kicker: "Cuisine",
		headline: "Tables that remember royal kitchens",
		description:
			"Jaipur's food culture spans street-side kachori at dawn to tasting menus that reinterpret recipes from palace archives.",
		items: [
			{
				label: "Rooftop",
				title: "Dinner above the old city",
				description:
					"Terraces with views over the lit quarter, where Rajasthani dishes arrive in courses rather than platters.",
				image:
					"https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1200",
			},
			{
				label: "Royal kitchen",
				title: "Recipes from the palace archive",
				description:
					"A private tasting with a chef who has spent years recovering dishes from royal household manuscripts.",
				image:
					"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
			},
			{
				label: "Morning market",
				title: "Kachori and chai at first light",
				description:
					"The city's favourite breakfast, eaten standing in a lane that has served the same recipe for decades.",
				image:
					"https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
			},
		],
	},
	discovery: {
		kicker: "Discovery",
		headline: "A map drawn for private exploration",
		description:
			"Landmarks, stays, and experiences arranged as a curated route — not a checklist, but a sequence we refine together.",
		mapImage:
			"https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
		points: [
			{
				name: "Amber Fort",
				category: "landmark",
				description:
					"Best approached in the first hour, when the mirror halls still hold the morning.",
			},
			{
				name: "Rambagh Palace",
				category: "stay",
				description:
					"A base that keeps you inside the city's rhythm without its noise.",
			},
			{
				name: "Jewellers' Quarter",
				category: "experience",
				description:
					"Private atelier visits arranged before the shops open to the street.",
			},
			{
				name: "Jaipur to Pushkar",
				category: "route",
				description:
					"A half-day road through mustard fields, best taken mid-week.",
			},
		],
	},
	stories: {
		kicker: "Travel journal",
		headline: "Notes from travellers who took Jaipur slowly",
		stories: [
			{
				quote:
					"We had Amber to ourselves for forty minutes. That alone justified the early alarm.",
				author: "Eleanor & James",
				context: "London — February route",
			},
			{
				quote:
					"The haveli dinner was the first meal on the trip where nobody checked the time.",
				author: "The Kapoor family",
				context: "Singapore — winter escape",
			},
		],
	},
	cta: {
		kicker: "Begin privately",
		headline: "Craft your Jaipur at the right hour",
		description:
			"Tell us how much culture, how much rest, and how many empty hours the journey should protect. We will answer with a considered first shape.",
		image:
			"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2400&auto=format&fit=crop",
		primaryCta: { label: "Speak with a designer", href: "/contact" },
		secondaryCta: { label: "All destinations", href: "/destinations" },
		footnote:
			"A thoughtful reply within 24 hours. Consultation is complimentary.",
	},
};
