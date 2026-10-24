# UX / UI Direction

**Status:** Implementation baseline for the current prototype. Not a finalized brand or design system.  
**Audience:** Codex and developers working on the PharmaRep frontend.  
**Primary goal:** Build a clear, professional, responsive scheduling experience while keeping the UI easy to change as product discovery evolves.

---

## 1. Design intent

PharmaRep should feel like a focused professional SaaS product for healthcare and pharmaceutical workflows, not like a consumer social app and not like a dense legacy CRM.

Current visual direction:

- dark theme;
- modern, professional, calm, and uncluttered appearance;
- high information clarity;
- strong status visibility for appointment workflows;
- restrained use of color;
- predictable interaction patterns;
- accessible controls and readable contrast;
- responsive behavior designed deliberately for desktop, tablet, and mobile.

Avoid decorative complexity that does not improve usability. Do not add gradients, glassmorphism, excessive shadows, animated decoration, or large visual effects unless a later approved design explicitly requires them.

---

## 2. Requirement confidence

Codex must distinguish between confirmed direction and provisional implementation defaults.

### Current product/design direction

Treat these as active guidance unless a newer design decision overrides them:

- dark application shell;
- persistent left navigation on desktop;
- responsive/collapsible navigation on smaller screens;
- appointment-centric workflows;
- clear status and next-action visibility;
- low-friction scheduling interactions;
- accessible, keyboard-usable controls;
- no patient-facing or patient-record UI in the current scope.

### Provisional implementation defaults

The tokens, sizes, breakpoints, and component dimensions in this document are the **v0 design baseline**. They exist to keep implementation consistent while the product is being validated.

They are not permanent brand requirements. Prefer changing tokens centrally rather than scattering new one-off values throughout the codebase.

---

## 3. Design tokens

Use CSS custom properties as the primary token mechanism for the initial implementation.

### 3.1 Color palette

The current palette follows `design/mockups/desktop-appointment-dashboard.png` (D-006). These are representative solid colors; the raster reference includes gradients, texture, and antialiased text rather than a uniform color for every role.

```css
:root {
  /* Application surfaces */
  --color-bg-app: #0f161d;
  --color-bg-sidebar: #0d1117;
  --color-bg-surface: #16202b;
  --color-bg-surface-hover: #1d2b38;
  --color-bg-elevated: #1c2936;

  /* Borders */
  --color-border: #2b3c4f;
  --color-border-subtle: #22303e;

  /* Text */
  --color-text-primary: #f1f2f6;
  --color-text-secondary: #a8bcd9;
  --color-text-muted: #94aac9;
  --color-text-disabled: #63758b;

  /* Primary interaction */
  --color-primary: #4edfcd;
  --color-primary-hover: #59e6d2;
  --color-primary-soft: #10242b;
  --color-on-primary: #010d0a;

  /* Semantic */
  --color-success: #52d2c3;
  --color-warning: #ecc44d;
  --color-danger: #ed504e;
  --color-info: #82b5ed;

  /* Focus */
  --color-focus-ring: #8aeee1;
}
```

### Palette reference and inferred states

| Tokens | Reference / selection method |
| --- | --- |
| App, sidebar, and card surface backgrounds | Sampled at `(800, 200)`, `(150, 500)`, and `(1000, 370)` respectively. |
| Primary fill, primary foreground, and soft primary background | Representative button fill and dark label pixels; selected navigation background sampled at `(200, 125)`. |
| Primary, secondary, and muted text | Representative foreground pixels from the page title, subtitle, and appointment metadata. |
| Success, warning, and danger | Representative confirmed/pending badge text and the red notification indicator. |
| Border and subtle border | Approximate shades based on panel outlines and internal separators. |
| Surface hover, elevated surface, disabled text, primary hover, informational state, and focus ring | Inferred companion shades; these states are not demonstrated by the screenshot. Verify them in the rendered UI as their components are implemented. |

Neutral black shadow colors remain unchanged. Use `--color-on-primary` on both default and hovered primary fills. Sidebar active and hover color variables alias the shared palette in `.sidebar`: primary-soft/primary for active rows and surface-hover/primary-text for hover rows.

### Color usage rules

- `--color-bg-app` is the default page background.
- `--color-bg-sidebar` is the desktop navigation surface.
- `--color-bg-surface` is the default card/panel surface.
- `--color-bg-elevated` is reserved for UI that visually sits above the normal surface, such as menus, popovers, dialogs, and selected elevated content.
- `--color-primary` is for primary actions and active/high-emphasis interactive elements. Do not use it as generic decoration.
- Semantic colors communicate meaning, not branding.
- Do not communicate status with color alone. Pair status color with text and, when useful, an icon.
- Avoid pure black and pure white for large surfaces when an existing token is available.
- Do not introduce new hexadecimal colors inside feature CSS unless the value is truly local and cannot reasonably map to a semantic token.

### Application shell backgrounds

The current implementation applies the application background to `body` and a separate sidebar background to `.sidebar`:

```css
body {
  background-color: var(--color-bg-app);
}

.sidebar {
  background-color: var(--color-bg-sidebar);
}
```

Defining a color token does not apply it automatically. The sidebar needs its own background declaration; otherwise its transparent background shows the application background beneath it.

The sidebar and application use the mockup-inspired palette above. Update the shared tokens when refining colors so the shell and future components stay consistent. See D-006 in `docs/DECISIONS.md`.

### Accessible foreground pairing

Use dark foreground text on bright semantic/primary fills when appropriate. In particular, do **not** use white text on `--color-primary`; the contrast is insufficient for normal text. The default primary-button foreground should be `--color-on-primary`.

---

## 4. Appointment status semantics

The exact domain model remains provisional, but the UI should use a stable visual mapping for the current candidate states.

| Domain/UI state | Visual role | Default color | Expected label example |
| --- | --- | --- | --- |
| Requested | Warning / waiting | `--color-warning` | `Requested` |
| Confirmed / Accepted | Success | `--color-success` | `Confirmed` |
| AlternativeProposed | Informational / action required | `--color-info` | `New time proposed` |
| Declined | Negative result | `--color-danger` | `Declined` |
| Cancelled | Neutral / inactive | `--color-text-muted` | `Cancelled` |
| Completed | Informational / complete | `--color-primary` | `Completed` |

Do not infer new appointment states from visual design needs. If a screen needs a state that is not represented in the domain model, surface it as a product/domain question instead of silently adding it.

---

## 5. Typography

### Font family

Prefer a system-first sans-serif stack initially to avoid an unnecessary font-loading dependency:

```css
:root {
  --font-sans:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}
```

`Inter` may be used when it is already available or deliberately added. Do not introduce a web-font dependency solely because this file names Inter.

### Type scale

```css
:root {
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-md: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;  /* 18px */
  --font-size-xl: 1.25rem;   /* 20px */
  --font-size-2xl: 1.5rem;   /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */
}
```

Guidelines:

- Most application UI should use 14–16px text.
- Page titles generally use 24–30px.
- Section titles generally use 18–20px.
- Avoid using font size alone to establish hierarchy; use weight, spacing, grouping, and color intentionally.
- Body copy should normally use line-height around `1.5`.
- Headings may use line-height around `1.2–1.3`.
- Avoid excessive bold text. Reserve stronger weight for headings, important values, selected navigation, and key actions.

---

## 6. Spacing system

Use a 4px base spacing scale.

```css
:root {
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem;  /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem;    /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem;  /* 24px */
  --space-8: 2rem;    /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem;   /* 48px */
}
```

Rules:

- Prefer values from this scale over arbitrary pixel values.
- Common card padding: `--space-4` to `--space-6`.
- Common vertical section separation: `--space-6` to `--space-10`.
- Use tighter spacing inside a logical control group than between separate groups.
- Do not create additional spacing tokens until repeated implementation demonstrates the need.

---

## 7. Radius, borders, and elevation

```css
:root {
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 9999px;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.25);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.28);
  --shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.35);
}
```

Guidelines:

- Most inputs and buttons: `--radius-md`.
- Most cards/panels: `--radius-lg`.
- Pills/badges: `--radius-pill`.
- Prefer borders and surface contrast over heavy shadows in the normal application layout.
- Reserve medium/large shadows for overlays, dialogs, popovers, or genuinely elevated UI.

---

## 8. Application shell

```css
:root {
  --sidebar-width: 248px;
  --header-height: 64px;
  --content-max-width: 1440px;
}
```

### Desktop

Current preference:

- persistent left sidebar;
- main content fills the remaining width;
- content should not be artificially narrow on data-oriented screens;
- long-form/form screens may use a narrower inner container for readability;
- page heading and primary action should be easy to identify;
- navigation state should be obvious without excessive visual weight.

Use CSS Grid or Flexbox for the application shell. Avoid absolute positioning for primary layout.

Desktop scrolling follows D-007: the main content scrolls independently while the sidebar remains visible. The current shell uses `height: 100dvh` and one `minmax(0, 1fr)` grid row on `#root`, with `overflow-y: auto` on `main`. The body does not set a separate viewport height.

Short-window sidebar overflow remains a follow-up: if the sidebar's own contents exceed the available height, navigation and the profile must remain reachable. This desktop scrolling choice does not settle the compact navigation pattern for smaller screens.

### Tablet

- navigation may collapse or become temporarily expandable;
- do not preserve desktop widths mechanically;
- allow content columns to collapse before controls become cramped;
- keep scheduling actions reachable without horizontal page scrolling.

### Mobile

- do not keep the desktop sidebar permanently expanded;
- prefer a compact navigation pattern based on the eventual information architecture;
- stack form fields when horizontal grouping becomes cramped;
- convert wide data presentations into cards/grouped rows where that improves usability;
- allow intentional horizontal scrolling only for content that genuinely benefits from tabular comparison;
- appointment status, date/time, counterpart, and primary next action should remain visible at a glance.

---

## 9. Responsive behavior and breakpoints

Starting reference points:

```css
/* Documentation reference only; CSS custom properties cannot be used directly in media queries. */
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

Use these as initial guidance, not rigid device categories.

Important implementation rule:

> Add or adjust breakpoints when the layout actually fails, not because a specific device brand or model exists.

Approximate current interpretation:

- `< 768px`: compact/mobile layout;
- `768px–1023px`: tablet/intermediate layout;
- `>= 1024px`: desktop navigation may remain persistently visible.

Prefer fluid layout primitives such as `minmax()`, `auto-fit`, `clamp()`, flexible Grid tracks, and sensible `max-width` constraints before adding many media queries.

---

## 10. Core UX principles

### 10.1 Status clarity

A user should immediately understand the current appointment/request state and whether action is required.

### 10.2 Low interaction cost

Common tasks should require as few deliberate steps as practical. Avoid unnecessary confirmation steps for reversible actions.

### 10.3 Shared understanding

Where the product presents the same appointment to both participants, the essential state, date/time, and pending action should be consistent.

### 10.4 Safe consequential actions

Cancellation, decline, and rescheduling should clearly communicate what will happen before a destructive or consequential change is committed.

### 10.5 Responsive by design

Do not build a desktop-only composition and shrink it afterward. Components must have intentional behavior at narrower widths.

### 10.6 Accessible by default

Semantic HTML, keyboard access, visible focus, proper labels, readable contrast, sensible heading structure, and non-color status cues are baseline implementation requirements.

### 10.7 Progressive disclosure

Show the information needed to understand and act on the current workflow. Secondary metadata can be visually quieter or disclosed when needed.

---

## 11. Component baseline

Do not build a large abstract component library upfront. Create reusable primitives when actual screens demonstrate repeated needs.

The first UI layer will likely need the following component categories.

### 11.1 Button

Expected variants:

- `primary`
- `secondary`
- `ghost`
- `danger`

Expected states:

- default;
- hover;
- focus-visible;
- active;
- disabled;
- loading, when an async action cannot safely be repeated.

Guidelines:

- Desktop control height: approximately 40px.
- Touch-oriented contexts: approximately 44px minimum target height where practical.
- Primary button: `--color-primary` background with `--color-on-primary` foreground.
- Avoid multiple visually dominant primary buttons in the same local action group.
- Destructive actions should be visually distinct but not aggressively emphasized until relevant.

### 11.2 Input / Textarea

Must support:

- visible label;
- optional supporting text;
- error state with textual explanation;
- disabled/read-only distinction where needed;
- focus-visible treatment;
- placeholder that is not used as a replacement for the label.

### 11.3 Select / Combobox

Use native controls when they satisfy the UX. Do not implement a custom combobox unless requirements justify the added accessibility and interaction complexity.

### 11.4 Card / Surface

Use cards for meaningful grouping, not as a wrapper around every section.

Default characteristics:

- `--color-bg-surface`;
- subtle border;
- `--radius-lg`;
- internal spacing from the token scale;
- minimal shadow or no shadow in normal page flow.

### 11.5 Badge / StatusBadge

Use for concise state representation.

Must include readable text. Color is supplementary.

Possible implementation:

- subtle tinted background;
- semantic foreground or icon;
- compact pill geometry;
- no ambiguous abbreviation.

### 11.6 AppointmentCard / AppointmentRow

This is a domain component and should prioritize:

1. appointment/request status;
2. date and time;
3. healthcare professional or representative counterpart;
4. organization/context if needed;
5. next available action;
6. secondary metadata.

Do not overload the card with every domain field merely because it exists in the model.

### 11.7 NavigationItem

Expected states:

- default;
- hover;
- active/current;
- focus-visible;
- optional disabled only when a genuinely unavailable destination must remain visible.

Active navigation should be clear through more than a small color change alone.

### 11.8 Dialog / Modal

Use dialogs for focused, interruptive tasks such as consequential confirmation or a compact editing flow.

Do not use a modal when a full page or inline expansion is more appropriate.

Dialogs must provide:

- clear title;
- explicit close path;
- keyboard focus management;
- Escape behavior where safe;
- focus return to the initiating element;
- clear primary/secondary action hierarchy.

### 11.9 EmptyState

An empty state should explain:

- what is empty;
- whether that is expected;
- what the user can do next, if an action exists.

Avoid decorative empty states that consume excessive screen space.

### 11.10 Loading and error states

Loading should preserve layout stability where practical.

Errors should:

- explain what failed in user-relevant language;
- preserve user input when safe;
- provide a retry/recovery action when meaningful;
- avoid exposing backend exception detail directly.

---

## 12. Forms and scheduling UX

Appointment creation/rescheduling is expected to be a core workflow.

General rules:

- group related fields logically;
- keep labels persistent;
- show validation close to the relevant field;
- distinguish validation errors from server/transport errors;
- do not clear user-entered values after a recoverable error;
- make selected date/time and timezone semantics explicit once timezone behavior is defined;
- avoid asking for information that can be derived safely;
- use sensible defaults only when they are predictable and reversible.

The exact scheduling fields and business rules are not yet finalized. Do not invent duration rules, availability rules, booking windows, approval rules, or timezone behavior from UI assumptions.

---

## 13. Data presentation

For appointment lists:

- prioritize status, date/time, counterpart, and action;
- visually de-emphasize secondary metadata;
- support scanning before adding dense table features;
- keep filters proportional to demonstrated user needs;
- do not build advanced sorting/filtering infrastructure before workflows justify it.

A desktop table may be appropriate when users need to compare many rows across consistent columns. A card/list format may be more appropriate when each appointment has different actions or metadata.

Do not force the same representation across all viewport sizes.

---

## 14. Interaction states

Every interactive component should consider applicable states:

- default;
- hover;
- focus-visible;
- active/pressed;
- selected/current;
- disabled;
- loading;
- success feedback;
- validation/error.

Do not design only the happy-path screenshot.

Use `:focus-visible` rather than removing focus outlines. A focus ring should remain clearly distinguishable against all supported surfaces.

---

## 15. Motion

Motion is optional and should communicate state change, not decorate the interface.

If used:

- keep transitions short and subtle;
- prefer opacity/transform for lightweight UI transitions;
- respect `prefers-reduced-motion`;
- do not animate critical information in a way that delays access to it;
- avoid continuous ambient animation.

---

## 16. Icons

No icon library has been approved yet.

Until one is selected:

- use icons only when they improve recognition or compactness;
- pair unfamiliar icons with text;
- keep stroke/fill style consistent within the application;
- do not introduce an icon dependency without explaining why it is needed;
- ensure icon-only buttons have accessible names.

---

## 17. Accessibility baseline

Accessibility is part of implementation quality, not a later polish pass.

Codex should prefer:

- semantic HTML elements before ARIA workarounds;
- native `button`, `input`, `select`, `dialog`, headings, lists, and landmarks where appropriate;
- programmatic labels for form controls;
- keyboard-operable interactions;
- visible `focus-visible` states;
- adequate text/background contrast;
- text or icon + text for status meaning, not color alone;
- meaningful error messages associated with fields;
- logical DOM/focus order matching the visual interaction order;
- reduced-motion support for non-essential transitions.

Do not add ARIA attributes mechanically. Incorrect ARIA can make an otherwise accessible native control worse.

---

## 18. CSS implementation guidance

The project is also a deliberate learning vehicle for React and CSS.

When implementing UI, Codex should:

- explain significant layout decisions, especially Flexbox versus Grid;
- prefer normal document flow over absolute positioning;
- use Flexbox for one-dimensional alignment/distribution;
- use Grid when rows and columns need coordinated layout;
- prefer `gap` over child margins for layout spacing where appropriate;
- use responsive constraints such as `min()`, `max()`, `clamp()`, `minmax()`, and flexible tracks when they simplify layout;
- keep specificity low;
- avoid `!important` unless there is a concrete, explained reason;
- avoid deep selector nesting;
- avoid style values duplicated across many components when a token or shared primitive is appropriate;
- avoid premature utility/framework adoption merely to solve basic CSS;
- explain new CSS concepts when they materially affect the implementation.

Do not introduce Tailwind, CSS-in-JS, a UI component framework, or another styling architecture unless the repository has already adopted it or the change is explicitly discussed and approved.

---

## 19. React component guidance

When translating these patterns into React:

- component boundaries should represent meaningful UI or behavior, not arbitrary DOM fragments;
- keep state close to the component that owns the interaction;
- prefer derived state over duplicated synchronized state;
- do not encode domain state only as CSS classes; use explicit typed values and map them to presentation;
- keep reusable primitives generic only when multiple concrete uses justify it;
- use domain-specific components such as `AppointmentCard` when the domain meaning improves readability;
- avoid creating a universal component abstraction before requirements are known.

A component should not accept dozens of visual boolean props as a substitute for a coherent API.

---

## 20. Suggested initial file organization

This is a starting point, not a mandatory architecture.

```text
src/
├── app/
│   └── ...
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Card/
│   │   └── StatusBadge/
│   └── appointments/
│       └── AppointmentCard/
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   └── ...
└── ...
```

Do not create every directory/component above before it is needed. Let the structure emerge from implemented screens.

---

## 21. Global CSS baseline

A minimal application baseline may start approximately like this:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: var(--font-sans);
  color-scheme: dark;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--color-bg-app);
  color: var(--color-text-primary);
  font-size: var(--font-size-md);
  line-height: 1.5;
}

button,
input,
textarea,
select {
  font: inherit;
}

button,
a,
input,
textarea,
select {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}
```

Treat this as a reasonable starting point, not copy-paste doctrine. Adapt it to the actual project setup.

---

## 22. First-screen implementation checklist

For each meaningful new screen, verify:

- What is the user's primary task?
- What information must be visible immediately?
- What is the primary action?
- What states can this screen be in?
- What happens when there is no data?
- What happens while data is loading?
- What happens when an API call fails?
- What changes at narrow widths?
- Can the entire workflow be completed with a keyboard?
- Are status and validation understandable without relying only on color?
- Does the screen introduce a product assumption not documented elsewhere?

If the answer to the final question is yes, flag the assumption instead of silently implementing it as settled behavior.

---

## 23. Current non-decisions

The following are still intentionally open unless a newer document or approved mockup resolves them:

- final brand identity and logo treatment;
- final font selection/hosting strategy;
- final icon library;
- final navigation information architecture;
- final component library strategy;
- light theme;
- animation language;
- detailed calendar interaction model;
- exact appointment form fields;
- exact availability model;
- timezone rules;
- notification UI;
- organization/admin dashboard patterns;
- advanced table/filtering behavior.

Do not infer these from generic SaaS conventions.

---

## 24. Design references

The repository includes visual references under `design/mockups/`. Read `design/mockups/README.md` before implementing a screen from those files.

Current references:

### Desktop

- `design/mockups/desktop-appointment-dashboard.png`
- `design/mockups/desktop-representative-directory.png`
- `design/mockups/desktop-book-appointment-sofia-bennett.png`

### Tablet

- `design/mockups/tablet-scheduling-dashboard.png`
- `design/mockups/tablet-representative-directory.png`
- `design/mockups/tablet-appointment-booking.png`

### Mobile

- `design/mockups/mobile-visit-dashboard.png`
- `design/mockups/mobile-find-representatives.png`
- `design/mockups/mobile-appointment-booking.png`

For UI work, inspect the relevant image in addition to this document. Use the mockup to understand composition, hierarchy, density, navigation treatment, responsive intent, and component appearance.

Mockups are **visual references, not product specifications**. Generated names, companies, dates, counts, text, statuses, form fields, and workflow details may be illustrative placeholders. Do not promote them into domain requirements unless another product document confirms them.

When a mockup conflicts with a documented product requirement:

1. do not silently choose one;
2. identify the conflict;
3. prefer the most recently approved source when approval is clear;
4. otherwise surface the discrepancy for a product/design decision.

When implementing from a mockup, preserve visual intent rather than reproducing brittle pixel values. Derive responsive layouts with CSS Grid/Flexbox and the breakpoints in this document; do not hard-code the source image dimensions as application breakpoints.

---

## 25. Codex working rule

When building PharmaRep UI:

1. start from these tokens and interaction principles;
2. implement the smallest complete responsive flow required by the current task;
3. explain meaningful React/CSS decisions;
4. reuse existing primitives before adding near-duplicates;
5. test desktop and narrow layouts;
6. include loading, empty, error, focus, disabled, and relevant status states;
7. flag undocumented product assumptions;
8. prefer consistency and clarity over visual novelty.

The objective is not to create a perfect design system before the product is validated. The objective is to provide enough structure that every new screen looks and behaves like part of the same product while remaining easy to revise.
