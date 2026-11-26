import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TooltipProvider } from "@tiv-rajasthan/ui/components/tooltip";
import Footer from "../components/footer";
import Header from "../components/header";
import appCss from "../index.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TIV Rajasthan",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: ({ children }: { children: React.ReactNode }) => (
		<html className="light" lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
				{import.meta.env.DEV && import.meta.env.VITE_ENV === "dev" && (
					<script src="http://localhost:8400/live.js" />
				)}
			</body>
		</html>
	),
	component: RootDocument,
});

function RootDocument() {
	return (
		<TooltipProvider>
			<div className="relative min-h-svh">
				<Header />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</TooltipProvider>
	);
}
