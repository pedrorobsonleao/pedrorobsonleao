# Copilot instructions for this repository

## Project overview

This repository is a static personal portfolio site for Pedro Robson Leão. It is intentionally a lightweight front-end project with no framework, build pipeline, or backend service. The site is designed around a dark technology aesthetic and presents a personal brand centered on software architecture, leadership, engineering excellence, and agile delivery.

Relevant files:
- `index.html`: page structure, content sections, and static markup
- `style.css`: visual design system, layout, responsive behavior, and theme styling
- `script.js`: client-side interactivity such as the mobile menu, skill filters, terminal simulation, and contact-form UI behavior
- `README.md`: the canonical project description and personal profile copy

## Build, test, and lint commands

There is no package manifest, bundler configuration, lint setup, or automated test suite in this repository.

Useful local preview commands:
- `python3 -m http.server 8000` from the repository root
- Open `http://localhost:8000` in a browser

There are no single-test commands because no automated test runner is configured. If a change is visual or interactive, validate it by serving the site locally and checking the relevant page behavior in the browser.

## High-level architecture

This is a vanilla HTML/CSS/JavaScript single-page portfolio:
- `index.html` defines the content sections and anchors for navigation (`#about`, `#experience`, `#skills`, `#terminal`, `#contact`).
- `style.css` owns the repository-wide design system: colors, typography, layout, card styling, buttons, animated backgrounds, and responsive behavior.
- `script.js` is the behavior layer. It is responsible for mobile nav toggling, skill-tab filtering, the simulated terminal command interface, and the contact-form interaction states.

The project is intentionally front-end-only and static: there is no server-side rendering, API layer, or data model. Any change should keep the site self-contained and easy to preview in a browser without build tooling.

## Key conventions

- Keep the portfolio’s visual identity consistent with the current dark-tech brand: deep navy backgrounds, purple/blue accents, soft-glow effects, and a polished developer aesthetic.
- Preserve the existing section structure and semantic anchors unless the task explicitly calls for a redesign.
- Favor small, targeted edits over new abstractions. This repository does not benefit from a framework or component system.
- When changing text or content, keep it aligned with the persona described in `README.md`: senior tech leader, software architect, agile practitioner, and Unix/Linux-oriented engineer.
- Treat the terminal section as a simulated shell for brand/UX purposes; it is not a real CLI backend and should remain a client-only experience unless the project scope clearly changes.
- Keep page behavior simple and predictable: no heavy dependencies, no build step, and no hidden runtime assumptions.

## Working guidance for future Copilot sessions

- Check the site visually in a browser after any CSS/JS change; this project is highly UI-driven.
- Avoid introducing Node tooling, package managers, or front-end build systems unless there is a clear repo-wide requirement to do so.
- If adding new content, prefer the current style and existing copy tone rather than inventing a different brand voice.
- When editing the portfolio copy, keep the personal narrative consistent with the README and the sections already present in the page.
