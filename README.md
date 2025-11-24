# 252211_BrickWall

This project renders a fully parametric brick wall in the browser using modern WebGL tooling. The experience is tuned to mimic a DCC workflow by exposing every meaningful measurement—including the path curve, brick size, and procedural removal effect—through an interactive control stack backed by a responsive Three.js scene with cinematic lighting.

## Features
- Three.js scene with ACES tone mapping, high-resolution shadows, and multiple lights for studio-style illumination.
- Parametric wall controls for brick length, wall size, thickness, height, gaps (vertical and horizontal), and a falloff slider tied to an attractor point.
- Curve Control Panel with selectable path types:
  - Catmull-Rom spline (add/move/delete points).
  - Polyline with draggable points (add/remove anywhere along a segment) for sharp interior corners; wall path now matches the editor proportions 1:1.
- Procedural brick instancing with toon shading, vertex-colored gradients, and baked brick/bump textures for readability.
- Attractor-driven removal workflow (never touches ground row) plus physics-based collapse simulation (cannon-es) with start/reset controls.
- Exports: OBJ and PLY with baked vertex colors/gradient; Snapshot captures the full app view (UI + scene) to PNG.
- GitHub Pages live demo (main): https://siminaioa.github.io/252211_BrickWall/
- Preview deploy workflow: pushes from `feature/preview-share` build to `gh-pages-preview` for a separate preview link.

## Getting Started
1. Install dependencies: `npm install` (installs `three`, `lil-gui`, and `vite`).
2. Start a local dev server: `npm run dev` then open the printed localhost URL in a browser.
3. Build for production/LAN hosting: `npm run build` (outputs the site into `dist/`).
4. Preview the production bundle locally: `npm run preview`.

## Controls
- **Wall Parameters** (sliders): brick length, wall length/height/width, gap size, row count, and `Falloff` for the attractor.
- **Curve Control Panel**: choose Catmull-Rom (add/move/delete points) or Polyline (add/delete/move points on any segment) to shape the wall path.
- **Viewport**: use mouse/touch with OrbitControls (LMB orbit, RMB pan, scroll to dolly).
- **Attractor Sphere**: visualizes where the falloff is evaluated; the `Falloff` slider scales it and dictates how many top-down bricks stay hidden.
- **Simulation**: start/reset collapse; bricks become rigid bodies and fall based on proximity/top-row bias.
- **Export**: OBJ/PLY with vertex colors baked; Snapshot saves a PNG of the scene + UI.

## Deployment
- **Live demo (main)**: https://siminaioa.github.io/252211_BrickWall/
- **Local build**: `npm run build` (outputs to `dist/` with relative asset paths).
- **Preview deployment (branch)**: push to `feature/preview-share`. The workflow at `.github/workflows/preview-pages.yml` builds and publishes `dist/` to `gh-pages-preview`, leaving `main`/`gh-pages` untouched. Point a Pages source (or a secondary host) at `gh-pages-preview` for the preview link.
- **Public GitHub Pages (main demo)**:
  1. Checkout `gh-pages` (or merge `main` into it if desired).
  2. `npm run build`.
  3. Copy `dist/index.html` to repo root and `dist/assets` to root `assets/`.
  4. Commit and push `gh-pages`.
  5. Pages will serve from the `gh-pages` branch root with relative assets.
