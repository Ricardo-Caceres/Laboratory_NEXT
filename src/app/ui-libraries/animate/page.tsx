import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Animation Libraries',
  description: 'Bibliotecas modernas para animaciones web'
};

export default function AnimatePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Animation Libraries</h1>
        <p className="text-lg" style={{ color: 'var(--foreground)' }}>
          Bibliotecas modernas para crear animaciones fluidas y performantes.
        </p>
      </div>

      <section className="space-y-6">
        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Framer Motion</h2>
          <p className="mb-4">Biblioteca de animación production-ready para React.</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Animación Básica</h3>
              <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Contenido animado
</motion.div>`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold mb-2">Gestos</h3>
              <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  drag
  dragConstraints={{ left: -100, right: 100 }}
>
  Drag me!
</motion.button>`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold mb-2">Variants</h3>
              <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
/>`}
              </pre>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">GSAP (GreenSock)</h2>
          <p className="mb-4">Biblioteca profesional de animación para cualquier framework.</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Tween Básico</h3>
              <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import gsap from 'gsap';

// Animar elemento
gsap.to('.box', {
  duration: 1,
  x: 100,
  rotation: 360,
  ease: 'power2.inOut'
});

// From
gsap.from('.box', { opacity: 0, y: 50 });

// FromTo
gsap.fromTo('.box', 
  { opacity: 0 }, 
  { opacity: 1, duration: 1 }
);`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold mb-2">Timeline</h3>
              <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`const tl = gsap.timeline();

tl.to('.box1', { x: 100, duration: 1 })
  .to('.box2', { y: 100, duration: 1 }, '-=0.5') // overlap
  .to('.box3', { rotation: 360, duration: 1 });

// Control
tl.play();
tl.pause();
tl.reverse();
tl.seek(1.5);`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold mb-2">ScrollTrigger</h3>
              <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
  scrollTrigger: {
    trigger: '.box',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
    markers: true
  },
  x: 400,
  rotation: 360
});`}
              </pre>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">Anime.js</h2>
          <p className="mb-4">Biblioteca ligera de animación JavaScript.</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">Animación Básica</h3>
              <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import anime from 'animejs';

anime({
  targets: '.element',
  translateX: 250,
  rotate: '1turn',
  duration: 800,
  easing: 'easeInOutQuad'
});`}
              </pre>
            </div>

            <div>
              <h3 className="font-bold mb-2">Keyframes</h3>
              <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`anime({
  targets: '.box',
  keyframes: [
    { translateY: -40 },
    { translateX: 250 },
    { translateY: 40 },
    { translateX: 0 },
    { translateY: 0 }
  ],
  duration: 4000,
  loop: true
});`}
              </pre>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h2 className="text-2xl font-bold mb-4">React Spring</h2>
          <p className="mb-4">Animaciones basadas en física para React.</p>
          
          <div>
            <h3 className="font-bold mb-2">useSpring Hook</h3>
            <pre style={{ background: 'var(--background)', padding: '1rem', borderRadius: '0.25rem', overflow: 'auto' }}>
{`import { useSpring, animated } from '@react-spring/web';

function Component() {
  const springs = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' }
  });

  return <animated.div style={springs}>Hello</animated.div>;
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4" style={{ background: 'var(--panel)', padding: '1.5rem', borderRadius: '0.5rem' }}>
        <h2 className="text-2xl font-bold">Performance Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Anima transform y opacity (composite properties)</li>
          <li>Usa will-change con cuidado</li>
          <li>Evita animar width/height directamente</li>
          <li>Usa requestAnimationFrame</li>
          <li>Reduce complejidad de animaciones simultáneas</li>
          <li>Considera reducción de movimiento (prefers-reduced-motion)</li>
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
