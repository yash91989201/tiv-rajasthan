import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/destinations/hero";
import DestinationGrid from "@/components/destinations/destination-grid";
import ClosingCTA from "@/components/destinations/closing-cta";

export const Route = createFileRoute("/destinations/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col">
			<Hero />
			<DestinationGrid />
			<ClosingCTA />
		</div>
	);
}
