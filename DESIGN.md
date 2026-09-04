---
name: Oglas Case Studies
description: An image-led editorial framework that lets every client identity become a lived world inside the Oglas portfolio.
colors:
  canvas-dark: "#0c0c0c"
  canvas-black: "#000000"
  canvas-light: "#ffffff"
  canvas-off-white: "#f8f5f5"
  text-muted: "#767676"
  hairline: "#e5e5e5"
  accent-lime: "#e3ff51"
typography:
  display:
    fontFamily: "Vend Sans, Barlow Condensed, Arial Narrow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1rem, 1.35vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.01em"
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  board-gap: "24px"
  section-mobile: "80px"
  section-desktop: "112px"
components:
  case-meta-chip:
    backgroundColor: "transparent"
    textColor: "{colors.canvas-light}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 16px"
  work-card-frame:
    backgroundColor: "{colors.canvas-dark}"
    rounded: "{rounded.none}"
---

# Design System: Oglas Case Studies

## Overview

**Creative North Star: "The Living Brand Book"**

An Oglas case study should feel less like a portfolio template and more like stepping inside a finished identity. The shared interface is editorial, quiet, and structurally consistent; it establishes pacing, legibility, and navigation, then recedes so the client work can lead. Each project opens with a bespoke, full-scale brand statement before moving through context, identity, applications, and a final invitation to explore more work.

The system deliberately separates the Oglas frame from the client's visual world. Oglas owns the page shell, typography for explanatory copy, information hierarchy, image-board rhythm, global navigation, work cards, and footer. The client owns the hero palette, marks, campaign language, brand imagery, and any project-specific bands. Velvet's deep green and copper geometry, Fishwala's navy identity, and Gymkha's monochrome athletic world are scoped expressions, not additions to the global Oglas token set.

**Key Characteristics:**

- Image-led storytelling with full-width brand-book boards.
- A restrained black, white, and lime Oglas frame around client-specific worlds.
- Large condensed display type paired with clear, compact body copy.
- Alternation between immersive visual sequences and concise editorial explanation.
- One responsive structure that remains complete from mobile through wide desktop.

## Colors

The Oglas frame is high-contrast and neutral, with lime reserved for interaction and focus; client palettes appear only inside their own case-study expression.

### Primary

- **Signal Lime:** The global Oglas interaction color for focus outlines, active navigation, and selective hover states. Its rarity keeps it functional and recognizable.

### Neutral

- **Studio Dark:** The default dark Oglas canvas and scrolled-header surface.
- **Absolute Black:** The footer and the deepest project bands.
- **Gallery White:** The reading canvas for case-study narrative, service lists, and work-card handoffs.
- **Soft Proof:** An optional warm-white surface where pure white would feel too stark.
- **Editorial Gray:** Secondary text and low-emphasis metadata.
- **Hairline Gray:** Quiet dividers between services, credits, and page endings.

### Named Rules

**The Client World Boundary Rule.** A client's palette may transform its hero, boards, and project-specific bands, but it never becomes a global Oglas token. In particular, Gymkha's black-and-white system is a scoped brand expression, not a site-wide palette decision.

**The Lime Means Interface Rule.** Keep signal lime attached to navigation, focus, and interactive state. Do not recolor client artwork or case-study narrative with it unless lime belongs to that client's supplied identity.

## Typography

**Display Font:** Vend Sans (with condensed sans-serif fallbacks)  
**Body Font:** Manrope (with sans-serif fallback)

**Character:** The pairing combines forceful, compressed editorial headlines with calm, highly legible explanation. Oglas typography provides continuity while each client's supplied artwork carries its own native lettering inside imagery and bespoke hero gestures.

### Hierarchy

- **Project Statement:** Condensed, uppercase display type at a fluid size chosen for the phrase and composition; heroes may tighten line-height and tracking to embody the client world.
- **Section Heading:** Semibold display type, uppercase, used for the final “More work” transition.
- **Narrative Body:** Regular body type with generous leading and a readable maximum width (about 1100px in the implemented wide layout).
- **Row Label:** Bold body type, uppercase, for Overview, Services, Brand Design, Identity System, and Credits.
- **Metadata Label:** Compact body type, usually uppercase, for project/year chips and small navigation cues.

### Named Rules

**The Artwork Keeps Its Voice Rule.** Do not imitate a client's proprietary typeface across Oglas UI. Use Oglas display and body roles for live interface text; preserve client typography inside supplied boards or a deliberately scoped hero treatment.

**The Short Copy Rule.** Narrative blocks explain strategy only where they strengthen the visual story. Keep them compact enough that the next application board remains the dominant reading reward.

## Layout

Case studies use a wide centered shell capped at 1760px, with 20px mobile gutters, 32px small-screen gutters, and approximately 4.15vw gutters on large screens. Global header and footer content may extend to the 1920px site shell, preserving their established Oglas alignment.

The editorial row is the core explanatory pattern: a short label sits above its content on narrow screens and shifts to a label/content grid on large screens, with the label occupying roughly 28% of the content column and a generous inter-column gap. Narrative sections typically use 80px vertical space on mobile and 112px on desktop; tighter visual sequences use 24px gaps so boards read as one continuous system.

Brand boards preserve their source aspect ratio and crop deliberately only when proofing matter must remain unpublished. A single board spans the shell; pairs become two columns from the medium breakpoint; three-up groups are reserved for source material that remains legible at that density. Never force equal composition counts across projects—the source brand book determines the visual cadence.

The final content section is always “More work,” separated by a quiet top rule and followed by the unchanged global Oglas footer. On mobile, all narrative, services, boards, and navigation remain present; density changes, content does not disappear.

### Named Rules

**The Shared Spine Rule.** Preserve the sequence of bespoke opening statement, first application board, editorial context, identity/application rhythm, and “More work” handoff even when the number and grouping of boards differ.

**The Board Leads Rule.** Explanatory text is a pause between visual chapters, not a competing poster. Give the largest share of page area to high-fidelity project imagery.

## Elevation & Depth

The case-study system is flat by default. It uses tonal contrast, full-bleed color fields, image scale, and fine dividers rather than card shadows. Image boards are clipped cleanly at square corners; the work-card image itself supplies visual depth. The fixed header gains a nearly opaque dark surface and backdrop blur after scrolling so navigation remains legible above any client world.

### Named Rules

**The Flat Gallery Rule.** Do not add decorative drop shadows to boards, narrative rows, service lists, or work cards. Depth comes from sequencing and tonal transitions.

## Shapes

The main composition is rectilinear: square image boards, straight dividers, and broad rectangular color fields. Fully rounded pills are reserved for compact metadata, filters, mobile controls, and focused calls to action. Larger rounded containers belong only to established special components such as testimonial panels; they are not the default case-study surface.

Client geometry may interrupt this restraint inside its scoped world. Velvet's nested V, Gymkha's angular G, and Fishwala's mascot are signature identity assets, never generic Oglas decoration.

## Components

### Case-study Opening Statement

- **Character:** A bespoke first viewport that declares the client's identity before application imagery begins.
- **Structure:** Dark or client-colored field, live project statement, project/year chips, and an optional mark, tagline, or geometric motif.
- **Constraint:** Maintain enough top clearance for the fixed site header and preserve high contrast throughout responsive states.

### Case Metadata Chips

- **Shape:** Fully rounded capsule.
- **Style:** Transparent fill, fine current-color border, compact uppercase label.
- **Behavior:** Wrap naturally on small screens; do not turn project facts into primary calls to action.

### Detail Rows

- **Character:** Editorial and matter-of-fact.
- **Structure:** Uppercase label paired with narrative copy or a service list; stacked on small screens and split into columns on large screens.
- **Dividers:** Service and credit items use low-contrast hairlines, never boxed cards.

### Image Boards

- **Corner Style:** Square and clipped.
- **Background:** Neutral or client-scoped fallback chosen to avoid flashes around loading artwork.
- **Behavior:** Preserve each source set's documented artwork ratio and supply meaningful alternative text.

### Work Cards

- **Character:** A quiet continuation of the portfolio index rather than a new promotional module.
- **Frame:** Rectangular image at the shared work-card ratio, followed by display-name metadata, a short body subtitle, and optional tags.
- **State:** The entire card is the link when a case study exists; focus uses the global Oglas focus treatment and the text inherits the surrounding light or dark section.

### Navigation

- **Style:** Fixed Oglas wordmark and primary links over the opening statement; after scroll, transition to the dark translucent site header.
- **State:** Lime marks active, hover, and keyboard focus states. Mobile navigation uses the established circular menu trigger and full-screen dark menu.

## Do's and Don'ts

### Do:

- **Do** preserve the wide shared shell, editorial detail row, board rhythm, “More work” handoff, global navigation, and footer across every case study.
- **Do** let each supplied brand book determine its project's palette, marks, campaign language, board ratios, and visual density.
- **Do** use concise live text and descriptive alternative text to make the visual story understandable and accessible.
- **Do** keep interaction states unmistakably Oglas, including visible keyboard focus and motion fallbacks for reduced-motion users.

### Don't:

- **Don't** promote a client-specific color, type treatment, mark, or slogan into the global Oglas token system.
- **Don't** make Gymkha's black-and-white palette the default for other case studies; it belongs to Gymkha's scoped visual world.
- **Don't** flatten Velvet, Fishwala, Gymkha, or future clients into one generic hero composition.
- **Don't** add decorative cards, shadows, gradients, or interface chrome between boards when spacing and tonal contrast already establish the chapter break.
- **Don't** omit narrative, application boards, or “More work” on mobile; adapt the grid and spacing instead.
