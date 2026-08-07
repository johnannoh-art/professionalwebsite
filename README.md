# John Annoh — Personal Site

Single-page personal site built with Next.js (App Router) and Tailwind CSS. Configured for static export.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Node.js

This machine didn't have Node.js on PATH, so a portable copy (no installer/admin rights needed) was extracted to
`%LOCALAPPDATA%\nodejs-portable\node-v24.19.0-win-x64`. `dev-with-node.cmd` in this folder runs `npm run dev` using
that copy without touching your PATH. If you'd rather have `node`/`npm` available in every terminal, either run the
official installer yourself (`winget install --id OpenJS.NodeJS.LTS -e`, approving the admin prompt) or add that
folder to your user PATH.

## Photo

`public/images/portrait.jpg` is the real portrait (resized to 1200×1600 and compressed to keep the page light). To
swap it for a different shot, replace that file and keep the same filename, or update the `src` in
[`components/Hero.tsx`](components/Hero.tsx).

## Update contact links

`components/Contact.tsx` and `components/Footer.tsx` both have a `LINKEDIN_URL` placeholder near the top — update it
to your real profile URL.

## Build a static export

```bash
npm run build
```

Static files are output to the `out/` directory (via `output: "export"` in `next.config.mjs`), ready to deploy to
any static host (Netlify, Vercel, GitHub Pages, S3/CloudFront, etc.).
