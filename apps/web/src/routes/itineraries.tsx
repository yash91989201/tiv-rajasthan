import { createFileRoute } from "@tanstack/react-router";
import ItinerariesEditorialIntro from "@/components/itineraries/editorial-intro";
import ItinerariesFinalCTA from "@/components/itineraries/final-cta";
import ItinerariesHero from "@/components/itineraries/hero-section";
import ItinerariesSection from "@/components/itineraries/itineraries-section";
import { itineraries } from "@/components/itineraries/data";

export const Route = createFileRoute("/itineraries")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col">
			<ItinerariesHero />
			<ItinerariesEditorialIntro />
			<ItinerariesSection itineraries={itineraries} />
			<ItinerariesFinalCTA />
		</div>
	);
}
