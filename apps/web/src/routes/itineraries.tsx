import { createFileRoute } from "@tanstack/react-router";
import { itineraries } from "@/components/itineraries/data";
import ItinerariesEditorialIntro from "@/components/itineraries/editorial-intro";
import ItinerariesFinalCTA from "@/components/itineraries/final-cta";
import ItinerariesHero from "@/components/itineraries/hero-section";
import ItinerariesSection from "@/components/itineraries/itineraries-section";

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
