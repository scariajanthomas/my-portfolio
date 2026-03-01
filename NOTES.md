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
- `[x]` Add email → `social.email`
- `[~]` Add website URL if available → `social.website`
- `[x]` Fix LinkedIn value — currently set to full URL, should be username/handle only
  - Current: `'www.linkedin.com/in/jan-scaria-thomas'`
  - Should be: `'jan-scaria-thomas'`

### Resume
- `[x]` Host resume PDF (Google Drive / any public URL) and replace dummy link
  - Path: `resume.fileUrl`
  - Current value: `'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'`

### Projects
- `[ ]` GitHub repos — once public repos are added, revisit exclude list
  - Path: `projects.github.automatic.exclude.projects[]`
- `[ ]` External projects — add when ready
  - Path: `projects.external.projects[]`
- `[ ]` Future: component-level GitHub repo filter by language (Python only)
  - File: `src/components/github-project-card/index.tsx`

### SEO
- `[x]` Add SEO description → `seo.description`
- `[x]` Add SEO preview image URL → `seo.imageURL`

### Experience (Changes to be added later)
- `[ ]` Add company website for LG Soft India → `experiences[0].companyLink`
- `[ ]` Add start year for BCA degree → `educations[0].from`
- `[ ]` Add start year for NTTF Diploma → `educations[1].from`

### Certifications
- `[ ]` Add ISTQB certificate link → `certifications[0].link`
- `[ ]` Add any future certifications (e.g. ISTQB Advanced, Selenium, Python)

### Theme
- `[x]` Finalize default theme → `themeConfig.defaultTheme` (currently `'lofi'`)
- `[x]` Decide whether to disable theme switcher → `themeConfig.disableSwitch`

### Footer
- `[x]` Add custom footer text (ut need better change.)
  - Path: `footer` (currently commented out)

### Blog (NOthing to add yet)
- `[ ]` Add Medium or Dev.to username if a blog is started in the future
  - Path: `blog.source`, `blog.username`

---

## Component-Level Changes (`src/components/`)

- `[ ]` Filter GitHub projects by language — modify `github-project-card` or `gitprofile.tsx`
  - Trigger: when public repos are available and automatic mode needs refinement
- `[ ]` Review and clean up unused social icons in `details-card/index.tsx`

---

## Future Sections (require new components)

- `[ ]` Any additional section beyond the current set
  - Steps: add data to `gitprofile.config.ts` → create card in `src/components/` → register in `src/components/gitprofile.tsx`

---

## Deployment (`vite.config.ts`, `.github/workflows/deploy.yml`)

- `[ ]` Confirm `base` path matches GitHub Pages repo setup (currently `'/'`)
- `[ ]` Verify deploy workflow branch is correct after first push
- `[ ]` Update `index.html` `<title>` tag if needed

---

## Notes & Decisions Log

| Date | Decision | Reason |
|------|----------|--------|
| — | Skills: excluded React & Vite | Still in learning stage, not interview-ready |
| — | Projects: automatic mode, no exclusions | No public repos yet |
| — | External projects: cleared, kept for later | No external projects ready |
| — | Blog section: disabled | No blog yet |
| — | Publications: commented out | Not applicable |
