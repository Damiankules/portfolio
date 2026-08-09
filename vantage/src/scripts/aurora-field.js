const canvas = document.getElementById('vg-aurora');
if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const palette = [
    { r: 79, g: 123, b: 255 },
    { r: 139, g: 92, b: 246 },
    { r: 41, g: 224, b: 201 },
  ];

  const nodes = palette.map((color, i) => ({
    color,
    radiusScale: 0.32 + i * 0.05,
    // Each node drifts along its own Lissajous-style path so the field
    // never repeats on an obviously loopable cycle.
    freqX: 0.18 + i * 0.07,
    freqY: 0.13 + i * 0.05,
    phaseX: i * 2.1,
    phaseY: i * 1.4,
    ampX: 0.28 + i * 0.06,
    ampY: 0.22 + i * 0.05,
    centerX: 0.3 + i * 0.22,
    centerY: 0.35 + (i % 2) * 0.3,
  }));

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFrame(t) {
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#05070c';
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = 'screen';
    const maxDim = Math.max(width, height);

    for (const node of nodes) {
      const x = (node.centerX + Math.sin(t * node.freqX + node.phaseX) * node.ampX) * width;
      const y = (node.centerY + Math.cos(t * node.freqY + node.phaseY) * node.ampY) * height;
      const radius = maxDim * node.radiusScale;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 0.55)`);
      gradient.addColorStop(1, `rgba(${node.color.r}, ${node.color.g}, ${node.color.b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  let rafId = 0;
  function tick(now) {
    drawFrame(now / 8000);
    rafId = requestAnimationFrame(tick);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!rafId) rafId = requestAnimationFrame(tick);
      } else if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    },
    { threshold: 0 }
  );

  resize();
  if (prefersReducedMotion) {
    drawFrame(0);
  } else {
    io.observe(canvas);
  }
}
