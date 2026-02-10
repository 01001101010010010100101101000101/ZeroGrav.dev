/* ZeroGrav Prompt Vault — 250 Vibe Coding Prompts */
const promptBlueprints = [
  {
    category: "Planning",
    icon: "🧭",
    items: [
      { title: "What Are We Actually Building?", objective: "Get crystal clear on what you're building and why before you start prompting", inputs: "project idea, target user, deadline, constraints", deliverables: "Problem framing, success metrics, 2-week roadmap, anti-goals" },
      { title: "Scope Killer", objective: "Cut the fat and ship only what matters in v1", inputs: "feature ideas, timeline, team size", deliverables: "Must-have scope, explicit cuts, risk list" },
      { title: "Weekly Build Plan", objective: "Turn a loose idea into a day-by-day build schedule your AI can help execute", inputs: "project brief, available hours, dependencies", deliverables: "7-day plan with milestones and review checkpoints" },
      { title: "Assumption Buster", objective: "Surface the hidden assumptions that'll wreck your project mid-build", inputs: "project proposal, stakeholder expectations", deliverables: "Assumption table, validation tests, fallback plan" },
      { title: "Fork in the Road", objective: "Pick between competing directions with a clear decision framework", inputs: "options, weighted criteria, constraints", deliverables: "Scored matrix, recommendation, tradeoff summary" },
      { title: "Pre-Launch Vibe Check", objective: "Make sure everything's actually ready before you flip the switch", inputs: "release scope, traffic forecast, support capacity", deliverables: "Go/no-go checklist, ownership map, comms plan" },
      { title: "Risk Radar", objective: "Spot the landmines in your project before you step on them", inputs: "architecture summary, integrations, timeline", deliverables: "Top risks, mitigations, trigger thresholds" },
      { title: "Impact vs. Effort Sorter", objective: "Rank your backlog so you build the highest-value stuff first", inputs: "backlog list, KPIs, estimated effort", deliverables: "Prioritized backlog, sequencing rationale" },
      { title: "User Journey Blueprint", objective: "Map the path your user takes from landing to loving your product", inputs: "persona, core task, conversion goals", deliverables: "Journey map, friction points, milestone plan" },
      { title: "Pre-Mortem", objective: "Predict how your project could fail — before it actually does", inputs: "project plan, assumptions, dependencies", deliverables: "Failure scenarios, mitigations, owners" },
      { title: "Context Window Strategy", objective: "Plan exactly what context to feed your AI for each phase of the build", inputs: "project scope, file structure, AI tool", deliverables: "Context plan per phase, file groupings, token budgets" },
      { title: "Prompt Chain Planner", objective: "Design a sequence of prompts that build on each other for complex features", inputs: "feature spec, AI tool, complexity level", deliverables: "Ordered prompt chain, expected outputs, handoff points" },
      { title: "Tech Stack Picker", objective: "Choose the right stack for your project based on your goals and AI workflow", inputs: "project type, deployment target, team skills", deliverables: "Stack recommendation, tradeoffs, setup instructions" },
      { title: "Feature Priority Grid", objective: "Decide what to build now, later, or never with a clear visual framework", inputs: "feature list, user feedback, business goals", deliverables: "Priority grid, reasoning, cut list" },
      { title: "Solo Builder Roadmap", objective: "Plan a realistic timeline when you're a team of one building with AI", inputs: "project scope, available hours, AI tools", deliverables: "Phased roadmap, daily targets, burnout guardrails" },
      { title: "Project Kickoff Brief", objective: "Write a one-page doc that keeps your AI context sharp across sessions", inputs: "project goals, tech stack, constraints", deliverables: "Kickoff brief, context template, session starter prompt" },
      { title: "Feedback Loop Design", objective: "Plan how you'll collect, process, and act on user feedback fast", inputs: "product stage, user channels, team capacity", deliverables: "Feedback pipeline, triage rules, response templates" },
      { title: "Pivot Detector", objective: "Know when to change direction vs. push through the hard part", inputs: "current metrics, original goals, user signals", deliverables: "Pivot criteria, decision framework, sunk cost check" },
      { title: "Dependency Map", objective: "Figure out what blocks what before you waste time on the wrong task", inputs: "feature list, integrations, external services", deliverables: "Dependency graph, critical path, parallel tracks" },
      { title: "Build Budget Calculator", objective: "Estimate real costs — API calls, hosting, tools, and your time", inputs: "tech stack, expected usage, timeline", deliverables: "Cost breakdown, monthly projections, alert thresholds" },
      { title: "Milestone Definer", objective: "Set clear checkpoints so you know if you're on track or drifting", inputs: "project plan, timeline, success criteria", deliverables: "Milestone list, completion criteria, progress signals" },
      { title: "Integration Planner", objective: "Plan how to connect APIs, services, and third-party tools without chaos", inputs: "services to integrate, auth requirements, data flow", deliverables: "Integration map, auth strategy, error handling plan" },
      { title: "Competitor Teardown", objective: "Analyze what others built so you can build smarter and differentiate", inputs: "competitor list, your positioning, target audience", deliverables: "Feature comparison, gap analysis, differentiation angles" },
      { title: "MVP Feature Spec", objective: "Write a tight spec for each feature — just enough for your AI to build it right", inputs: "feature name, user story, acceptance criteria", deliverables: "Feature spec, edge cases, test scenarios" },
      { title: "Ship Date Lock-In", objective: "Set a hard launch date and reverse-engineer the path to get there", inputs: "target date, current progress, remaining scope", deliverables: "Reverse timeline, daily milestones, cut triggers" },
    ],
  },
  {
    category: "UI Design",
    icon: "🎨",
    items: [
      { title: "Hero Section That Hooks", objective: "Design a landing page hero that captures attention in 3 seconds flat", inputs: "brand positioning, audience pain point, primary CTA", deliverables: "Layout wireframe, copy variants, visual hierarchy notes" },
      { title: "Design Token System", objective: "Set up colors, spacing, and typography that scale without turning into chaos", inputs: "brand mood, accessibility goals, breakpoints", deliverables: "Color, spacing, and type tokens with usage guidance" },
      { title: "Card Layout System", objective: "Design flexible card components that look great with any type of content", inputs: "content types, interaction states, responsive needs", deliverables: "Card variants, spacing spec, state behavior" },
      { title: "Nav That Makes Sense", objective: "Build navigation your users can actually find things in — on any device", inputs: "site map, top user tasks, device breakdown", deliverables: "Nav architecture, labeling guide, mobile behavior" },
      { title: "CTA That Gets Clicks", objective: "Design call-to-action buttons people actually want to press", inputs: "offer, funnel stage, common objections", deliverables: "CTA copy variants, visual treatments, placement logic" },
      { title: "UI Polish Pass", objective: "Take a rough working interface and make it feel premium and intentional", inputs: "current screenshot, brand style, goals", deliverables: "Specific visual adjustments with rationale" },
      { title: "Empty State Magic", objective: "Design helpful empty, loading, and error states instead of blank screens", inputs: "feature context, expected user intent", deliverables: "State copy, visual cues, recovery actions" },
      { title: "Form That Doesn't Suck", objective: "Build forms people actually finish instead of rage-quit", inputs: "fields needed, validation rules, pain points", deliverables: "Field layout, inline validation, error UX spec" },
      { title: "Dashboard Layout", objective: "Structure complex data so users can make fast decisions at a glance", inputs: "key metrics, user role, refresh cadence", deliverables: "Hierarchy map, grouping logic, visual emphasis" },
      { title: "Micro-Animation Guide", objective: "Add subtle motion that makes your UI feel alive without being annoying", inputs: "core user actions, performance budget", deliverables: "Animation specs, timing curves, accessibility notes" },
      { title: "Dark Mode That Slaps", objective: "Create a dark theme that looks intentional — not just colors inverted", inputs: "light theme tokens, brand colors, contrast targets", deliverables: "Dark palette, component adjustments, toggle behavior" },
      { title: "Mobile-First Layout", objective: "Design for phones first, then scale up to desktop beautifully", inputs: "content priority, touch targets, breakpoints", deliverables: "Mobile wireframes, scaling rules, component adaptations" },
      { title: "Component Starter Kit", objective: "Build a reusable component library from scratch for your AI to use consistently", inputs: "project needs, design aesthetic, tech stack", deliverables: "Core component list, prop specs, style tokens" },
      { title: "Pricing Page That Converts", objective: "Design a pricing page that makes the right plan feel obvious", inputs: "plan tiers, key differentiators, target conversion", deliverables: "Page layout, plan comparison, CTA placement strategy" },
      { title: "Onboarding Screen Flow", objective: "Design welcome screens that get users to their first win fast", inputs: "core value prop, first action, user type", deliverables: "Screen sequence, copy, progress indicators" },
      { title: "Settings That Don't Overwhelm", objective: "Organize preferences so users find what they need in under 5 seconds", inputs: "settings inventory, user frequency, grouping logic", deliverables: "Settings architecture, section layout, search behavior" },
      { title: "Modal & Dialog System", objective: "Design pop-ups that inform and confirm without being annoying", inputs: "use cases, content types, dismissal behavior", deliverables: "Modal variants, sizing rules, focus management" },
      { title: "Toast & Notification System", objective: "Create alerts and confirmations that communicate clearly and disappear gracefully", inputs: "notification types, priority levels, duration", deliverables: "Toast designs, stacking behavior, accessibility rules" },
      { title: "Profile Page Layout", objective: "Design user profile pages that feel personal, useful, and editable", inputs: "user data fields, edit permissions, social features", deliverables: "Profile layout, edit states, avatar handling" },
      { title: "Data Table That Works", objective: "Make tables readable, sortable, and usable on both desktop and mobile", inputs: "data columns, sort/filter needs, row actions", deliverables: "Table layout, responsive strategy, interaction patterns" },
      { title: "Social Proof Section", objective: "Design testimonial and logo sections that build instant credibility", inputs: "testimonials, partner logos, metrics", deliverables: "Layout options, rotation behavior, trust hierarchy" },
      { title: "Footer That Works Harder", objective: "Turn your footer from dead space into a useful navigation and trust element", inputs: "site sections, legal links, social profiles", deliverables: "Footer layout, link grouping, responsive behavior" },
      { title: "Image Gallery Layout", objective: "Design responsive image layouts that look great on every screen size", inputs: "image types, quantity, interaction goals", deliverables: "Grid layout, lightbox behavior, lazy loading spec" },
      { title: "Sidebar Navigation", objective: "Build a sidebar that collapses gracefully and stays useful on mobile", inputs: "nav items, hierarchy depth, screen sizes", deliverables: "Sidebar states, collapse animation, mobile drawer" },
      { title: "Color Palette From Scratch", objective: "Create a full, cohesive color system starting from a single brand color", inputs: "primary brand color, mood, accessibility needs", deliverables: "Full palette, semantic mappings, dark mode variants" },
    ],
  },
  {
    category: "UX Flow",
    icon: "🧪",
    items: [
      { title: "First-Time User Magic", objective: "Design an onboarding flow that gets users to their aha moment in under 60 seconds", inputs: "core value prop, first action, blockers", deliverables: "Step flow, microcopy, instrumentation points" },
      { title: "Funnel Leak Finder", objective: "Diagnose and fix the exact spots where users are dropping off", inputs: "funnel metrics, user recordings, hypotheses", deliverables: "Friction map, prioritized experiments" },
      { title: "Zero-Confusion Task Flow", objective: "Design a task flow so obvious that users can't get lost", inputs: "starting context, success state, edge cases", deliverables: "State diagram, error handling, recovery UX" },
      { title: "Checkout Confidence Builder", objective: "Make your purchase flow feel safe, easy, and worth completing", inputs: "offer details, payment methods, objections", deliverables: "Flow rewrite, trust signals, reassurance copy" },
      { title: "Activation Nudge Sequence", objective: "Create milestone-based nudges that keep new users coming back", inputs: "product lifecycle, retention targets", deliverables: "Milestone logic, trigger messages, timing" },
      { title: "Cross-Device Handoff", objective: "Let users switch between phone, tablet, and desktop without losing their place", inputs: "entry points, device split, save points", deliverables: "Cross-device flow, sync strategy, continuity UX" },
      { title: "Graceful Error Recovery", objective: "Design fallback paths so errors feel like minor bumps, not dead ends", inputs: "common failure modes, data sensitivity", deliverables: "Recovery branches, retry logic, escalation rules" },
      { title: "Progressive Reveal Flow", objective: "Show complexity in layers so new users aren't overwhelmed by power features", inputs: "feature tiers, user expertise levels", deliverables: "Disclosure sequence, context triggers, unlock logic" },
      { title: "Search-to-Action Pipeline", objective: "Optimize the path from search to the action your user actually wants to take", inputs: "search terms, target actions, content types", deliverables: "Intent grouping, result ranking, action shortcuts" },
      { title: "Retention Loop Builder", objective: "Create natural engagement loops that bring users back without desperate notifications", inputs: "core value loop, channels, user habits", deliverables: "Loop design, cadence rules, opt-out guardrails" },
      { title: "Social Login Flow", objective: "Design OAuth and social sign-in that just works — no friction, no confusion", inputs: "auth providers, data needs, fallback flow", deliverables: "Login flow, permission prompts, error states" },
      { title: "Free-to-Paid Upgrade Path", objective: "Guide free users toward paid plans without being pushy or annoying", inputs: "free vs paid features, user behavior triggers", deliverables: "Upgrade flow, paywall design, value messaging" },
      { title: "Multi-Step Wizard", objective: "Break a complex process into digestible steps that feel fast and easy", inputs: "total steps, data dependencies, save behavior", deliverables: "Step flow, progress indicator, back/skip logic" },
      { title: "Invite & Share Flow", objective: "Make it dead simple for happy users to invite others and share your product", inputs: "referral incentive, share channels, tracking", deliverables: "Share flow, invite copy, viral mechanics" },
      { title: "Notification Preferences", objective: "Let users control what reaches them and what doesn't — without a PhD in settings", inputs: "notification types, channels, defaults", deliverables: "Preference UI, granularity levels, smart defaults" },
      { title: "Password Reset Rescue", objective: "Build a forgot-password flow that actually helps instead of making people rage", inputs: "auth system, verification methods, security level", deliverables: "Reset flow, verification steps, success confirmation" },
      { title: "In-App Feedback Loop", objective: "Collect user feedback right where they're using your product", inputs: "feedback types, trigger points, response plan", deliverables: "Feedback widget, question flow, response routing" },
      { title: "Content Discovery Flow", objective: "Help users find the right content at the right time without endless scrolling", inputs: "content types, user intent signals, volume", deliverables: "Discovery patterns, recommendation logic, filters" },
      { title: "Cancellation Save Flow", objective: "Turn cancellation attempts into retention wins with empathy, not guilt trips", inputs: "churn reasons, save offers, exit survey", deliverables: "Cancel flow, save offers, exit data capture" },
      { title: "Waitlist & Early Access", objective: "Build hype and collect signups before your product is even ready", inputs: "launch timeline, value prop, audience", deliverables: "Waitlist page, position reveal, drip sequence" },
      { title: "Interactive Tutorial", objective: "Design learn-by-doing tutorials that teach users while they accomplish real tasks", inputs: "key features, learning goals, user skill level", deliverables: "Tutorial steps, tooltip sequence, completion rewards" },
      { title: "Collaborative Editing Flow", objective: "Handle multi-user editing without conflicts, confusion, or lost work", inputs: "data types, user roles, conflict scenarios", deliverables: "Collab model, conflict resolution, presence indicators" },
      { title: "File Upload Experience", objective: "Make file uploads feel fast, safe, and transparent with progress and validation", inputs: "file types, size limits, processing needs", deliverables: "Upload flow, progress UI, error handling" },
      { title: "Drag-and-Drop Builder", objective: "Build intuitive reorder and drag-drop interactions that feel natural on any device", inputs: "draggable items, drop zones, touch support", deliverables: "Interaction spec, visual feedback, accessibility fallback" },
      { title: "Power User Shortcuts", objective: "Add keyboard shortcuts and quick actions that make power users fall in love", inputs: "frequent actions, existing shortcuts, platform conventions", deliverables: "Shortcut map, command palette design, discovery hints" },
    ],
  },
  {
    category: "Debugging",
    icon: "🛠️",
    items: [
      { title: "Bug Hunt: Find the Root Cause", objective: "Isolate what's actually broken using evidence and logic, not random guessing", inputs: "bug report, logs, suspected files", deliverables: "Hypothesis ladder, validation steps, root cause" },
      { title: "Regression Detective", objective: "Find which recent change broke things that were working fine yesterday", inputs: "expected behavior, recent changes, timeline", deliverables: "Bisect strategy, minimal reproduction, fix" },
      { title: "API Failure Autopsy", objective: "Diagnose end-to-end API failures from request to response systematically", inputs: "request samples, status codes, server logs", deliverables: "Failure taxonomy, root causes, fixes" },
      { title: "State Mismatch Fixer", objective: "Fix when your UI shows stale, wrong, or out-of-sync data", inputs: "state model, events, observed mismatch", deliverables: "State timeline, sync fixes, prevention" },
      { title: "Speed Profiler", objective: "Find and squash the slowest parts of your app with profiling data", inputs: "slow path, metrics, user complaints", deliverables: "Profiling plan, bottleneck fixes, benchmarks" },
      { title: "Race Condition Resolver", objective: "Fix the maddening bugs that only happen sometimes due to timing", inputs: "async workflows, shared resources, symptoms", deliverables: "Timing scenarios, lock strategy, fix" },
      { title: "Security Hole Patcher", objective: "Respond safely and quickly to a suspected security vulnerability", inputs: "vulnerability description, blast radius, urgency", deliverables: "Containment, patch, verification checklist" },
      { title: "Data Corruption Repair", objective: "Recover from corrupted or inconsistent data without making things worse", inputs: "schema, corruption examples, backup status", deliverables: "Repair plan, validation queries, safeguards" },
      { title: "Cross-Browser Bug Squash", objective: "Fix the bug that only shows up in one specific browser environment", inputs: "affected browsers, repro steps, expected behavior", deliverables: "Compatibility matrix, polyfill, targeted fix" },
      { title: "Crash Loop Breaker", objective: "Stop your app from repeatedly crashing and get it stable again", inputs: "stack traces, memory profile, recent deploys", deliverables: "Immediate stabilizers, long-term prevention" },
      { title: "Console Error Decoder", objective: "Turn cryptic error messages and stack traces into clear actionable fixes", inputs: "error message, stack trace, context", deliverables: "Error explanation, fix steps, prevention" },
      { title: "Memory Leak Tracker", objective: "Find and plug memory leaks before they tank your app's performance", inputs: "memory profile, growth pattern, suspected area", deliverables: "Leak source, cleanup fix, monitoring" },
      { title: "Auth Flow Debugger", objective: "Fix login, token refresh, and session issues that lock users out", inputs: "auth system, token flow, failure symptoms", deliverables: "Auth timeline, token validation, session fix" },
      { title: "Deploy Failure Triage", objective: "Figure out why your deployment failed and get it fixed and shipped", inputs: "deploy logs, pipeline config, recent changes", deliverables: "Failure cause, fix, deploy retry plan" },
      { title: "CSS Layout Detective", objective: "Solve mysterious layout shifts, overflow bugs, and alignment nightmares", inputs: "screenshot, expected layout, device/browser", deliverables: "Layout fix, overflow solution, responsive check" },
      { title: "Third-Party SDK Conflict", objective: "Debug when someone else's library or SDK is breaking your app", inputs: "SDK version, conflict symptoms, integration code", deliverables: "Conflict diagnosis, isolation fix, version strategy" },
      { title: "Works on My Machine Fix", objective: "Fix environment-specific bugs that work locally but fail in production", inputs: "local vs prod config, env variables, runtime", deliverables: "Environment diff, config fix, parity checklist" },
      { title: "Async/Await Trap Finder", objective: "Debug promise chains and async timing issues that cause silent failures", inputs: "async code, expected flow, actual behavior", deliverables: "Promise chain fix, error handling, flow diagram" },
      { title: "Database Connection Fix", objective: "Fix connection pool exhaustion, timeouts, and query failures", inputs: "connection config, error logs, load pattern", deliverables: "Pool tuning, timeout config, retry strategy" },
      { title: "Build Pipeline Fixer", objective: "Diagnose and repair CI/CD builds that fail mysteriously", inputs: "build logs, pipeline config, recent changes", deliverables: "Build fix, cache strategy, pipeline optimization" },
      { title: "CORS & Network Errors", objective: "Solve cross-origin, mixed content, and network request failures once and for all", inputs: "request details, server config, error messages", deliverables: "CORS config, proxy setup, header fixes" },
      { title: "Type Error Untangler", objective: "Fix runtime type mismatches, null references, and undefined property access", inputs: "error trace, data flow, expected types", deliverables: "Type fix, null guards, validation layer" },
      { title: "Hot Reload Rescue", objective: "Fix dev server hot reload issues that kill your iteration speed", inputs: "dev server config, file watchers, error output", deliverables: "Config fix, watcher optimization, cache clear" },
      { title: "API Rate Limit Handler", objective: "Debug and gracefully handle API throttling from third-party services", inputs: "API docs, rate limits, current usage", deliverables: "Rate limit strategy, queuing, retry logic" },
      { title: "Log Reading Masterclass", objective: "Extract actionable signal from noisy, overwhelming server and app logs", inputs: "log samples, known issues, search goals", deliverables: "Log parsing strategy, key patterns, alert rules" },
    ],
  },
  {
    category: "Refactoring",
    icon: "🧱",
    items: [
      { title: "Monolith Breakup", objective: "Split a tangled codebase into clean, manageable pieces your AI can work with", inputs: "current structure, pain points, dependencies", deliverables: "Module boundaries, migration steps, test strategy" },
      { title: "Function Slim-Down", objective: "Refactor oversized functions into focused, testable units", inputs: "code snippet, test coverage, complexity", deliverables: "Extraction plan, naming rationale, test updates" },
      { title: "State Management Overhaul", objective: "Redesign your state model so it's predictable and debuggable", inputs: "current state shape, bugs, update patterns", deliverables: "New state model, migration strategy, selectors" },
      { title: "API Layer Cleanup", objective: "Unify scattered API calls into a clean, shared client architecture", inputs: "current call sites, auth strategy, error handling", deliverables: "Shared client design, migration plan, error taxonomy" },
      { title: "Component Extraction", objective: "Pull reusable UI building blocks from repeated code across your app", inputs: "screens with repetition, prop patterns", deliverables: "Component catalog, prop interfaces, adoption plan" },
      { title: "Name Everything Better", objective: "Improve code readability by naming things what they actually do", inputs: "code area, domain terminology, conventions", deliverables: "Rename map, refactor sequence, linter rules" },
      { title: "Error Handling Unification", objective: "Standardize how your entire app handles, reports, and recovers from errors", inputs: "services, current error patterns, user impact", deliverables: "Error taxonomy, handler patterns, implementation guide" },
      { title: "CSS Architecture Reset", objective: "Move from spaghetti styles to a scalable, maintainable CSS system", inputs: "style debt examples, target architecture", deliverables: "Token system, component styles, migration steps" },
      { title: "Dependency Detangler", objective: "Reduce coupling between modules that shouldn't know about each other", inputs: "dependency graph, import chains, circular refs", deliverables: "Decoupling plan, interface contracts, risk control" },
      { title: "Legacy Code Modernizer", objective: "Update old code patterns without breaking working behavior", inputs: "legacy area, test coverage, constraints", deliverables: "Phased modernization plan, compatibility guards" },
      { title: "File Structure Reorg", objective: "Reorganize your project so files are where you'd logically expect them", inputs: "current structure, naming convention, team consensus", deliverables: "New structure, move plan, import updates" },
      { title: "Utility Library Builder", objective: "Extract common helper functions into a reusable utility module", inputs: "duplicated patterns, usage frequency", deliverables: "Utility catalog, API design, test suite" },
      { title: "Config Consolidation", objective: "Merge scattered config files into a single source of truth", inputs: "config files, environment variations, secrets", deliverables: "Unified config, env management, validation" },
      { title: "Test Suite Overhaul", objective: "Make your tests faster, more reliable, and actually useful", inputs: "current test suite, flaky tests, coverage gaps", deliverables: "Test strategy, fixture cleanup, CI optimization" },
      { title: "Database Schema Cleanup", objective: "Normalize messy schemas and fix naming inconsistencies across tables", inputs: "current schema, naming issues, data patterns", deliverables: "Schema migration, naming conventions, index review" },
      { title: "Route Architecture Redesign", objective: "Restructure your API or page routes for clarity, consistency, and scale", inputs: "current routes, naming patterns, versioning", deliverables: "Route map, migration plan, redirect strategy" },
      { title: "Prop Drilling Elimination", objective: "Replace deep prop chains with proper state management patterns", inputs: "component tree, prop depth, data flow", deliverables: "State management solution, context design, migration" },
      { title: "Magic Number Extraction", objective: "Replace hard-coded values scattered through your code with named constants", inputs: "code areas, magic values, business rules", deliverables: "Constants file, naming conventions, replacement list" },
      { title: "Callback Hell Escape", objective: "Convert nested callback soup into clean async/await patterns", inputs: "callback code, error handling, promise support", deliverables: "Async rewrite, error chain, test updates" },
      { title: "Global State Reduction", objective: "Minimize global state by scoping data to where it's actually needed", inputs: "global store shape, consumer analysis, side effects", deliverables: "Scoping plan, local state candidates, migration" },
      { title: "Dead Code Purge", objective: "Find and safely remove code that's no longer used or reachable", inputs: "codebase, coverage reports, feature flags", deliverables: "Dead code inventory, safe removal order, verification" },
      { title: "Import Graph Cleanup", objective: "Fix circular imports, simplify dependency chains, and speed up builds", inputs: "import graph, circular dependencies, build times", deliverables: "Dependency restructure, barrel file strategy" },
      { title: "TypeScript Migration", objective: "Add TypeScript types to an untyped JavaScript project incrementally", inputs: "JS codebase, priority modules, team comfort", deliverables: "Migration plan, strict mode path, type definitions" },
      { title: "Middleware Pipeline Refactor", objective: "Clean up tangled middleware chains into a clear, ordered pipeline", inputs: "middleware stack, execution order, side effects", deliverables: "Pipeline redesign, ordering rationale, test plan" },
      { title: "Environment Config Cleanup", objective: "Organize and document all environment variables so nothing is mysterious", inputs: "env files, deployment targets, secret management", deliverables: "Env documentation, validation schema, defaults" },
    ],
  },
  {
    category: "Performance",
    icon: "⚡",
    items: [
      { title: "Core Web Vitals Fix", objective: "Improve your LCP, CLS, and INP scores so Google stops penalizing you", inputs: "current Lighthouse scores, stack, slowest pages", deliverables: "Optimization backlog ranked by expected impact" },
      { title: "Bundle Size Diet", objective: "Shrink your JavaScript and CSS payloads so your app loads fast everywhere", inputs: "bundle report, target devices, current load time", deliverables: "Code split plan, tree-shaking fixes, asset optimization" },
      { title: "Database Query Speedup", objective: "Make your slowest queries fast even under real-world load", inputs: "slow query logs, schema, index status", deliverables: "Index recommendations, query rewrites, benchmarks" },
      { title: "Caching Strategy", objective: "Design layered caching that's both fast and correct — no stale data surprises", inputs: "data volatility, SLA targets, user regions", deliverables: "Cache keys, TTL rules, invalidation strategy" },
      { title: "Render Performance Boost", objective: "Cut expensive re-renders that make your UI feel sluggish and unresponsive", inputs: "component tree, profiler output, interaction lag", deliverables: "Memoization plan, state partition strategy" },
      { title: "Background Job Optimizer", objective: "Increase job queue throughput without dropping or duplicating work", inputs: "job types, failure rates, processing time", deliverables: "Worker scaling, retry policy, monitoring setup" },
      { title: "Image Optimization Pipeline", objective: "Serve images that are sharp and tiny — automatically at every breakpoint", inputs: "image inventory, formats, CDN setup", deliverables: "Responsive image config, format strategy, lazy loading" },
      { title: "App Startup Accelerator", objective: "Make your app load and become interactive as fast as possible", inputs: "boot sequence, init scripts, critical path", deliverables: "Critical-path reduction, async loading strategy" },
      { title: "Server Scaling Blueprint", objective: "Plan how your infrastructure handles 10x traffic without breaking a sweat", inputs: "traffic history, release events, current capacity", deliverables: "Scaling model, auto-scaling triggers, cost estimates" },
      { title: "Performance Regression Guard", objective: "Catch performance regressions in CI before they reach real users", inputs: "critical user journeys, acceptable thresholds", deliverables: "Performance test suite, CI gate configuration" },
      { title: "Lazy Loading Strategy", objective: "Load only what's needed, when it's needed — nothing wasted", inputs: "route structure, component sizes, user patterns", deliverables: "Lazy loading map, suspense boundaries, fallback UI" },
      { title: "API Response Time Tuner", objective: "Reduce your server response times from sluggish to snappy", inputs: "slow endpoints, profiling data, database load", deliverables: "Optimization plan, N+1 fixes, query batching" },
      { title: "Font Loading Optimizer", objective: "Eliminate flash of unstyled text and speed up font rendering", inputs: "font files, loading strategy, fallback fonts", deliverables: "Font display config, preload tags, subset strategy" },
      { title: "Infinite Scroll Performance", objective: "Handle massive lists without killing the browser or draining memory", inputs: "list size, item complexity, scroll behavior", deliverables: "Virtualization plan, recycling strategy, placeholder design" },
      { title: "WebSocket Efficiency", objective: "Optimize real-time connections for speed, reliability, and battery life", inputs: "message types, frequency, reconnection needs", deliverables: "Protocol optimization, heartbeat config, compression" },
      { title: "Build Time Reducer", objective: "Make your dev and CI builds finish in seconds instead of painful minutes", inputs: "build config, dependency count, cache status", deliverables: "Build optimization, caching, parallelization" },
      { title: "CDN Configuration", objective: "Set up content delivery so your app is fast from anywhere in the world", inputs: "static assets, API responses, user geography", deliverables: "CDN setup, cache headers, edge rules" },
      { title: "Memory Usage Optimizer", objective: "Reduce RAM consumption so your app runs smoothly on budget devices too", inputs: "memory profile, growth patterns, component lifecycle", deliverables: "Leak fixes, cleanup patterns, monitoring setup" },
      { title: "Smooth Animation at 60fps", objective: "Make all animations and transitions buttery smooth without any jank", inputs: "animation list, current frame rate, CSS vs JS approach", deliverables: "GPU-accelerated rewrites, will-change strategy, fallbacks" },
      { title: "Search & Filter Speedup", objective: "Make in-app search and filtering feel instant even with large datasets", inputs: "data size, search fields, current latency", deliverables: "Indexing strategy, debounce config, result caching" },
      { title: "Prefetching Strategy", objective: "Anticipate what users need next and start loading it before they click", inputs: "navigation patterns, route structure, data dependencies", deliverables: "Prefetch rules, priority hints, bandwidth guardrails" },
      { title: "Network Request Batcher", objective: "Combine multiple API calls into fewer roundtrips to cut latency", inputs: "request patterns, API structure, batching support", deliverables: "Batching strategy, request deduplication, timeout config" },
      { title: "Service Worker Setup", objective: "Add offline-first caching with service workers for instant repeat visits", inputs: "cache strategy, update frequency, offline needs", deliverables: "Service worker config, cache rules, update notifications" },
      { title: "Third-Party Script Audit", objective: "Find and fix slow external scripts that are dragging your performance down", inputs: "script inventory, load timing, business necessity", deliverables: "Script report card, async loading plan, removal candidates" },
      { title: "Mobile Performance Audit", objective: "Optimize specifically for slower devices, spotty networks, and battery life", inputs: "target devices, network conditions, current metrics", deliverables: "Mobile optimization plan, reduced payload strategy" },
    ],
  },
  {
    category: "Accessibility",
    icon: "♿",
    items: [
      { title: "Quick Accessibility Audit", objective: "Check your interface against WCAG essentials and find the biggest gaps fast", inputs: "key screens, components, target WCAG level", deliverables: "Gap list with severity, prioritized fixes" },
      { title: "Keyboard Navigation Fix", objective: "Make every part of your app fully usable without a mouse", inputs: "interactive elements, modals, menus, forms", deliverables: "Tab order, focus states, escape key behavior" },
      { title: "Screen Reader Optimization", objective: "Ensure your app makes complete sense when read aloud by assistive tech", inputs: "HTML structure, ARIA usage, dynamic content", deliverables: "Landmark fixes, role corrections, live region setup" },
      { title: "Color Contrast Fix", objective: "Fix contrast issues across your UI without sacrificing your brand aesthetic", inputs: "color palette, component states, brand guidelines", deliverables: "Updated tokens with contrast ratios proving compliance" },
      { title: "Form Accessibility Pass", objective: "Make every form in your app usable by everyone regardless of ability", inputs: "form markup, validation rules, error states", deliverables: "Label associations, hint text, error announcements" },
      { title: "Reduced Motion Mode", objective: "Respect user motion preferences gracefully without breaking your design", inputs: "animations, transitions, scroll effects", deliverables: "Reduced-motion alternatives, CSS media queries" },
      { title: "Chart & Data Viz Accessibility", objective: "Make data visualizations understandable for users who can't rely on color alone", inputs: "chart types, data goals, color usage", deliverables: "Patterns, labels, textual alternatives" },
      { title: "Accessibility QA Checklist", objective: "Create a repeatable QA protocol you can run before every single release", inputs: "app sections, release cadence, testing tools", deliverables: "Manual + automated QA checklist with pass/fail criteria" },
      { title: "Assistive Tech Test Plan", objective: "Plan testing across screen readers, magnifiers, and voice control tools", inputs: "target audience, browser/OS matrix, support policy", deliverables: "Priority matrix, expected behaviors, test scripts" },
      { title: "Plain Language Rewrite", objective: "Simplify complex copy so it's clear to everyone, not just domain experts", inputs: "copy samples, user literacy context, tone goals", deliverables: "Simplified copy with reading level verification" },
      { title: "Focus Management System", objective: "Control keyboard focus correctly during modals, transitions, and dynamic updates", inputs: "interactive patterns, modal behavior, route changes", deliverables: "Focus trap logic, restore behavior, skip links" },
      { title: "Alt Text Strategy", objective: "Write meaningful, useful image descriptions at scale across your entire app", inputs: "image types, context, decorative vs informative", deliverables: "Alt text guidelines, templates, audit checklist" },
      { title: "ARIA Labels Audit", objective: "Find and fix misused, missing, or redundant ARIA attributes throughout your app", inputs: "component inventory, current ARIA usage", deliverables: "ARIA corrections, removal candidates, testing steps" },
      { title: "Skip Navigation Links", objective: "Add jump links so keyboard users can bypass repetitive navigation instantly", inputs: "page structure, landmark regions, repeat patterns", deliverables: "Skip link implementation, visual design, focus behavior" },
      { title: "Touch Target Sizing", objective: "Make all interactive elements big enough for comfortable, reliable tapping", inputs: "button inventory, current sizes, platform guidelines", deliverables: "Size audit, minimum targets, spacing adjustments" },
      { title: "Error Announcement System", objective: "Ensure form errors and alerts are properly announced to screen reader users", inputs: "error patterns, validation timing, ARIA live regions", deliverables: "Announcement strategy, role assignments, timing rules" },
      { title: "Accessible Dropdown Menu", objective: "Build dropdown menus that work correctly with keyboards and screen readers", inputs: "menu structure, nested levels, interaction model", deliverables: "ARIA roles, keyboard patterns, focus management" },
      { title: "Video Accessibility Pack", objective: "Add captions, transcripts, and descriptions to make video content accessible", inputs: "video inventory, languages, auto-caption quality", deliverables: "Caption files, transcript format, player requirements" },
      { title: "Readable Typography Scale", objective: "Set font sizes, line heights, and spacing so text is comfortable to read for everyone", inputs: "current typography, body text size, device targets", deliverables: "Type scale, line height ratios, responsive adjustments" },
      { title: "Color-Blind Friendly Theme", objective: "Design a color system that works for all types of color vision deficiency", inputs: "current palette, color-blind simulation results", deliverables: "Updated palette, pattern alternatives, testing proof" },
      { title: "Live Validation Accessibility", objective: "Make inline form validation accessible and clearly announced in real-time", inputs: "validation rules, timing, error/success patterns", deliverables: "Announcement timing, ARIA integration, focus behavior" },
      { title: "Accessible Data Tables", objective: "Add proper headers, navigation, and structure to complex data tables", inputs: "table structure, data relationships, sorting behavior", deliverables: "Header markup, caption text, keyboard navigation" },
      { title: "Voice Control Support", objective: "Make your app fully navigable and usable via voice commands", inputs: "interactive elements, labeling, voice control software", deliverables: "Label audit, command mapping, testing protocol" },
      { title: "Reading Order Check", objective: "Ensure the DOM order matches the visual reading order for assistive tech users", inputs: "page layout, CSS order/position, flexbox/grid usage", deliverables: "Order audit, DOM restructure, visual parity check" },
      { title: "Accessibility Statement Page", objective: "Create a public transparency page about your accessibility commitment", inputs: "current compliance level, known issues, contact info", deliverables: "Statement template, conformance claims, feedback channel" },
    ],
  },
  {
    category: "Content",
    icon: "✍️",
    items: [
      { title: "Brand Story Builder", objective: "Craft a clear origin story that makes people genuinely care about what you're building", inputs: "founder story, product value, audience identity", deliverables: "Narrative framework, proof points, emotional arc" },
      { title: "Hero Copy That Converts", objective: "Write headlines and subheads that hook the right visitors and repel the wrong ones", inputs: "audience pain points, offer, primary CTA", deliverables: "Headline/subhead/CTA variants with conversion rationale" },
      { title: "Feature Explainer Framework", objective: "Describe features by the problems they solve — not the code behind them", inputs: "feature list, user jobs-to-be-done", deliverables: "Benefit-led descriptions with before/after examples" },
      { title: "Welcome Email Sequence", objective: "Write activation-focused emails that actually get new users to come back", inputs: "activation goal, timeline, brand tone", deliverables: "5-email sequence with hooks, CTAs, and send timing" },
      { title: "Docs That Don't Suck", objective: "Rewrite your documentation so people can follow it on the very first read", inputs: "existing docs, common confusion points", deliverables: "Restructured docs with examples, warnings, and quick starts" },
      { title: "Error Message Makeover", objective: "Turn scary red error messages into helpful nudges that guide users to the fix", inputs: "error inventory, common causes, user context", deliverables: "Rewritten messages with clear next-step actions" },
      { title: "Changelog Transformer", objective: "Turn developer commit messages into release notes users actually want to read", inputs: "changelog entries, audience type", deliverables: "User-friendly release notes grouped by impact" },
      { title: "Landing Page Storyline", objective: "Build a persuasive narrative arc for your entire landing page top to bottom", inputs: "offer, social proof, common objections", deliverables: "Section-by-section storyline with copy direction" },
      { title: "FAQ Generator", objective: "Create a trust-building FAQ set from real user objections and concerns", inputs: "common questions, policies, sales objections", deliverables: "Prioritized FAQ with concise, honest answers" },
      { title: "Case Study Writer", objective: "Write a compelling customer success story backed by real before/after metrics", inputs: "customer context, metrics, process", deliverables: "Story arc with measurable outcomes and pull quotes" },
      { title: "Product Hunt Launch Copy", objective: "Write your tagline, description, and first comment for a killer Product Hunt launch", inputs: "product value prop, target audience, launch goals", deliverables: "Tagline, description, maker comment, day-one strategy" },
      { title: "Twitter/X Thread Builder", objective: "Turn your product story or hard-won insight into a share-worthy thread", inputs: "core message, proof points, CTA", deliverables: "Thread structure, individual tweets, hook and closer" },
      { title: "README That Sells", objective: "Write a GitHub README that makes developers want to clone your project immediately", inputs: "project description, install steps, demo link", deliverables: "README with badges, quick start, screenshots, contributing guide" },
      { title: "Technical Blog Post", objective: "Write a blog post that drives traffic, builds trust, and shows genuine expertise", inputs: "topic, target keywords, audience level", deliverables: "Post structure, draft sections, SEO optimization notes" },
      { title: "Microcopy Polish Pass", objective: "Improve every button label, tooltip, and placeholder text across your entire app", inputs: "UI screenshots, current copy, interaction context", deliverables: "Revised microcopy with clarity improvements and personality" },
      { title: "Social Media Bio Pack", objective: "Write compelling bios for every platform that make people want to follow you", inputs: "brand identity, platforms, target audience", deliverables: "Platform-specific bios, link-in-bio strategy" },
      { title: "App Store Description", objective: "Write app store copy that converts casual browsers into enthusiastic downloaders", inputs: "app features, competitive landscape, screenshots", deliverables: "Title, subtitle, full description, keyword list" },
      { title: "Comparison Page Copy", objective: "Write an honest competitor comparison that positions you as the smart choice", inputs: "competitors, feature differences, target audience", deliverables: "Comparison layout, feature-by-feature copy, fairness guidelines" },
      { title: "Testimonial Request Template", objective: "Get better testimonials from happy users by asking the right questions", inputs: "customer segments, desired proof points", deliverables: "Request email template, question prompts, follow-up sequence" },
      { title: "Newsletter Welcome Series", objective: "Convert new email subscribers into engaged readers from their very first email", inputs: "newsletter topic, send frequency, reader goals", deliverables: "3-email welcome series with hooks and expectations" },
      { title: "Feature Announcement", objective: "Share new features in a way that gets users genuinely excited to try them", inputs: "feature details, user benefit, release date", deliverables: "Announcement copy for email, social, and in-app notification" },
      { title: "Community Guidelines", objective: "Write community rules that encourage great behavior without sounding lawyerly", inputs: "community platform, expected behavior, moderation plan", deliverables: "Guidelines document, real examples, enforcement policy" },
      { title: "API Quickstart Guide", objective: "Write a getting-started guide developers can follow without asking questions", inputs: "API endpoints, auth flow, common use cases", deliverables: "Quickstart with code samples, curl examples, error handling" },
      { title: "Pitch Deck Script", objective: "Write concise talking points for each slide of your investor or partner pitch", inputs: "pitch deck slides, audience, funding ask", deliverables: "Slide-by-slide script, timing notes, objection rebuttals" },
      { title: "About Page Story", objective: "Write an about page that builds real credibility and genuine human connection", inputs: "founder story, mission, team, values", deliverables: "About page copy, photo direction, trust-building elements" },
    ],
  },
  {
    category: "Marketing",
    icon: "📣",
    items: [
      { title: "Ideal Customer Profile", objective: "Define exactly who your product is for — and who it's definitely not for", inputs: "market, product, pricing, current users", deliverables: "ICP document, persona cards, messaging angles" },
      { title: "Offer Stack Design", objective: "Build an irresistible offer bundle without giving away the entire farm", inputs: "product tiers, goals, margin limits", deliverables: "Offer stack, bonuses, risk-reversal tactics" },
      { title: "Channel Prioritizer", objective: "Pick your growth channels based on data and ROI potential, not industry hype", inputs: "budget, team bandwidth, goals, audience location", deliverables: "Ranked channel plan with test budgets and timelines" },
      { title: "Campaign Brief Writer", objective: "Create a campaign brief your team or AI assistant can actually execute on", inputs: "objective, segment, channel, budget", deliverables: "Brief with hooks, asset specs, KPIs, and timeline" },
      { title: "Ad Creative Generator", objective: "Generate high-performing ad concepts with scroll-stopping hooks and copy", inputs: "audience pain points, proof points, platform", deliverables: "Ad concepts with copy variants and visual direction" },
      { title: "SEO Content Cluster Map", objective: "Build topic authority with strategically interconnected content that ranks", inputs: "domain focus, target keywords, search intent", deliverables: "Cluster map, pillar page strategy, internal linking plan" },
      { title: "Social Proof Playbook", objective: "Systematically collect and deploy trust signals across your entire funnel", inputs: "customer wins, testimonials, permission constraints", deliverables: "Proof collection pipeline, placement strategy, templates" },
      { title: "Lifecycle Email Strategy", objective: "Design messaging that evolves with your user's journey from signup to advocate", inputs: "user lifecycle stages, CRM events, conversion goals", deliverables: "Trigger map, email sequence per stage, timing rules" },
      { title: "Referral Loop Builder", objective: "Create a referral mechanism that compounds growth without gaming or abuse", inputs: "user incentives, sharing mechanics, abuse risks", deliverables: "Referral flow, reward structure, anti-fraud guardrails" },
      { title: "Attribution Model Setup", objective: "Build a practical attribution model you'll actually use for real decisions", inputs: "marketing channels, tooling, conversion events", deliverables: "Model definition, tracking setup, reporting dashboard" },
      { title: "Launch Day Checklist", objective: "Coordinate a high-impact product launch across all channels simultaneously", inputs: "launch date, channels, audience, assets ready", deliverables: "Hour-by-hour launch plan, channel checklist, contingency plan" },
      { title: "Content Calendar Builder", objective: "Plan a full month of quality content without burning out or running dry", inputs: "content pillars, posting frequency, platforms", deliverables: "30-day calendar, batching strategy, repurposing plan" },
      { title: "Influencer Outreach Plan", objective: "Find and pitch creators who reach your target audience authentically", inputs: "audience profile, budget, content type", deliverables: "Creator shortlist, outreach templates, deal structure" },
      { title: "Email Subject Line Lab", objective: "Write and test email subject lines that dramatically improve open rates", inputs: "email type, audience, current open rates", deliverables: "Subject line variants, A/B test plan, winning patterns" },
      { title: "Community Seeding Strategy", objective: "Build an engaged community from zero using genuine conversations and value", inputs: "platform, niche, value proposition, capacity", deliverables: "Seeding plan, conversation starters, growth milestones" },
      { title: "Viral Mechanic Design", objective: "Build shareability into your product's core experience — not just a share button", inputs: "core user action, network effects, sharing triggers", deliverables: "Viral loop design, k-factor targets, implementation plan" },
      { title: "Churn Prevention Emails", objective: "Send the right message at the right moment when users are about to leave", inputs: "churn signals, user segments, win-back offers", deliverables: "Trigger definitions, email sequence, save offer tiers" },
      { title: "Lead Magnet Creator", objective: "Design a freebie so valuable it magnetically attracts your ideal customer", inputs: "target audience, pain points, product connection", deliverables: "Lead magnet concept, landing page copy, delivery flow" },
      { title: "Webinar Funnel Design", objective: "Plan a webinar that genuinely educates and naturally converts attendees", inputs: "topic, audience, product tie-in, proposed date", deliverables: "Webinar outline, registration page copy, follow-up sequence" },
      { title: "Partnership Outreach", objective: "Craft partnership pitches that actually get responses from busy founders", inputs: "target partners, mutual value, collaboration ideas", deliverables: "Outreach template, value proposition, proposed terms" },
      { title: "User-Generated Content Plan", objective: "Get your users creating authentic content that sells better than any ad", inputs: "product type, user community, sharing platforms", deliverables: "UGC prompts, incentive structure, curation workflow" },
      { title: "Waitlist Conversion Plan", objective: "Turn waitlist signups into eager paying customers the moment you launch", inputs: "waitlist size, launch timeline, pricing strategy", deliverables: "Drip email sequence, early-bird offer, launch day plan" },
      { title: "Growth Experiment Tracker", objective: "Run and measure growth experiments systematically instead of guessing", inputs: "growth goals, experiment ideas, measurement tools", deliverables: "Experiment framework, tracking template, review cadence" },
      { title: "Cross-Promotion Strategy", objective: "Partner with complementary products to share audiences and grow together", inputs: "complementary products, audience overlap, collab format", deliverables: "Partner list, promotion mechanics, shared measurement plan" },
      { title: "Seasonal Campaign Planner", objective: "Plan campaigns around events, holidays, and cultural moments that matter", inputs: "industry events, relevant holidays, audience interests", deliverables: "Annual campaign calendar, creative themes, prep timelines" },
    ],
  },
  {
    category: "Deployment",
    icon: "🚀",
    items: [
      { title: "Deploy Runbook", objective: "Create a safe, repeatable deployment checklist you can follow at 2am without mistakes", inputs: "tech stack, environments, release cadence", deliverables: "Step-by-step runbook with rollback procedures" },
      { title: "Incident Response Playbook", objective: "Know exactly what to do when things break in production — before the panic hits", inputs: "critical services, on-call model, communication channels", deliverables: "Severity matrix, response workflow, comms templates" },
      { title: "Observability Setup", objective: "Set up logs, metrics, and traces so you can always see what's happening", inputs: "system architecture, SLAs, current monitoring gaps", deliverables: "Instrumentation plan, dashboard layouts, alert rules" },
      { title: "Environment Parity Check", objective: "Reduce dangerous drift between dev, staging, and production environments", inputs: "config differences, secrets handling, data mocking", deliverables: "Parity audit, sync scripts, verification checklist" },
      { title: "Rollback Strategy", objective: "Design a rollback plan that protects user data when a deploy goes sideways", inputs: "deployment method, database migrations, feature flags", deliverables: "Rollback paths, decision criteria, data safety checks" },
      { title: "Alert Tuning", objective: "Create actionable alerts that only fire when something genuinely needs attention", inputs: "current alert volume, false positive rate, service goals", deliverables: "Alert rules, threshold tuning, escalation policy" },
      { title: "Security Hardening Checklist", objective: "Lock down your deployment surface before real users and real data come in", inputs: "infrastructure stack, auth model, data sensitivity", deliverables: "Security checklist with ownership and deadlines" },
      { title: "Hosting Cost Optimizer", objective: "Cut your hosting bill without sacrificing reliability or speed", inputs: "current spend, resource utilization, load patterns", deliverables: "Cost optimization levers, rightsizing, savings estimate" },
      { title: "Post-Deploy Smoke Test", objective: "Automate quick health checks after every deployment to catch breakage", inputs: "critical user paths, API dependencies, success criteria", deliverables: "Smoke test script, health check endpoints, escalation" },
      { title: "Disaster Recovery Plan", objective: "Know exactly how to bring everything back if the absolute worst happens", inputs: "RTO/RPO targets, data architecture, backup status", deliverables: "Recovery playbook, backup verification, rehearsal schedule" },
      { title: "Domain & DNS Setup", objective: "Configure custom domains, SSL, and DNS records correctly the first time", inputs: "domain name, hosting provider, subdomains needed", deliverables: "DNS configuration, SSL setup guide, redirect rules" },
      { title: "CI/CD Pipeline Builder", objective: "Set up automated build, test, and deploy pipelines so shipping is one click", inputs: "tech stack, hosting target, test suite, team size", deliverables: "Pipeline config, stage definitions, secret management" },
      { title: "Docker Container Setup", objective: "Containerize your app for consistent, reproducible deployments everywhere", inputs: "app runtime, dependencies, environment variables", deliverables: "Dockerfile, docker-compose, multi-stage build optimization" },
      { title: "Secrets & Config Vault", objective: "Manage secrets and config across environments without ever leaking them", inputs: "secret types, environments, team access needs", deliverables: "Secrets management plan, rotation policy, access controls" },
      { title: "Zero-Downtime Deploy", objective: "Ship updates to production without any downtime or user interruption", inputs: "deployment strategy, load balancer, database migrations", deliverables: "Blue-green or rolling deploy plan, health check setup" },
      { title: "Database Migration Playbook", objective: "Run schema changes safely in production without losing or corrupting data", inputs: "migration type, table sizes, downtime tolerance", deliverables: "Migration steps, rollback plan, data verification queries" },
      { title: "SSL & HTTPS Enforcer", objective: "Set up and verify end-to-end secure connections across your entire app", inputs: "certificate source, domains, mixed content status", deliverables: "SSL configuration, redirect rules, HSTS policy setup" },
      { title: "Auto-Scaling Configuration", objective: "Scale infrastructure automatically with demand so you only pay for what you use", inputs: "traffic patterns, cost limits, performance targets", deliverables: "Scaling policies, metric triggers, cost guardrails" },
      { title: "Backup & Restore Protocol", objective: "Set up automated backups you can actually restore from when disaster strikes", inputs: "data stores, backup frequency, retention policy", deliverables: "Backup configuration, restore procedure, test schedule" },
      { title: "Feature Flag System", objective: "Ship code behind toggles so you can enable features without redeploying", inputs: "feature flag tool, toggle needs, team access", deliverables: "Flag naming convention, lifecycle rules, cleanup policy" },
      { title: "Staging Environment Setup", objective: "Build a staging environment that genuinely mirrors production for testing", inputs: "production stack, data requirements, access control", deliverables: "Staging config, seed data strategy, sync process" },
      { title: "Rate Limiting & DDoS Shield", objective: "Protect your app from abuse, bots, and traffic spikes before they cause outages", inputs: "traffic patterns, API endpoints, abuse history", deliverables: "Rate limit rules, WAF configuration, bot detection setup" },
      { title: "Log Aggregation Setup", objective: "Centralize logs from all services so you can search and debug across everything", inputs: "log sources, search needs, retention requirements", deliverables: "Aggregation config, index strategy, useful search queries" },
      { title: "Health Check Dashboard", objective: "Build a status page showing real-time system health for users and your team", inputs: "services to monitor, uptime targets, notification channels", deliverables: "Health endpoint spec, dashboard layout, incident display" },
      { title: "Post-Incident Review", objective: "Turn outages and incidents into structured learning opportunities for the team", inputs: "incident details, timeline, impact, response actions", deliverables: "Review template, root cause analysis, prevention action items" },
    ],
  },
];


const prompts = promptBlueprints.flatMap((group, categoryIndex) =>
  group.items.map((item, itemIndex) => {
    const id = `${group.category.toLowerCase().replace(/\s+/g, "-")}-${String(itemIndex + 1).padStart(2, "0")}`;
    const summary = `${item.objective}. Focused outputs: ${item.deliverables}.`;
    const details =
      `Built for vibe coders who build with AI. Each prompt is engineered to return copy/paste-ready code, configs, and plans — not generic advice. Drop in your project context and let your AI copilot do the heavy lifting.`;
    const prompt = [
      `You are an expert AI coding assistant helping a vibe coder ship fast. Produce an actionable, implementation-ready response for: ${item.title}.`,
      "",
      "Context (treat as hard constraints):",
      `- Goal: ${item.objective}`,
      `- Inputs you have: ${item.inputs}`,
      `- What to deliver: ${item.deliverables}`,
      "",
      "Rules:",
      "- Be specific and practical. No filler, no generic advice.",
      "- Produce code, configs, and artifacts I can copy/paste directly.",
      "- Flag assumptions clearly and keep going — don't wait for clarification.",
      "- Optimize for shipping speed and iteration, not perfection.",
      "",
      "Required Output:",
      "1) Quick Assessment (<=100 words)",
      "   - What we're solving, key constraints, and the fastest path forward.",
      "",
      "2) Implementation Plan",
      "   - Numbered steps with effort estimates and dependencies.",
      "   - Include a simpler fallback if the main approach hits a wall.",
      "",
      "3) Build Artifacts",
      "   - Ready-to-use code snippets, configs, commands, or templates.",
      "   - Include file paths, naming conventions, and copy/paste-ready blocks.",
      "",
      "4) Verification",
      "   - How to test that it works. Quick smoke tests and edge cases to watch.",
      "",
      "5) Next Steps",
      "   - 3-5 immediate actions to keep shipping momentum.",
      "",
      "Formatting: Markdown, concise bullets, code blocks with language tags.",
      "",
      "My project context:",
      "[PASTE YOUR STACK, CURRENT FILES, GOALS, AND CONSTRAINTS HERE]",
    ].join("\n");

    const tip =
      "Paste your real project context — stack, file structure, current blockers, and goals. The more specific you are, the more copy/paste-ready the output. These prompts are built for AI-assisted builders who ship fast.";

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