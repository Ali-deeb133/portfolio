# Portfolio — Project Rules

Single-page developer portfolio. **Static site only — no backend, no server, no database.**

Before building anything, read:
- `docs/design.md` — colors, typography, animations
- `docs/sections.md` — content and layout of each section

## Stack
- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion (animations)
- lucide-react / react-icons (icons)

## Folder structure

```
src/
├── sections/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   └── contact/
├── shared/
│   ├── components/   # Navbar, Footer, Button, SectionTitle, ...
│   ├── hooks/        # useActiveSection, useScrollProgress, ...
│   ├── data/         # data.ts — ALL site content
│   └── styles/       # global styles
├── App.tsx
└── main.tsx
```

## Rules
1. **One folder per section.** Each section lives in `src/sections/<name>/`.
2. **Local first, shared second.** A component used by only one section stays inside that section's folder (e.g. `ProjectCard` lives in `sections/projects/`). Move something to `shared/` only when it is used by two or more sections.
3. **Don't over-split.** Do not create sub-folders like `types/` or `utils/` inside a section unless truly needed. A folder with one file is fine.
4. **All content lives in `src/shared/data/data.ts`** — texts, skills, projects, links. Components must never hardcode content. I should be able to edit the whole site from that one file.
5. Each section has an `id` matching the navbar links: `home`, `about`, `skills`, `projects`, `contact`.
6. TypeScript strict mode; define types for the data (Project, Skill, SocialLink, ...).
7. Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`) and accessible markup (alt texts, aria-labels, keyboard navigation, good contrast).
8. External links open in a new tab with `rel="noopener noreferrer"`.
9. Mobile-first and fully responsive.
10. Respect `prefers-reduced-motion`.
11. Keep components small and readable — I need to understand and explain every line in interviews.

## Workflow
- Start in plan mode: propose the file structure and data types first, wait for my approval.
- Build section by section, not all at once.
- After each section, tell me what to check in the browser.
