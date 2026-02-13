# Aniket Gaikwad | Mobile-First Portfolio

A premium, mobile-first portfolio experience built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Framer Motion. The design uses a black base with neon accents, minimal typography, and lightweight animations optimized for mobile UX.

> **Note:** The external content source (`https://aniket-gaikwad-portfolio.lovable.app/`) could not be accessed from this environment. The portfolio content in `data/portfolio.ts` is populated using the legacy Angular source that already exists in this repository.

## Tech Stack

- Next.js (App Router)
- React 18
- TypeScript
- Tailwind CSS (mobile-first)
- Framer Motion (subtle motion only)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is ready for Vercel or Netlify. For Vercel, import the repository and use the default Next.js settings.

## Content Management

Edit `data/portfolio.ts` to update:

- Name, hero tagline, and about copy
- Skills and work experience
- Projects and testimonials
- Education and contact details

## Design Tokens

Tailwind theme extensions live in `tailwind.config.ts` (neon accent colors, typography, and glow shadows).
