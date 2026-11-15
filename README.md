# Stefan Remer portfolio

The site is built with Astro and deployed as static files by the homelab edge stack.

## Local development

```bash
npm install
npm run dev
```

## Content and deployment

- Update professional content in `src/data/cv.ts`.
- OpenResume does not have a reliable import for this TypeScript data. Use
  `cv.ts` as the reviewed source when entering the one-off résumé in its form;
  its PDF import is useful only as a starting point and must be checked.
- Put the reviewed OpenResume export in `public/stefan-remer-resume.pdf`, then
  set `resumePdf: "/stefan-remer-resume.pdf"` in `cv.ts`. The download button
  appears automatically.
- `npm run build` creates `dist/`. The edge deployment runs this build before synchronising the stack, and Caddy serves `dist/`.
