import { createFileRoute } from "@tanstack/react-router";
import { itineraries } from "@/components/itineraries/data";
import Hero from "@/components/itineraries/hero";
import PlanningApproach from "@/components/itineraries/planning-approach";
import FeaturedItineraries from "@/components/itineraries/featured-itineraries";
import ClosingCTA from "@/components/itineraries/closing-cta";

export const Route = createFileRoute("/itineraries")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col">
			<Hero />
			<PlanningApproach />
			<FeaturedItineraries itineraries={itineraries} />
			<ClosingCTA />
		</div>
	);
}
