 Luxury Stays Page — Layout System & UX Architecture

# Overview

This page is designed to showcase luxury resorts, lodges, palace hotels, boutique stays, desert camps, and curated hospitality experiences across Rajasthan destinations.

The goal is to avoid:
- repetitive listing fatigue
- generic hotel-grid layouts
- travel aggregator aesthetics

Instead, the experience should feel:
- cinematic
- editorial
- immersive
- fluid
- chapter-based
- luxurious

The page should feel like:
scrolling through a curated luxury hospitality journal.

---

# Core Philosophy

This is NOT:
- Expedia
- Booking.com
- Airbnb
- generic tourism listing UI

This IS:
- editorial storytelling
- atmospheric hospitality showcase
- luxury visual exploration

The user should feel:
“I’m discovering destinations slowly”

NOT:
“I’m browsing cards endlessly”

---

# Global Page Flow

The page structure should alternate between 3 layout systems repeatedly.

Example:

Hero
↓
Intro Editorial
↓
Jaipur → Layout Variant 1
↓
Jaisalmer → Layout Variant 2
↓
Udaipur → Layout Variant 3
↓
Jodhpur → Layout Variant 1
↓
Pushkar → Layout Variant 2
↓
Ranthambore → Layout Variant 3
↓
Final CTA

This creates:
- visual rhythm
- pacing variation
- cinematic flow
- reduced scroll fatigue

---

# VERY IMPORTANT — Design System Rules

# Use Existing Design Tokens

Always use:
- existing spacing tokens
- typography scales
- radius values
- color variables
- semantic tokens
- existing layout system

DO NOT:
- introduce random Tailwind values
- use arbitrary spacing excessively
- add random gradients
- create inconsistent shadows
- hardcode colors unnecessarily

The design must remain:
- cohesive
- system-driven
- visually consistent
- premium
- restrained

---

# Use Existing Theme Variables

Check:
- globals.css
- existing design tokens
- shadcn theme variables
- semantic color system

Use:
- CSS variables
- semantic utilities
- existing typography tokens

Avoid:
- random opacity combinations
- inconsistent neutral palettes
- visually disconnected sections

---

# shadcn/ui Instructions

## Use shadcn Components Wherever Applicable

Use shadcn/ui as the foundational component system whenever appropriate.

Examples:
- cards
- buttons
- tabs
- badges
- separators
- dialogs
- carousels
- accordions

Customize them carefully so the UI feels:
- editorial
- bespoke
- luxurious

Avoid making the page feel:
- dashboard-like
- SaaS-heavy
- template-driven

---

# Motion & Interaction Guidelines

# Animation Philosophy

Motion should feel:
- cinematic
- restrained
- soft
- atmospheric
- elegant

Avoid:
- aggressive spring motion
- flashy effects
- exaggerated scaling
- bouncy interactions

---

# Recommended Libraries

## Motion
Use:
- Motion (Framer Motion)

## Smooth Scrolling
Use:
- Lenis

---

# Recommended Motion Effects

Allowed:
- parallax image drift
- subtle image scaling
- fade reveals
- layered depth movement
- atmospheric hover transitions
- smooth opacity transitions

Avoid:
- spinning effects
- harsh motion
- overly animated UI
- excessive hover gimmicks

---

# Layout Variant 1 — Cinematic Split Layout

# Mood

Elegant.
Balanced.
Editorial luxury.

Best for:
- Jaipur
- Udaipur
- Jodhpur

---

# Layout Structure

Example:

Left:
- oversized immersive image

Right:
- destination heading
- editorial description
- featured stay
- stacked stay cards

---

# Purpose

This layout acts as:
a chapter opener.

It slows the user down and establishes atmosphere.

---

# Visual Characteristics

Use:
- oversized imagery
- asymmetry
- strong whitespace
- restrained typography
- editorial composition

Avoid:
- dense grids
- equal card sizing
- repetitive alignment

---

# Layout Variant 2 — Horizontal Editorial Gallery

# Mood

Immersive.
Fluid.
Gallery-like.

Best for:
- desert camps
- visual-heavy destinations
- experiential stays

---

# Layout Characteristics

Use:
- horizontal scroll sections
- oversized panels
- cinematic photography
- partial next-card visibility
- layered overlays

Avoid:
- obvious carousel appearance
- generic slider UI

---

# Layout Variant 3 — Layered Editorial Mosaic

# Mood

Artistic.
Architectural.
Boutique luxury.

Best for:
- heritage hotels
- boutique stays
- palace properties

---

# Shared Component System

Even though layouts differ,
maintain the SAME:
- spacing system
- typography system
- motion language
- component language
- color treatment

This preserves consistency.

---

# Shared Stay Card Variants

Create reusable card variants.

Examples:
- featured
- immersive
- standard
- editorial
- compact

Reuse these across all layout systems.

---

# Typography System

## Headings
Elegant editorial serif.

## Body Text
Clean modern sans-serif.

## Metadata
Tiny uppercase sans labels.

---

# Final Design Direction

The luxury stays page should feel like:
curated chapters of Rajasthan hospitality experiences.

The page should create:
- emotional immersion
- cinematic exploration
- fluid visual pacing
- premium perception
