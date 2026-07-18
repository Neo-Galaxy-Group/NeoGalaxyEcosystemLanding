import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const scrollYRef = useRef(0);
  const tRef = useRef(0);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function generateStars() {
      const count = Math.floor((canvas.width * canvas.height) / 6000);
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.3 + 0.2,
          baseAlpha: Math.random() * 0.6 + 0.3,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.015 + 0.005,
          parallax: Math.random() * 0.4 + 0.05,
        });
      }
      starsRef.current = stars;
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    }

    let animId;
    function drawStars() {
      const stars = starsRef.current;
      const t = tRef.current;
      const scrollY = scrollYRef.current;
      const reduceMotion = reduceMotionRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const twinkle = reduceMotion
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(t * s.speed * 40 + s.phase) * 0.25;
        const y = (s.y + scrollY * s.parallax) % canvas.height;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,230,237,${Math.max(0, Math.min(1, twinkle))})`;
        ctx.fill();
      }
      tRef.current += 1;
      if (!reduceMotion) {
        animId = requestAnimationFrame(drawStars);
      }
    }

    function handleScroll() {
      scrollYRef.current = window.scrollY * 0.15;
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    resizeCanvas();
    drawStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
