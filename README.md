# Aniruddha Sonawane — Portfolio

A responsive engineering portfolio built with React, TypeScript, and Vite. Content is data-driven so projects and experience can be updated without changing component markup.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

## Updating content

- Projects: `src/data/projects.ts`
- Experience: `src/data/experience.ts`
- Skills and education: `src/App.tsx`
- Project visuals: `public/images/`

Planned projects intentionally use pending benchmark labels. Replace those values only after measuring them.

## Deployment

The GitHub Actions workflow builds and deploys `dist/` to GitHub Pages on pushes to `main`. In the repository settings, set Pages → Source to **GitHub Actions**.
