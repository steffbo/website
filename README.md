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

## Deploy

The site is served at `https://cv.remer.cc` (public, through the Cloudflare tunnel) by Caddy on
`vm-edge`. The homelab repo holds this repo as the submodule `stacks/edge/www/cv.remer.cc` and deploys
the commit that submodule points to, not the latest push:

```bash
git push                                   # in this repo
cd ~/workspace/homelab && git pull -q --ff-only
git -C stacks/edge/www/cv.remer.cc pull -q origin master
git add stacks/edge/www/cv.remer.cc && git commit -m "edge: update cv.remer.cc" && git push
cd ansible && ansible-playbook playbooks/deploy-stacks.yml --tags edge 2>&1 | tail -5
curl -s -o /dev/null -w '%{http_code}\n' https://cv.remer.cc/   # expect 200
```

`--tags edge` rebuilds the site on the deploying machine (`npm ci && npm run build`) and, when the synced
files changed, recreates Caddy, cloudflared and Alloy, so every public site and `*.home.remer.cc` route
is briefly unavailable. Ask before deploying.
