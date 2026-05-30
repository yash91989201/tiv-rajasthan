import { createFileRoute } from "@tanstack/react-router";
import BrandStory from "@/components/home/brand-story";
import ClosingCTA from "@/components/home/closing-cta";
import CuratedItineraries from "@/components/home/curated-itineraries";
import FeaturedDestinations from "@/components/home/featured-destinations";
import FeaturedStays from "@/components/home/featured-stays";
import Hero from "@/components/home/hero";
import SignatureExperiences from "@/components/home/signature-experiences";
import WhyChooseUs from "@/components/home/why-choose-us";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col">
			<Hero />
			<BrandStory />
			<FeaturedDestinations />
			<SignatureExperiences />
			<CuratedItineraries />
			<FeaturedStays />
			<WhyChooseUs />
			<ClosingCTA />
		</div>
	);
}
