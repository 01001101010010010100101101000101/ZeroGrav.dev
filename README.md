# ZeroGrav Prompt Vault

A single-page prompt vault featuring 100 detailed, execution-grade prompts for planning, design, UX, debugging, refactoring, performance, accessibility, content, marketing, and deployment.

**ZeroGrav.net**

## Why this exists
- **High-signal prompting**: Every prompt is structured to produce tactical, implementation-ready responses instead of generic advice.
- **Fast exploration**: Search, category filters, modal detail view, and per-card share controls keep discovery efficient.

## Key features
- **100 engineered prompts** across 10 categories.
- **Copy + share workflows** for each prompt and for the full vault.
- **Responsive visual design** with branded typography in the header and a PNG favicon set.

## Project structure
.
├── index.html # Page structure, SEO metadata, modal shell
├── styles.css # Visual system, layout, card + button styling
├── script.js # Prompt dataset, filtering, modal, copy/share behavior
└── assets/
├── favicon-32.png # Browser favicon (32x32)
├── favicon-16.png # Browser favicon (16x16)
├── apple-touch-icon.png # iOS home-screen icon (180x180)
└── zerograv-mark.svg # Brand mark asset


## Local development
```bash
python -m http.server 4173