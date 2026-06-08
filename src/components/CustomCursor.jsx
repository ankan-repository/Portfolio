import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  let rx = 0, ry = 0;
  let mx = 0, my = 0;
  let raf;

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(animate);
    };
    animate();

    const addHover = () => document.body.classList.add('hovering');
    const removeHover = () => document.body.classList.remove('hovering');

    const hoverEls = document.querySelectorAll('a, button, [data-hover]');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} id="custom-cursor" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  );
}
