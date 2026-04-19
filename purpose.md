# Portfolio site — purpose and goals

This folder anchors **documentation and intent** for the personal portfolio website project in this repository. Implementation code may live at the repo root, in a subdirectory, or be merged in later; treat this file as the **source of truth for why changes exist**, not as a map of every file.

## What this project is

The site started from **someone else’s portfolio template or codebase**. The goal is to **fully convert it into Akhil Konduru’s personal portfolio**: copy, structure, branding, projects, and voice should reflect the owner, not the original author.

Future work should assume:

- **No lingering third-party identity** in visible UI, metadata (title, Open Graph), `README`, or legal/footer attribution unless the license explicitly requires it and it is implemented correctly.
- **Design and component patterns** from the original may stay where they speed delivery; **content and navigation** should be intentional for this owner.

## Primary goals

1. **Personal ownership** — Every public-facing string, case study, link, and image should be truthful for Akhil or clearly marked as placeholder until replaced.
2. **Credible “About”** — The About / bio section should read as a real engineer/product person, not template filler. It is a current focus area for content and layout.
3. **Maintainability** — Prefer changes that a future agent can follow without reverse-engineering one-off hacks. Keep routing and content boundaries clear.
4. **Performance and accessibility** — Preserve or improve baseline web quality (semantic HTML, contrast, keyboard use, fast loads) when editing templates.

## Near-term priorities

- **About Me** — Rewrite narrative, tighten structure (who / what / proof / how to reach), and align typography and spacing with the rest of the site.
- **Remove or replace** demo projects, stock imagery, and example social links from the template.
- **SEO and sharing** — Update page titles, descriptions, and social preview fields to match the new identity.

## Guidance for agents

- **Read before editing** — Locate the existing About route or section and match established patterns (i18n, MDX, component library, styling system).
- **Scope** — Implement what the user asked for; avoid drive-by refactors unrelated to the portfolio task.
- **Verify** — After substantive UI changes, run the project’s usual dev/build/lint command if one exists in the repo.
- **Update this doc** — When the canonical app path, stack, or deployment target is fixed, add a short **“Implementation”** subsection below with paths (e.g. framework, `app/` vs `pages/`, design tokens) so the next agent does not have to rediscover it.

## Implementation (fill in as the repo evolves)

| Item              | Value |
|-------------------|-------|
| App location      | _TBD — e.g. monorepo package or root_ |
| Framework / stack | _TBD_ |
| About route / file | _TBD_ |
| Deploy target     | _TBD — e.g. Vercel_ |

---

*Last created for onboarding future agents; extend the table and priorities as the site grows.*
