/* ============================================================
   ANKAN PAL PORTFOLIO — JavaScript
   Neural canvas, cursor, scroll animations, counters
   ============================================================ */

// ─── Custom Cursor ────────────────────────────────────────────
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Add hover effects on interactive elements
const interactiveEls = document.querySelectorAll('a, button, .skill-category, .project-card, .edu-card, .cert-card, .stat-card, .highlight-card, .timeline-card');
interactiveEls.forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ─── Neural Network Canvas ────────────────────────────────────
const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let animId;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const PARTICLE_COUNT = 80;
const MAX_DIST = 150;

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.8 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '0, 212, 255' : '124, 58, 237';
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

// Mouse influence
let mx = -1000, my = -1000;
document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

function drawNeural() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MAX_DIST) {
        const alpha = (1 - dist / MAX_DIST) * 0.12;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    // Mouse connection
    const mdx = particles[i].x - mx;
    const mdy = particles[i].y - my;
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
    if (mdist < 180) {
      const alpha = (1 - mdist / 180) * 0.4;
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(mx, my);
      ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }
  }

  // Draw particles
  particles.forEach(p => {
    p.update();
    p.draw();
  });

  animId = requestAnimationFrame(drawNeural);
}

drawNeural();

// ─── Navbar scroll effect ─────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── Mobile hamburger menu ────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ─── Scroll Reveal Animations ─────────────────────────────────
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

// ─── Counter Animations ───────────────────────────────────────
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const counterEls = document.querySelectorAll('.number[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObserver.observe(el));

// ─── Typewriter effect for hero ───────────────────────────────
// (optional subtle animation on the hero name)
const heroDesc = document.querySelector('.hero-desc');
if (heroDesc) {
  heroDesc.style.opacity = '0';
  setTimeout(() => {
    heroDesc.style.transition = 'opacity 0.8s ease';
    heroDesc.style.opacity = '1';
  }, 600);
}

// ─── Parallax on hero glows ───────────────────────────────────
const glow1 = document.querySelector('.glow-1');
const glow2 = document.querySelector('.glow-2');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  if (glow1) {
    glow1.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1)`;
  }
  if (glow2) {
    glow2.style.transform = `translate(${-x * 15}px, ${-y * 15}px) scale(1)`;
  }
});

// ─── Smooth active nav highlight ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(a => {
        a.style.color = '';
        if (a.getAttribute('href') === `#${id}`) {
          a.style.color = 'var(--accent-cyan)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ─── Project card tilt effect ─────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 25;
    const rotateY = (x - centerX) / 25;

    card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.transition = 'transform 0.05s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  });
});

// ─── Skill tag sparkle on hover ───────────────────────────────
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.boxShadow = '0 0 8px rgba(0, 212, 255, 0.25)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.boxShadow = '';
  });
});

// ─── Console easter egg ───────────────────────────────────────
console.log('%c 👋 Hey, curious dev! 🤖', 'color: #00d4ff; font-size: 22px; font-weight: bold;');
console.log('%c Ankan Pal — AI/ML Engineer & GenAI Developer', 'color: #c084fc; font-size: 14px;');
console.log('%c ankanp595@gmail.com | linkedin.com/in/ankan-pal-b4518241', 'color: #8899bb; font-size: 12px;');
console.log('%c Built with 🧠 AI, ☕ Coffee, and ❤️ passion for GenAI', 'color: #10b981; font-size: 12px;');

// ─── Page Load animation ──────────────────────────────────────
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
