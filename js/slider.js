(function() {
  const lang = document.documentElement.lang || 'fr';
  const slides = lang === 'en' ? [
    { img: '../../images/pirogues-wouri.jpg',       title: 'NGONDO', sub: 'The Grand Pirogue Race',        label: 'Sawa Tradition' },
    { img: '../../images/danses-traditionnelles.jpg',title: 'NGONDO', sub: 'Traditional Sawa Dances',      label: 'Living Heritage' },
    { img: '../../images/ceremonie-jengu.jpg',       title: 'NGONDO', sub: 'Rituals & Mysteries of the Wouri', label: 'Ancestral Rites' },
    { img: '../../images/foule-wouri.jpg',           title: 'NGONDO', sub: 'The Sawa People United',       label: 'Popular Celebration' }
  ] : [
    { img: '../../images/pirogues-wouri.jpg',       title: 'NGONDO', sub: 'La Grande Course de Pirogues', label: 'Tradition Sawa' },
    { img: '../../images/danses-traditionnelles.jpg',title: 'NGONDO', sub: 'Danses Traditionnelles Sawa',  label: 'Patrimoine Vivant' },
    { img: '../../images/ceremonie-jengu.jpg',       title: 'NGONDO', sub: 'Rituels et Mystères du Wouri', label: 'Rites Ancestraux' },
    { img: '../../images/foule-wouri.jpg',           title: 'NGONDO', sub: 'Le Peuple Sawa Uni',           label: 'Célébration Populaire' }
  ];

  let current = 0, timer = null, isAnimating = false;

  function init() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const unescoText = lang === 'en'
      ? 'UNESCO Intangible Cultural Heritage'
      : 'Patrimoine Culturel Immatériel de l\'UNESCO';
    const cta1Text = lang === 'en' ? 'View 2026 Programme' : 'Voir le programme 2026';
    const cta2Text = lang === 'en' ? 'Discover Ngondo' : 'Découvrir le Ngondo';
    const cta1Href = 'programme.html';
    const cta2Href = lang === 'en' ? 'about.html' : 'apropos.html';
    const stats = lang === 'en'
      ? [['Dec. 6','Apotheosis 2026'],['Wouri','Sacred River'],['100+','Years of Tradition'],['UNESCO','World Heritage']]
      : [['6 Déc.','Apothéose 2026'],['Wouri','Fleuve sacré'],['100+','Ans de tradition'],['UNESCO','Patrimoine mondial']];

    hero.innerHTML = `
      <div class="hero-slides" id="hero-slides">
        ${slides.map((s,i) => `
          <div class="hero-slide ${i===0?'active':''}" data-index="${i}">
            <div class="hero-slide-img" style="background-image:url('${s.img}')"></div>
            <div class="hero-slide-overlay"></div>
          </div>`).join('')}
      </div>
      <div class="hero-content container">
        <div class="slide-label" id="slide-label"><span></span></div>
        <div class="unesco-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.5v7L12 19.82 4 15.5v-7l8-4.32z"/></svg>
          ${unescoText}
        </div>
        <h1 class="hero-title" id="slide-title"><span></span></h1>
        <p class="hero-subtitle" id="slide-sub"></p>
        <div class="hero-cta">
          <a href="${cta1Href}" class="btn btn-gold">${cta1Text}</a>
          <a href="${cta2Href}" class="btn btn-outline">${cta2Text}</a>
        </div>
        <div class="hero-stats">
          ${stats.map(([v,l])=>`<div><div class="hero-stat-val">${v}</div><div class="hero-stat-label">${l}</div></div>`).join('')}
        </div>
      </div>
      <div class="slider-controls">
        <button class="slider-btn slider-prev" id="slider-prev" aria-label="Précédent">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="slider-dots" id="slider-dots">
          ${slides.map((_,i)=>`<button class="slider-dot ${i===0?'active':''}" data-i="${i}" aria-label="Image ${i+1}"></button>`).join('')}
        </div>
        <button class="slider-btn slider-next" id="slider-next" aria-label="Suivant">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div class="slider-progress"><div class="slider-progress-bar" id="slider-progress"></div></div>
    `;

    updateContent(0, true);
    startTimer();

    document.getElementById('slider-prev').addEventListener('click', () => goTo((current-1+slides.length)%slides.length));
    document.getElementById('slider-next').addEventListener('click', () => goTo((current+1)%slides.length));
    document.querySelectorAll('.slider-dot').forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.i))));
    hero.addEventListener('mouseenter', stopTimer);
    hero.addEventListener('mouseleave', startTimer);

    let tx = 0;
    hero.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, {passive:true});
    hero.addEventListener('touchend', e => {
      const diff = tx - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? (current+1)%slides.length : (current-1+slides.length)%slides.length);
    }, {passive:true});
  }

  function goTo(idx) {
    if (isAnimating || idx === current) return;
    isAnimating = true;
    stopTimer();
    const all = document.querySelectorAll('.hero-slide');
    all[current].classList.remove('active');
    all[current].classList.add('leaving');
    current = idx;
    all[current].classList.add('active');
    setTimeout(() => {
      document.querySelector('.hero-slide.leaving')?.classList.remove('leaving');
      isAnimating = false;
      startTimer();
    }, 900);
    updateContent(current, false);
    updateDots();
    resetProgress();
  }

  function updateContent(idx, instant) {
    const s = slides[idx];
    const label = document.getElementById('slide-label')?.querySelector('span');
    const title = document.getElementById('slide-title')?.querySelector('span');
    const sub   = document.getElementById('slide-sub');
    if (!label || !title || !sub) return;
    if (instant) {
      label.textContent = s.label;
      title.textContent = s.title;
      sub.textContent   = s.sub;
    } else {
      [label, title, sub].forEach(el => el.classList.add('fade-out'));
      setTimeout(() => {
        label.textContent = s.label;
        title.textContent = s.title;
        sub.textContent   = s.sub;
        [label, title, sub].forEach(el => el.classList.remove('fade-out'));
      }, 300);
    }
  }

  function updateDots() {
    document.querySelectorAll('.slider-dot').forEach((d,i) => d.classList.toggle('active', i === current));
  }

  function startTimer() {
    stopTimer();
    resetProgress();
    timer = setInterval(() => goTo((current+1)%slides.length), 5000);
  }

  function stopTimer() { clearInterval(timer); timer = null; }

  function resetProgress() {
    const bar = document.getElementById('slider-progress');
    if (!bar) return;
    bar.style.transition = 'none';
    bar.style.width = '0%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      bar.style.transition = 'width 5s linear';
      bar.style.width = '100%';
    }));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
