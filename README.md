# 252211_BrickWall

This project renders a fully parametric brick wall in the browser using modern WebGL tooling. The experience is tuned to mimic a DCC workflow by exposing every meaningful measurement—including the path curve, brick size, and procedural removal effect—through an interactive control stack backed by a responsive Three.js scene with cinematic lighting.

## Features
- Three.js scene with ACES tone mapping, high-resolution shadows, and multiple lights for studio-style illumination.
- Parametric wall controls for brick length, wall size, thickness, height, gaps (vertical and horizontal), and a falloff slider tied to an attractor point.
- Interactive Catmull-Rom curve editor canvas (add/move/delete points) so the wall path stays in sync with the UI spline.
- Procedural brick instancing with toon shading, vertex-colored gradients, and baked brick/bump textures for readability.
- Attractor-driven removal workflow (never touches ground row) plus physics-based collapse simulation (cannon-es) with start/reset controls.
- Exports: OBJ and PLY with baked vertex colors/gradient; Snapshot captures the full app view (UI + scene) to PNG.
- GitHub Pages live demo: https://siminaioa.github.io/252211_BrickWall/

## Getting Started
1. Install dependencies: `npm install` (installs `three`, `lil-gui`, and `vite`).
2. Start a local dev server: `npm run dev` then open the printed localhost URL in a browser.
3. Build for production/LAN hosting: `npm run build` (outputs the site into `dist/`).
4. Preview the production bundle locally: `npm run preview`.

## Controls
- **Wall Parameters** (sliders): brick length, wall length/height/width, gap size, row count, and `Falloff` for the attractor.
- **Curve Control**: canvas editor with draggable points (add via left-click, delete via right-click) defining the Catmull-Rom wall path the bricks snap to.
- **Viewport**: use mouse/touch with OrbitControls (LMB orbit, RMB pan, scroll to dolly).
- **Attractor Sphere**: visualizes where the falloff is evaluated; the `Falloff` slider scales it and dictates how many top-down bricks stay hidden.
- **Simulation**: start/reset collapse; bricks become rigid bodies and fall based on proximity/top-row bias.
- **Export**: OBJ/PLY with vertex colors baked; Snapshot saves a PNG of the scene + UI.

## Deployment
- Build locally: `npm run build` (outputs to `dist/`).
- Serve the GitHub Pages bundle from the build artifacts (gh-pages branch tracks `index.html` + `assets/` at repo root).
- To redeploy: `npm run build`, copy `dist/index.html` to repo root, copy `dist/assets` to root `assets/`, commit to `gh-pages`, and push. Live demo: https://siminaioa.github.io/252211_BrickWall/
