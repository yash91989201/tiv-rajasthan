import { createFileRoute } from "@tanstack/react-router";
import DestinationDetail from "@/components/destinations/destination-detail";

export const Route = createFileRoute("/destinations/sariska")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationDetail slug="sariska" />;
}
