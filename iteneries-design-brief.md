
# Itineraries Page — UI/UX Design Brief

## Overview

The itineraries page is designed to showcase curated Rajasthan travel experiences through elegant editorial-style itinerary cards.

Unlike generic package-listing pages, this experience should feel:
- premium
- structured
- curated
- cinematic
- easy to browse
- visually calm

The page should feel like:
> browsing handcrafted luxury travel journeys.

---

# Core Philosophy

The page should NOT feel like:
- a crowded booking marketplace
- a generic package directory
- a discount travel portal

Instead, the experience should feel:
- editorial
- premium
- curated
- immersive
- structured
- emotionally aspirational

The cards themselves should carry most of the visual storytelling.

---

# Recommended Page Structure

Hero
↓
Editorial Intro
↓
Filter / Category Row
↓
Featured Itinerary
↓
Itinerary Card Grid
↓
Final CTA
↓
Footer

---

# Hero Section

## Goal

Create a calm and aspirational opening.

## Layout

- cinematic destination imagery
- restrained typography
- subtle atmospheric overlays
- minimal text

## Content

- page title
- poetic subtitle
- short editorial copy

Example:
“Curated journeys through Rajasthan’s palaces, deserts, and timeless cities.”

---

# Editorial Introduction

## Goal

Introduce the philosophy behind the itineraries.

The copy should feel:
- elegant
- atmospheric
- travel-editorial inspired

Avoid:
- corporate wording
- sales-heavy copy
- tourism brochure language

---

# Filter / Category Section

## Goal

Allow quick browsing without overwhelming the user.

## Recommended Categories

- All
- Royal Heritage
- Desert Escapes
- Wildlife
- Honeymoon
- Family
- Weekend Retreats
- Slow Luxury

---

# Filter UI

Use:
- shadcn Tabs
- Toggle Group
- Pills / segmented controls

Keep filters:
- minimal
- elegant
- restrained

Avoid:
- heavy dropdown systems
- excessive filter complexity

---

# Itinerary Card System

## IMPORTANT

The page layout itself should remain relatively simple.

The cards should contain:
- structure
- storytelling
- hierarchy
- emotional appeal

---

# Card Design Goal

Each card should feel like:
> a premium travel plan.

The user should instantly understand:
- destination route
- trip mood
- duration
- experiences
- luxury level

---

# Recommended Card Structure

- Large cinematic image
- Duration + style overlay
- Elegant itinerary title
- Editorial description
- Route strip
- Highlights row
- Mini day preview
- Footer CTA

---

# 1. Image Area

## Purpose

Immediately establish atmosphere and destination tone.

## Design

Use:
- cinematic imagery
- elegant crop ratios
- subtle overlays
- restrained badges

Avoid:
- overcrowded text overlays
- excessive gradients
- noisy UI

---

# Overlay Elements

Recommended:
- duration badge
- itinerary type
- luxury tag

Examples:
- 7 Days
- Royal Heritage
- Desert Escape
- Slow Luxury
- Honeymoon

---

# 2. Title Section

## Typography Hierarchy

Use:
- serif heading
- clean supporting sans-serif text

Example:

Rajasthan Royal Circuit

A curated journey through Jaipur, Jodhpur, and Udaipur.

---

# 3. Route Strip

## IMPORTANT SECTION

This gives itineraries strong structure.

Example:
Jaipur → Jodhpur → Jaisalmer

---

# Design Suggestions

Use:
- subtle separators
- timeline dots
- pill elements
- directional flow

This section should feel:
- organized
- premium
- easy to scan

---

# 4. Highlights Row

## Purpose

Quickly communicate experiences.

Examples:
- Palace Hotels
- Private Dining
- Desert Safari
- Fort Walks
- Cultural Evenings

---

# UI Style

Use:
- restrained badges
- elegant metadata styling
- small editorial labels

Avoid:
- excessive icon usage
- colorful chip overload

---

# 5. Mini Day Preview

## Goal

Increase perceived value without needing detail-page navigation.

Example:

Day 1–2: Jaipur palaces and bazaars

Day 3–4: Jodhpur forts and heritage walks

Day 5–7: Jaisalmer desert retreat

---

# Design Style

Keep this:
- compact
- clean
- lightly separated
- easy to scan

Avoid:
- dense timeline UI
- complicated accordion behavior

---

# 6. Footer CTA

## Goal

Maintain calm luxury tone.

Recommended:
- “Explore Itinerary”
- “View Journey”
- “Discover Route”

Avoid:
- aggressive “BOOK NOW”
- sales-heavy CTA wording

---

# Card Layout Variants

Use one consistent card language with slight variations.

---

# Variant 1 — Standard Card

Image top
Content bottom

Used for:
- most itineraries

---

# Variant 2 — Featured Card

Wide editorial layout:
- image left
- content right

Used for:
- premium flagship itineraries

---

# Variant 3 — Compact Card

Smaller condensed layout for:
- short journeys
- weekend itineraries

---

# Grid Layout

## Desktop

- featured itinerary full-width
- then 2-column editorial grid

## Tablet

- 2-column grid

## Mobile

- single-column stacked cards

---

# Design System Instructions

## VERY IMPORTANT

Use existing design system tokens only.

Always use:
- existing spacing scale
- typography tokens
- semantic colors
- radius tokens
- shadow system

DO NOT:
- introduce random colors
- use arbitrary spacing excessively
- create inconsistent radius values
- hardcode gradients unnecessarily

The page must remain:
- cohesive
- premium
- visually consistent

---

# Use Existing Theme Variables

Check:
- globals.css
- existing CSS variables
- theme system
- shadcn tokens

Use:
- semantic utility classes
- existing layout rhythm
- current typography hierarchy

---

# shadcn/ui Instructions

Use shadcn components wherever applicable.

Recommended components:
- Card
- Button
- Badge
- Tabs
- Separator
- Toggle Group

Customize carefully so the UI feels:
- editorial
- bespoke
- luxurious

Avoid making the UI feel:
- dashboard-heavy
- SaaS-like
- overly component-library driven

---

# Motion & Interaction

## Motion Philosophy

Animations should feel:
- restrained
- cinematic
- premium
- smooth

Avoid:
- flashy interactions
- excessive hover effects
- aggressive spring animations

---

# Recommended Motion

Allowed:
- subtle image scaling
- fade reveals
- soft hover transitions
- opacity transitions
- smooth card elevation

---

# Recommended Libraries

Use:
- Motion (Framer Motion)
- Lenis

---

# Typography Guidelines

## Headings
Elegant editorial serif.

## Body Text
Clean modern sans-serif.

## Metadata
Tiny uppercase labels.

---

# Whitespace & Layout Rhythm

Luxury interfaces rely heavily on restraint.

Prioritize:
- breathing room
- calm visual rhythm
- balanced spacing
- strong typography hierarchy

Avoid:
- overcrowding
- dense card layouts
- noisy visual elements

---

# Final Design Direction

The itineraries page should feel like:
> a curated collection of handcrafted luxury journeys across Rajasthan.

The experience should create:
- emotional aspiration
- effortless exploration
- premium perception
- elegant structure

NOT:
- booking marketplace fatigue
- repetitive package grids
- generic tourism UI
