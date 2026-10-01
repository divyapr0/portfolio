# Mission Specification: Pleurat Shala Portfolio Recreation

## Executive Summary
This document provides the full structural, functional, visual, and motion teardown of the portfolio website extracted from the provided video recordings (`main hero section.mov` and `Screen Recording 2026-09-30 at 10.40.38 AM.mov`) and corroborated with the live system architecture.

The website is **Pleurat Shala’s Portfolio** (`pleurat.com`), an internationally acclaimed, award-winning product design and AI builder portfolio known for its distinctive ruled-notebook/blueprint editorial aesthetic, interactive canvas workbench, live command-line terminal, procedural walking commuters, and shutter-blind page transitions.

---

## 1. Visual Identity & Design System

### 1.1 Color Tokens
The site features a dual-palette architecture (Warm Paper Studio Light Mode vs. Blueprint Dark Mode):

| Token | Light Theme | Dark Theme (`data-theme="dark"`) | Purpose |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#FBF7E6` (warm creamy parchment) | `#0B0D0C` / `#050711` (rich obsidian ink) | Primary viewport background |
| `--bg-surface` | `#FFFFFF` / `#F5EEDB` | `#131615` / `#161918` | Cards, workbench canvas, modals |
| `--text-primary` | `#16140E` (deep warm ink) | `#EDEAE0` (crisp bone white) | Primary headings and labels |
| `--text-secondary`| `#756E5E` / `#827B6C` | `#8A877E` / `#949086` | Subtitles, muted words, metadata |
| `--accent-amber` | `#E69D46` / `#E5A044` | `#E69D46` / `#FFAA33` | Brand buttons, active badges, highlights |
| `--accent-hover` | `#D48B32` | `#FFB84D` | Interactive hover states |
| `--border-line` | `#DDD5BE` / `#E8E2D0` | `#242826` / `#2D3230` | Grids, card borders, horizontal rules |
| `--grid-dot` | `rgba(22, 20, 14, 0.15)` | `rgba(237, 234, 224, 0.12)` | Workbench canvas dot grid pattern |

### 1.2 Signature Design Motifs
1. **Ruled Paper Canvas**: Subtle repeating 24px horizontal ruling lines across the background evoking an engineering lab notebook.
2. **Technical Labeling**: Monospace index numbers (`FIG. 001`, `01`, `A6`, `R12`, `C9`) and technical tags (`[ READY ]`, `[ BENCH · LIVE ]`, `[ 12 PARTS ]`).
3. **Corner Crop Marks**: Architectural L-bracket corner marks (`⌜ ⌝ ⌞ ⌟`) framing major sections (`TRACKS`, `BY THE NUMBERS`, `AI TOOLS`, `NON-DISCLOSURE`).
4. **Editorial Typography Pairing**:
   - **Headings & Body**: `General Sans` (Fontshare) – geometric, clean, modern Swiss grotesque.
   - **System UI / Code / Technical tags**: `IBM Plex Mono` – crisp, technical, monospace precision.

---

## 2. Page Hierarchy & Routing Structure

The application is structured into 5 core views + modal overlay states:

```
[ Navigation Header ]
  ├── 01. Welcome (Home /)
  │     ├── Hero Banner (H1 + 2-tone subhead + CTA buttons)
  │     ├── Commuter Track 1 (City Skyline Walkway + Career Milestones)
  │     ├── Interactive Workbench (Flowchart Canvas + Tracks Sidebar + Live Chat + Sticky Notes)
  │     ├── Interactive Console Drawer (Terminal CLI + Log stream)
  │     ├── FIG. 004: Focus Tracks (Isometric 3D Platform Diagram + Carousel)
  │     ├── FIG. 005: By The Numbers (Hatched Bar Data Visualizer)
  │     ├── FIG. 006: AI Daily Tools (Tool Cards Grid)
  │     ├── FIG. 007: Teams & Client History (Multi-column Experience Grid)
  │     ├── Commuter Track 2 (Circuit Schematic Walkway + Daily Kit)
  │     └── Footer (Contact, Sitemap, Elsewhere, Studio info)
  │
  ├── 02. Work (/work)
  │     ├── Hero (H1 + Filter Buttons)
  │     ├── Interactive Project Accordion Columns (Expandable hover cards)
  │     ├── Non-Disclosure Logo Carousel
  │     └── Screenshot Archive (Apps 33 vs Websites 36 + Full-size Lightbox)
  │
  ├── 03. AI (/ai)
  │     ├── Hero (AI Everyday Workflow)
  │     ├── Workflow Breakdown (01 Automation, 02 Research, 03 Analysis)
  │     └── Interactive AI Build Case Studies (FIG. 001 SENA Active, etc.)
  │
  ├── 04. Profile (/about or /profile)
  │     ├── Personal Manifesto & Career Arc
  │     ├── Hand-drawn Cozy Studio Illustration (Desk, Laptop, Father & Daughter, Cat, Dog)
  │     └── Principles & Retrospective
  │
  └── 05. Contact (/contact or Modal Overlay)
        ├── "Let's Talk" Header & Regional Info (Pristina · CET Europe)
        ├── Direct Action Cards (Email, Awwwards, Dribbble, LinkedIn, ThemeForest)
        └── Night Scene Architectural Illustration (Glowing lamps, warm porch light)
```

---

## 3. Interactive Components & Motion Triggers

### 3.1 The Stepped Shutter-Blind Page Transition
- **Trigger**: Clicking any primary navigation link (`Welcome`, `Work`, `AI`, `Profile`).
- **Effect**: 
  - 8-12 vertical columns wipe across the screen with staggered delays (`0.04s` offset per column).
  - Center label reveals the destination page title (`Selected work.`, `Welcome.`, `AI Systems.`).
  - Smoothly reveals the new page content beneath with zero layout shift.

### 3.2 The Commuter Walkers (Procedural SVG Character)
- **Component 1 (City Skyline Walkway)**:
  - Vector skyline of architectural buildings, street lamps, trees, bicycles.
  - Procedural 2D animated commuter character (walking stride, backpack, bobbing head).
  - Synchronized track labels: `01 Hoopit AI`, `07 Nacew`, etc.
- **Component 2 (Circuit Board Schematic Walkway)**:
  - Technical electrical schematic track: Resistors (`R12`), Capacitors (`C9`), Jumpers (`J1`), ICs (`Meta`, `Grok`, `GitHub`, `Tailwind`, `Claude`, `Figma`).
  - Commuter character navigates between components as the user hovers or scrolls.

### 3.3 The Interactive Workbench Canvas
- **Track Selector (Left Sidebar)**:
  - `Workspace` (BENCH · LIVE)
  - `AI Workflow` (AGENTS · DAILY)
  - `Design System` (LIBRARY · 12 PARTS)
  - `Product Design` (END TO END · 8+ YRS)
- **Canvas Area**:
  - Live dot-grid background.
  - Interactive flowchart with SVG connectors (`[ BRIEF ] -> [ EXPLORE ] -> < IN THE SYSTEM? >`).
  - Draggable or animated sticky notes ("Reuse before you add...", "Empty state? ask design").
  - Simulated collaborator cursor (`Pleurat` tooltip tag) moving organically.
  - Floating Live Agent Chat Card with real-time typewriter effect ("make the rail crop...", "Editing WorkRail.tsx").

### 3.4 The Bottom Terminal Console
- **Trigger**: Clickable toggle at bottom or activated from workbench.
- **Content**: Monospace CLI emulator displaying simulated build logs, token pipelines, and interactive command execution (`try: open system`).
- **Actions**: `NEXT`, `HELP`, `CLEAR`.

### 3.5 "By the Numbers" Diagonal-Hatched Chart
- **Visual**: Architectural diagram with 45-degree diagonal hatching (`pattern id="hatch"` in SVG / CSS).
- **Metric Cards**: `10+` Years designing, `150+` Websites designed, `50+` Products shipped, `10+` Industries worked.
- **Trigger**: On-scroll stagger rise animation.

### 3.6 Work Page Accordion & Screenshot Archive
- **Accordion Columns**: 6 vertical strips with `+` headers (`MindPath`, `Otee`, `Appello`, `ValueHut`, `Codex`, `AI Journey`). Hovering expands the column smoothly and reveals the floating project card with drop shadow.
- **Gallery**: Segmented control (`APPS 33` vs `WEBSITES 36`) filtering a responsive grid of UI cards with full-screen zoom modal.

### 3.7 Dark / Light Theme Switcher
- **Trigger**: Header toggle button (half-filled circle icon).
- **Behavior**: Instant theme class swap (`mode-light` vs `data-theme='dark'`) with synchronized illustration states (day studio vs. illuminated night house).

---

## 4. Technical Architecture Recommendation

To achieve 100% faithful recreation with 60 FPS silky smooth animations:
- **Core Framework**: React 18 / 19 + TypeScript + Vite.
- **Routing**: Lightweight client-side router (`wouter` or React Router).
- **Styling**: Modern CSS with CSS custom property tokens (`theme.css`) to match the exact design specs, typography, and responsive grid.
- **Graphics & Motion**:
  - Pure SVG procedural paths for Commuter walking cycles, city skyline, schematic tracks, and illustrations.
  - Hardware-accelerated CSS animations + lightweight requestAnimationFrame physics for cursors and tickers.
