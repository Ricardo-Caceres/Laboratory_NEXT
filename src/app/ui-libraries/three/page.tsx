import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Three.js - 3D Graphics',
  description: 'Biblioteca JavaScript para crear gráficos 3D en el navegador'
};

export default function ThreeJSPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Three.js - 3D Graphics</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Biblioteca JavaScript para crear y mostrar gráficos 3D animados en navegadores usando WebGL.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Conceptos Core</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Scene - Contenedor de objetos 3D</li>
          <li>Camera - Define el punto de vista</li>
          <li>Renderer - Renderiza la escena</li>
          <li>Geometries - Formas 3D</li>
          <li>Materials - Apariencia de objetos</li>
          <li>Lights - Iluminación de escenas</li>
          <li>Meshes - Geometría + Material</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Ejemplos</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. Setup Básico</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,                                    // FOV
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1,                                   // Near plane
  1000                                   // Far plane
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}
animate();`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. Materiales y Luces</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Material básico (no necesita luz)
const basicMaterial = new THREE.MeshBasicMaterial({ 
  color: 0xff0000 
});

// Material con iluminación
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  metalness: 0.5,
  roughness: 0.5
});

// Luz ambiental
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Luz puntual
const pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Geometrías Comunes</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Box
const box = new THREE.BoxGeometry(1, 1, 1);

// Sphere
const sphere = new THREE.SphereGeometry(1, 32, 32);

// Cylinder
const cylinder = new THREE.CylinderGeometry(1, 1, 2, 32);

// Plane
const plane = new THREE.PlaneGeometry(5, 5);

// Torus
const torus = new THREE.TorusGeometry(1, 0.4, 16, 100);

// Custom geometry
const customGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  -1.0, -1.0,  1.0,
   1.0, -1.0,  1.0,
   1.0,  1.0,  1.0,
]);
customGeometry.setAttribute(
  'position', 
  new THREE.BufferAttribute(vertices, 3)
);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Controles y Interactividad</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Raycaster para clicks
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  
  if (intersects.length > 0) {
    intersects[0].object.material.color.set(0xff0000);
  }
}

window.addEventListener('click', onMouseClick);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">5. Texturas y Loaders</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Texture loader
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/texture.jpg');

const material = new THREE.MeshStandardMaterial({
  map: texture
});

// GLTF Loader para modelos 3D
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();
loader.load(
  '/model.gltf',
  (gltf) => {
    scene.add(gltf.scene);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  (error) => {
    console.error('Error loading model', error);
  }
);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">6. React Three Fiber</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  const [hovered, setHovered] = useState(false);
  
  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={hovered ? 'hotpink' : 'orange'} 
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Performance Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Reusa geometrías y materiales</li>
          <li>Usa instanced meshes para muchos objetos iguales</li>
          <li>Limita el número de luces</li>
          <li>Usa LOD (Level of Detail) para objetos lejanos</li>
          <li>Optimiza texturas (tamaño y formato)</li>
          <li>Usa frustum culling</li>
          <li>Dispone de objetos cuando no se usan más</li>
        </ul>
      </section>

      <div className="mt-8">
        <Link 
          href="/ui-libraries"
          style={{ color: 'var(--primary)' }}
          className="hover:underline"
        >
          ← Volver a UI Libraries
        </Link>
      </div>
    </div>
  );
}
