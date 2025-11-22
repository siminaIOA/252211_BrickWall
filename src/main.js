import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import html2canvas from 'html2canvas';
import GUI from 'lil-gui';

const root = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
renderer.physicallyCorrectLights = true;
root.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x080b11);
scene.fog = new THREE.Fog(0x080b11, 40, 140);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(7, 5, 10);
scene.add(camera);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.35, 0.8, 0.2);
composer.addPass(bloomPass);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI * 0.48;
controls.target.set(0, 1.2, 0);
controls.update();

const shadowCatcher = new THREE.Mesh(
  new THREE.PlaneGeometry(500, 500),
  new THREE.ShadowMaterial({ opacity: 0.25 })
);
shadowCatcher.rotation.x = -Math.PI / 2;
shadowCatcher.position.y = -0.01;
shadowCatcher.receiveShadow = true;
scene.add(shadowCatcher);

const grid = new THREE.GridHelper(500, 200, 0x4a4a4a, 0x4a4a4a);
grid.position.y = 0.001;
grid.material.opacity = 0.24;
grid.material.transparent = true;
grid.material.depthWrite = false;
scene.add(grid);

const hemiLight = new THREE.HemisphereLight(0xf8f6f1, 0x10131a, 1.35);
scene.add(hemiLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
keyLight.position.set(14, 18, 12);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(4096, 4096);
keyLight.shadow.camera.near = 1;
keyLight.shadow.camera.far = 80;
keyLight.shadow.camera.left = -24;
keyLight.shadow.camera.right = 24;
keyLight.shadow.camera.top = 24;
keyLight.shadow.camera.bottom = -24;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0xb7c6ff, 0.9);
rimLight.position.set(-8, 9, -10);
scene.add(rimLight);

const spotLight = new THREE.SpotLight(0xfff1d8, 1.1, 80, Math.PI / 5, 0.2, 1);
spotLight.position.set(-6, 12, 6);
spotLight.castShadow = true;
scene.add(spotLight);
scene.add(spotLight.target);

const gradientTexture = createGradientTexture();
const brickMaterial = new THREE.MeshToonMaterial({
  color: 0xf6f7fa,
  vertexColors: true,
  gradientMap: gradientTexture,
  emissive: new THREE.Color(0x90a4ff),
  emissiveIntensity: 0.06
});
const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x9ea4b5 });

const brickGroup = new THREE.Group();
scene.add(brickGroup);
let bricksMeta = [];
let curveLine;
let currentCurve = null;
let userPlacedAttractor = false;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
let isDraggingAttractor = false;

const controlPoints = [
  new THREE.Vector3(0.1, 0, 0.45),
  new THREE.Vector3(0.32, 0, 0.55),
  new THREE.Vector3(0.64, 0, 0.42),
  new THREE.Vector3(0.9, 0, 0.58)
];
let scaledControlPoints = controlPoints.map(pt => pt.clone());
const curveBounds = { xMin: 0, xMax: 1, zMin: 0, zMax: 1 };
const curveUI = { canvas: null, ctx: null, padding: 16, width: 340, height: 200, dragging: null };
const controlPointHelpers = [];

const attractor = new THREE.Mesh(
  new THREE.SphereGeometry(0.16, 32, 32),
  new THREE.MeshPhysicalMaterial({
    color: 0xff1a1a,
    emissive: 0xff1a1a,
    emissiveIntensity: 1.0,
    roughness: 0.2,
    transmission: 0.5,
    thickness: 1.2,
    transparent: true,
    opacity: 0.95,
    clearcoat: 0.55,
    clearcoatRoughness: 0.18
  })
);
attractor.castShadow = true;
scene.add(attractor);

const params = {
  brickLength: 0.6,
  wallLength: 8,
  wallWidth: 0.35,
  wallHeight: 3,
  gap: 0.0,
  rows: 10,
  falloff: 0
};
let rowUnitHeight = params.wallHeight / params.rows;
let lastRows = params.rows;

const vfxParams = {
  bloomStrength: 0.1,
  bloomThreshold: 0.08,
  bloomRadius: 1.0,
  glowSpeed: 1.25,
  glowIntensity: 0.55
};

const gui = new GUI({ title: 'Parametric Brick Wall' });
const wallFolder = gui.addFolder('Wall Parameters');
wallFolder.add(params, 'brickLength', 0.2, 1.2, 0.02).name('Brick Length').onChange(rebuildWall);
wallFolder.add(params, 'wallLength', 2, 20, 0.1).name('Wall Length').onChange(rebuildWall);
wallFolder.add(params, 'wallWidth', 0.2, 0.8, 0.01).name('Wall Width').onChange(rebuildWall);
wallFolder.add(params, 'wallHeight', 1, 6, 0.1).name('Wall Height').onChange(onWallHeightChange);
wallFolder.add(params, 'gap', 0.0, 0.15, 0.005).name('Vertical Gap (Y)').onChange(rebuildWall);
wallFolder.add(params, 'rows', 2, 30, 1).name('Rows').onChange(onRowsChange);
wallFolder.add(params, 'falloff', 0, 1, 0.01).name('Falloff').onChange(() => {
  updateAttractor();
  applyFalloff();
});
wallFolder.open();

const curveFolder = gui.addFolder('Catmull-Rom Curve');
curveFolder.domElement.style.marginTop = '8px';
addCurvePanel(curveFolder);
curveFolder.open();

const vfxFolder = gui.addFolder('VFX Settings');
vfxFolder.add(vfxParams, 'bloomStrength', 0, 0.5, 0.01).name('Bloom Strength').onChange(() => bloomPass.strength = vfxParams.bloomStrength);
vfxFolder.add(vfxParams, 'bloomThreshold', 0, 1, 0.01).name('Bloom Threshold').onChange(() => bloomPass.threshold = vfxParams.bloomThreshold);
vfxFolder.add(vfxParams, 'bloomRadius', 0, 2, 0.01).name('Bloom Radius').onChange(() => bloomPass.radius = vfxParams.bloomRadius);
vfxFolder.add(vfxParams, 'glowSpeed', 0.25, 3, 0.05).name('Glow Speed');
vfxFolder.add(vfxParams, 'glowIntensity', 0, 1, 0.05).name('Glow Intensity');
vfxFolder.close();

const exportFolder = gui.addFolder('Export');
exportFolder.add({ exportObj }, 'exportObj').name('Export .obj');
exportFolder.add({ snapshot }, 'snapshot').name('Snapshot');

function onCurvePointChanged() {
  clampAndOrderPoints();
  updatePointHelpers();
  rebuildWall();
}

function updatePointHelpers() {
  renderCurveUI();
}

function updateAttractor(curve = currentCurve) {
  if (userPlacedAttractor) return;
  const midPoint = curve ? curve.getPoint(0.5) : new THREE.Vector3();
  const offsetDir = curve ? curve.getTangent(0.5).setY(0).normalize() : new THREE.Vector3(0, 0, 1);
  const side = new THREE.Vector3().crossVectors(offsetDir, new THREE.Vector3(0, 1, 0)).normalize();
  const offset = side.multiplyScalar(params.wallWidth + 0.8);
  const start = midPoint.clone().add(offset);
  setAttractorPosition(start.x, start.z, params.wallHeight * 0.6);
}

function setAttractorPosition(x, z, y = null) {
  const minY = 0.12;
  const maxY = params.wallHeight + 4;
  const candidateY = y !== null ? y : (attractor.position.y || params.wallHeight * 0.5);
  const clampedY = THREE.MathUtils.clamp(candidateY, minY, maxY);
  attractor.position.set(x, clampedY, z);
}

function onRowsChange() {
  const unit = rowUnitHeight || (params.wallHeight / Math.max(lastRows, 1));
  params.wallHeight = unit * params.rows;
  lastRows = params.rows;
  rebuildWall();
}

function onWallHeightChange() {
  rowUnitHeight = params.wallHeight / Math.max(params.rows, 1);
  rebuildWall();
}

function createGradientTexture() {
  const data = new Uint8Array([
    255, 255, 255,
    220, 224, 235,
    186, 190, 200,
    130, 134, 145,
    90, 95, 110
  ]);
  const texture = new THREE.DataTexture(data, 5, 1, THREE.RGBFormat);
  texture.needsUpdate = true;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  return texture;
}

function buildCurve() {
  clampAndOrderPoints();
  const spanX = params.wallLength * 0.9;
  const spanZ = params.wallLength * 0.35;
  const basePoints = controlPoints.map(pt => {
    const u = THREE.MathUtils.clamp(pt.x, 0, 1);
    const v = THREE.MathUtils.clamp(pt.z, 0, 1);
    return new THREE.Vector3((u - 0.5) * spanX, 0, (v - 0.5) * spanZ);
  });
  const centroid = basePoints.reduce((acc, v) => acc.add(v), new THREE.Vector3()).multiplyScalar(1 / basePoints.length);
  const baseCurve = new THREE.CatmullRomCurve3(basePoints, false, 'catmullrom', 0.5);
  const baseLength = Math.max(baseCurve.getLength(), 0.0001);
  const scale = params.wallLength / baseLength;
  scaledControlPoints = basePoints.map(pt => pt.clone().sub(centroid).multiplyScalar(scale).add(centroid));
  return new THREE.CatmullRomCurve3(scaledControlPoints, false, 'catmullrom', 0.5);
}

function refreshCurveLine(curve) {
  const positions = curve.getSpacedPoints(200).map(pt => new THREE.Vector3(pt.x, 0.02, pt.z));
  const geometry = new THREE.BufferGeometry().setFromPoints(positions);
  if (curveLine) {
    scene.remove(curveLine);
    curveLine.geometry.dispose();
    curveLine.material.dispose();
  }
  curveLine = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x3ecaff, transparent: true, opacity: 0.45 }));
  scene.add(curveLine);
}

function clearBricks() {
  [...brickGroup.children].forEach(child => {
    brickGroup.remove(child);
    child.traverse(obj => {
      if ((obj.isMesh || obj.isLineSegments) && obj.geometry) {
        obj.geometry.dispose();
      }
    });
  });
  bricksMeta = [];
}

function paintGeometry(geometry) {
  const count = geometry.attributes.position.count;
  const baseColor = new THREE.Color('#f0f1f5');
  const highlight = new THREE.Color('#d8dbe3');
  const colors = [];
  for (let i = 0; i < count; i += 1) {
    const mix = i % 3 === 0 ? baseColor : highlight;
    colors.push(mix.r, mix.g, mix.b);
  }
  const attr = new THREE.Float32BufferAttribute(colors, 3);
  geometry.setAttribute('color', attr);
  geometry.userData.baseColors = Float32Array.from(attr.array);
}

function createBrick(length, height, width) {
  const geometry = new THREE.BoxGeometry(length, height, width, 1, 1, 1);
  paintGeometry(geometry);
  const mesh = new THREE.Mesh(geometry, brickMaterial);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  const edgeGeometry = new THREE.EdgesGeometry(geometry);
  const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);

  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0xff2a2a,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const glow = new THREE.Mesh(geometry.clone(), glowMaterial);
  glow.visible = false;

  const group = new THREE.Group();
  group.add(mesh);
  group.add(edges);
  group.add(glow);
  group.castShadow = true;
  group.receiveShadow = true;
  return { group, glow };
}

function rebuildWall() {
  const curve = buildCurve();
  currentCurve = curve;
  refreshCurveLine(curve);
  updateAttractor(curve);
  clearBricks();
  renderCurveUI();

  const curveLength = Math.max(curve.getLength(), 0.0001);
  const columns = Math.max(2, Math.ceil(curveLength / params.brickLength));
  const segmentLength = curveLength / columns;
  const brickLength = segmentLength * 1.01; // tiny overhang to eliminate gaps
  const rowHeight = params.wallHeight / params.rows;
  const brickHeight = Math.max(0.05, rowHeight - params.gap);

  for (let row = 0; row < params.rows; row += 1) {
    const heightOffset = row * rowHeight + brickHeight / 2;
    const startOffset = row % 2 === 0 ? segmentLength * 0.5 : 0;
    for (let dist = startOffset, column = 0; dist <= curveLength - segmentLength * 0.25; dist += segmentLength, column += 1) {
      const u = THREE.MathUtils.clamp(dist / curveLength, 0, 1);
      const point = curve.getPointAt(u);
      const tangent = curve.getTangentAt(u).setY(0).normalize();
      if (tangent.lengthSq() < 1e-5) tangent.set(1, 0, 0);
      point.y = heightOffset;

      const { group: brick, glow } = createBrick(brickLength, brickHeight, params.wallWidth);
      const quaternion = new THREE.Quaternion();
      quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), tangent);
      brick.position.copy(point);
      brick.quaternion.copy(quaternion);

      brickGroup.add(brick);
      bricksMeta.push({ object: brick, glow, row, column, curveT: u });
    }
  }

  applyStaticWallGradient();
  applyFalloff();
  rowUnitHeight = params.wallHeight / Math.max(params.rows, 1);
  lastRows = params.rows;
}

function applyFalloff() {
  const removable = bricksMeta;
  if (!removable.length) return;

  bricksMeta.forEach(meta => {
    meta.object.visible = true;
    if (meta.glow) {
      meta.glow.visible = false;
      meta.glow.userData.baseOpacity = 0;
      meta.glow.userData.intensity = 0;
    }
  });

  let closest = Infinity;
  removable.forEach(meta => {
    const d = attractor.position.distanceTo(meta.object.position);
    if (d < closest) closest = d;
  });

  const baseRange = Math.max(params.wallLength, params.wallHeight) * 0.6 + params.wallWidth;
  const sliderScale = THREE.MathUtils.lerp(0.5, 2.0, params.falloff);
  const influenceRange = baseRange * sliderScale;
  const distanceFactor = THREE.MathUtils.clamp(1 - closest / Math.max(influenceRange, 0.001), 0, 1);
  const effective = THREE.MathUtils.clamp(params.falloff * distanceFactor, 0, 1);

  const sorted = [...removable].sort((a, b) => {
    const distA = a.object.position.distanceTo(attractor.position);
    const distB = b.object.position.distanceTo(attractor.position);
    if (Math.abs(distA - distB) > 1e-4) return distA - distB;
    return b.row - a.row;
  });

  const maxRemoval = Math.floor(sorted.length * 0.75);
  const removalCount = Math.floor(maxRemoval * effective);
  sorted.forEach((meta, index) => {
    meta.object.visible = index >= removalCount;
  });

  const vfxActive = params.falloff > 0;
  const span = Math.max(params.wallLength, params.wallHeight);
  const vfxRange = span * 0.9 + params.wallWidth + 1.2;

  bricksMeta.forEach(meta => {
    if (!meta.glow) return;
    if (!vfxActive) {
      meta.glow.visible = false;
      meta.glow.userData.baseOpacity = 0;
      meta.glow.userData.intensity = 0;
      return;
    }
    const dist = attractor.position.distanceTo(meta.object.position);
    const norm = THREE.MathUtils.clamp(1 - dist / Math.max(vfxRange, 0.001), 0, 1);
    const focus = Math.pow(norm, 2.2);
    const closeBoost = norm > 0.85 ? THREE.MathUtils.smoothstep(norm, 0.85, 1) * 0.7 : 0;
    const effectiveNorm = THREE.MathUtils.clamp(focus + closeBoost, 0, 1.6);
    const baseOpacity = meta.object.visible ? effectiveNorm : 0;
    meta.glow.userData.baseOpacity = baseOpacity;
    meta.glow.userData.intensity = effectiveNorm;
    meta.glow.visible = baseOpacity > 0.01;
    meta.colorIntensity = effectiveNorm;
  });

  applyStaticWallGradient();
  bricksMeta.forEach(meta => updateBrickColors(meta));
}

function updatePointer(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
}

function onPointerDown(event) {
  updatePointer(event);
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObject(attractor, false);
  if (hit.length) {
    const normal = camera.getWorldDirection(new THREE.Vector3());
    dragPlane.setFromNormalAndCoplanarPoint(normal, attractor.position);
    isDraggingAttractor = true;
    userPlacedAttractor = true;
    controls.enabled = false;
  }
}

function onPointerMove(event) {
  if (!isDraggingAttractor) return;
  updatePointer(event);
  raycaster.setFromCamera(pointer, camera);
  const targetPoint = new THREE.Vector3();
  if (raycaster.ray.intersectPlane(dragPlane, targetPoint)) {
    setAttractorPosition(targetPoint.x, targetPoint.z, targetPoint.y);
    applyFalloff();
  }
}

function onPointerUp() {
  if (!isDraggingAttractor) return;
  isDraggingAttractor = false;
  controls.enabled = true;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);
renderer.domElement.addEventListener('pointerdown', onPointerDown);
renderer.domElement.addEventListener('pointermove', onPointerMove);
window.addEventListener('pointerup', onPointerUp);

updatePointHelpers();
rebuildWall();

function renderLoop() {
  requestAnimationFrame(renderLoop);
  controls.update();
  animateVfx();
  composer.render();
}

renderLoop();

function animateVfx() {
  const time = performance.now() * 0.001;
  const pulse = 0.5 + 0.5 * Math.sin(time * vfxParams.glowSpeed);
  const glowPulse = vfxParams.glowIntensity * pulse;
  brickMaterial.emissiveIntensity = 0.06;
  const vfxActive = params.falloff > 0;
  const attractorBase = vfxActive ? 1.2 : 0.15;
  const attractorPulse = vfxActive ? 3.5 : 0;
  attractor.material.emissiveIntensity = attractorBase + glowPulse * attractorPulse;
  bricksMeta.forEach(meta => {
    if (meta.glow && meta.glow.visible) {
      const base = meta.glow.userData.baseOpacity || 0;
      const intensity = meta.glow.userData.intensity || 0;
      const gradientBoost = THREE.MathUtils.lerp(1.2, 3.6, intensity);
      meta.glow.material.opacity = base * gradientBoost * (0.55 + 1.05 * glowPulse);
      const dim = THREE.MathUtils.lerp(0.35, 0.05, intensity);
      meta.glow.material.color.setRGB(1, dim, dim);
    }
    updateBrickColors(meta, glowPulse, vfxActive);
  });
  bloomPass.strength = vfxParams.bloomStrength;
  bloomPass.threshold = vfxParams.bloomThreshold;
  bloomPass.radius = vfxParams.bloomRadius;
}

function updateBrickColors(meta, pulse = 0, vfxActive = false) {
  const mesh = meta.object.children.find(c => c.isMesh);
  if (!mesh) return;
  const geo = mesh.geometry;
  const base = geo.userData.baseColors;
  const attr = geo.getAttribute('color');
  if (!base || !attr) return;
  const baseIntensity = meta.baseColorIntensity || 0;
  const dynamicIntensity = meta.colorIntensity || 0;
  const pulseBoost = vfxActive ? (1 + pulse * 0.35) : 1;
  const intensity = THREE.MathUtils.clamp(Math.max(baseIntensity, dynamicIntensity) * 5.0 * pulseBoost, 0, 1);
  const red = new THREE.Color(1, 0, 0);
  for (let i = 0; i < attr.count; i += 1) {
    const bi = i * 3;
    const br = base[bi];
    const bg = base[bi + 1];
    const bb = base[bi + 2];
    attr.array[bi] = THREE.MathUtils.lerp(br, red.r, intensity);
    attr.array[bi + 1] = THREE.MathUtils.lerp(bg, red.g, intensity);
    attr.array[bi + 2] = THREE.MathUtils.lerp(bb, red.b, intensity);
  }
  attr.needsUpdate = true;
}

function applyStaticWallGradient() {
  const visible = bricksMeta.filter(m => m.object.visible);
  if (!visible.length) return;

  let yMin = Infinity, yMax = -Infinity, zMin = Infinity, zMax = -Infinity;
  visible.forEach(meta => {
    const mesh = meta.object.children.find(c => c.isMesh);
    if (!mesh) return;
    const box = new THREE.Box3().setFromObject(mesh);
    yMin = Math.min(yMin, box.min.y);
    yMax = Math.max(yMax, box.max.y);
    zMin = Math.min(zMin, box.min.z);
    zMax = Math.max(zMax, box.max.z);
  });
  const ySpan = Math.max(yMax - yMin, 0.0001);
  const zSpan = Math.max(zMax - zMin, 0.0001);

  visible.forEach(meta => {
    const mesh = meta.object.children.find(c => c.isMesh);
    if (!mesh) return;
    const pos = mesh.geometry.attributes.position;
    let accum = 0;
    for (let i = 0; i < pos.count; i += 1) {
      const ny = (pos.getY(i) - yMin) / ySpan;
      const nz = (pos.getZ(i) - zMin) / zSpan;
      accum += (ny * 0.7 + nz * 0.3);
    }
    const avg = accum / pos.count;
    meta.baseColorIntensity = THREE.MathUtils.clamp(avg, 0, 1);
  });
}

function exportObj() {
  // Ensure latest visibility and color gradients are baked
  applyFalloff();

  const exporter = new OBJExporter();
  const visible = bricksMeta.filter(meta => meta.object.visible);
  if (!visible.length) {
    console.warn('No visible bricks to export.');
    return;
  }

  const geoms = [];
  visible.forEach(meta => {
    const mesh = meta.object.children.find(c => c.isMesh);
    if (!mesh || !mesh.geometry) return;
    const geom = mesh.geometry.clone();
    geom.applyMatrix4(mesh.matrixWorld);
    geoms.push(geom);
  });

  if (!geoms.length) return;
  const merged = BufferGeometryUtils.mergeGeometries(geoms, true);

  // Apply a global red gradient across the merged geometry (Y then Z for subtle variation)
  const pos = merged.getAttribute('position');
  const color = new Float32Array(pos.count * 3);
  let yMin = Infinity, yMax = -Infinity, zMin = Infinity, zMax = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const z = pos.getZ(i);
    yMin = Math.min(yMin, y); yMax = Math.max(yMax, y);
    zMin = Math.min(zMin, z); zMax = Math.max(zMax, z);
  }
  const ySpan = Math.max(yMax - yMin, 0.0001);
  const zSpan = Math.max(zMax - zMin, 0.0001);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const ny = (y - yMin) / ySpan;
    const nz = (z - zMin) / zSpan;
    const grad = THREE.MathUtils.clamp((ny * 0.7 + nz * 0.3), 0, 1);
    color[i * 3] = 1.0;
    color[i * 3 + 1] = THREE.MathUtils.lerp(0.6, 0.0, grad);
    color[i * 3 + 2] = THREE.MathUtils.lerp(0.6, 0.0, grad);
  }
  merged.setAttribute('color', new THREE.BufferAttribute(color, 3));

  const exportMesh = new THREE.Mesh(merged, new THREE.MeshBasicMaterial({ vertexColors: true }));
  const objText = exporter.parse(exportMesh);

  const blob = new Blob([objText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'brick_wall.obj';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function snapshot() {
  html2canvas(document.body, { backgroundColor: '#080b11', useCORS: true, logging: false }).then(canvas => {
    const dataURL = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'brick_wall_snapshot.png';
    link.click();
  });
}

function addCurvePanel(folder) {
  const container = document.createElement('div');
  container.style.padding = '8px 6px 10px';

  const canvas = document.createElement('canvas');
  canvas.width = curveUI.width;
  canvas.height = curveUI.height;
  canvas.style.width = '100%';
  canvas.style.borderRadius = '10px';
  canvas.style.background = 'linear-gradient(180deg, #0c111c 0%, #0a0e17 100%)';
  canvas.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.06)';
  canvas.style.cursor = 'crosshair';
  container.appendChild(canvas);

  const info = document.createElement('div');
  info.style.marginTop = '6px';
  info.style.fontSize = '12px';
  info.style.lineHeight = '1.5';
  info.style.color = '#c7cedd';
  info.innerHTML = 'Drag points to bend the path.<br>Points are normalized (0-1) across the panel.';
  container.appendChild(info);

  folder.domElement.appendChild(container);
  curveUI.canvas = canvas;
  curveUI.ctx = canvas.getContext('2d');

  pruneEmptyLabel(folder);

  const onPointerDown = (e) => {
    const pos = getUIPos(e);
    const pts = getDisplayPoints().map(worldToUI);
    const hit = pts.findIndex(p => distance2(p, pos) < 15 * 15);
    if (hit >= 0) {
      curveUI.dragging = hit;
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp, { once: true });
    }
  };

  const onPointerMove = (e) => {
    if (curveUI.dragging === null) return;
    const pos = getUIPos(e);
    const world = uiToWorld(pos);
    controlPoints[curveUI.dragging].x = world.x;
    controlPoints[curveUI.dragging].z = world.z;
    onCurvePointChanged();
    renderCurveUI();
  };

  const onPointerUp = () => {
    curveUI.dragging = null;
    window.removeEventListener('pointermove', onPointerMove);
  };

  canvas.addEventListener('pointerdown', onPointerDown);
  renderCurveUI();
}

function getDisplayPoints() {
  return controlPoints;
}

function getUIPos(event) {
  const rect = curveUI.canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * curveUI.width,
    y: ((event.clientY - rect.top) / rect.height) * curveUI.height
  };
}

function worldToUI(pt) {
  const w = curveUI.width - curveUI.padding * 2;
  const h = curveUI.height - curveUI.padding * 2;
  const nx = THREE.MathUtils.clamp(pt.x, 0, 1);
  const nz = THREE.MathUtils.clamp(pt.z, 0, 1);
  return {
    x: curveUI.padding + nx * w,
    y: curveUI.height - (curveUI.padding + nz * h)
  };
}

function uiToWorld(pos) {
  const w = curveUI.width - curveUI.padding * 2;
  const h = curveUI.height - curveUI.padding * 2;
  const nx = THREE.MathUtils.clamp((pos.x - curveUI.padding) / w, 0, 1);
  const nz = THREE.MathUtils.clamp((curveUI.height - pos.y - curveUI.padding) / h, 0, 1);
  return {
    x: nx,
    z: nz
  };
}

function renderCurveUI() {
  if (!curveUI.ctx) return;
  const ctx = curveUI.ctx;
  const w = curveUI.width;
  const h = curveUI.height;
  ctx.clearRect(0, 0, w, h);

  // grid
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth = 1;
  const step = 20;
  for (let x = curveUI.padding; x <= w - curveUI.padding + 1; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, curveUI.padding);
    ctx.lineTo(x, h - curveUI.padding);
    ctx.stroke();
  }
  for (let y = curveUI.padding; y <= h - curveUI.padding + 1; y += step) {
    ctx.beginPath();
    ctx.moveTo(curveUI.padding, y);
    ctx.lineTo(w - curveUI.padding, y);
    ctx.stroke();
  }
  ctx.restore();

  const nodes = getDisplayPoints();
  const pts = nodes.map(worldToUI);
  const curvePts = buildUICurve(nodes);

  // curve line (spline)
  ctx.save();
  ctx.strokeStyle = '#3ecaff';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  if (curvePts.length > 0) {
    ctx.moveTo(curvePts[0].x, curvePts[0].y);
    for (let i = 1; i < curvePts.length; i++) {
      ctx.lineTo(curvePts[i].x, curvePts[i].y);
    }
  }
  ctx.stroke();
  ctx.restore();

  // nodes
  pts.forEach((p, idx) => {
    ctx.save();
    ctx.fillStyle = idx === curveUI.dragging ? '#ff6b4a' : '#6fb2ff';
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });
}

function distance2(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

function buildUICurve(nodes) {
  if (!nodes.length) return [];
  if (nodes.length === 1) return [worldToUI(nodes[0])];
  const curve = new THREE.CatmullRomCurve3(
    nodes.map(n => new THREE.Vector3(n.x, 0, n.z)),
    false,
    'catmullrom',
    0.5
  );
  const pts = curve.getSpacedPoints(80);
  return pts.map(p => worldToUI({ x: p.x, z: p.z }));
}

function pruneEmptyLabel(folder) {
  const remove = () => {
    const empties = folder.domElement.querySelectorAll('.controller.empty');
    empties.forEach(el => el.remove());
  };
  remove();
  requestAnimationFrame(remove);
}

function clampAndOrderPoints() {
  const eps = 0.02;
  for (let i = 0; i < controlPoints.length; i += 1) {
    const prev = i === 0 ? 0 : controlPoints[i - 1].x + eps;
    const next = i === controlPoints.length - 1 ? 1 : controlPoints[i + 1].x - eps;
    controlPoints[i].x = THREE.MathUtils.clamp(controlPoints[i].x, prev, next);
    controlPoints[i].z = THREE.MathUtils.clamp(controlPoints[i].z, 0, 1);
  }
}
