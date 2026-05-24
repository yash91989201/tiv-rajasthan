export type DestinationMood =
	| "royal"
	| "desert"
	| "cultural"
	| "nature"
	| "modern-luxury";

export interface DestinationQuickFact {
	label: string;
	value: string;
}

export interface DestinationHeroSection {
	cta?: { label: string; href: string };
	description: string;
	image: string;
	quickFacts?: DestinationQuickFact[];
	region: string;
	subtitle: string;
	title: string;
}

export interface EditorialIntroSection {
	aside?: string;
	backgroundWord?: string;
	body: string;
	headline: string;
	kicker?: string;
	primaryImage: { src: string; alt: string };
}

export interface ExperienceItem {
	description: string;
	image: string;
	label: string;
	title: string;
}

export interface ExperienceShowcaseSection {
	description?: string;
	headline: string;
	items: ExperienceItem[];
	kicker?: string;
}

export interface MoodboardImage {
	alt: string;
	caption?: string;
	span?: "wide" | "tall" | "standard";
	src: string;
}

export interface MoodboardGallerySection {
	description?: string;
	headline: string;
	images: MoodboardImage[];
	kicker?: string;
}

export interface ItineraryItem {
	duration: string;
	highlights: string[];
	id: string;
	image: string;
	theme: string;
	title: string;
}

export interface CuratedItinerarySection {
	description?: string;
	headline: string;
	items: ItineraryItem[];
	kicker?: string;
}

export interface StayItem {
	description: string;
	image: string;
	location: string;
	name: string;
	tags: string[];
}

export interface StayCollectionSection {
	description?: string;
	headline: string;
	items: StayItem[];
	kicker?: string;
}

export interface CulturalStoryBlock {
	body: string;
	headline: string;
	image: { src: string; alt: string };
	imagePosition?: "left" | "right";
	kicker?: string;
	quote?: string;
}

export interface CulturalStorySection {
	blocks: CulturalStoryBlock[];
	headline: string;
	kicker?: string;
}

export interface SeasonalItem {
	description: string;
	image: string;
	season: string;
	title: string;
}

export interface SeasonalAtmosphereSection {
	description?: string;
	headline: string;
	items: SeasonalItem[];
	kicker?: string;
}

export interface CulinaryItem {
	description: string;
	image: string;
	label: string;
	title: string;
}

export interface CulinaryExperiencesSection {
	description?: string;
	headline: string;
	items: CulinaryItem[];
	kicker?: string;
}

export interface DiscoveryPoint {
	category: "stay" | "landmark" | "experience" | "route";
	description: string;
	name: string;
}

export interface DiscoveryMapSection {
	description?: string;
	headline: string;
	kicker?: string;
	mapImage?: string;
	points: DiscoveryPoint[];
}

export interface TravelStory {
	author: string;
	context: string;
	quote: string;
}

export interface TravelStoriesSection {
	headline: string;
	kicker?: string;
	stories: TravelStory[];
}

export interface DestinationCTASection {
	description: string;
	footnote?: string;
	headline: string;
	image: string;
	kicker?: string;
	primaryCta: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
}

export interface DestinationPageData {
	cta: DestinationCTASection;
	cuisine: CulinaryExperiencesSection;
	culturalStory: CulturalStorySection;
	discovery: DiscoveryMapSection;
	editorialIntro: EditorialIntroSection;
	experiences: ExperienceShowcaseSection;
	hero: DestinationHeroSection;
	itineraries: CuratedItinerarySection;
	mood: DestinationMood;
	moodboard: MoodboardGallerySection;
	seasonal: SeasonalAtmosphereSection;
	slug: string;
	stays: StayCollectionSection;
	stories: TravelStoriesSection;
}
