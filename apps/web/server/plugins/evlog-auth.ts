import { auth } from "@tiv-rajasthan/auth";
import {
	type BetterAuthInstance,
	createAuthIdentifier,
} from "evlog/better-auth";

// biome-ignore lint/correctness/noUndeclaredVariables: defineNitroPlugin is a Nitro global
export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook(
		"request",
		createAuthIdentifier(auth as BetterAuthInstance, {
			exclude: ["/api/auth/**"],
			maskEmail: true,
		})
	);
});
