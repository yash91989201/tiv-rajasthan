import { createFileRoute } from "@tanstack/react-router";
import DestinationsClosing from "@/components/destinations/destinations-closing";
import DestinationsGrid from "@/components/destinations/destinations-grid";
import DestinationsHero from "@/components/destinations/destinations-hero";

export const Route = createFileRoute("/destinations/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col">
			<DestinationsHero />
			<DestinationsGrid />
			<DestinationsClosing />
		</div>
	);
}
