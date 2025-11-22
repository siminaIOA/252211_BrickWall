import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';

const root = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
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

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(7, 5, 10);
scene.add(camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI * 0.48;
controls.target.set(0, 1.2, 0);
controls.update();

const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x060709,
  roughness: 0.85,
  metalness: 0.1
});
const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.01;
ground.receiveShadow = true;
scene.add(ground);

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
  gradientMap: gradientTexture
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
  new THREE.Vector3(-4, 0, -1.5),
  new THREE.Vector3(-1, 0, 1.5),
  new THREE.Vector3(1.5, 0, -0.2),
  new THREE.Vector3(4.5, 0, 1.2)
];
const controlPointHelpers = controlPoints.map(() => {
  const helper = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 16, 16),
    new THREE.MeshStandardMaterial({ color: 0x5ec8ff, emissive: 0x07263a })
  );
  helper.castShadow = true;
  helper.receiveShadow = false;
  scene.add(helper);
  return helper;
});

const attractor = new THREE.Mesh(
  new THREE.SphereGeometry(0.16, 32, 32),
  new THREE.MeshPhysicalMaterial({
    color: 0xff1a1a,
    emissive: 0x3b0000,
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
  gap: 0.04,
  rows: 10,
  falloff: 0
};
let rowUnitHeight = params.wallHeight / params.rows;
let lastRows = params.rows;

const gui = new GUI({ title: 'Parametric Brick Wall' });
const wallFolder = gui.addFolder('Wall Parameters');
wallFolder.add(params, 'brickLength', 0.2, 1.2, 0.02).name('Brick Length').onChange(rebuildWall);
wallFolder.add(params, 'wallLength', 2, 20, 0.1).name('Wall Length').onChange(rebuildWall);
wallFolder.add(params, 'wallWidth', 0.2, 0.8, 0.01).name('Wall Width').onChange(rebuildWall);
wallFolder.add(params, 'wallHeight', 1, 6, 0.1).name('Wall Height').onChange(onWallHeightChange);
wallFolder.add(params, 'gap', 0.0, 0.15, 0.005).name('Brick Gap').onChange(rebuildWall);
wallFolder.add(params, 'rows', 2, 30, 1).name('Rows').onChange(onRowsChange);
wallFolder.add(params, 'falloff', 0, 1, 0.01).name('Falloff').onChange(() => {
  updateAttractor();
  applyFalloff();
});
wallFolder.open();

const curveFolder = gui.addFolder('Curve Control');
curveFolder.domElement.style.marginTop = '8px';
controlPoints.forEach((point, index) => {
  const pointFolder = curveFolder.addFolder(`Point ${index + 1}`);
  pointFolder.add(point, 'x', -12, 12, 0.05).name('X').onChange(onCurvePointChanged);
  pointFolder.add(point, 'z', -8, 8, 0.05).name('Z').onChange(onCurvePointChanged);
  pointFolder.close();
});
curveFolder.open();

function onCurvePointChanged() {
  updatePointHelpers();
  rebuildWall();
}

function updatePointHelpers() {
  controlPointHelpers.forEach((helper, idx) => {
    const pt = controlPoints[idx];
    helper.position.set(pt.x, 0.15, pt.z);
  });
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
  const safeY = y !== null ? y : Math.max(0.2, attractor.position.y || params.wallHeight * 0.5);
  attractor.position.set(x, safeY, z);
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
  return new THREE.CatmullRomCurve3(controlPoints.map(pt => new THREE.Vector3(pt.x, 0, pt.z)), false, 'catmullrom', 0.5);
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
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
}

function createBrick(length, height, width) {
  const geometry = new THREE.BoxGeometry(length, height, width, 1, 1, 1);
  paintGeometry(geometry);
  const mesh = new THREE.Mesh(geometry, brickMaterial);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  const edgeGeometry = new THREE.EdgesGeometry(geometry);
  const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);

  const group = new THREE.Group();
  group.add(mesh);
  group.add(edges);
  group.castShadow = true;
  group.receiveShadow = true;
  return group;
}

function rebuildWall() {
  const curve = buildCurve();
  currentCurve = curve;
  refreshCurveLine(curve);
  updateAttractor(curve);
  clearBricks();

  const columns = Math.max(2, Math.floor(params.wallLength / (params.brickLength + params.gap)));
  const rowHeight = params.wallHeight / params.rows;
  const brickHeight = Math.max(0.05, rowHeight - params.gap * 0.6);

  for (let row = 0; row < params.rows; row += 1) {
    const heightOffset = row * rowHeight + brickHeight / 2;
    const halfOffset = row % 2 === 0 ? 0 : 0.5;
    const denom = columns - 1 + halfOffset;

    for (let column = 0; column < columns; column += 1) {
      const normalized = denom <= 0 ? 0 : (column + halfOffset) / denom;
      const t = THREE.MathUtils.clamp(normalized, 0, 1);
      const point = curve.getPoint(t);
      const tangent = curve.getTangent(t).setY(0).normalize();
      if (tangent.lengthSq() < 1e-5) {
        tangent.set(1, 0, 0);
      }
      point.y = heightOffset;

      const brick = createBrick(params.brickLength, brickHeight, params.wallWidth);
      const quaternion = new THREE.Quaternion();
      quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), tangent);
      brick.position.copy(point);
      brick.quaternion.copy(quaternion);

      brickGroup.add(brick);
      bricksMeta.push({ object: brick, row, column, curveT: t });
    }
  }

  applyFalloff();
  rowUnitHeight = params.wallHeight / Math.max(params.rows, 1);
  lastRows = params.rows;
}

function applyFalloff() {
  const removable = bricksMeta.filter(meta => meta.row > 0);
  if (!removable.length) return;

  bricksMeta.forEach(meta => {
    meta.object.visible = true;
    if (meta.row === 0) meta.object.visible = true;
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

  const removalCount = Math.floor(sorted.length * effective);
  sorted.forEach((meta, index) => {
    meta.object.visible = index >= removalCount;
  });
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
  renderer.render(scene, camera);
}

renderLoop();
