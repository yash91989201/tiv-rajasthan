"use client";

import CulinaryExperiences from "./sections/culinary-experiences";
import CulturalStory from "./sections/cultural-story";
import CuratedItinerary from "./sections/curated-itinerary";
import ClosingCTA from "./sections/closing-cta";
import DestinationHero from "./sections/destination-hero";
import DiscoveryMap from "./sections/discovery-map";
import DestinationOverview from "./sections/destination-overview";
import ExperienceShowcase from "./sections/experience-showcase";
import MoodboardGallery from "./sections/moodboard-gallery";
import SeasonalAtmosphere from "./sections/seasonal-atmosphere";
import StayCollection from "./sections/stay-collection";
import TravelStories from "./sections/travel-stories";
import type { DestinationPageData } from "./types";

interface DestinationPageProps {
	data: DestinationPageData;
}

export default function DestinationPage({ data }: DestinationPageProps) {
	return (
		<div className="flex flex-col">
			<DestinationHero data={data.hero} mood={data.mood} />
			<DestinationOverview data={data.editorialIntro} />
			<ExperienceShowcase data={data.experiences} />
			<MoodboardGallery data={data.moodboard} />
			<CuratedItinerary data={data.itineraries} />
			<StayCollection data={data.stays} />
			<CulturalStory data={data.culturalStory} />
			<SeasonalAtmosphere data={data.seasonal} />
			<CulinaryExperiences data={data.cuisine} />
			<DiscoveryMap data={data.discovery} />
			<TravelStories data={data.stories} />
			<ClosingCTA data={data.cta} mood={data.mood} />
		</div>
	);
}
