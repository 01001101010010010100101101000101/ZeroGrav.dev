# ZeroGrav.dev — Complete System Status

**Last updated:** 2026-02-10T01:24:00-06:00

---

## Project Overview

**ZeroGrav Prompt Vault** — A single-page web app serving 250 copy-paste-ready AI prompts across 10 real-world product development categories. Built for vibe coders who ship with AI.

**Live repo:** [github.com/01001101010010010100101101000101/ZeroGrav.dev](https://github.com/01001101010010010100101101000101/ZeroGrav.dev)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | `index.html` (single page) |
| Styling | `styles.css` (vanilla CSS, dark theme, glassmorphism) |
| Logic | `script.js` (vanilla JS, no frameworks) |
| Hosting | GitHub Pages (static) |

---

## File Inventory

| File | Purpose | Size |
|---|---|---|
| `index.html` | Single-page app shell, SEO meta, Schema.org JSON-LD | ~8 KB |
| `styles.css` | Full design system — dark mode, cards, modals, hero, animations | ~17 KB |
| `script.js` | 250 prompt blueprints + rendering, search, filters, modal, clipboard | ~74 KB |
| `logo.svg` | ZeroGrav.dev favicon/logo | ~2 KB |
| `preview.svg` | Social preview image | ~1.5 KB |
| `README.md` | GitHub repo documentation | ~3 KB |
| `LICENSE` | MIT License | ~1 KB |

---

## Prompt Data Architecture

- **Total prompts:** 250
- **Categories:** 10 (25 prompts each)
- **Data structure:** `promptBlueprints` array in `script.js`

| # | Category | Icon | Count |
|---|---|---|---|
| 1 | Planning | 🧭 | 25 |
| 2 | UI Design | 🎨 | 25 |
| 3 | UX Flow | 🧪 | 25 |
| 4 | Debugging | 🛠️ | 25 |
| 5 | Refactoring | 🧱 | 25 |
| 6 | Performance | ⚡ | 25 |
| 7 | Accessibility | ♿ | 25 |
| 8 | Content | ✍️ | 25 |
| 9 | Marketing | 📣 | 25 |
| 10 | Deployment | 🚀 | 25 |

---

## Prompt Template

Each prompt is dynamically generated with:
- **Persona:** "Expert AI coding assistant helping a vibe coder ship fast"
- **Structure:** Quick Assessment → Implementation Plan → Build Artifacts → Verification → Next Steps
- **Style:** Optimized for copy/paste-ready output, shipping speed, and iteration
- **Context slot:** User pastes their stack, files, goals, and constraints

---

## UI Features

- **Hero section** — Animated gradient border, shimmer effect, floating dots
- **Category filter pills** — Filter prompts by any of the 10 categories
- **Full-text search** — Searches titles, summaries, and objectives
- **Prompt cards** — Hover effects, category icons, click-to-expand
- **Modal** — Viewport-fit with scroll-isolated prompt text, copy buttons (prompt / full), share link
- **Dark mode** — Full dark theme with glassmorphism effects
- **Responsive** — Mobile-first layout with adaptive grid

---

## Recent Changes (Latest First)

| Commit | Description |
|---|---|
| `6e23e7d` | Expand prompt vault to 250 vibe coder prompts |
| `1bdd97a` | Update prompt count from 100 to 250 across all meta tags and hero content |
| `950c031` | Rewrite "Why This Exists" section for vibe coder audience |
| `1c79867` | Update prompt count to 250 in docs |
| `e506aa8` | Sync readme and index updates |
| `00cdb2d` | Use MIT license and remove veteran CTA from readme |
| `8621ba2` | Merge: finalize repository about section and update UI components |
| `61a5376` | Fix modal visibility: enforce viewport height and refine flex layout |
| `209de40` | Upgrade hero card layout: horizontal spread, text wrap fix, premium visuals |
| `2ee3bee` | Redesign modal: viewport-fit layout with scroll-isolated prompt |
| `babb88e` | Replace logo with styled ZeroGrav.dev text, remove ZeroGrav.net link |

---

## SEO & Meta

- **Title:** ZeroGrav Prompt Vault — 250 Vibe Coding Prompts
- **Description:** 250 battle-tested, copy-paste-ready prompts for vibe coders
- **OG/Twitter tags:** Configured with preview image
- **Schema.org:** WebPage + ItemList with 250 items
- **Favicon:** SVG logo

---

## Status

✅ **All systems operational** — 250 prompts verified, pushed to main, zero errors.
