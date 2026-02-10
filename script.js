const promptBlueprints = [
  {
    category: "Planning",
    icon: "🧭",
    items: [
      {
        title: "Outcome Blueprint",
        objective: "Define a measurable business/UX outcome before writing code",
        inputs: "project goal, target user, deadline, constraints",
        deliverables: "Problem framing, success metrics, 2-week roadmap, anti-goals",
      },
      {
        title: "MVP Boundary Guard",
        objective: "Shrink scope while preserving user value",
        inputs: "feature ideas, timeline, team size",
        deliverables: "Must-have scope, explicit cuts, risk list",
      },
      {
        title: "Execution Sprint Map",
        objective: "Convert a vague initiative into daily execution blocks",
        inputs: "initiative brief, available hours, dependencies",
        deliverables: "7-day plan with milestones and review points",
      },
      {
        title: "Assumption Audit",
        objective: "Surface hidden assumptions that can break delivery",
        inputs: "project proposal, stakeholder expectations",
        deliverables: "Assumption table, validation tests, fallback plan",
      },
      {
        title: "Decision Matrix",
        objective: "Choose between competing product directions",
        inputs: "options, weighted criteria, constraints",
        deliverables: "Scored matrix, recommendation, tradeoffs",
      },
      {
        title: "Launch Readiness Plan",
        objective: "Prepare a reliable pre-launch checklist",
        inputs: "release scope, traffic forecast, support capacity",
        deliverables: "Go/no-go checklist, ownership map, comms plan",
      },
      {
        title: "Risk Containment Plan",
        objective: "Identify and mitigate high-impact implementation risks",
        inputs: "architecture summary, integrations, timeline",
        deliverables: "Top risks, mitigations, trigger thresholds",
      },
      {
        title: "Scope-to-Impact Prioritizer",
        objective: "Rank backlog by impact, effort, and strategic fit",
        inputs: "backlog list, KPIs, engineering cost",
        deliverables: "Prioritized backlog, sequencing rationale",
      },
      {
        title: "User Journey Milestones",
        objective: "Map critical user journey into build milestones",
        inputs: "persona, core task, conversion goals",
        deliverables: "Journey map, friction points, milestone plan",
      },
      {
        title: "Post-Mortem Predictor",
        objective: "Predict failure modes before execution starts",
        inputs: "project plan, assumptions, dependencies",
        deliverables: "Pre-mortem scenarios, mitigations, owners",
      },
    ],
  },
  {
    category: "UI Design",
    icon: "🎨",
    items: [
      {
        title: "Premium Hero Composer",
        objective: "Design a high-conversion hero section with clear hierarchy",
        inputs: "brand positioning, audience pain, key CTA",
        deliverables: "Wireframe notes, copy variants, visual hierarchy",
      },
      {
        title: "Interface Token System",
        objective: "Create scalable design tokens for consistency",
        inputs: "brand mood, accessibility goals, breakpoints",
        deliverables: "Color/spacing/type tokens and usage guidance",
      },
      {
        title: "Card System Architecture",
        objective: "Design reusable card components for complex content",
        inputs: "content types, interaction states",
        deliverables: "Card variants, spacing spec, state behavior",
      },
      {
        title: "Navigation Clarity Pass",
        objective: "Redesign navigation for speed and findability",
        inputs: "site map, top tasks, device mix",
        deliverables: "Nav architecture, labeling, mobile behavior",
      },
      {
        title: "Conversion CTA Design",
        objective: "Engineer CTA treatments that improve click confidence",
        inputs: "offer, funnel stage, objections",
        deliverables: "CTA copy, visual treatments, placement logic",
      },
      {
        title: "Visual Balance Critique",
        objective: "Critique and rebalance an existing UI for polish",
        inputs: "screenshot, goals, brand style",
        deliverables: "Specific visual adjustments and rationale",
      },
      {
        title: "Empty State Designer",
        objective: "Craft useful empty/loading/error states",
        inputs: "feature context, expected user intent",
        deliverables: "State copy, visual cues, recovery actions",
      },
      {
        title: "Form Experience Polish",
        objective: "Design forms that reduce drop-off",
        inputs: "fields, validation rules, user friction",
        deliverables: "Field layout, inline validation, error UX",
      },
      {
        title: "Dashboard Information Hierarchy",
        objective: "Structure dense dashboards for fast decisions",
        inputs: "metrics, audience role, refresh cadence",
        deliverables: "Hierarchy map, grouping, visual emphasis",
      },
      {
        title: "Micro-Interaction Blueprint",
        objective: "Specify subtle motion that improves perceived quality",
        inputs: "core actions, performance budget",
        deliverables: "Animation specs, timing, accessibility notes",
      },
    ],
  },
  {
    category: "UX Flow",
    icon: "🧪",
    items: [
      {
        title: "Onboarding Optimization",
        objective: "Build onboarding flow with faster time-to-value",
        inputs: "persona, first value moment, blockers",
        deliverables: "Step flow, microcopy, instrumentation points",
      },
      {
        title: "Funnel Friction Analyzer",
        objective: "Diagnose and fix drop-off across a funnel",
        inputs: "funnel metrics, user recordings, hypotheses",
        deliverables: "Friction map and prioritized experiments",
      },
      {
        title: "Task Completion Flow",
        objective: "Design zero-confusion flow for a key task",
        inputs: "starting context, success state",
        deliverables: "State diagram, edge cases, recovery UX",
      },
      {
        title: "Checkout Confidence Flow",
        objective: "Increase trust and completion in purchase flows",
        inputs: "offer, payment methods, objections",
        deliverables: "Flow rewrite, reassurance strategy, copy",
      },
      {
        title: "Activation Milestone Design",
        objective: "Define milestone nudges that increase retention",
        inputs: "product lifecycle, retention target",
        deliverables: "Milestone logic and trigger messages",
      },
      {
        title: "Multi-Device Journey",
        objective: "Align desktop/mobile journey without context loss",
        inputs: "entry points, device split, handoff moments",
        deliverables: "Cross-device flow and continuity tactics",
      },
      {
        title: "Error Recovery Journey",
        objective: "Design graceful recovery paths for failures",
        inputs: "common failures, data sensitivity",
        deliverables: "Recovery branches and escalation rules",
      },
      {
        title: "Progressive Disclosure Plan",
        objective: "Reveal complexity in manageable layers",
        inputs: "advanced features, novice users",
        deliverables: "Disclosure sequence and context cues",
      },
      {
        title: "Search-to-Action Flow",
        objective: "Optimize from search intent to conversion action",
        inputs: "search terms, target actions",
        deliverables: "Intent grouping and action pathways",
      },
      {
        title: "Retention Loop Design",
        objective: "Create loops that naturally bring users back",
        inputs: "core value loop, notification channels",
        deliverables: "Loop design, cadence, guardrails",
      },
    ],
  },
  {
    category: "Debugging",
    icon: "🛠️",
    items: [
      {
        title: "Root Cause Investigation",
        objective: "Isolate root cause using evidence-first debugging",
        inputs: "bug report, logs, suspected files",
        deliverables: "Hypothesis ladder and validation steps",
      },
      {
        title: "Regression Isolation",
        objective: "Find commit/config causing recent breakage",
        inputs: "expected behavior, recent changes",
        deliverables: "Bisect strategy and minimal repro",
      },
      {
        title: "API Failure Forensics",
        objective: "Diagnose API failures end-to-end",
        inputs: "request samples, status codes, backend logs",
        deliverables: "Failure taxonomy and fixes",
      },
      {
        title: "State Synchronization Fix",
        objective: "Resolve stale/incorrect state issues",
        inputs: "state model, events, observed mismatch",
        deliverables: "State timeline and corrective architecture",
      },
      {
        title: "Performance Bottleneck Hunt",
        objective: "Pinpoint and fix UI/backend latency hotspots",
        inputs: "slow path, metrics, traces",
        deliverables: "Profiling plan and optimization actions",
      },
      {
        title: "Concurrency Bug Triage",
        objective: "Fix race conditions and ordering defects",
        inputs: "async workflows, lock strategy",
        deliverables: "Interleaving scenarios and remediation",
      },
      {
        title: "Security Bug Containment",
        objective: "Respond safely to a suspected security flaw",
        inputs: "vuln description, blast radius",
        deliverables: "Containment, patch, verification checklist",
      },
      {
        title: "Data Integrity Repair",
        objective: "Recover from corrupted or inconsistent data",
        inputs: "schema, corruption examples",
        deliverables: "Repair plan, validation queries, safeguards",
      },
      {
        title: "Browser-Specific Defect Fix",
        objective: "Track down environment-specific frontend bugs",
        inputs: "affected browsers, repro steps",
        deliverables: "Compatibility matrix and patch approach",
      },
      {
        title: "Crash Loop Stabilizer",
        objective: "Stop recurring crashes and restore resilience",
        inputs: "stack traces, memory profile",
        deliverables: "Immediate stabilizers + long-term fixes",
      },
    ],
  },
  {
    category: "Refactoring",
    icon: "🧱",
    items: [
      {
        title: "Architecture Decomposition",
        objective: "Split monolith logic into maintainable modules",
        inputs: "current structure, pain points",
        deliverables: "Module boundaries, migration steps",
      },
      {
        title: "Function Responsibility Pass",
        objective: "Refactor oversized functions into clear units",
        inputs: "code snippet, test coverage",
        deliverables: "Extraction plan and naming rationale",
      },
      {
        title: "State Model Refactor",
        objective: "Re-model state for predictability and testability",
        inputs: "current store shape, bugs",
        deliverables: "New model, transition strategy",
      },
      {
        title: "API Layer Consolidation",
        objective: "Unify duplicate API/request handling patterns",
        inputs: "call sites, auth strategy",
        deliverables: "Shared client architecture and rollout",
      },
      {
        title: "Component Reusability Pass",
        objective: "Extract reusable UI primitives from repeated code",
        inputs: "screens with repetition",
        deliverables: "Component catalog and adoption plan",
      },
      {
        title: "Naming and Intent Cleanup",
        objective: "Improve readability via domain-aligned naming",
        inputs: "code area, terminology",
        deliverables: "Rename map and refactor sequence",
      },
      {
        title: "Error Handling Standardization",
        objective: "Normalize error handling patterns",
        inputs: "services, current inconsistency",
        deliverables: "Standard taxonomy and implementation guide",
      },
      {
        title: "CSS System Refactor",
        objective: "Transition ad-hoc CSS to scalable system",
        inputs: "style debt examples, targets",
        deliverables: "Tokenization and component style strategy",
      },
      {
        title: "Dependency Untangling",
        objective: "Reduce coupling across modules",
        inputs: "dependency graph, cyclic imports",
        deliverables: "Decoupling plan with risk control",
      },
      {
        title: "Legacy Modernization Plan",
        objective: "Modernize legacy code without breaking behavior",
        inputs: "legacy area, constraints",
        deliverables: "Phased modernization roadmap",
      },
    ],
  },
  {
    category: "Performance",
    icon: "⚡",
    items: [
      {
        title: "Core Web Vitals Sprint",
        objective: "Improve LCP/CLS/INP systematically",
        inputs: "current vitals, stack, pages",
        deliverables: "Optimization backlog with expected impact",
      },
      {
        title: "Frontend Payload Reduction",
        objective: "Shrink JS/CSS/media payloads",
        inputs: "bundle report, target devices",
        deliverables: "Code split + asset optimization plan",
      },
      {
        title: "Database Query Tuning",
        objective: "Reduce slow query latency under load",
        inputs: "schema, slow query logs",
        deliverables: "Index and query rewrite recommendations",
      },
      {
        title: "Caching Strategy Design",
        objective: "Design layered caching for speed and correctness",
        inputs: "data volatility, SLA, regions",
        deliverables: "Cache keys, TTL, invalidation rules",
      },
      {
        title: "Render Pipeline Optimization",
        objective: "Cut expensive re-renders in UI",
        inputs: "component tree, profiler output",
        deliverables: "Memoization and state partition plan",
      },
      {
        title: "Background Job Throughput",
        objective: "Increase queue throughput safely",
        inputs: "job types, failure rates",
        deliverables: "Worker scaling and retry policy",
      },
      {
        title: "Image Delivery Optimization",
        objective: "Improve image quality-speed balance",
        inputs: "asset inventory, breakpoints",
        deliverables: "Responsive image and CDN directives",
      },
      {
        title: "Startup Time Reduction",
        objective: "Accelerate app startup and first interaction",
        inputs: "boot path, init scripts",
        deliverables: "Critical-path reduction strategy",
      },
      {
        title: "Server Capacity Forecast",
        objective: "Forecast scaling needs and thresholds",
        inputs: "traffic history, release events",
        deliverables: "Capacity model and trigger alerts",
      },
      {
        title: "Performance Guardrail Testing",
        objective: "Create automated performance regression checks",
        inputs: "critical journeys, thresholds",
        deliverables: "Testing plan and CI gate design",
      },
    ],
  },
  {
    category: "Accessibility",
    icon: "♿",
    items: [
      {
        title: "WCAG Gap Audit",
        objective: "Audit interface against WCAG 2.2 priorities",
        inputs: "screens, components, target level",
        deliverables: "Gap list, severity, fixes",
      },
      {
        title: "Keyboard Navigation Retrofit",
        objective: "Ensure complete keyboard operability",
        inputs: "interactive map, modals, menus",
        deliverables: "Tab order, focus states, escape rules",
      },
      {
        title: "Screen Reader Semantics Pass",
        objective: "Improve semantic output for assistive tech",
        inputs: "HTML snapshot, ARIA usage",
        deliverables: "Landmark/role fixes and announcements",
      },
      {
        title: "Color Contrast Remediation",
        objective: "Fix contrast issues without harming brand",
        inputs: "palette, component states",
        deliverables: "Updated tokens with contrast proof",
      },
      {
        title: "Form Accessibility Overhaul",
        objective: "Make forms understandable and error-resilient",
        inputs: "form markup, validations",
        deliverables: "Labeling, hints, error associations",
      },
      {
        title: "Motion Sensitivity Support",
        objective: "Respect reduced-motion preferences",
        inputs: "animations, transitions",
        deliverables: "Reduced-motion alternatives and CSS rules",
      },
      {
        title: "Accessible Data Visualization",
        objective: "Make charts understandable beyond color",
        inputs: "chart types, data goals",
        deliverables: "Patterns, labels, textual equivalents",
      },
      {
        title: "Accessibility QA Script",
        objective: "Create repeatable QA protocol",
        inputs: "app areas, release cadence",
        deliverables: "Manual + automated QA checklist",
      },
      {
        title: "Assistive Tech Test Matrix",
        objective: "Plan testing across tools and platforms",
        inputs: "target audience, support policy",
        deliverables: "Priority matrix and expected behaviors",
      },
      {
        title: "Plain Language Rewrite",
        objective: "Rewrite complex UX copy for clarity and inclusion",
        inputs: "copy samples, user literacy context",
        deliverables: "Simplified copy with terminology guardrails",
      },
    ],
  },
  {
    category: "Content",
    icon: "✍️",
    items: [
      {
        title: "Positioning Narrative Builder",
        objective: "Craft clear positioning narrative",
        inputs: "product value, audience, alternatives",
        deliverables: "Narrative framework and proof points",
      },
      {
        title: "Hero Copy Conversion Pass",
        objective: "Write hero copy that converts qualified users",
        inputs: "audience pains, offer, CTA",
        deliverables: "Headline/subhead/CTA variants with rationale",
      },
      {
        title: "Feature Explanation Framework",
        objective: "Explain features with outcomes not jargon",
        inputs: "feature list, customer jobs",
        deliverables: "Benefit-led descriptions and examples",
      },
      {
        title: "Onboarding Email Sequence",
        objective: "Write activation-focused onboarding emails",
        inputs: "activation goal, timeline, tone",
        deliverables: "5-email sequence with CTAs",
      },
      {
        title: "Documentation Clarity Pack",
        objective: "Rewrite docs for fast implementation",
        inputs: "existing docs, common confusion",
        deliverables: "Improved structure, examples, warnings",
      },
      {
        title: "Error Message Redesign",
        objective: "Rewrite errors for actionability and trust",
        inputs: "error inventory, causes",
        deliverables: "User-safe copy + next-step actions",
      },
      {
        title: "Release Notes Transformer",
        objective: "Turn technical changes into user value",
        inputs: "changelog entries, audience",
        deliverables: "Readable release notes by persona",
      },
      {
        title: "Landing Page Storyline",
        objective: "Build coherent narrative for landing page",
        inputs: "offer, social proof, objections",
        deliverables: "Section-by-section storyline",
      },
      {
        title: "FAQ Generation Engine",
        objective: "Generate trust-building FAQ set",
        inputs: "common objections, policies",
        deliverables: "Prioritized FAQ with concise answers",
      },
      {
        title: "Case Study Composer",
        objective: "Write evidence-driven case study",
        inputs: "customer context, metrics, process",
        deliverables: "Story arc with measurable outcomes",
      },
    ],
  },
  {
    category: "Marketing",
    icon: "📣",
    items: [
      {
        title: "ICP Segmentation Strategy",
        objective: "Define high-conversion audience segments",
        inputs: "market, product, pricing",
        deliverables: "Segment matrix and messaging angles",
      },
      {
        title: "Offer Architecture",
        objective: "Design irresistible but credible offers",
        inputs: "product tiers, goals, margin limits",
        deliverables: "Offer stack and risk-reversal tactics",
      },
      {
        title: "Channel Prioritization Model",
        objective: "Choose growth channels by ROI potential",
        inputs: "budget, team bandwidth, goals",
        deliverables: "Ranked channel plan with test budgets",
      },
      {
        title: "Campaign Brief Generator",
        objective: "Create execution-ready campaign brief",
        inputs: "objective, segment, channel",
        deliverables: "Brief with hooks, assets, KPIs",
      },
      {
        title: "Ad Creative Prompt Pack",
        objective: "Generate high-performing ad concept prompts",
        inputs: "audience pain, proof points",
        deliverables: "Concepts with copy + visual direction",
      },
      {
        title: "SEO Content Cluster Plan",
        objective: "Build topic clusters for authority growth",
        inputs: "domain focus, keywords, intent",
        deliverables: "Cluster map and internal-link strategy",
      },
      {
        title: "Social Proof Engine",
        objective: "Systematize collection and use of proof",
        inputs: "customer wins, permission constraints",
        deliverables: "Proof pipeline and placement plan",
      },
      {
        title: "Lifecycle Nurture Design",
        objective: "Design lifecycle messaging across funnel stages",
        inputs: "CRM events, conversion goals",
        deliverables: "Trigger map and message sequence",
      },
      {
        title: "Referral Loop Strategy",
        objective: "Create referral mechanism that compounds growth",
        inputs: "user incentives, abuse risks",
        deliverables: "Referral mechanics and anti-fraud rules",
      },
      {
        title: "Attribution Simplification",
        objective: "Create practical attribution model",
        inputs: "tooling, touchpoints, reporting cadence",
        deliverables: "Model definition and decision use cases",
      },
    ],
  },
  {
    category: "Deployment",
    icon: "🚀",
    items: [
      {
        title: "Release Runbook",
        objective: "Create a safe, repeatable deployment runbook",
        inputs: "stack, environments, release cadence",
        deliverables: "Step-by-step runbook with rollback",
      },
      {
        title: "Incident Response Draft",
        objective: "Draft incident response workflow",
        inputs: "critical services, on-call model",
        deliverables: "Severity matrix and response playbook",
      },
      {
        title: "Observability Baseline",
        objective: "Define logs/metrics/traces baseline",
        inputs: "system architecture, SLAs",
        deliverables: "Instrumentation checklist and dashboards",
      },
      {
        title: "Environment Parity Plan",
        objective: "Reduce dev/stage/prod drift",
        inputs: "config differences, secrets handling",
        deliverables: "Parity controls and verification steps",
      },
      {
        title: "Rollback Strategy",
        objective: "Design low-risk rollback with data safety",
        inputs: "deployment method, DB migrations",
        deliverables: "Rollback paths and decision criteria",
      },
      {
        title: "SLO and Alert Tuning",
        objective: "Create meaningful SLOs and actionable alerts",
        inputs: "service goals, current noise",
        deliverables: "SLO set and alert threshold strategy",
      },
      {
        title: "Security Hardening Checklist",
        objective: "Harden deployment surface before launch",
        inputs: "infra stack, auth model",
        deliverables: "Security checklist with ownership",
      },
      {
        title: "Cost-Aware Infrastructure Plan",
        objective: "Optimize infra cost without reliability loss",
        inputs: "current spend, load patterns",
        deliverables: "Cost levers and guardrails",
      },
      {
        title: "Post-Deploy Verification",
        objective: "Automate post-deploy smoke + health checks",
        inputs: "critical paths, dependencies",
        deliverables: "Verification script plan and escalation",
      },
      {
        title: "Disaster Recovery Blueprint",
        objective: "Define realistic disaster recovery strategy",
        inputs: "RTO/RPO targets, data architecture",
        deliverables: "Backup, failover, and rehearsal plan",
      },
    ],
  },
];


const prompts = promptBlueprints.flatMap((group, categoryIndex) =>
  group.items.map((item, itemIndex) => {
    const id = `${group.category.toLowerCase().replace(/\s+/g, "-")}-${String(itemIndex + 1).padStart(2, "0")}`;
    const summary = `${item.objective}. Focused outputs: ${item.deliverables}.`;
    const details =
      `This is an operator-grade prompt spec. It forces concrete outputs (plans, artifacts, acceptance tests, and immediate actions) so every card generates work you can execute, not just ideas.`;
    const prompt = [
      `You are a principal-level product + engineering operator. Produce an expert, execution-ready response for: ${item.title}.`,
      "",
      "Mission Context (treat as hard constraints unless user overrides):",
      `- Objective: ${item.objective}`,
      `- Inputs available: ${item.inputs}`,
      `- Required outcomes: ${item.deliverables}`,
      "",
      "Execution Rules (non-negotiable):",
      "- No generic advice. Every section must include concrete outputs and explicit decisions.",
      "- Call out assumptions and unknowns before planning.",
      "- Prefer actionable checklists, timelines, and implementation artifacts over prose.",
      "- Tie recommendations to expected impact and measurable success criteria.",
      "",
      "Required Output (in this exact order):",
      "1) Situation Brief (<=120 words)",
      "   - Problem statement, user/business impact, and constraints.",
      "   - Assumptions vs unknowns in a 2-column table.",
      "",
      "2) Decision Framework",
      "   - 2-4 viable options with pros/cons and risks.",
      "   - Recommendation with rationale and trade-offs.",
      "",
      "3) Step-by-Step Execution Plan",
      "   - Numbered phases with owner, effort estimate, dependencies, and completion criteria.",
      "   - Include at least one fallback path for high-risk steps.",
      "",
      "4) Build Artifacts",
      "   - Provide concrete implementation output appropriate to the task:",
      "     * pseudo-code / real code snippets",
      "     * schema / data model updates",
      "     * API contract examples",
      "     * UX copy / wireflow bullets",
      "     * test cases",
      "   - Keep artifacts copy/paste-ready.",
      "",
      "5) QA + Verification",
      "   - Pre-flight checklist, test matrix, and pass/fail acceptance criteria.",
      "   - Explicit failure modes and how to detect each one.",
      "",
      "6) Immediate Action Queue (next 24 hours)",
      "   - 5-10 concrete tasks written as imperative commands.",
      "   - Each task includes expected output and done-definition.",
      "",
      "Output formatting constraints:",
      "- Use Markdown headings, concise bullets, and tables where specified.",
      "- Be specific, tactical, and deterministic.",
      "- If critical data is missing, proceed with labeled assumptions and continue.",
      "",
      "Project context to execute against now:",
      "[PASTE PROJECT CONTEXT, STACK, TIMELINE, USERS, CONSTRAINTS, AND SUCCESS METRICS HERE]",
    ].join("\n");

    const tip =
      "Paste real constraints (stack, deadline, team size, budget, non-goals, compliance, target metrics). These prompts are designed to return execution artifacts you can run immediately.";

    return {
      id,
      category: group.category,
      title: item.title,
      icon: group.icon,
      summary,
      details,
      prompt,
      tip,
    };
  })
);

const grid = document.getElementById("prompt-grid");
const searchInput = document.getElementById("search");
const categoryContainer = document.getElementById("category-filters");
let currentCategory = "All";
const modal = document.getElementById("prompt-modal");
const modalIcon = document.getElementById("modal-icon");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalDetails = document.getElementById("modal-details");
const modalPrompt = document.getElementById("modal-prompt");
const modalTip = document.getElementById("modal-tip");
const copyPromptButton = document.getElementById("copy-prompt");
const copyAllButton = document.getElementById("copy-all");
const shareLinkButton = document.getElementById("share-link");

const categories = ["All", ...new Set(prompts.map((prompt) => prompt.category))];

const renderCategories = () => {
  categoryContainer.innerHTML = categories
    .map(
      (category) => `
      <button 
        type="button" 
        class="filter-pill ${category === currentCategory ? "filter-pill--active" : ""}" 
        data-category="${category}"
        aria-pressed="${category === currentCategory}"
      >
        ${category}
      </button>
    `
    )
    .join("");
};

renderCategories();

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
};

const sharePrompt = async (prompt) => {
  const url = `${window.location.origin}${window.location.pathname}?prompt=${encodeURIComponent(prompt.id)}`;
  const shareData = {
    title: `ZeroGrav Prompt: ${prompt.title}`,
    text: `${prompt.category} · ${prompt.title}`,
    url,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return "Shared";
    } catch (error) {
      return "Share cancelled";
    }
  }

  const copied = await copyToClipboard(url);
  return copied ? "Link copied" : "Copy failed";
};

const renderCards = () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  const activeCategory = currentCategory;

  const filtered = prompts.filter((prompt) => {
    const matchesCategory = activeCategory === "All" || prompt.category === activeCategory;
    const matchesSearch =
      prompt.title.toLowerCase().includes(searchValue) ||
      prompt.summary.toLowerCase().includes(searchValue) ||
      prompt.category.toLowerCase().includes(searchValue);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered
    .map(
      (prompt) => `
        <article class="card" data-id="${prompt.id}" tabindex="0">
          <div class="card__icon">${prompt.icon}</div>
          <div class="card__tag">${prompt.category}</div>
          <div class="card__title">${prompt.title}</div>
          <div class="card__meta">${prompt.summary}</div>
          <div class="card__actions">
            <button class="ghost-button card__share" data-share-id="${prompt.id}" type="button">Share</button>
          </div>
        </article>
      `
    )
    .join("");

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="card" role="status">
        <div class="card__icon">😶‍🌫️</div>
        <div class="card__title">No prompts found</div>
        <div class="card__meta">Try a different search or category.</div>
      </div>
    `;
  }
};

const openModal = (prompt) => {
  modalIcon.textContent = prompt.icon;
  modalCategory.textContent = prompt.category;
  modalTitle.textContent = prompt.title;
  modalSummary.textContent = prompt.summary;
  modalDetails.textContent = prompt.details;
  modalPrompt.textContent = prompt.prompt;
  modalTip.textContent = prompt.tip;
  modal.setAttribute("aria-hidden", "false");
  copyPromptButton.dataset.prompt = prompt.prompt;
  copyPromptButton.textContent = "Copy prompt";
};

const closeModal = () => {
  modal.setAttribute("aria-hidden", "true");
};

searchInput.addEventListener("input", renderCards);
categoryContainer.addEventListener("click", (event) => {
  const pill = event.target.closest(".filter-pill");
  if (!pill) return;

  currentCategory = pill.dataset.category;
  renderCategories();
  renderCards();
});

grid.addEventListener("click", async (event) => {
  const shareButton = event.target.closest(".card__share");
  if (shareButton) {
    event.stopPropagation();
    const prompt = prompts.find((item) => item.id === shareButton.dataset.shareId);
    if (!prompt) return;
    const original = shareButton.textContent;
    shareButton.textContent = await sharePrompt(prompt);
    setTimeout(() => {
      shareButton.textContent = original;
    }, 1200);
    return;
  }

  const card = event.target.closest(".card");
  if (!card || card.dataset.id === undefined) return;
  const prompt = prompts.find((item) => item.id === card.dataset.id);
  if (prompt) openModal(prompt);
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const card = event.target.closest(".card");
  if (!card || !card.dataset.id) return;
  const prompt = prompts.find((item) => item.id === card.dataset.id);
  if (prompt) openModal(prompt);
});

modal.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

copyPromptButton.addEventListener("click", async () => {
  const promptText = copyPromptButton.dataset.prompt;
  const success = await copyToClipboard(promptText);
  copyPromptButton.textContent = success ? "Copied!" : "Copy failed";
});

copyAllButton.addEventListener("click", async () => {
  const allPrompts = prompts.map((prompt) => `${prompt.title}\n${prompt.prompt}`).join("\n\n");
  const success = await copyToClipboard(allPrompts);
  copyAllButton.textContent = success ? "All prompts copied" : "Copy failed";
});

shareLinkButton.addEventListener("click", async () => {
  const shareData = {
    title: "ZeroGrav Prompt Vault",
    text: "100 expert-level prompts for strategy, design, engineering, growth, and launch.",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      shareLinkButton.textContent = "Shared";
    } catch (error) {
      shareLinkButton.textContent = "Share cancelled";
    }
  } else {
    const success = await copyToClipboard(window.location.href);
    shareLinkButton.textContent = success ? "Link copied" : "Copy failed";
  }
});

const searchParams = new URLSearchParams(window.location.search);
const promptFromUrl = searchParams.get("prompt");
if (promptFromUrl) {
  const prompt = prompts.find((item) => item.id === promptFromUrl);
  if (prompt) openModal(prompt);
}

renderCards();
