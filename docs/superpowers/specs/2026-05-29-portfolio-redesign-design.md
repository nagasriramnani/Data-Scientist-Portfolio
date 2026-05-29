# Portfolio Redesign — Design Spec

**Date:** 2026-05-29
**Owner:** Naga Sri Ram Kochetti
**Scope:** Visual + content refresh of the existing Next.js 14 scrollytelling portfolio.

---

## 1. Goal

Refresh the portfolio to reflect a new role (KTP Associate — AI Product Engineer at
Ulster University & The Odyssey Trust, Belfast) and move the visual language to an
"Editorial Mono" aesthetic with a redesigned, bento-grid Skills section. Keep the
existing scroll-driven canvas hero and the Canva image sequence.

This is a **refresh, not a rebuild**: the architecture (Next.js App Router, Framer
Motion, the `ScrollyCanvas` frame engine, the fixed `frame_119` background) stays.
Components are restyled and re-content'd.

---

## 2. Design decisions (locked)

| Area | Decision |
|---|---|
| Redesign scope | Refresh — keep scrollytelling hero + Canva sequence, modernize everywhere |
| Visual identity | Editorial Mono — near-monochrome, big editorial type, generous negative space, **single accent** |
| Base colors | Background `#070707`, foreground `#FFFFFF`, greys `#888` / `#bbb` |
| **Accent (single)** | **Signal Orange `#FF5A1F`** — the ONLY color. Name dot, headers, links, hovers, numbering. Cyan is removed entirely. |
| Skills UI | **Bento Grid** — asymmetric tiles; AI/Agentic gets the flagship tile |
| Hero subtitle | `AI Product Engineer · KTP Associate` |
| New role feature | Dedicated **"Currently" card** placed between hero and Skills |
| Experience/Education | **One combined chronological timeline** (jobs + degrees together) |
| Fonts | Clash Display (display), Inter (body), JetBrains Mono (labels/mono) — unchanged |

---

## 3. Content updates

All copy is sourced from the updated README.

### 3.1 Identity
- **Name:** Naga Sri Ram Kochetti → hero shows `Ram.`
- **Subtitle:** AI Product Engineer · KTP Associate
- **Tagline (kept):** "I build intelligent systems that reason, scale, and perform under pressure."
- **Location:** Belfast, Northern Ireland, UK (replaces "London" everywhere, incl. metadata)

### 3.2 Currently card
> **Currently** — KTP Associate · AI Product Engineer
> Ulster University & The Odyssey Trust · Belfast, UK · June 2026 – Present
> A Knowledge Transfer Partnership bridging academic AI research at Ulster University
> with real-world AI product development at The Odyssey Trust.

### 3.3 Experience & Education (one combined chronological timeline)
1. **KTP Associate — AI Product Engineer** · Ulster University & The Odyssey Trust · Belfast · *June 2026 – Present*
2. **Freelance GenAI Specialist** · Pareto.AI · *2025* — LLM-powered RAG APIs & generative AI pipelines
3. **Data & AI Support Associate** · DWP (UK Government) · Belfast · *2024 – April 2026* — Azure AI platforms, Power Platform, Azure OpenAI at scale
4. **MSc Big Data & High Performance Computing** · University of Liverpool · *2022 – 2024* — Dissertation: Digital Twin for Autonomous Driving (D2RL edge-case RL in CARLA)
5. **ML Consultant** · Mars Inno India · *~2020*
6. **B.Tech Computer Science & Engineering** · GVP College of Engineering, Vizag · *2018 – 2022*

### 3.4 Projects (6)
DevVerse — The AI Metaverse · Face Super-Resolution Identity Preservation ·
QueenAI Enterprise · Digital Twin for Autonomous Driving (MSc) · RunFit ·
Smart-Hire AI Recruiter. Copy/tags per README §Featured Projects.

### 3.5 Skills (7 domains, bento)
Languages · AI/LLM & Agentic (flagship) · ML Frameworks · Cloud & DevOps ·
Backend & APIs · Data & Governance · Microsoft Power Platform. Tool lists per README §Tech Stack.

### 3.6 Open To / Contact
PhD in AI/ML (2026/27) · Senior AI Engineer · AI Product Engineer · Open-source.
Email, Portfolio, LinkedIn, GitHub, LeetCode per README §Contact.

---

## 4. Theme system

Define accents as CSS variables so the single-source-of-truth lives in `globals.css`:

```css
:root {
  --background: #070707;
  --foreground: #ffffff;
  --accent: #FF5A1F;        /* the ONLY accent — signal orange */
  --muted: #888888;
}
```

- Replace ALL hardcoded `#00C8FF` (cyan) AND `#FF6B2B` (old orange) → `--accent`
  (`#FF5A1F`). No cyan remains anywhere.
- Tailwind config extends `colors.accent` mapped to the var.
- Gradients that previously blended cyan→orange become a single-hue orange fade
  (orange → transparent) or are flattened to solid orange / white.

---

## 5. Component plan

Each component is independently understandable and restyled in isolation.

| File | Change |
|---|---|
| `src/app/globals.css` | New palette vars; recolor marquee/scrollbar; keep marquee keyframes |
| `tailwind.config.ts` | Add single `accent` color token |
| `src/app/layout.tsx` | Metadata: Belfast, updated description; fonts unchanged |
| `src/components/Overlay.tsx` | New subtitle (`AI Product Engineer · KTP Associate`); update section 2/3/4 copy to current framing; recolor to single orange accent |
| `src/components/Currently.tsx` | **NEW** — "Currently" role card |
| `src/components/Skills.tsx` | Rebuild as **bento grid** (7 tiles, AI flagship spans 2×2); recolor; keep/refresh marquee |
| `src/components/Timeline.tsx` | One combined Experience & Education timeline; KTP as top entry; recolor to orange |
| `src/components/Projects.tsx` | Refresh copy/tags; recolor mono + orange |
| `src/components/Contact.tsx` | Belfast; "Open To" list per README; recolor |
| `src/components/Navbar.tsx` | Add "Currently" link; recolor hovers to orange |
| `src/app/page.tsx` | Insert `<Currently/>` between hero and Skills; section order: Hero → Currently → Skills → Projects → Experience & Education → Contact |

`ScrollyCanvas.tsx` and `SmoothFollower.tsx` are unchanged except cursor/accent color.

### 5.1 Bento grid spec (Skills)
- 4-column responsive grid (`grid-cols-2` on mobile, `grid-cols-4` desktop).
- **AI / LLM & Agentic** = flagship tile spanning 2 cols × 2 rows, brighter border.
- Other domains are 1×1 or wide 2×1 tiles holding category label + tag chips.
- Tile hover: border → `--accent`, subtle background lift.
- Each tile: mono index (`01`–`07`, in accent orange), Clash Display category name, mono tag chips.
- Existing logo marquee retained above the grid (recolored), or dropped if it clutters — implementer's call during build, default = keep.

### 5.2 Currently card spec
- Full-width band on `#070707`, max-w container, placed directly after the hero's
  500vh scroll section, before Skills.
- Left: small mono kicker "CURRENTLY"; large Clash Display role line; sub-line with
  company, location, dates. Right (desktop): partner names / KTP badge.
- Orange accent on the kicker, the live "●" dot, and a thin top border.
- Framer Motion fade-in on view.

---

## 6. Animation & interaction

- Keep Framer Motion `whileInView` reveals across sections (consistent durations).
- Keep custom cursor (`SmoothFollower`); ring stays white (mono).
- Keep the scroll-driven 120-frame canvas hero untouched functionally.
- Respect existing hover micro-interactions; standardize on the single orange accent.

---

## 7. Out of scope

- No change to the frame engine, image sequence, or 500vh scroll mechanics.
- No new pages/routes; remains a single-page site.
- No CMS or data backend; content stays inline in components.
- No new fonts.

---

## 8. Success criteria

- All copy reflects the new KTP role + Belfast; no stale "London"/old-color references.
- Visual language reads as Editorial Mono: mono base + single orange accent, no cyan anywhere.
- Skills renders as a bento grid with the AI flagship tile.
- Experience & Education render as one combined chronological timeline.
- "Currently" card appears between hero and Skills.
- `npm run build` / lint pass clean (Netlify build green, matching prior commit intent).
- Responsive at mobile + desktop; no layout breakage in the hero.
