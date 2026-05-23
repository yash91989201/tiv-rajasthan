import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { Toaster } from "@tiv-rajasthan/ui/components/sonner";
import { TooltipProvider } from "@tiv-rajasthan/ui/components/tooltip";
import { evlogErrorHandler } from "evlog/nitro/v3";

import type { orpc } from "@/utils/orpc";

import Header from "../components/header";

import appCss from "../index.css?url";
export interface RouterAppContext {
	orpc: typeof orpc;
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	server: {
		middleware: [createMiddleware().server(evlogErrorHandler)],
	},
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
			</body>
		</html>
	),
	component: RootDocument,
});

function RootDocument() {
	return (
		<>
			<TooltipProvider>
				<div className="relative min-h-svh">
					<Header />
					<main>
						<Outlet />
					</main>
				</div>
			</TooltipProvider>
			<Toaster richColors />
		</>
	);
}
