const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealNow(el) {
  el.classList.add('is-revealed');
}

function initReveal() {
  const elements = Array.from(document.querySelectorAll('[data-reveal]'));
  if (elements.length === 0) return;

  if (prefersReducedMotion) {
    elements.forEach(revealNow);
    return;
  }

  elements.forEach((el) => {
    const delay = el.getAttribute('data-reveal-delay');
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
  });

  const loadElements = elements.filter((el) => el.getAttribute('data-reveal') === 'load');
  requestAnimationFrame(() => {
    loadElements.forEach(revealNow);
  });

  const scrollElements = elements.filter((el) => el.getAttribute('data-reveal') !== 'load');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          revealNow(entry.target);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
  );

  scrollElements.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}
