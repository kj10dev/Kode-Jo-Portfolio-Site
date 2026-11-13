# Kode-Jo City

An interactive 3D portfolio built with Three.js. Explore the city to discover projects, skills, and experience.

## Requirements

- Node.js
- npm
- An internet connection to load Three.js and fonts from their CDNs

## Getting started

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Build

Create a production build in `dist/`:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Project structure

```text
index.html       HTML entry point
src/
  main.js        Application logic and startup
  style.css      Application styles
public/          Static assets served from the site root
```

Place static assets in `public/`; reference them by their root-relative path in the app.
The Kode-Jo logo assets in `public/` supply the favicon and theme-aware loading screen.
