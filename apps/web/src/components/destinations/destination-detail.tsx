"use client";

import DestinationPage from "./destination-page";
import { getDestinationPageData } from "./pages";

interface DestinationDetailProps {
	slug: string;
}

export default function DestinationDetail({ slug }: DestinationDetailProps) {
	const data = getDestinationPageData(slug);

	if (!data) {
		return null;
	}

	return <DestinationPage data={data} />;
}
