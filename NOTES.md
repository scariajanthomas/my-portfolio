# Portfolio – Pending Items & Notes

A living reference for everything that needs to be added, updated, or built.
Update this file as items are completed or plans change.

---

## Status Legend
- `[ ]` Pending
- `[~]` In Progress
- `[x]` Done

---

## Config File (`gitprofile.config.ts`)

### Social & Contact
- `[x]` LinkedIn handle fixed → `'jan-scaria-thomas'`
- `[x]` Email added → `scaria.jan.thomas@gmail.com`
- `[x]` Phone added
- `[x]` SEO description added
- `[x]` SEO image set → GitHub profile picture

### Resume
- `[x]` Resume PDF linked via Google Drive

### Projects
- `[ ]` GitHub repos — once public repos are added, revisit exclude list
  - Path: `projects.github.automatic.exclude.projects[]`
- `[ ]` External projects — add when ready
  - Path: `projects.external.projects[]`
- `[ ]` Future: component-level GitHub repo filter by language (Python only)
  - File: `src/components/github-project-card/index.tsx`

### Experience
- `[ ]` Add company website for LG Soft India → `experiences[0].companyLink`

### Certifications
- `[ ]` Add ISTQB certificate link → `certifications[0].link`
- `[ ]` Add future certifications when obtained

### Education
- `[ ]` Add start years for both entries when needed
  - `educations[0].from` — Annamalai University
  - `educations[1].from` — NTTF

### Theme
- `[x]` Default theme set to `dark`
- `[x]` Theme switcher disabled (`disableSwitch: true`)
- `[ ]` Move theme switcher to bottom of page — component-level change
  - File: `src/components/theme-changer/index.tsx`
- `[ ]` Limit visible themes in the switcher when re-enabled

### Footer
- `[x]` Updated to: `© 2025 Jan Thomas · QA Engineer · email`

### Blog
- `[ ]` Add Medium or Dev.to username if a blog is started
  - Path: `blog.source`, `blog.username`

---

## Component-Level Changes (`src/components/`)

- `[ ]` Move theme switcher to bottom of page
  - File: `src/components/theme-changer/index.tsx`
- `[ ]` Filter GitHub projects by language (Python only)
  - File: `src/components/github-project-card/index.tsx` or `src/components/gitprofile.tsx`
  - Trigger: when public repos are available

---

## Future Sections (require new components)

- `[ ]` Any additional section beyond the current set
  - Steps: add data to `gitprofile.config.ts` → create card in `src/components/` → register in `src/components/gitprofile.tsx`

---

## Deployment

- `[x]` GitHub Actions workflow set up (`deploy.yml`)
- `[x]` Deploys to `gh-pages` branch on push to `main`
- `[x]` GitHub Pages live at `https://scariajanthomas.github.io/my-profile/`
- `[x]` Base path set to `/my-profile/`
- `[x]` Workflow permissions set to read/write

---

## Housekeeping
- `[x]` Add `NOTES.md` to `.gitignore` — personal reference file, not part of the project

---

## Notes & Decisions Log

| Date | Decision | Reason |
|------|----------|--------|
| — | Skills: excluded React & Vite | Still in learning stage, not interview-ready |
| — | Projects: automatic mode, sort by updated, limit 4 | No public repos yet, cleaner display |
| — | External projects: cleared, kept for later | No external projects ready |
| — | Blog section: disabled | No blog yet |
| — | Publications: commented out | Not applicable |
| — | Theme switcher: disabled | Too many themes, overwhelming |
| — | NOTES.md: added to .gitignore | Personal reference, not project dependency |