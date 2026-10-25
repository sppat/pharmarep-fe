# Engineering Conventions

These conventions are intentionally lightweight. Follow the repository's established tooling when it becomes more specific.

## General

- Code, comments, identifiers, and technical documentation are written in English.
- Prefer small, composable units with clear names.
- Optimize for readability and maintainability before abstraction density.
- Avoid speculative generalization.
- Do not introduce dependencies without explaining the concrete problem they solve.
- Keep product assumptions out of low-level code when they can remain explicit at a higher layer.

## React + TypeScript

- Use TypeScript for application code.
- Prefer functional React components.
- Define props explicitly.
- Keep state as close as possible to where it is used.
- Prefer derived values over synchronized duplicate state.
- Use effects for synchronization with external systems, not as a default mechanism for ordinary calculations.
- Keep components focused; split them when behavior, reuse, or readability warrants it.
- Avoid premature generic component systems.
- Keep server data types and UI view models explicit when they differ.

## ESLint

Run `npm run lint` to check the repository's TypeScript and TSX files. Keep the recommended JavaScript, React Hooks, and Vite Fast Refresh presets, and use TypeScript's `recommendedTypeChecked` preset with `projectService` to resolve each file's TypeScript project.

- Require `===` and `!==` through `eqeqeq: ['error', 'always']`.
- Treat `react-hooks/exhaustive-deps` violations as errors; resolve missing dependencies by understanding the effect's behavior.
- The type-aware preset includes `@typescript-eslint/no-floating-promises` and `@typescript-eslint/no-misused-promises`, alongside its other recommended checks. Handle asynchronous work explicitly.
- Accessibility linting is deferred: the published `eslint-plugin-jsx-a11y` 6.10.2 declares support only through ESLint 9, while this repository uses ESLint 10. Recheck compatibility before adding it. Manual accessibility review remains necessary.

Keep formatting and naming restrictions out of the lint configuration unless a concrete need is agreed.

For inline lint errors in VS Code, install Microsoft's ESLint extension (`dbaeumer.vscode-eslint`), listed in `.vscode/extensions.json`. The extension uses the repository's ESLint configuration and displays diagnostics as you type. The recommendation does not install the extension automatically.

## CSS

The project should be educational as well as functional.

- Prefer standard CSS layout tools before adding a styling abstraction.
- Use Flexbox for one-dimensional alignment/distribution.
- Use Grid for two-dimensional layout where rows and columns matter together.
- Prefer responsive constraints (`min`, `max`, `clamp`, flexible tracks) over many arbitrary fixed widths.
- Avoid absolute positioning for primary layout.
- Keep specificity low and selectors understandable.
- Establish design tokens only when repeated values justify them.
- Define breakpoints from actual layout failure points, not device brand names.

## ASP.NET Core

- Follow existing solution/project conventions.
- Keep controllers/endpoints thin enough that domain/application behavior remains testable.
- Use dependency injection intentionally.
- Keep DTOs separate from persistence entities when their responsibilities differ.
- Use asynchronous APIs for I/O paths.
- Enforce authorization server-side.
- Avoid unnecessary repository/service layers that only forward calls without adding a useful boundary.

## SQL Server / persistence

- Prefer explicit migrations.
- Add indexes from actual query/access needs.
- Use constraints where they protect domain integrity.
- Store timestamps consistently and document timezone semantics.
- Avoid soft-delete, temporal history, or audit infrastructure until requirements justify them.

## Tests

Testing depth should match risk.

Prioritize tests for:

- appointment state transitions;
- authorization rules;
- validation rules;
- date/time behavior;
- critical frontend interaction paths;
- bug fixes that could regress.

Avoid brittle tests that assert implementation details without protecting behavior.

## Date/time handling

Scheduling software is sensitive to time semantics.

Before implementing appointments, explicitly decide:

- what timezone a proposed appointment time is expressed in;
- what is stored in persistence;
- what timezone is displayed;
- whether organization/user timezone can differ;
- how daylight-saving transitions are handled.

Do not make these rules implicit across frontend and backend.

## Commit messages

Use English commit messages with a short prefix describing the kind of change:

```text
type: short description
```

| Prefix | Meaning | Example |
| --- | --- | --- |
| `feat` | A new feature or capability. | `feat: add initial sidebar and main content grid layout` |
| `assets` | Images, logos, fonts, or similar asset files. | `assets: add PharmaRep SVG logo variants` |
| `docs` | Documentation changes. | `docs: record step-by-step collaboration preference` |

These prefixes make Git history easier to scan; Git itself gives them no special behavior. `feat` and `docs` are commonly used in Conventional Commits. `assets` is a descriptive repository convention; this guide does not require tooling or strict enforcement of a broader standard.

Keep descriptions concise and use an action verb such as `add`, `update`, or `fix`. Choose the prefix that best describes the main purpose of the commit.

## Pull-request / change summary expectation

For meaningful changes, summarize:

- what changed;
- why it changed;
- what was tested;
- assumptions made;
- follow-up work or unresolved product questions.
