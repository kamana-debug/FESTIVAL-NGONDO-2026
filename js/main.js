/* ============================================
   FESTIVAL NGONDO — Main JavaScript
   ============================================ */

// ── Countdown Timer ──────────────────────────────────────────────────────────
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;

  // Festival date: 1st Saturday of December 2026 → Dec 5, 2026
  const target = new Date('2026-12-06T09:00:00').getTime();

  function tick() {
    const now  = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      el.innerHTML = '<span class="countdown-name" style="font-size:1.1rem;color:var(--color-gold)">Le Festival est en cours !</span>';
      return;
    }

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000)  / 60000);
    const seconds = Math.floor((diff % 60000)    / 1000);

    el.innerHTML = `
      <div class="countdown-unit"><span class="countdown-num" id="cd-d">${String(days).padStart(3,'0')}</span><span class="countdown-name">Jours / Days</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(hours).padStart(2,'0')}</span><span class="countdown-name">Heures / Hours</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(minutes).padStart(2,'0')}</span><span class="countdown-name">Minutes</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${String(seconds).padStart(2,'0')}</span><span class="countdown-name">Secondes / Sec</span></div>
    `;
  }

  tick();
  setInterval(tick, 1000);
}

// ── Mobile Nav ────────────────────────────────────────────────────────────────
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const menu      = document.querySelector('.nav-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';

    // Animate hamburger → X
    const spans = hamburger.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => obs.observe(el));
}

// ── Sticky Header ─────────────────────────────────────────────────────────────
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 60
      ? 'rgba(10,13,15,0.98)'
      : 'rgba(10,13,15,0.96)';
  }, { passive: true });
}

// ── Programme Filters ─────────────────────────────────────────────────────────
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.filter;
      cards.forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

// ── Newsletter ─────────────────────────────────────────────────────────────────
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    const btn   = form.querySelector('button');
    if (!input.value.includes('@')) return;
    btn.textContent = '✓ Inscrit !';
    btn.style.background = 'var(--color-green-light)';
    input.value = '';
    setTimeout(() => {
      btn.textContent = 'S\'inscrire';
      btn.style.background = '';
    }, 3000);
  });
}

// ── Active Nav Link ───────────────────────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === path || link.getAttribute('href') === path.split('/').pop()) {
      link.classList.add('active');
    }
  });
}

// ── Smooth CTA scroll ────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initNav();
  initReveal();
  initStickyHeader();
  initFilters();
  initNewsletter();
  setActiveNav();
  initSmoothScroll();
});
