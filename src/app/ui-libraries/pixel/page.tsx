import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pixel Art & Canvas',
  description: 'Manipulación de píxeles y gráficos con Canvas API'
};

export default function PixelPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Pixel Art & Canvas API</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Manipulación de píxeles y creación de gráficos con HTML5 Canvas.
        </p>
      </div>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Canvas API Básico</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">Setup</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Dimensiones
canvas.width = 800;
canvas.height = 600;

// Dibujar rectángulo
ctx.fillStyle = '#FF0000';
ctx.fillRect(10, 10, 100, 100);

// Dibujar círculo
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fill();`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Manipulación de Píxeles</h2>
        
        <div className="space-y-4">
          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">1. ImageData</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Obtener píxeles
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imageData.data; // Uint8ClampedArray [r,g,b,a,r,g,b,a,...]

// Modificar píxel
function setPixel(x, y, r, g, b, a) {
  const index = (y * canvas.width + x) * 4;
  pixels[index] = r;     // Red
  pixels[index + 1] = g; // Green
  pixels[index + 2] = b; // Blue
  pixels[index + 3] = a; // Alpha
}

// Aplicar cambios
ctx.putImageData(imageData, 0, 0);`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">2. Filtros de Imagen</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// Escala de grises
function grayscale(imageData) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;     // R
    data[i + 1] = avg; // G
    data[i + 2] = avg; // B
  }
  return imageData;
}

// Invertir colores
function invert(imageData) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];       // R
    data[i + 1] = 255 - data[i + 1]; // G
    data[i + 2] = 255 - data[i + 2]; // B
  }
  return imageData;
}

// Aplicar brillo
function brightness(imageData, value) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] += value;
    data[i + 1] += value;
    data[i + 2] += value;
  }
  return imageData;
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">3. Pixel Art Drawing</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`class PixelCanvas {
  constructor(width, height, pixelSize) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.pixelSize = pixelSize;
    this.gridWidth = width;
    this.gridHeight = height;
    
    this.canvas.width = width * pixelSize;
    this.canvas.height = height * pixelSize;
    
    // Disable smoothing for pixel art
    this.ctx.imageSmoothingEnabled = false;
  }
  
  drawPixel(x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      x * this.pixelSize,
      y * this.pixelSize,
      this.pixelSize,
      this.pixelSize
    );
  }
  
  drawGrid() {
    this.ctx.strokeStyle = '#ddd';
    this.ctx.lineWidth = 1;
    
    for (let x = 0; x <= this.gridWidth; x++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x * this.pixelSize, 0);
      this.ctx.lineTo(x * this.pixelSize, this.canvas.height);
      this.ctx.stroke();
    }
    
    for (let y = 0; y <= this.gridHeight; y++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y * this.pixelSize);
      this.ctx.lineTo(this.canvas.width, y * this.pixelSize);
      this.ctx.stroke();
    }
  }
}

// Uso
const pixelCanvas = new PixelCanvas(32, 32, 10);
pixelCanvas.drawPixel(5, 5, '#FF0000');
pixelCanvas.drawGrid();`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">4. Sprite Animation</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`class Sprite {
  constructor(image, frameWidth, frameHeight) {
    this.image = image;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.currentFrame = 0;
    this.totalFrames = image.width / frameWidth;
  }
  
  draw(ctx, x, y) {
    const sx = this.currentFrame * this.frameWidth;
    ctx.drawImage(
      this.image,
      sx, 0,                           // Source x, y
      this.frameWidth, this.frameHeight, // Source width, height
      x, y,                            // Dest x, y
      this.frameWidth, this.frameHeight  // Dest width, height
    );
  }
  
  nextFrame() {
    this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
  }
}

// Uso
const spriteImage = new Image();
spriteImage.src = 'spritesheet.png';
spriteImage.onload = () => {
  const sprite = new Sprite(spriteImage, 32, 32);
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sprite.draw(ctx, 100, 100);
    sprite.nextFrame();
    requestAnimationFrame(animate);
  }
  animate();
};`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">5. Collision Detection</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`// AABB (Axis-Aligned Bounding Box)
function checkCollision(rect1, rect2) {
  return rect1.x < rect2.x + rect2.width &&
         rect1.x + rect1.width > rect2.x &&
         rect1.y < rect2.y + rect2.height &&
         rect1.y + rect1.height > rect2.y;
}

// Circular collision
function checkCircleCollision(circle1, circle2) {
  const dx = circle1.x - circle2.x;
  const dy = circle1.y - circle2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < circle1.radius + circle2.radius;
}

// Pixel-perfect collision
function pixelCollision(sprite1, sprite2) {
  const data1 = sprite1.getImageData();
  const data2 = sprite2.getImageData();
  
  // Check overlapping region
  // Compare alpha values of overlapping pixels
  // Return true if any non-transparent pixels overlap
}`}
            </pre>
          </div>

          <div style={{ background: 'var(--panel)', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="font-bold mb-2">6. React Canvas</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`'use client';
import { useEffect, useRef } from 'react';

export default function PixelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Disable smoothing for pixel art
    ctx.imageSmoothingEnabled = false;
    
    // Draw pixel grid
    const pixelSize = 10;
    const gridWidth = 32;
    const gridHeight = 32;
    
    for (let x = 0; x < gridWidth; x++) {
      for (let y = 0; y < gridHeight; y++) {
        const color = (x + y) % 2 === 0 ? '#000' : '#fff';
        ctx.fillStyle = color;
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      }
    }
  }, []);
  
  return <canvas ref={canvasRef} width={320} height={320} />;
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Performance Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Usa OffscreenCanvas para procesamiento en background</li>
          <li>Batch draw calls cuando sea posible</li>
          <li>Limita llamadas a getImageData/putImageData</li>
          <li>Usa requestAnimationFrame para animaciones</li>
          <li>Considera WebGL para operaciones complejas</li>
          <li>Cache resultados de cálculos costosos</li>
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
