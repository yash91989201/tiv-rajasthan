# DESIGN.md - TIV Rajasthan

## Color Strategy: Committed
We use a sophisticated, identity-driven palette that evokes the luxury of Rajasthan's palaces and deserts.

- **Background:** `oklch(0.98 0.01 80)` (Warm Cream / Off-white) - Tints toward the sand.
- **Foreground:** `oklch(0.25 0.02 60)` (Deep Charcoal / Burnished Umber) - Serious and readable.
- **Accent:** `oklch(0.75 0.12 75)` (Desert Gold / Sandstone) - Used for emphasis and premium touches.
- **Secondary Accent:** `oklch(0.45 0.15 45)` (Deep Terracotta / Saffron) - For subtle warmth.

## Typography
- **Headings:** High-contrast Serif (e.g., Playfair Display or Cormorant Garamond). Elegant, authoritative, and timeless.
- **Body:** Modern Sans-serif (e.g., Inter or Montserrat). Clean, legible, and unobtrusive.
- **Rhythm:** Scale ratio ≥ 1.3 for strong hierarchy.

## Layout & Spacing
- **Flow:** Storytelling-driven vertical rhythm.
- **Containers:** Minimal use of cards. Prefer wide, immersive sections with generous whitespace.
- **Grids:** Asymmetrical or intentional layouts that feel curated, not templated.

## Motion (Anti Gravity)
- **Transitions:** Exponential ease-outs (`ease-out-quint`). No bounce.
- **Feel:** Elements should feel like they are floating or sliding into place with weightless precision.
- **Interaction:** Subtle hover states (slight scale, opacity shifts, or color bleeding).

## Components
- **Header:** Transparent on hero, blurs and solidifies on scroll.
- **Destinations:** High-impact imagery with floating text overlays.
- **Buttons:** Minimalist, perhaps text-only with a premium underline animation or custom elegant borders.
