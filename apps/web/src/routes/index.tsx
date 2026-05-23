import { createFileRoute } from "@tanstack/react-router";
import CuratedItineraries from "@/components/home/curated-itineraries";
import EditorialIntro from "@/components/home/editorial-intro";
import FeaturedDestinations from "@/components/home/featured-destinations";
import FinalCTA from "@/components/home/final-cta";
import HeroSection from "@/components/home/hero-section";
import LuxuryStayPreview from "@/components/home/luxury-stay-preview";
import SignatureExperiences from "@/components/home/signature-experiences";
import WhyChooseUs from "@/components/home/why-choose-us";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<EditorialIntro />
			<FeaturedDestinations />
			<SignatureExperiences />
			<CuratedItineraries />
			<LuxuryStayPreview />
			<WhyChooseUs />
			<FinalCTA />
		</div>
	);
}
