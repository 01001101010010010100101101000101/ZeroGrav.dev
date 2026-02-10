const prompts = [
  {
    id: "plan-01",
    category: "Planning",
    title: "Goal-to-steps map",
    icon: "🗺️",
    summary: "Turn a big idea into 5 small steps.",
    details: "This keeps momentum high by showing the smallest next actions instead of a scary big goal.",
    prompt:
      "You are my vibe-coding planner. My goal is: [goal]. Give me 5 tiny steps I can do today, each under 30 minutes. Use simple words.",
    tip: "Ask for time estimates if you feel stuck.",
  },
  {
    id: "plan-02",
    category: "Planning",
    title: "Scope shrinker",
    icon: "🪄",
    summary: "Make a big feature fit in 1 week.",
    details: "Great for cutting fluff so you can ship faster and stay motivated.",
    prompt:
      "Help me shrink this feature: [feature]. Give me a 1-week version that still feels awesome. List what to cut and what to keep.",
    tip: "Smaller scopes mean fewer bugs.",
  },
  {
    id: "plan-03",
    category: "Planning",
    title: "Daily vibe checklist",
    icon: "✅",
    summary: "Create a short plan for today.",
    details: "Keeps you focused on the 3 most important moves.",
    prompt:
      "Make a 3-item checklist for today based on: [project]. Keep it simple and in order.",
    tip: "Three items max = lower stress.",
  },
  {
    id: "plan-04",
    category: "Planning",
    title: "Feature priority sorter",
    icon: "📌",
    summary: "Rank features by impact.",
    details: "Lets you build the most valuable parts first.",
    prompt:
      "I have these features: [list]. Rank them by impact for a beginner audience. Explain why in 1 sentence each.",
    tip: "Impact first, polish later.",
  },
  {
    id: "plan-05",
    category: "Planning",
    title: "Risk radar",
    icon: "🚨",
    summary: "Spot the top 3 risks early.",
    details: "You avoid surprises by naming risks before they hit.",
    prompt:
      "Review this plan: [plan]. What are the top 3 risks? Give me a simple fix for each.",
    tip: "Risks are easier to fix when seen early.",
  },
  {
    id: "plan-06",
    category: "Planning",
    title: "Milestone tracker",
    icon: "🏁",
    summary: "Set 4 milestones with dates.",
    details: "Keeps the project moving in clear chunks.",
    prompt:
      "Break this project into 4 milestones with target dates: [project]. Keep it realistic for a solo builder.",
    tip: "Set dates that feel achievable.",
  },
  {
    id: "plan-07",
    category: "Planning",
    title: "Vibe score goal",
    icon: "✨",
    summary: "Define what 'done' feels like.",
    details: "Helps you stop over-building by knowing when it feels right.",
    prompt:
      "Describe a 'vibe score' for this project: [project]. What does a 9/10 feel like to users?",
    tip: "Aim for the feeling, not perfection.",
  },
  {
    id: "plan-08",
    category: "Planning",
    title: "Audience snapshot",
    icon: "🎯",
    summary: "Clarify who you build for.",
    details: "Stops you from trying to please everyone at once.",
    prompt:
      "Describe the main user for [project]. Age, goals, and pain points in simple words.",
    tip: "One clear user beats many vague ones.",
  },
  {
    id: "plan-09",
    category: "Planning",
    title: "Success metrics",
    icon: "📈",
    summary: "Pick 3 things to measure.",
    details: "Gives you proof your project is working.",
    prompt:
      "For [project], list 3 simple success metrics I can track weekly.",
    tip: "Metrics should be easy to measure.",
  },
  {
    id: "plan-10",
    category: "Planning",
    title: "Launch timeline",
    icon: "🚀",
    summary: "Make a launch plan in 7 days.",
    details: "Helps you ship a focused version fast.",
    prompt:
      "Create a 7-day launch plan for [project]. Keep tasks short and realistic.",
    tip: "Short launch plans keep energy high.",
  },
  {
    id: "ui-01",
    category: "UI Design",
    title: "Glow-up layout",
    icon: "🌟",
    summary: "Design a clean hero section.",
    details: "Focuses on clear hierarchy and modern spacing.",
    prompt:
      "Design a hero section for [app]. Give me layout, colors, and key text in simple words.",
    tip: "Big headline, short subtext, clear button.",
  },
  {
    id: "ui-02",
    category: "UI Design",
    title: "Card grid builder",
    icon: "🧩",
    summary: "Create a card layout that feels premium.",
    details: "Useful for prompt libraries, dashboards, and galleries.",
    prompt:
      "Create a card grid for [content type]. Include spacing, hover effect, and text sizes.",
    tip: "Use 16-24px padding for comfort.",
  },
  {
    id: "ui-03",
    category: "UI Design",
    title: "Color vibe selector",
    icon: "🎨",
    summary: "Pick a color palette with mood.",
    details: "Keeps colors consistent and on-brand.",
    prompt:
      "Suggest a color palette for [brand vibe]. Include primary, secondary, and background colors.",
    tip: "Limit to 3-4 core colors.",
  },
  {
    id: "ui-04",
    category: "UI Design",
    title: "Button polish",
    icon: "🔘",
    summary: "Make buttons feel alive.",
    details: "Adds subtle motion and contrast for better clicks.",
    prompt:
      "Give me button styles for [app]. Include primary, secondary, hover, and disabled states.",
    tip: "Soft shadows make buttons pop.",
  },
  {
    id: "ui-05",
    category: "UI Design",
    title: "Modal makeover",
    icon: "🪟",
    summary: "Design a clean modal layout.",
    details: "Keeps the focus on one action at a time.",
    prompt:
      "Design a modal for [task]. Include spacing, close button, and focus style.",
    tip: "Keep modal width under 720px.",
  },
  {
    id: "ui-06",
    category: "UI Design",
    title: "Icon pick list",
    icon: "🧲",
    summary: "Match icons to features.",
    details: "Icons help users scan faster.",
    prompt:
      "Match each feature to a simple icon: [list]. Use emoji or common icon names.",
    tip: "Consistent style makes the UI feel calm.",
  },
  {
    id: "ui-07",
    category: "UI Design",
    title: "Spacing guide",
    icon: "📐",
    summary: "Set a spacing system quickly.",
    details: "Keeps layouts balanced and readable.",
    prompt:
      "Create a spacing scale for [project]. Use 4-6 spacing sizes with names.",
    tip: "Stick to one spacing system.",
  },
  {
    id: "ui-08",
    category: "UI Design",
    title: "Typography ladder",
    icon: "🔤",
    summary: "Pick readable type sizes.",
    details: "Improves readability across devices.",
    prompt:
      "Suggest a type scale for [project]. Include heading, subheading, body, and small text sizes.",
    tip: "Body text 16-18px feels best.",
  },
  {
    id: "ui-09",
    category: "UI Design",
    title: "Micro-animations",
    icon: "🫧",
    summary: "Add subtle UI motion.",
    details: "Small motion makes the app feel alive.",
    prompt:
      "Suggest 3 subtle animations for [app]. Keep them quick and smooth.",
    tip: "Animations under 300ms feel snappy.",
  },
  {
    id: "ui-10",
    category: "UI Design",
    title: "Light vs dark",
    icon: "🌗",
    summary: "Choose a theme strategy.",
    details: "Theme choices impact comfort and clarity.",
    prompt:
      "Should [app] be light, dark, or both? Give a short reason and style tips.",
    tip: "Dark themes need high contrast text.",
  },
  {
    id: "ux-01",
    category: "UX Flow",
    title: "First minute flow",
    icon: "⏱️",
    summary: "Design what users do first.",
    details: "A strong first minute keeps users engaged.",
    prompt:
      "Describe the first 60 seconds for a new user on [app]. What should they see and do?",
    tip: "One clear action beats many choices.",
  },
  {
    id: "ux-02",
    category: "UX Flow",
    title: "Onboarding in 3 steps",
    icon: "🧪",
    summary: "Make onboarding short and friendly.",
    details: "Less steps means more people finish onboarding.",
    prompt:
      "Create a 3-step onboarding flow for [app]. Keep language simple.",
    tip: "Let users skip if they want.",
  },
  {
    id: "ux-03",
    category: "UX Flow",
    title: "Empty state helper",
    icon: "📭",
    summary: "Make empty screens useful.",
    details: "Empty states should guide, not confuse.",
    prompt:
      "Write an empty state for [screen]. Include a helpful message and one action.",
    tip: "Use friendly tone and one CTA.",
  },
  {
    id: "ux-04",
    category: "UX Flow",
    title: "Error recovery",
    icon: "🛟",
    summary: "Turn errors into guidance.",
    details: "Clear recovery steps reduce frustration.",
    prompt:
      "Write a friendly error message for [issue] and include a fix step.",
    tip: "Blame the system, not the user.",
  },
  {
    id: "ux-05",
    category: "UX Flow",
    title: "Goal reminder",
    icon: "🧠",
    summary: "Keep users on track.",
    details: "Reminders help users finish tasks.",
    prompt:
      "Add a gentle reminder in [app] to help users finish [goal].",
    tip: "Short and supportive reminders feel best.",
  },
  {
    id: "ux-06",
    category: "UX Flow",
    title: "Navigation sanity",
    icon: "🧭",
    summary: "Simplify navigation labels.",
    details: "Clear labels reduce confusion.",
    prompt:
      "Rewrite these nav labels in plain words: [labels].",
    tip: "Use everyday words, not jargon.",
  },
  {
    id: "ux-07",
    category: "UX Flow",
    title: "Feedback loop",
    icon: "🔁",
    summary: "Show progress after actions.",
    details: "Feedback builds trust and clarity.",
    prompt:
      "Describe how to show progress after [action] in [app]. Keep it simple.",
    tip: "Animations under 1 second feel smooth.",
  },
  {
    id: "ux-08",
    category: "UX Flow",
    title: "Trust signals",
    icon: "🛡️",
    summary: "Add safety cues.",
    details: "Users feel safer when security is visible.",
    prompt:
      "List 3 trust signals for [app]. Keep them obvious to new users.",
    tip: "Short security notes calm worries.",
  },
  {
    id: "ux-09",
    category: "UX Flow",
    title: "Search helper",
    icon: "🔍",
    summary: "Make search feel smart.",
    details: "Suggestions and filters improve discovery.",
    prompt:
      "Design a search flow for [app]. Include a placeholder, filters, and empty results message.",
    tip: "Auto-suggest helps users move faster.",
  },
  {
    id: "ux-10",
    category: "UX Flow",
    title: "Action recap",
    icon: "📌",
    summary: "Summarize what just happened.",
    details: "Recaps reduce confusion after big actions.",
    prompt:
      "Write a short recap message after [action] that confirms success and next step.",
    tip: "Use past tense: 'You did X'.",
  },
  {
    id: "debug-01",
    category: "Debugging",
    title: "Bug translator",
    icon: "🧠",
    summary: "Turn a bug into plain words.",
    details: "Clear bug language helps you fix faster.",
    prompt:
      "Explain this bug in simple words: [bug description]. Then give 3 possible causes.",
    tip: "If unsure, ask for console logs.",
  },
  {
    id: "debug-02",
    category: "Debugging",
    title: "Fix plan",
    icon: "🧯",
    summary: "Create a step-by-step fix.",
    details: "Keeps you from guessing randomly.",
    prompt:
      "Make a 4-step plan to fix this issue: [issue]. Keep steps short.",
    tip: "Test after each step.",
  },
  {
    id: "debug-03",
    category: "Debugging",
    title: "Console guide",
    icon: "🖥️",
    summary: "Decide what to log.",
    details: "Logs point to the real problem quickly.",
    prompt:
      "Where should I add console logs for [issue]? Give 3 places and what to log.",
    tip: "Log the value, not the whole object.",
  },
  {
    id: "debug-04",
    category: "Debugging",
    title: "Repro steps",
    icon: "🧪",
    summary: "Write clear repro steps.",
    details: "Good repro steps save time for anyone helping you.",
    prompt:
      "Turn this bug into clear repro steps: [bug]. Keep it under 6 steps.",
    tip: "Start from a clean refresh.",
  },
  {
    id: "debug-05",
    category: "Debugging",
    title: "Error message rewrite",
    icon: "📝",
    summary: "Make errors friendly.",
    details: "Friendly errors reduce frustration.",
    prompt:
      "Rewrite this error message for a beginner: [message]. Include a fix idea.",
    tip: "Avoid scary words like 'fatal'.",
  },
  {
    id: "debug-06",
    category: "Debugging",
    title: "Stack trace helper",
    icon: "🧵",
    summary: "Explain a stack trace.",
    details: "Clarifies what line to fix first.",
    prompt:
      "Explain this stack trace in simple words: [trace]. Highlight the first file to check.",
    tip: "Focus on the top-most app file.",
  },
  {
    id: "debug-07",
    category: "Debugging",
    title: "Edge-case finder",
    icon: "🪤",
    summary: "Find sneaky cases.",
    details: "Catches bugs before users do.",
    prompt:
      "List 5 edge cases for [feature]. Keep them simple and realistic.",
    tip: "Think slow internet, empty data, and long text.",
  },
  {
    id: "debug-08",
    category: "Debugging",
    title: "State reset",
    icon: "🔄",
    summary: "Clear weird state bugs.",
    details: "State resets help when UI feels stuck.",
    prompt:
      "Suggest 3 ways to reset state for [feature] without losing user trust.",
    tip: "Offer a 'Try again' button.",
  },
  {
    id: "debug-09",
    category: "Debugging",
    title: "API error helper",
    icon: "📡",
    summary: "Handle failed requests.",
    details: "Teaches how to respond to API errors safely.",
    prompt:
      "Create a simple plan to handle API errors for [feature]. Include user message and retry.",
    tip: "Always show a next step.",
  },
  {
    id: "debug-10",
    category: "Debugging",
    title: "Performance bug check",
    icon: "🐢",
    summary: "Find slow spots fast.",
    details: "Helps you see what makes the UI lag.",
    prompt:
      "Help me find performance issues in [feature]. Give 3 likely causes and 1 quick test.",
    tip: "Start with images and heavy loops.",
  },
  {
    id: "refactor-01",
    category: "Refactoring",
    title: "Messy to clean",
    icon: "🧹",
    summary: "Turn messy code into clear code.",
    details: "Clean code is easier to grow later.",
    prompt:
      "Refactor this code for clarity: [code]. Use plain words to explain changes.",
    tip: "Rename variables to what they mean.",
  },
  {
    id: "refactor-02",
    category: "Refactoring",
    title: "Function splitter",
    icon: "🪓",
    summary: "Split a big function into parts.",
    details: "Small functions are easier to test.",
    prompt:
      "Split this function into smaller ones: [function]. Give each a clear name.",
    tip: "Each function should do one job.",
  },
  {
    id: "refactor-03",
    category: "Refactoring",
    title: "Naming reset",
    icon: "🏷️",
    summary: "Give better names quickly.",
    details: "Better names make code feel friendly.",
    prompt:
      "Rename these variables for clarity: [list]. Keep names short but clear.",
    tip: "Names should describe purpose, not type.",
  },
  {
    id: "refactor-04",
    category: "Refactoring",
    title: "Component extractor",
    icon: "🧱",
    summary: "Break UI into reusable pieces.",
    details: "Reusable components save time later.",
    prompt:
      "Find parts of this UI to extract into components: [layout description].",
    tip: "Start with repeated sections.",
  },
  {
    id: "refactor-05",
    category: "Refactoring",
    title: "API cleanup",
    icon: "🧼",
    summary: "Simplify API calls.",
    details: "Cleaner API code means fewer bugs.",
    prompt:
      "Refactor this API call logic: [code]. Keep it simple and readable.",
    tip: "Centralize shared headers.",
  },
  {
    id: "refactor-06",
    category: "Refactoring",
    title: "State tidy",
    icon: "🧺",
    summary: "Organize UI state.",
    details: "Cleaner state makes UI predictable.",
    prompt:
      "Help me organize state for [feature]. Suggest a simple structure.",
    tip: "Group related state together.",
  },
  {
    id: "refactor-07",
    category: "Refactoring",
    title: "CSS cleanup",
    icon: "🎚️",
    summary: "Make styles easier to edit.",
    details: "Less messy CSS means fewer surprises.",
    prompt:
      "Refactor these CSS rules: [css]. Create clear groupings and remove duplicates.",
    tip: "Use CSS variables for repeated values.",
  },
  {
    id: "refactor-08",
    category: "Refactoring",
    title: "Logic simplifier",
    icon: "🪶",
    summary: "Reduce complex logic.",
    details: "Simpler logic is easier to debug.",
    prompt:
      "Simplify this logic: [logic]. Keep the behavior the same and explain changes.",
    tip: "Early returns can simplify flow.",
  },
  {
    id: "refactor-09",
    category: "Refactoring",
    title: "Reuse detector",
    icon: "🔁",
    summary: "Find code to reuse.",
    details: "Reuse avoids copy-paste errors.",
    prompt:
      "Find parts of this code that can be reused: [code]. Suggest a shared helper.",
    tip: "Look for repeated blocks.",
  },
  {
    id: "refactor-10",
    category: "Refactoring",
    title: "Tech debt note",
    icon: "📒",
    summary: "Write a quick tech debt note.",
    details: "Helps future-you remember cleanup tasks.",
    prompt:
      "Write a short tech debt note for [issue]. Include impact and a quick fix idea.",
    tip: "Keep it short and honest.",
  },
  {
    id: "perf-01",
    category: "Performance",
    title: "Speed audit",
    icon: "⚡",
    summary: "Find 3 ways to speed up.",
    details: "Quick wins make the app feel fast.",
    prompt:
      "Audit [app] for speed. Give 3 quick wins and 1 deeper fix.",
    tip: "Start with images, fonts, and JS size.",
  },
  {
    id: "perf-02",
    category: "Performance",
    title: "Lazy load plan",
    icon: "🛌",
    summary: "Load only what you need.",
    details: "Lazy loading keeps pages light.",
    prompt:
      "Create a lazy load plan for [page]. What should load first and later?",
    tip: "Load above-the-fold content first.",
  },
  {
    id: "perf-03",
    category: "Performance",
    title: "Image optimizer",
    icon: "🖼️",
    summary: "Make images lighter.",
    details: "Smaller images mean faster sites.",
    prompt:
      "Give me a quick image optimization checklist for [site].",
    tip: "Use WebP or AVIF when possible.",
  },
  {
    id: "perf-04",
    category: "Performance",
    title: "Animation budget",
    icon: "🎛️",
    summary: "Keep motion smooth.",
    details: "Too many animations slow the page.",
    prompt:
      "Set an animation budget for [app]. What should animate and what should not?",
    tip: "Use transforms over layout changes.",
  },
  {
    id: "perf-05",
    category: "Performance",
    title: "Bundle shrink",
    icon: "📦",
    summary: "Reduce JS size.",
    details: "Smaller bundles load faster.",
    prompt:
      "Give me 4 ways to reduce JS bundle size for [project].",
    tip: "Remove unused libraries.",
  },
  {
    id: "perf-06",
    category: "Performance",
    title: "Cache plan",
    icon: "🗄️",
    summary: "Use caching safely.",
    details: "Caching improves speed without breaking data.",
    prompt:
      "Create a simple cache plan for [app]. Include what to cache and for how long.",
    tip: "Cache static assets longer than data.",
  },
  {
    id: "perf-07",
    category: "Performance",
    title: "First paint boost",
    icon: "🎬",
    summary: "Speed up the first render.",
    details: "First paint sets the speed vibe.",
    prompt:
      "Give 3 ideas to improve first paint for [page].",
    tip: "Inline critical CSS when possible.",
  },
  {
    id: "perf-08",
    category: "Performance",
    title: "Network trim",
    icon: "📶",
    summary: "Reduce network requests.",
    details: "Fewer requests mean faster loads.",
    prompt:
      "List ways to reduce network requests on [page]. Keep it simple.",
    tip: "Combine small files.",
  },
  {
    id: "perf-09",
    category: "Performance",
    title: "Perf test",
    icon: "🧪",
    summary: "Run a quick performance test.",
    details: "Tests reveal slow spots clearly.",
    prompt:
      "Suggest a simple performance test for [app]. What should I measure?",
    tip: "Start with load time and main thread.",
  },
  {
    id: "perf-10",
    category: "Performance",
    title: "Mobile speed",
    icon: "📱",
    summary: "Optimize for phones.",
    details: "Most users feel speed on mobile first.",
    prompt:
      "Give 3 mobile speed tips for [app]. Keep them easy to do.",
    tip: "Limit heavy animations on mobile.",
  },
  {
    id: "access-01",
    category: "Accessibility",
    title: "Color contrast check",
    icon: "🌓",
    summary: "Make text easy to read.",
    details: "Good contrast helps everyone see clearly.",
    prompt:
      "Check this color palette for contrast: [colors]. Suggest fixes if needed.",
    tip: "Aim for 4.5:1 contrast for text.",
  },
  {
    id: "access-02",
    category: "Accessibility",
    title: "Keyboard flow",
    icon: "⌨️",
    summary: "Ensure tab navigation works.",
    details: "Keyboard users should reach everything.",
    prompt:
      "Review this UI for keyboard access: [description]. List focus order.",
    tip: "Make focus visible.",
  },
  {
    id: "access-03",
    category: "Accessibility",
    title: "Alt text writer",
    icon: "🖊️",
    summary: "Write helpful alt text.",
    details: "Alt text supports screen readers.",
    prompt:
      "Write alt text for these images: [list]. Keep it short and clear.",
    tip: "Describe purpose, not every detail.",
  },
  {
    id: "access-04",
    category: "Accessibility",
    title: "Form helper",
    icon: "🧾",
    summary: "Make forms clear.",
    details: "Accessible forms reduce errors.",
    prompt:
      "Improve this form for accessibility: [form]. Include labels and hints.",
    tip: "Place labels above inputs.",
  },
  {
    id: "access-05",
    category: "Accessibility",
    title: "Readable copy",
    icon: "📖",
    summary: "Simplify text for everyone.",
    details: "Easy words increase trust and understanding.",
    prompt:
      "Rewrite this copy at a 9th-grade reading level: [copy].",
    tip: "Short sentences beat long ones.",
  },
  {
    id: "access-06",
    category: "Accessibility",
    title: "Motion safety",
    icon: "🧘",
    summary: "Respect reduced motion settings.",
    details: "Some users get dizzy from big animations.",
    prompt:
      "Suggest how to reduce motion for this UI: [description].",
    tip: "Use prefers-reduced-motion.",
  },
  {
    id: "access-07",
    category: "Accessibility",
    title: "Focus outline",
    icon: "🎯",
    summary: "Make focus states obvious.",
    details: "Visible focus keeps keyboard users oriented.",
    prompt:
      "Design a focus style for buttons and links in [app].",
    tip: "High contrast focus rings are best.",
  },
  {
    id: "access-08",
    category: "Accessibility",
    title: "Caption assist",
    icon: "🎧",
    summary: "Add captions for videos.",
    details: "Captions help more people understand content.",
    prompt:
      "Write a plan for adding captions to [video content].",
    tip: "Captions help in noisy places too.",
  },
  {
    id: "access-09",
    category: "Accessibility",
    title: "Button labels",
    icon: "🏷️",
    summary: "Make button text clear.",
    details: "Clear labels improve task success.",
    prompt:
      "Rewrite these button labels to be clear: [labels].",
    tip: "Use verbs: 'Save', 'Send', 'Start'.",
  },
  {
    id: "access-10",
    category: "Accessibility",
    title: "Screen reader check",
    icon: "🧏",
    summary: "Support screen readers.",
    details: "Small changes make a huge difference.",
    prompt:
      "Review this page structure for screen readers: [structure]. Suggest fixes.",
    tip: "Use landmarks and headings in order.",
  },
  {
    id: "content-01",
    category: "Content",
    title: "Tagline generator",
    icon: "🏷️",
    summary: "Create a short, catchy tagline.",
    details: "Taglines help people remember your product.",
    prompt:
      "Write 5 short taglines for [brand]. Keep them under 6 words.",
    tip: "A good tagline is easy to say.",
  },
  {
    id: "content-02",
    category: "Content",
    title: "Hero copy",
    icon: "🗣️",
    summary: "Write a clear hero section.",
    details: "Great hero copy explains value fast.",
    prompt:
      "Write a hero headline and subhead for [product] aimed at beginners.",
    tip: "Lead with the main benefit.",
  },
  {
    id: "content-03",
    category: "Content",
    title: "FAQ builder",
    icon: "❓",
    summary: "Create 5 simple FAQs.",
    details: "FAQs reduce support questions.",
    prompt:
      "Generate 5 FAQs for [product] with short answers.",
    tip: "Answer real user fears first.",
  },
  {
    id: "content-04",
    category: "Content",
    title: "Feature blurbs",
    icon: "🧃",
    summary: "Write short feature descriptions.",
    details: "Short blurbs make cards easier to scan.",
    prompt:
      "Write 3 short feature blurbs for [feature list].",
    tip: "Keep each blurb under 18 words.",
  },
  {
    id: "content-05",
    category: "Content",
    title: "Error copy",
    icon: "⚠️",
    summary: "Make error messages friendly.",
    details: "Friendly errors help people recover.",
    prompt:
      "Write a friendly error message for [issue] with a next step.",
    tip: "Offer a clear action.",
  },
  {
    id: "content-06",
    category: "Content",
    title: "CTA builder",
    icon: "👉",
    summary: "Write 5 call-to-action buttons.",
    details: "Strong CTAs improve conversions.",
    prompt:
      "Write 5 CTA button texts for [goal]. Keep them short.",
    tip: "Use action verbs like 'Get' or 'Start'.",
  },
  {
    id: "content-07",
    category: "Content",
    title: "Social proof",
    icon: "💬",
    summary: "Write a trust message.",
    details: "Trust copy helps people feel safe.",
    prompt:
      "Write a short social proof line for [product].",
    tip: "Be specific and honest.",
  },
  {
    id: "content-08",
    category: "Content",
    title: "Email welcome",
    icon: "📧",
    summary: "Write a short welcome email.",
    details: "Welcome emails boost retention.",
    prompt:
      "Write a short welcome email for [product] in a friendly tone.",
    tip: "Keep it under 120 words.",
  },
  {
    id: "content-09",
    category: "Content",
    title: "Tooltip writer",
    icon: "💡",
    summary: "Create short tooltips.",
    details: "Tooltips explain features quickly.",
    prompt:
      "Write 3 tooltips for [features]. Keep each under 12 words.",
    tip: "Tooltips should be optional and short.",
  },
  {
    id: "content-10",
    category: "Content",
    title: "Release notes",
    icon: "📰",
    summary: "Write friendly release notes.",
    details: "Release notes build trust with users.",
    prompt:
      "Write short release notes for [update]. Use simple words.",
    tip: "Thank users for feedback.",
  },
  {
    id: "marketing-01",
    category: "Marketing",
    title: "SEO keyword plan",
    icon: "🔑",
    summary: "Pick 10 simple keywords.",
    details: "Keywords help the right people find you.",
    prompt:
      "Suggest 10 SEO keywords for [product] that beginners would search.",
    tip: "Use natural phrases, not stuffed words.",
  },
  {
    id: "marketing-02",
    category: "Marketing",
    title: "Landing page outline",
    icon: "📄",
    summary: "Map the landing page sections.",
    details: "A clear outline speeds up page creation.",
    prompt:
      "Create a landing page outline for [product]. List sections in order.",
    tip: "Start with hero, end with CTA.",
  },
  {
    id: "marketing-03",
    category: "Marketing",
    title: "GEO description",
    icon: "🧭",
    summary: "Write a GEO-friendly summary.",
    details: "Helps generative engines understand the product.",
    prompt:
      "Write a 2-sentence GEO description for [product]. Keep it clear and factual.",
    tip: "Be explicit about what it does.",
  },
  {
    id: "marketing-04",
    category: "Marketing",
    title: "Value prop",
    icon: "💎",
    summary: "Clarify your value in 1 sentence.",
    details: "A crisp value prop makes marketing easy.",
    prompt:
      "Write a 1-sentence value prop for [product] aimed at beginners.",
    tip: "Say who it helps and how.",
  },
  {
    id: "marketing-05",
    category: "Marketing",
    title: "Social post",
    icon: "📣",
    summary: "Create a short social post.",
    details: "Short posts work best on social platforms.",
    prompt:
      "Write a short social post for [product]. Keep it under 280 characters.",
    tip: "Ask one simple question at the end.",
  },
  {
    id: "marketing-06",
    category: "Marketing",
    title: "Audience segments",
    icon: "🧑‍🤝‍🧑",
    summary: "List 3 audience types.",
    details: "Segments help you personalize messaging.",
    prompt:
      "List 3 audience segments for [product] with one need each.",
    tip: "Keep segments simple and clear.",
  },
  {
    id: "marketing-07",
    category: "Marketing",
    title: "Offer stack",
    icon: "🧺",
    summary: "Bundle value in a clean list.",
    details: "Offer stacks make pricing feel fair.",
    prompt:
      "Create an offer stack for [product]. List 4 items with quick benefits.",
    tip: "Put the strongest item first.",
  },
  {
    id: "marketing-08",
    category: "Marketing",
    title: "Testimonial prompt",
    icon: "🌟",
    summary: "Ask for a great testimonial.",
    details: "Good questions get better testimonials.",
    prompt:
      "Write 3 questions to ask users for testimonials about [product].",
    tip: "Ask about results and feelings.",
  },
  {
    id: "marketing-09",
    category: "Marketing",
    title: "Competitor snapshot",
    icon: "🛰️",
    summary: "Compare with 3 competitors.",
    details: "Helps you position yourself clearly.",
    prompt:
      "Compare [product] to 3 competitors. Give 1 difference each in simple words.",
    tip: "Focus on benefits, not insults.",
  },
  {
    id: "marketing-10",
    category: "Marketing",
    title: "Pricing clarity",
    icon: "💵",
    summary: "Explain pricing simply.",
    details: "Clear pricing reduces hesitation.",
    prompt:
      "Write a simple pricing explanation for [product] in 2 sentences.",
    tip: "Say what's included.",
  },
  {
    id: "deploy-01",
    category: "Deployment",
    title: "Launch checklist",
    icon: "🚀",
    summary: "Create a simple launch checklist.",
    details: "Avoid last-minute surprises with a short list.",
    prompt:
      "Create a launch checklist for [project]. Keep it under 10 items.",
    tip: "Include backups and rollback plan.",
  },
  {
    id: "deploy-02",
    category: "Deployment",
    title: "Domain setup",
    icon: "🌐",
    summary: "Explain domain setup steps.",
    details: "Makes launch feel less scary.",
    prompt:
      "Explain how to connect a domain to [hosting]. Use simple steps.",
    tip: "Warn about DNS time delays.",
  },
  {
    id: "deploy-03",
    category: "Deployment",
    title: "SSL safety",
    icon: "🔒",
    summary: "Explain SSL in easy words.",
    details: "SSL boosts trust and security.",
    prompt:
      "Explain SSL to a beginner and how to turn it on for [hosting].",
    tip: "Say it keeps data private.",
  },
  {
    id: "deploy-04",
    category: "Deployment",
    title: "Release notes plan",
    icon: "🗓️",
    summary: "Plan release notes updates.",
    details: "Keeps users informed after launch.",
    prompt:
      "Create a simple release notes plan for [product].",
    tip: "Post notes after every update.",
  },
  {
    id: "deploy-05",
    category: "Deployment",
    title: "Rollback plan",
    icon: "↩️",
    summary: "Prepare for fast rollback.",
    details: "Rollback plans reduce stress.",
    prompt:
      "Write a rollback plan for [project]. Keep it clear and short.",
    tip: "Know your last stable version.",
  },
  {
    id: "deploy-06",
    category: "Deployment",
    title: "Monitoring basics",
    icon: "📟",
    summary: "Set simple monitoring.",
    details: "Monitoring catches issues early.",
    prompt:
      "List 3 basic monitoring checks for [app].",
    tip: "Start with uptime and errors.",
  },
  {
    id: "deploy-07",
    category: "Deployment",
    title: "Backup routine",
    icon: "💾",
    summary: "Create a backup plan.",
    details: "Backups protect against mistakes.",
    prompt:
      "Create a simple backup routine for [project].",
    tip: "Test your backups monthly.",
  },
  {
    id: "deploy-08",
    category: "Deployment",
    title: "Privacy page",
    icon: "🕵️",
    summary: "Outline a privacy policy.",
    details: "Transparency builds trust.",
    prompt:
      "Outline a simple privacy policy for [app]. List what data is collected and why.",
    tip: "Keep it short and honest.",
  },
  {
    id: "deploy-09",
    category: "Deployment",
    title: "Terms summary",
    icon: "📜",
    summary: "Summarize terms in plain words.",
    details: "Plain terms make users feel safe.",
    prompt:
      "Write a plain-language summary of terms for [app].",
    tip: "Use short sentences.",
  },
  {
    id: "deploy-10",
    category: "Deployment",
    title: "Post-launch check",
    icon: "🔍",
    summary: "Review after launch.",
    details: "Early checks catch issues fast.",
    prompt:
      "Give a post-launch checklist for [app] to run in the first 24 hours.",
    tip: "Check analytics, errors, and feedback.",
  },
];

const grid = document.getElementById("prompt-grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
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

categorySelect.innerHTML = categories
  .map((category) => `<option value="${category}">${category}</option>`)
  .join("");

const renderCards = () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  const activeCategory = categorySelect.value;

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

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
};

searchInput.addEventListener("input", renderCards);
categorySelect.addEventListener("change", renderCards);

grid.addEventListener("click", (event) => {
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
  const allPrompts = prompts
    .map((prompt) => `${prompt.title}\n${prompt.prompt}`)
    .join("\n\n");
  const success = await copyToClipboard(allPrompts);
  copyAllButton.textContent = success ? "All prompts copied" : "Copy failed";
});

shareLinkButton.addEventListener("click", async () => {
  const shareData = {
    title: "ZeroGrav Prompt Vault",
    text: "100 top 1% vibe-coding prompts on ZeroGrav.dev",
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

renderCards();
