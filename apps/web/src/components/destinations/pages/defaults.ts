import type { Destination } from "../data";
import type { DestinationMood, DestinationPageData } from "../types";

const moodByCategory: Record<Destination["category"], DestinationMood> = {
	heritage: "royal",
	wildlife: "nature",
};

const moodBySlug: Partial<Record<Destination["slug"], DestinationMood>> = {
	jaisalmer: "desert",
	bikaner: "desert",
	jodhpur: "royal",
	pushkar: "cultural",
	udaipur: "royal",
	kumbalgarh: "cultural",
};

function resolveMood(destination: Destination): DestinationMood {
	return moodBySlug[destination.slug] ?? moodByCategory[destination.category];
}

export function createDefaultDestinationPageData(
	destination: Destination
): DestinationPageData {
	const mood = resolveMood(destination);

	return {
		slug: destination.slug,
		mood,
		hero: {
			region: destination.region,
			title: destination.name,
			subtitle: destination.subtitle,
			description: destination.description,
			image: destination.image,
			cta: { label: "Plan a private route", href: "/contact" },
		},
		editorialIntro: {
			kicker: "The opening note",
			headline: `${destination.name} in its own tempo`,
			backgroundWord: destination.name,
			primaryImage: {
				src: destination.image,
				alt: `${destination.name} landscape`,
			},
			body: destination.description,
			aside:
				"The rarest luxury is not access alone. It is the feeling that no one is rushing you through it.",
		},
		experiences: {
			kicker: "Signature hours",
			headline: "The day should have one thing it remembers",
			description:
				"Curated experiences timed to the particular light and rhythm this place keeps for private travellers.",
			items: [
				{
					label: "Morning",
					title: `Before ${destination.name} wakes fully`,
					description: destination.description,
					image: destination.image,
				},
				{
					label: "Evening",
					title: "After the day loosens its grip",
					description:
						"A table, a view, or a walk arranged for the hour when the place becomes itself again.",
					image: destination.image,
				},
			],
		},
		moodboard: {
			kicker: "Visual story",
			headline: `The atmosphere of ${destination.name}`,
			images: [
				{
					src: destination.image,
					alt: destination.name,
					caption: destination.region,
					span: "tall",
				},
				{
					src: destination.image,
					alt: `${destination.name} detail`,
					span: "wide",
				},
			],
		},
		itineraries: {
			kicker: "Curated routes",
			headline: "A route should know what to leave out",
			items: [
				{
					id: `${destination.slug}-essentials`,
					title: `${destination.name} essentials`,
					duration: "4 Days",
					theme: destination.subtitle,
					highlights: [
						destination.description,
						"A pace adjusted to your rooms and appetite for quiet",
						"Evenings kept open unless you ask otherwise",
					],
					image: destination.image,
				},
			],
		},
		stays: {
			kicker: "Where you stay",
			headline: "The room is part of the itinerary",
			description:
				"Properties chosen for how they receive the morning and send you into the evening.",
			items: [
				{
					name: `Signature stay near ${destination.name}`,
					location: destination.region,
					description: destination.description,
					image: destination.image,
					tags: ["Boutique Luxury"],
				},
			],
		},
		culturalStory: {
			kicker: "Cultural depth",
			headline: `The story beneath ${destination.name}`,
			blocks: [
				{
					headline: destination.subtitle,
					body: destination.description,
					image: {
						src: destination.image,
						alt: destination.name,
					},
				},
			],
		},
		seasonal: {
			kicker: "Seasonal atmosphere",
			headline: `${destination.name} through the year`,
			items: [
				{
					season: "Peak season",
					title: `The clearest days in ${destination.name}`,
					description: destination.description,
					image: destination.image,
				},
			],
		},
		cuisine: {
			kicker: "Cuisine",
			headline: "Tables worth travelling for",
			items: [
				{
					label: "Local table",
					title: `Dining in ${destination.name}`,
					description:
						"Regional dishes in settings that favour conversation over ceremony.",
					image: destination.image,
				},
			],
		},
		discovery: {
			kicker: "Discovery",
			headline: "Points worth sequencing",
			description:
				"A curated list of landmarks and experiences we arrange in an order that protects the pace.",
			points: [
				{
					name: destination.name,
					category: "landmark",
					description: destination.description,
				},
			],
		},
		stories: {
			kicker: "Travel journal",
			headline: "Notes from private travellers",
			stories: [
				{
					quote: destination.description,
					author: "Private traveller",
					context: `${destination.name} route`,
				},
			],
		},
		cta: {
			kicker: "Begin privately",
			headline: `Begin your ${destination.name} journey`,
			description:
				"Tell us what you want more of, what you want to avoid, and how much quiet the trip should protect.",
			image: destination.image,
			primaryCta: { label: "Speak with a designer", href: "/contact" },
			secondaryCta: { label: "All destinations", href: "/destinations" },
			footnote:
				"A thoughtful reply within 24 hours. Consultation is complimentary.",
		},
	};
}
