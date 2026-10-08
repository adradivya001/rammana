import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedText — Renders text with word-by-word reveal or blur/fade pop-up effects.
 */
export function AnimatedText({
  text,
  children,
  animation = 'word-reveal',
  delay = 0,
  stagger = 0.08,
  tag: Tag = 'h2',
  className = ''
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const contentText = text || (typeof children === 'string' ? children : null);

  if (animation === 'word-reveal' && contentText) {
    const words = contentText.split(' ');
    return (
      <Tag ref={containerRef} className={`word-reveal-wrap ${className}`}>
        {words.map((word, index) => (
          <span
            key={index}
            className="word-reveal-word"
            style={{
              animationDelay: isVisible ? `${delay + index * stagger}s` : '99s',
              opacity: isVisible ? undefined : 0
            }}
          >
            {word}{' '}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      ref={containerRef}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children || text}
    </Tag>
  );
}

/**
 * RevealSection — Scroll-triggered entrance container for major page sections.
 */
export function RevealSection({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.18,
  className = '',
  id,
  style
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left': return 'reveal-left';
      case 'right': return 'reveal-right';
      case 'scale': return 'reveal-scale';
      default: return 'reveal';
    }
  };

  return (
    <div
      id={id}
      ref={ref}
      className={`${getDirectionClass()} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

/**
 * RevealImage — Editorial image reveal with mask clip-path and optional micro-scale floating motion.
 */
export function RevealImage({
  src,
  alt,
  className = '',
  microMotion = true,
  style
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`editorial-clip-reveal ${isVisible ? 'visible' : ''} ${
        isVisible && microMotion ? 'micro-scale-active' : ''
      } ${className}`}
      style={style}
    />
  );
}

/**
 * StaggerContainer & StaggerItem — Staggered entrance for grids and card lists.
 */
export function StaggerContainer({ children, className = '', staggerDelay = 0.08 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          staggerIndex: index,
          containerVisible: isVisible,
          staggerDelay
        });
      })}
    </div>
  );
}

export function StaggerItem({
  children,
  staggerIndex = 0,
  containerVisible = false,
  staggerDelay = 0.08,
  className = '',
  style
}) {
  const delay = staggerIndex * staggerDelay;
  return (
    <div
      className={`reveal ${containerVisible ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        ...style
      }}
    >
      {children}
    </div>
  );
}

/**
 * AnimatedCounter — Counts up verified statistics when entering the viewport.
 */
export function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1400, className = '' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRun) return;

    const numericVal = parseFloat(target);
    if (isNaN(numericVal)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasRun(true);
        observer.disconnect();

        let start = 0;
        const totalSteps = duration / 16;
        const increment = numericVal / totalSteps;

        const tick = () => {
          start += increment;
          if (start >= numericVal) {
            setCount(numericVal);
          } else {
            setCount(start);
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasRun]);

  const displayVal = Number.isInteger(target) ? Math.floor(count) : count.toFixed(1);

  return (
    <span ref={ref} className={className}>
      {prefix}{hasRun ? displayVal : '0'}{suffix}
    </span>
  );
}

/**
 * PulseIndicator — Soft pulsing live indicator dot for eyebrows/badges.
 */
export function PulseIndicator({ className = '' }) {
  return <span className={`pulse-indicator-dot ${className}`} aria-hidden="true" />;
}

/**
 * AnimatedEyebrow — Section tag with animated expanding line.
 */
export function AnimatedEyebrow({ children, className = '' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`eyebrow-with-line ${className}`}>
      <span className="ref-section-tag">{children}</span>
      <span className={`eyebrow-animated-line ${isVisible ? 'visible' : ''}`} aria-hidden="true" />
    </div>
  );
}

/**
 * HoverCard — Premium card with hover physics and shadow lift.
 */
export function HoverCard({ children, className = '', style, onClick }) {
  return (
    <div
      className={`premium-card ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
