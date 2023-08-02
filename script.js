import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Basic Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'green' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
}

animate();
