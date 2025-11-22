# 252211_BrickWall

This project renders a fully parametric brick wall in the browser using modern WebGL tooling. The experience is tuned to mimic a DCC workflow by exposing every meaningful measurement—including the path curve, brick size, and procedural removal effect—through an interactive control stack backed by a responsive Three.js scene with cinematic lighting.

## Features
- Three.js scene with ACES tone mapping, high-resolution shadows, and multiple lights for studio-style illumination.
- Parametric wall controls for brick length, wall size, thickness, height, gaps, number of rows, and a falloff slider tied to an attractor point.
- Four-point Catmull–Rom curve editor placed directly under the slider section so the brick courses can follow any spline precisely.
- Procedural brick instancing with alternating offsets, vertex-colored toon shading, and outline edges for fast visual readability.
- Attractor-driven removal workflow that never touches the ground row and gradually removes up to 75% of the remaining bricks from top to bottom.

## Getting Started
1. Install dependencies: `npm install` (installs `three`, `lil-gui`, and `vite`).
2. Start a local dev server: `npm run dev` then open the printed localhost URL in a browser.
3. Build for production/LAN hosting: `npm run build` (outputs the site into `dist/`).
4. Preview the production bundle locally: `npm run preview`.

## Controls
- **Wall Parameters** (sliders): brick length, wall length/height/width, gap size, row count, and `Falloff` for the attractor.
- **Curve Control**: four point sub-menus (X/Z) located under the slider menu, defining the Catmull–Rom wall path the bricks snap to.
- **Viewport**: use mouse/touch with OrbitControls (LMB orbit, RMB pan, scroll to dolly).
- **Attractor Sphere**: visualizes where the falloff is evaluated; the `Falloff` slider scales it and dictates how many top-down bricks stay hidden.
