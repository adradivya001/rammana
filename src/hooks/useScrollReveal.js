import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — Intersection Observer hook that adds
 * the "visible" class to any element carrying a reveal class.
 *
 * @param {string} selector  — CSS selector for elements to observe
 * @param {object} options   — IntersectionObserver options
 */
export function useScrollReveal(
  selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .lifecycle-node, .animated-connector',
  options = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current ?? document;
    const elements = Array.from(root.querySelectorAll(selector));

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options]);

  return containerRef;
}

/**
 * useParallax — lightweight parallax scroll effect on an element.
 *
 * @param {number} speed  — parallax intensity (default 0.3)
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}

/**
 * useCountUp — animates a number from 0 to `target` when the element is visible.
 *
 * @param {number} target   — target number
 * @param {number} duration — animation duration in ms (default 1400)
 */
export function useCountUp(target, duration = 1400) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let start = 0;
        const step = target / (duration / 16);
        const tick = () => {
          start = Math.min(start + step, target);
          el.textContent = Math.floor(start).toLocaleString();
          if (start < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}
