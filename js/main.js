/* NGONDO — Main JS */

/* ── Countdown ── */
function initCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  const target = new Date('2026-12-06T09:00:00').getTime();
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { el.innerHTML = '<span style="font-size:1rem;font-weight:600;">Le NGONDO est en cours !</span>'; return; }
    const pad = (n, l=2) => String(n).padStart(l,'0');
    el.innerHTML = `
      <div class="countdown-unit"><span class="countdown-num">${pad(Math.floor(diff/86400000),3)}</span><span class="countdown-name">Jours</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${pad(Math.floor((diff%86400000)/3600000))}</span><span class="countdown-name">Heures</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${pad(Math.floor((diff%3600000)/60000))}</span><span class="countdown-name">Min</span></div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit"><span class="countdown-num">${pad(Math.floor((diff%60000)/1000))}</span><span class="countdown-name">Sec</span></div>`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ── Hamburger Nav ── */
function initNav() {
  // Wait for header injection then bind
  function bind() {
    const btn  = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
    if (!btn || !menu) return;

    function openMenu() {
      menu.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Close on link click inside menu (mobile)
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 768) closeMenu();
      });
    });
  }

  // Run after header injected (slight delay for DOM)
  setTimeout(bind, 50);
  // Also try on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', bind);
}

/* ── Scroll Reveal ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Sticky header shadow ── */
function initStickyHeader() {
  const h = document.querySelector('.site-header');
  if (!h) return;
  window.addEventListener('scroll', () => {
    h.style.boxShadow = window.scrollY > 40 ? '0 2px 20px rgba(26,74,140,0.12)' : '0 1px 12px rgba(26,74,140,0.06)';
  }, { passive: true });
}

/* ── Programme filters ── */
function initFilters() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(c => { c.style.display = (cat === 'all' || c.dataset.category === cat) ? '' : 'none'; });
    });
  });
}

/* ── Newsletter ── */
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    const btn   = form.querySelector('button');
    if (!input.value.includes('@')) return;
    btn.textContent = '✓ Inscrit !';
    btn.style.background = '#1e6b45';
    input.value = '';
    setTimeout(() => { btn.textContent = "S'inscrire"; btn.style.background = ''; }, 3500);
  });
}

/* ── Smooth scroll ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ── Init all ── */
initCountdown();
initNav();
initStickyHeader();
initFilters();
initNewsletter();
initSmoothScroll();
document.addEventListener('DOMContentLoaded', () => { initReveal(); });
