# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the Next.js 14 scrollytelling portfolio to an "Editorial Mono" look (near-monochrome + single Signal Orange `#FF5A1F` accent), update all content for the new KTP Associate role in Belfast, add a "Currently" card, and rebuild the Skills section as a bento grid.

**Architecture:** Pure restyle + re-content of existing components. No change to the `ScrollyCanvas` frame engine, the 500vh scroll mechanics, or the Canva image sequence. One new component (`Currently.tsx`). Theme is driven by CSS variables in `globals.css` consumed via Tailwind arbitrary values.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3.4, Framer Motion 12, lucide-react. Verification is `npm run lint` + `npm run build` (no test framework in this repo) plus visual inspection via `npm run dev`.

---

## Conventions for this plan

- **No unit tests exist** in this repo and none are appropriate for a visual refresh. The verification gate for every task is: `npm run lint` clean AND `npm run build` succeeds. Visual tasks add a manual dev-server check.
- The **single accent** is `#FF5A1F`. There must be **zero** occurrences of the old cyan `#00C8FF` and old orange `#FF6B2B` after this plan. A grep check enforces this in the final task.
- Commit after each task with the shown message.
- Run all commands from repo root: `f:/Portfolio design/Data-Scientist-Portfolio`.

---

## File Structure

| File | Responsibility | Action |
|---|---|---|
| `src/app/globals.css` | Theme vars, scrollbar, marquee keyframes | Modify |
| `tailwind.config.ts` | `accent` color token | Modify |
| `src/app/layout.tsx` | Metadata (Belfast), fonts | Modify |
| `src/components/Overlay.tsx` | Hero overlay copy + recolor | Modify |
| `src/components/Currently.tsx` | New "Currently" role card | Create |
| `src/components/Skills.tsx` | Bento grid rebuild | Modify |
| `src/components/Projects.tsx` | Content refresh + recolor | Modify |
| `src/components/Timeline.tsx` | Combined Experience+Education, KTP top, recolor | Modify |
| `src/components/Contact.tsx` | Belfast + Open To + recolor | Modify |
| `src/components/Navbar.tsx` | Add "Currently" link + recolor | Modify |
| `src/app/page.tsx` | Insert `<Currently/>`, section order | Modify |

---

## Task 1: Theme foundation (CSS vars + Tailwind token)

**Files:**
- Modify: `src/app/globals.css:5-10` (`:root` vars) and `:66-72` (marquee speeds untouched, but recolor any color refs)
- Modify: `tailwind.config.ts:10-16`

- [ ] **Step 1: Update `:root` variables in `globals.css`**

Replace the `:root` block (lines 5–10) with a single-accent palette:

```css
:root {
  --background: #070707;
  --foreground: #ffffff;
  --accent: #FF5A1F;
  --muted: #888888;
}
```

- [ ] **Step 2: Update the scrollbar thumb hover to use the accent**

In `globals.css`, change the scrollbar thumb hover (currently `background: #444;`) to:

```css
::-webkit-scrollbar-thumb:hover {
  background: #FF5A1F;
}
```

- [ ] **Step 3: Add the `accent` color token to Tailwind**

Replace the `colors` block in `tailwind.config.ts` (lines 11–14) with:

```ts
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
      },
```

- [ ] **Step 4: Verify lint + build**

Run: `npm run lint` — Expected: no errors.
Run: `npm run build` — Expected: build completes (`✓ Compiled successfully`).

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css tailwind.config.ts
git commit -m "feat: single signal-orange accent theme tokens"
```

---

## Task 2: Metadata + page background

**Files:**
- Modify: `src/app/layout.tsx:22-31` (metadata) and `:48` (body bg)
- Modify: `src/app/page.tsx:10` (main bg)

- [ ] **Step 1: Update metadata to Belfast + new role**

Replace the `metadata` object in `layout.tsx` (lines 22–31) with:

```ts
export const metadata: Metadata = {
  title: "Naga Sri Ram Kochetti | AI Product Engineer",
  description:
    "Portfolio of Naga Sri Ram Kochetti — AI Product Engineer & KTP Associate at Ulster University & The Odyssey Trust, based in Belfast, UK.",
  openGraph: {
    title: "Naga Sri Ram Kochetti | AI Product Engineer",
    description:
      "AI Product Engineer & KTP Associate · Ulster University & The Odyssey Trust · Belfast, UK",
    type: "website",
    url: "https://www.nagasriram.com",
  },
};
```

- [ ] **Step 2: Update background hex to `#070707`**

In `layout.tsx:48`, change `bg-[#0A0A0A]` to `bg-[#070707]`.
In `page.tsx:10`, change `bg-[#0A0A0A]` to `bg-[#070707]`.

- [ ] **Step 3: Verify lint + build**

Run: `npm run lint && npm run build` — Expected: clean + success.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: update metadata to Belfast/KTP and base background"
```

---

## Task 3: Hero overlay copy + recolor

**Files:**
- Modify: `src/components/Overlay.tsx` (subtitle line ~80, sections 2/3/4, all `#00C8FF`/`#FF6B2B`)

- [ ] **Step 1: Update the hero subtitle (Section 1)**

In `Overlay.tsx`, change the Section-1 subtitle text (currently `AI Systems Architect · Researcher`, ~line 80) to:

```tsx
                    AI Product Engineer · KTP Associate
```

And change its color style from `color: "#00C8FF"` to `color: "#FF5A1F"`.
Change the name dot `<span className="text-[#00C8FF]">.</span>` (~line 63) to `<span className="text-[#FF5A1F]">.</span>`.

- [ ] **Step 2: Rewrite Section 2 copy (current framing)**

Replace the Section-2 heading + paragraph (the gradient `<h2>` ~lines 104–117) with:

```tsx
                <h2
                    className="max-w-4xl mb-6 font-bold text-white"
                    style={{
                        fontFamily: "'Clash Display', var(--font-display), sans-serif",
                        fontSize: "clamp(2rem, 5vw, 4rem)",
                        letterSpacing: "-0.02em",
                        textShadow: "0 2px 40px rgba(0,0,0,0.8)",
                    }}
                >
                    Turning research papers into production systems — that&apos;s my thing.
                </h2>
                <p className="max-w-2xl text-xl md:text-2xl text-neutral-300" style={{ textShadow: "0 2px 40px rgba(0,0,0,0.8)" }}>
                    Now a KTP Associate &amp; AI Product Engineer with Ulster University &amp; The Odyssey Trust in Belfast.
                </p>
```

- [ ] **Step 3: Rewrite Section 3 copy and recolor**

Replace the Section-3 paragraph (currently `text-[#FF6B2B]`, ~lines 136–139) with accent orange retained (it is already orange-family — set to exact accent):

```tsx
                <p className="max-w-xl text-xl md:text-2xl text-[#FF5A1F]" style={{ textShadow: "0 2px 40px rgba(0,0,0,0.8)" }}>
                    MSc Big Data &amp; HPC · Open to PhD in AI/ML<br />
                    <span className="text-neutral-300 text-lg md:text-xl mt-4 block">Open to Senior AI Engineer roles</span>
                </p>
```

- [ ] **Step 4: Recolor all remaining accent references in social links + Section 4**

In `Overlay.tsx`, replace every remaining `#00C8FF` with `#FF5A1F` and every `#FF6B2B` with `#FF5A1F` (social link hovers ~lines 33–41, Section-4 buttons ~lines 159–167). Use find/replace within this file only.

- [ ] **Step 5: Verify no stale colors remain in this file**

Run: `git grep -n "00C8FF\|FF6B2B" src/components/Overlay.tsx` — Expected: **no output**.

- [ ] **Step 6: Verify lint + build**

Run: `npm run lint && npm run build` — Expected: clean + success.

- [ ] **Step 7: Commit**

```bash
git add src/components/Overlay.tsx
git commit -m "feat: hero overlay KTP copy and single-accent recolor"
```

---

## Task 4: Currently card (new component)

**Files:**
- Create: `src/components/Currently.tsx`

- [ ] **Step 1: Create `Currently.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";

export default function Currently() {
    return (
        <section className="relative z-20 bg-[#070707] border-t border-white/5 py-24 px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-5xl mx-auto"
            >
                <div className="flex items-center gap-3 mb-8">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF5A1F] opacity-60 animate-ping" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5A1F]" />
                    </span>
                    <span className="font-jetbrains-mono text-xs tracking-[0.25em] uppercase text-[#FF5A1F]">
                        Currently
                    </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <div>
                        <h2
                            className="font-bold text-white leading-[0.95]"
                            style={{
                                fontFamily: "'Clash Display', var(--font-display), sans-serif",
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            KTP Associate — AI Product Engineer
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-neutral-300">
                            Ulster University &amp; The Odyssey Trust · Belfast, UK
                        </p>
                        <p className="mt-2 font-jetbrains-mono text-sm text-neutral-500">
                            June 2026 – Present
                        </p>
                    </div>
                    <p className="max-w-md text-neutral-400 leading-relaxed">
                        A Knowledge Transfer Partnership bridging academic AI research at Ulster
                        University with real-world AI product development at The Odyssey Trust.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
```

- [ ] **Step 2: Verify lint + build**

Run: `npm run lint && npm run build` — Expected: clean + success (component compiles even before it is wired in).

- [ ] **Step 3: Commit**

```bash
git add src/components/Currently.tsx
git commit -m "feat: add Currently role card component"
```

---

## Task 5: Wire Currently into the page + Navbar link

**Files:**
- Modify: `src/app/page.tsx` (import + placement)
- Modify: `src/components/Navbar.tsx` (link + recolor)

- [ ] **Step 1: Import and place `<Currently/>` between hero and Skills**

In `page.tsx`, add the import and a wrapping `div#currently` immediately after the closing `</div>` of the `#about` ScrollyCanvas block and before the fixed-background wrapper. Result:

```tsx
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Currently from "@/components/Currently";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full bg-[#070707] text-white">
      <Navbar />
      <div id="about">
        <ScrollyCanvas />
      </div>
      <div id="currently">
        <Currently />
      </div>
      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/sequence/frame_119_delay-0.066s.png')" }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        <div className="relative z-10">
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Timeline />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Add the Currently nav link and recolor hovers**

In `Navbar.tsx`, update the `links` array (lines 27–33) to include Currently after About:

```tsx
    const links = [
        { name: "About", href: "#about" },
        { name: "Currently", href: "#currently" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
    ];
```

And change the link hover class `hover:text-[#00C8FF]` (line 51) to `hover:text-[#FF5A1F]`.

- [ ] **Step 3: Verify lint + build**

Run: `npm run lint && npm run build` — Expected: clean + success.

- [ ] **Step 4: Visual check**

Run: `npm run dev`, open `http://localhost:3000`, scroll past the hero. Confirm the "Currently" card appears with the pulsing orange dot, and the navbar "Currently" link scrolls to it. Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx src/components/Navbar.tsx
git commit -m "feat: wire Currently card into page and navbar"
```

---

## Task 6: Skills bento grid rebuild

**Files:**
- Modify: `src/components/Skills.tsx` (replace category-pills layout with bento grid; keep marquee)

- [ ] **Step 1: Replace the `skillCategories` data with the full 7-domain set**

In `Skills.tsx`, replace the `SkillCategory` interface usage and `skillCategories` array with a bento-oriented structure (each item carries a `span` hint). Replace lines 5–98 (`interface` through end of `skillCategories`) with:

```tsx
interface BentoCategory {
    index: string;
    category: string;
    skills: string[];
    span: string; // tailwind grid-span classes
    flagship?: boolean;
}

const bento: BentoCategory[] = [
    {
        index: "01",
        category: "AI / LLM & Agentic",
        skills: [
            "OpenAI", "Azure OpenAI", "AWS Bedrock", "LangChain", "LangGraph",
            "RAG", "FAISS", "pgvector", "Copilot Studio", "MCP", "HuggingFace",
            "Multi-Agent Systems", "Prompt Engineering",
        ],
        span: "md:col-span-2 md:row-span-2",
        flagship: true,
    },
    {
        index: "02",
        category: "Languages",
        skills: ["Python", "JavaScript", "TypeScript", "SQL", "Bash", "Java"],
        span: "md:col-span-2",
    },
    {
        index: "03",
        category: "ML Frameworks",
        skills: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV"],
        span: "",
    },
    {
        index: "04",
        category: "Backend & APIs",
        skills: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "Microservices", "JWT Auth"],
        span: "",
    },
    {
        index: "05",
        category: "Cloud & DevOps",
        skills: [
            "Azure", "Data Factory", "Databricks", "Azure SQL", "Key Vault",
            "Azure DevOps", "CI/CD", "Docker", "Kubernetes", "Terraform", "AWS",
        ],
        span: "md:col-span-2",
    },
    {
        index: "06",
        category: "Data & Governance",
        skills: [
            "PySpark", "Pandas", "PostgreSQL", "MySQL", "MongoDB", "Redis",
            "Vector Databases", "Kafka", "Airflow", "Elasticsearch", "Power BI", "Tableau",
        ],
        span: "md:col-span-2",
    },
    {
        index: "07",
        category: "Microsoft Power Platform",
        skills: ["Power Platform", "Power Automate", "Dataverse", "API Connectors", "Copilot Studio"],
        span: "",
    },
];
```

- [ ] **Step 2: Keep `logoSlug` map unchanged**

Leave the `logoSlug` function (lines 11–49 in the original) in place above the data — the marquee still uses it. No change needed.

- [ ] **Step 3: Replace the header + render body**

Replace the component's return (the `<section>` through the closing tag) so it keeps the recolored header + marquee but renders the bento grid instead of the category-pills `space-y-14` block. The header gradient becomes solid mono+orange:

```tsx
export default function Skills() {
    return (
        <section className="min-h-screen bg-transparent py-32 px-6 md:px-16 flex items-center justify-center relative z-20">
            <div className="w-full max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex items-end justify-between"
                >
                    <h2
                        className="text-4xl md:text-6xl font-bold"
                        style={{ fontFamily: "'Clash Display', var(--font-display), sans-serif" }}
                    >
                        Tech <span className="text-[#FF5A1F]">Arsenal</span>
                    </h2>
                    <p className="hidden md:block font-jetbrains-mono text-xs tracking-[0.2em] uppercase text-neutral-500">
                        7 domains · 60+ tools
                    </p>
                </motion.div>

                {/* Infinite Scrolling Logo Marquee */}
                <div className="relative mb-16 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#070707]/80 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#070707]/80 to-transparent pointer-events-none" />

                    <div className="flex mb-4 marquee-row">
                        <div className="flex shrink-0 animate-marquee gap-6 pr-6">
                            {["Python", "JavaScript", "TypeScript", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "LangChain", "HuggingFace"].map((name) => (
                                <span key={name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-neutral-400 text-sm whitespace-nowrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://cdn.simpleicons.org/${logoSlug(name)}/ffffff`} alt={name} className="w-4 h-4 opacity-60" />
                                    {name}
                                </span>
                            ))}
                        </div>
                        <div className="flex shrink-0 animate-marquee gap-6 pr-6" aria-hidden>
                            {["Python", "JavaScript", "TypeScript", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "Azure", "AWS", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "LangChain", "OpenAI", "HuggingFace"].map((name) => (
                                <span key={name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-neutral-400 text-sm whitespace-nowrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://cdn.simpleicons.org/${logoSlug(name)}/ffffff`} alt={name} className="w-4 h-4 opacity-60" />
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex marquee-row">
                        <div className="flex shrink-0 animate-marquee-reverse gap-6 pr-6">
                            {["Spark", "Kafka", "Airflow", "Pandas", "Terraform", "Flask", "Express", "Databricks", "Elasticsearch", "scikit-learn", "OpenCV", "Bash", "MySQL"].map((name) => (
                                <span key={name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-neutral-400 text-sm whitespace-nowrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://cdn.simpleicons.org/${logoSlug(name)}/ffffff`} alt={name} className="w-4 h-4 opacity-60" />
                                    {name}
                                </span>
                            ))}
                        </div>
                        <div className="flex shrink-0 animate-marquee-reverse gap-6 pr-6" aria-hidden>
                            {["Spark", "Kafka", "Airflow", "Pandas", "Terraform", "Flask", "Express", "Databricks", "Power BI", "Elasticsearch", "scikit-learn", "OpenCV", "Tableau", "Copilot Studio", "Bash", "MySQL"].map((name) => (
                                <span key={name} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-neutral-400 text-sm whitespace-nowrap">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://cdn.simpleicons.org/${logoSlug(name)}/ffffff`} alt={name} className="w-4 h-4 opacity-60" />
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(150px,auto)] gap-4">
                    {bento.map((group, idx) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.06 }}
                            className={`group flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ${group.span} ${
                                group.flagship
                                    ? "bg-white/[0.06] border-white/15 hover:border-[#FF5A1F]"
                                    : "bg-white/[0.03] border-white/10 hover:border-[#FF5A1F] hover:bg-white/[0.05]"
                            }`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="font-jetbrains-mono text-xs text-[#FF5A1F]">{group.index}</span>
                            </div>
                            <div className="mt-auto">
                                <h3
                                    className={`font-bold mb-4 ${group.flagship ? "text-2xl md:text-3xl" : "text-xl"}`}
                                    style={{ fontFamily: "'Clash Display', var(--font-display), sans-serif" }}
                                >
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={`${group.category}-${skill}`}
                                            className="font-jetbrains-mono text-[0.72rem] text-neutral-300 border border-white/10 rounded-lg px-2.5 py-1 group-hover:border-white/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

- [ ] **Step 4: Verify no stale colors remain in this file**

Run: `git grep -n "00C8FF\|FF6B2B\|0A0A0A" src/components/Skills.tsx` — Expected: **no output**.

- [ ] **Step 5: Verify lint + build**

Run: `npm run lint && npm run build` — Expected: clean + success.

- [ ] **Step 6: Visual check**

Run: `npm run dev`, open the Skills section. Confirm: flagship AI tile spans 2×2, tiles glow orange on hover, marquee still scrolls, no cyan. Stop dev server.

- [ ] **Step 7: Commit**

```bash
git add src/components/Skills.tsx
git commit -m "feat: rebuild Skills as bento grid with single accent"
```

---

## Task 7: Timeline — combined Experience & Education

**Files:**
- Modify: `src/components/Timeline.tsx` (data array + recolor)

- [ ] **Step 1: Replace the `experiences` array**

Replace the array (lines 5–36) with the combined, chronological set (KTP first):

```tsx
const experiences = [
    {
        year: "Jun 2026–Present",
        role: "KTP Associate — AI Product Engineer",
        company: "Ulster University & The Odyssey Trust",
        desc: "Knowledge Transfer Partnership bridging academic AI research with applied product development. Building LLM-powered and intelligent systems under university supervision in Belfast."
    },
    {
        year: "2025",
        role: "Freelance GenAI Specialist",
        company: "Pareto.AI",
        desc: "Built LLM-powered RAG APIs and generative AI pipelines for enterprise clients — vector search, document intelligence, and multi-modal workflows."
    },
    {
        year: "2024–Apr 2026",
        role: "Data & AI Support Associate",
        company: "DWP (UK Government)",
        desc: "Engineered Azure AI platforms serving millions of citizens: Azure OpenAI & Copilot Studio deployments, Power Automate pipelines, and Databricks data engineering at government scale."
    },
    {
        year: "2022–2024",
        role: "MSc Big Data & High Performance Computing",
        company: "University of Liverpool",
        desc: "Dissertation: Digital Twin for Autonomous Driving — D2RL edge-case reinforcement learning simulation in CARLA for safety validation."
    },
    {
        year: "~2020",
        role: "ML Consultant",
        company: "Mars Inno India",
        desc: "Machine learning consulting and model development for early-stage technology products."
    },
    {
        year: "2018–2022",
        role: "B.Tech Computer Science & Engineering",
        company: "GVP College of Engineering",
        desc: "Foundation in algorithms, data structures, software engineering, machine learning, and computer vision."
    }
];
```

- [ ] **Step 2: Update the heading and recolor**

Change the heading (lines 49–51) to:

```tsx
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Experience &amp; <span className="text-[#FF5A1F]">Education</span>
                    </h2>
```

- [ ] **Step 3: Recolor all timeline accent references**

In `Timeline.tsx`, replace every `#00C8FF` with `#FF5A1F` and every `#FF6B2B` with `#FF5A1F` (the gradient line ~line 56, the connector dots ~line 68, the year span ~line 71, role hover ~line 74). For the gradient line, make it a single-hue fade:

```tsx
                    <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-[#FF5A1F] to-transparent opacity-50" />
```

- [ ] **Step 4: Verify no stale colors remain in this file**

Run: `git grep -n "00C8FF\|FF6B2B" src/components/Timeline.tsx` — Expected: **no output** (note `#0A0A0A` may remain on dot fill; replace it with `#070707` too).

Run: `git grep -n "0A0A0A" src/components/Timeline.tsx` — if any, change to `#070707`.

- [ ] **Step 5: Verify lint + build**

Run: `npm run lint && npm run build` — Expected: clean + success.

- [ ] **Step 6: Commit**

```bash
git add src/components/Timeline.tsx
git commit -m "feat: combined Experience and Education timeline with KTP role"
```

---

## Task 8: Projects content refresh + recolor

**Files:**
- Modify: `src/components/Projects.tsx` (project copy + recolor)

- [ ] **Step 1: Refresh the `projects` array**

Replace the array (lines 6–42) with README-sourced copy:

```tsx
const projects = [
    {
        title: "DevVerse — The AI Metaverse",
        desc: "3D metaverse that converts GitHub profiles into virtual interactive worlds with VR, WebRTC voice, and AI-generated spatial assets. Fuses social networking, spatial computing, and generative AI.",
        tags: ["WebXR", "Three.js", "React Three Fiber", "Next.js 14", "LangChain", "Supabase"],
        github: "https://github.com/nagasriramnani",
    },
    {
        title: "Face Super-Resolution Identity Preservation",
        desc: "Empirical audit of facial identity preservation across SOTA super-resolution models on 3,000 FairFace samples. Quantified identity drift via ArcFace embedding cosine similarity.",
        tags: ["ArcFace", "GFPGAN", "CodeFormer", "RealESRGAN", "Computer Vision"],
    },
    {
        title: "QueenAI Enterprise",
        desc: "Multi-agent customer service system fusing LangGraph orchestration with ANT bio-inspired swarm intelligence for adaptive, self-healing enterprise AI workflows.",
        tags: ["LangGraph", "Multi-Agent Systems", "Swarm AI", "Python"],
        github: "https://github.com/nagasriramnani/Ant-Customer-Service-AI-Agent",
    },
    {
        title: "Digital Twin for Autonomous Driving",
        desc: "D2RL edge-case reinforcement learning simulation in CARLA for autonomous vehicle safety validation. Combines domain randomisation with deep RL for rare-scenario coverage. (MSc Dissertation)",
        tags: ["Reinforcement Learning", "CARLA", "D2RL", "Digital Twin"],
        github: "https://github.com/nagasriramnani/Reinforcement-learning-Validating-Safety-Autonomous-vehicles-Highway-env-D2RL",
    },
    {
        title: "RunFit",
        desc: "Gamified, social, map-based running app targeting Gen Z in India. Blends fitness tracking, social challenges, and interactive city maps into a habit-forming mobile experience.",
        tags: ["Mobile", "Gamification", "Maps API", "Social"],
        github: "https://github.com/nagasriramnani/RunFit",
    },
    {
        title: "Smart-Hire AI Recruiter",
        desc: "Local-first AI recruitment platform with custom ML candidate ranking. Privacy-preserving design runs entirely on-device with zero candidate data leaving the organisation.",
        tags: ["TypeScript", "ML Ranking", "FastAPI", "Privacy-First"],
        github: "https://github.com/nagasriramnani/Smart-Hire-AI-Recruiter",
    }
];
```

- [ ] **Step 2: Recolor accents**

In `Projects.tsx`, replace the header gradient (lines 55–57) with mono+orange:

```tsx
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Featured <span className="text-[#FF5A1F]">Work</span>
                    </h2>
```

Then replace every remaining `#00C8FF` with `#FF5A1F` and every `#FF6B2B` with `#FF5A1F` (card border hover ~line 71, the top gradient line ~line 73, the number badge ~lines 77–80, title hover ~line 94, external link hover ~line 88).

- [ ] **Step 3: Verify no stale colors remain in this file**

Run: `git grep -n "00C8FF\|FF6B2B" src/components/Projects.tsx` — Expected: **no output**.

- [ ] **Step 4: Verify lint + build**

Run: `npm run lint && npm run build` — Expected: clean + success.

- [ ] **Step 5: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: refresh project content and single-accent recolor"
```

---

## Task 9: Contact — Belfast, Open To, recolor

**Files:**
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Update the "Open To" list and domain chips**

Replace the `<ul>` list (lines 26–30) with the README Open To set:

```tsx
                        <ul className="text-neutral-400 space-y-2 font-jetbrains-mono text-sm leading-relaxed">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" /> PhD in AI/ML · UK universities · 2026/27 intake</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" /> Senior AI Engineer roles · UK/Remote</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> AI Product Engineer roles</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white" /> Open-source collaboration · LLMs · Agentic AI</li>
                        </ul>
```

Replace the domain chips array (line 33) with:

```tsx
                        {["Government AI", "Healthcare AI", "Enterprise AI", "Self-Evolving Systems", "AI Safety", "Agentic AI"].map((domain) => (
```

- [ ] **Step 2: Recolor accents**

In `Contact.tsx`, replace the header gradient (lines 21–23) with:

```tsx
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to <span className="text-[#FF5A1F]">collaborate?</span>
                    </h2>
```

Replace every remaining `#00C8FF` with `#FF5A1F` and every `#FF6B2B` with `#FF5A1F` (email button hover ~line 50, the glow blur ~line 10, social hovers ~lines 58–66).

- [ ] **Step 3: Verify no stale colors remain in this file**

Run: `git grep -n "00C8FF\|FF6B2B" src/components/Contact.tsx` — Expected: **no output**.

- [ ] **Step 4: Verify lint + build**

Run: `npm run lint && npm run build` — Expected: clean + success.

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.tsx
git commit -m "feat: update Contact open-to list, domains, and recolor"
```

---

## Task 10: Final sweep — verify zero stale colors, full build, README location

**Files:**
- Modify (if needed): any file still containing old colors; `README.md` location line if desired

- [ ] **Step 1: Repo-wide stale color sweep**

Run: `git grep -n "00C8FF\|FF6B2B" src/` — Expected: **no output**. If any remain, replace each with `#FF5A1F` and re-run.

Run: `git grep -n "0A0A0A" src/` — Expected: only intentional matches, if any. Prefer `#070707`; replace stragglers in `src/` and re-run.

- [ ] **Step 2: Confirm no "London" references remain**

Run: `git grep -ni "London" src/` — Expected: **no output**.

- [ ] **Step 3: Full clean build**

Run: `npm run lint` — Expected: no errors/warnings that fail CI.
Run: `npm run build` — Expected: `✓ Compiled successfully` and all routes generated.

- [ ] **Step 4: Full visual pass**

Run: `npm run dev`. Walk the whole page: hero scroll animation intact → Currently card → bento Skills → Projects → combined Timeline → Contact. Confirm single orange accent throughout, no cyan, no layout breaks at mobile (devtools responsive) and desktop. Stop dev server.

- [ ] **Step 5: Commit any sweep fixes**

```bash
git add -A src/
git commit -m "chore: final single-accent sweep and verification"
```

---

## Self-Review (completed by plan author)

- **Spec coverage:** Theme (Task 1–2), hero copy/subtitle (Task 3), Currently card (Task 4–5), bento Skills (Task 6), combined timeline (Task 7), projects (Task 8), contact/Belfast/Open-To (Task 9), final no-cyan + no-London sweep (Task 10). All §2–§8 spec items mapped.
- **Placeholder scan:** No TBD/TODO; every code step shows full code.
- **Type consistency:** `BentoCategory` fields (`index`, `category`, `skills`, `span`, `flagship`) used consistently in Task 6. `experiences`/`projects` shapes match their original consumers (unchanged JSX field names `year`/`role`/`company`/`desc` and `title`/`desc`/`tags`/`github`).
- **Color invariant:** Enforced by grep checks in Tasks 3, 6, 7, 8, 9, and the repo-wide sweep in Task 10.
