import { getDestinationBySlug } from "../data";
import type { DestinationPageData } from "../types";
import { createDefaultDestinationPageData } from "./defaults";
import { jaipurPageData } from "./jaipur";

const destinationPages: Partial<Record<string, DestinationPageData>> = {
	jaipur: jaipurPageData,
};

export function getDestinationPageData(
	slug: string
): DestinationPageData | undefined {
	const customPage = destinationPages[slug];
	if (customPage) {
		return customPage;
	}

	const destination = getDestinationBySlug(slug);
	if (!destination) {
		return;
	}

	return createDefaultDestinationPageData(destination);
}
