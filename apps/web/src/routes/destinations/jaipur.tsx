import { createFileRoute } from "@tanstack/react-router";
import DestinationDetail from "@/components/destinations/destination-detail";

export const Route = createFileRoute("/destinations/jaipur")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationDetail slug="jaipur" />;
}
