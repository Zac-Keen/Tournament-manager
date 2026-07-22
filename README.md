# Tournament Manager

A professional tournament management dashboard built with React, Vite, and Tailwind CSS.

## Features

- **Professional dark theme** — clean slate/navy design with blue accents
- **Ongoing tournaments dashboard** — live and registration-open events at a glance
- **Stats overview** — active tournaments, live count, total players, prize pool
- **Search** — filter tournaments by name, game, location, or organizer
- **Tournament cards** — progress bars, status badges, prize pools, and formats

## Quick preview (no install)

Open `preview.html` in your browser for an instant standalone preview.

## Full app setup

1. Install [Node.js LTS](https://nodejs.org/) (includes npm)
2. In this folder, run:

```bash
npm install
npm run dev
```

3. Open the URL shown in the terminal (usually `http://localhost:5173`)

## Scripts

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run preview` | Preview production build |

## Project structure

```
src/
  components/   UI components (Layout, TournamentCard, StatCard, StatusBadge)
  data/         Sample tournament data
  types/        TypeScript types
```
