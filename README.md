# Aayush Musale — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS.

## Design concept

Dark, technical "detection frame" theme — bounding-box corner brackets and
mono-font confidence tags reference your CV/object-detection work instead of
a generic template look.

- **Palette:** ink `#0b0f13`, panel `#12181f`, fog `#8a97a3`, paper `#edf1f4`,
  signal `#ff6a3d`, trace `#4fd1c5`
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/tags)
- **Signature element:** the `DetectionFrame` component — corner brackets +
  a floating `label · confidence` tag, styled like a YOLO detection box

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: fonts load via `next/font/google`, so the machine running `npm run dev`
> / `npm run build` needs normal internet access (this was built in a sandboxed
> environment without access to fonts.gstatic.com — it builds fine with real
> internet).

## Structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx           assembles all sections
  globals.css        design tokens (CSS variables) + Tailwind
components/
  Nav.tsx            fixed nav, mobile menu
  Hero.tsx           hero + DetectionFrame monogram
  About.tsx          bio, education, current focus, leadership
  Projects.tsx        section wrapper
  ProjectCard.tsx     individual project card
  Skills.tsx          grouped skill tags
  Contact.tsx         contact links + location card
  Footer.tsx
  DetectionFrame.tsx  signature corner-bracket wrapper
  icons.tsx           custom GitHub/LinkedIn SVGs (lucide dropped brand icons)
lib/
  data.ts             all content — profile, projects, skills, leadership
```

## Content — edit this first

Everything text-based lives in `lib/data.ts`. To update:
- **Projects:** edit the `projects` array (summary, bullet points, metrics, stack)
- **Skills:** edit `skillGroups`
- **Contact info / bio:** edit `profile`
- **Real project links:** fill in each project's `link` field (currently empty —
  cards only show the external-link icon once a link is set)

## Things you said you'd send later

- A real profile photo (hero currently shows an initials monogram in the
  DetectionFrame — drop an image in `public/` and swap it into `Hero.tsx`)
- Live GitHub links per project
- Anything else you want changed once you've seen this pass
