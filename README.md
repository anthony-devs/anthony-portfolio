# anthony-devs portfolio

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4. Static export, no server needed.

## Run it

```bash
npm install
npm run dev        # live-reload while editing → http://localhost:3000
npm start          # builds the site, then serves it → http://localhost:3000
npm run preview    # serves the last build without rebuilding
```

`npm run build` alone just writes the static site to `/out`; it doesn't start a server.

## Where to edit

| What | File |
| --- | --- |
| Name, bio, links, stats, stack, projects, services, ship log | `src/content/site.ts` |
| Case studies (one per page at `/work/<slug>`) | `src/content/case-studies.ts` |
| Colours and fonts | `src/app/globals.css` (the `@theme` block) |
| Page layout | `src/app/page.tsx`, `src/app/work/[slug]/page.tsx` |
| Pieces (nav, sidebar, cards, contact) | `src/components/` |

Anything in `[BRACKETS]` is a placeholder.

## Images

Put files in `/public` and point to them by path:

- Avatar: `public/avatar.png` → set `avatar: "/avatar.png"` in `site.ts`
- CV: `public/cv.pdf`
- Service thumbnails: set `image` on each service
- Case study shots: e.g. `public/work/rev-games/lobby.png` → set `image` on each screen

## Add a case study

1. Copy the `rev-games` object in `case-studies.ts` and change `slug`.
2. In `site.ts`, set `caseStudy: true` on the project with the same slug.

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. Import it on vercel.com. It detects Next.js; no settings needed.
3. Add your domain under Project → Settings → Domains.

Also works on Netlify, Cloudflare Pages or GitHub Pages: upload the `/out` folder.
