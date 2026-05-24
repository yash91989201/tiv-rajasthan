import { createFileRoute } from "@tanstack/react-router";
import DestinationDetail from "@/components/destinations/destination-detail";

export const Route = createFileRoute("/destinations/ranthambore")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DestinationDetail slug="ranthambore" />;
}
