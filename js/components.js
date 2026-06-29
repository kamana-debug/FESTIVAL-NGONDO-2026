/* ============================================================
   NGONDO 2026 — Components v7
   Header responsive · FR/EN pills · Ticker ecomatin · Cookies
   ============================================================ */
const NGONDO = {
  lang: document.documentElement.lang || 'fr',
  t(fr, en) { return this.lang === 'en' ? en : fr; },

  /* ── Chemins relatifs selon la profondeur ─────────────────── */
  base() {
    const p = window.location.pathname;
    if (p.includes('/pages/')) return '../../';
    return './';
  },

  injectHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    const lang = this.lang;
    const b    = this.base();
    const path = window.location.pathname;
    const frPath = path.includes('/en/') ? path.replace('/en/', '/fr/') : path;
    const enPath = path.includes('/fr/') ? path.replace('/fr/', '/en/') : path;

    el.innerHTML = `
    <header class="ngd-header" id="ngd-header">
      <div class="ngd-header-bar">
        <div class="ngd-container">

          <!-- LOGO -->
          <a href="${b}pages/fr/index.html" class="ngd-logo" aria-label="NGONDO 2026">
            <img src="${b}images/logo-ngondo.png" alt="Logo NGONDO"
                 onerror="this.style.display='none'">
            <div>
              <span class="ngd-logo-name">NGONDO</span>
              <span class="ngd-logo-sub">${this.t('Patrimoine UNESCO · Douala 2026','UNESCO Heritage · Douala 2026')}</span>
            </div>
          </a>

          <!-- NAV DESKTOP -->
          <nav class="ngd-nav" aria-label="Navigation principale" id="ngd-nav">
            <a href="${b}pages/fr/index.html"       class="ngd-link">${this.t('Accueil','Home')}</a>
            <a href="${b}pages/fr/programmation.html" class="ngd-link">${this.t('Programme','Programme')}</a>
            <a href="${b}pages/fr/actualites.html"  class="ngd-link">${this.t('Actualités','News')}</a>
            <a href="${b}pages/fr/galerie.html"     class="ngd-link">${this.t('Galerie','Gallery')}</a>
            <a href="${b}pages/fr/cantons.html"     class="ngd-link">${this.t('Cantons','Cantons')}</a>
            <a href="${b}pages/fr/rituels.html"     class="ngd-link">${this.t('Rituels','Rituals')}</a>
            <a href="${b}pages/fr/presse.html"      class="ngd-link">${this.t('Presse','Press')}</a>
          </nav>

          <!-- DROITE -->
          <div class="ngd-right">
            <!-- Pills FR / EN -->
            <div class="ngd-lang" role="group" aria-label="Langue / Language">
              <a href="${frPath}" class="ngd-lang-pill ${lang==='fr'?'on':''}" lang="fr" hreflang="fr">FR</a>
              <a href="${enPath}" class="ngd-lang-pill ${lang==='en'?'on':''}" lang="en" hreflang="en">EN</a>
            </div>
            <a href="${b}pages/fr/billetterie.html" class="ngd-cta">${this.t('Billets','Tickets')}</a>
          </div>

          <!-- BURGER -->
          <button class="ngd-burger" id="ngd-burger"
                  aria-label="${this.t('Ouvrir le menu','Open menu')}"
                  aria-expanded="false" aria-controls="ngd-panel">
            <span></span><span></span><span></span>
          </button>

        </div>
      </div>

      <!-- PANNEAU MOBILE -->
      <div class="ngd-panel" id="ngd-panel" aria-hidden="true" role="dialog"
           aria-label="${this.t('Menu de navigation','Navigation menu')}">
        <nav aria-label="${this.t('Navigation mobile','Mobile navigation')}">
          <a href="${b}pages/fr/index.html"         class="ngd-panel-link">${this.t('Accueil','Home')}</a>
          <a href="${b}pages/fr/programmation.html" class="ngd-panel-link">${this.t('Programme 2026','Programme 2026')}</a>
          <a href="${b}pages/fr/actualites.html"    class="ngd-panel-link">${this.t('Actualités','News')}</a>
          <a href="${b}pages/fr/galerie.html"       class="ngd-panel-link">${this.t('Galerie Photos','Photo Gallery')}</a>
          <a href="${b}pages/fr/cantons.html"       class="ngd-panel-link">${this.t('Les 12 Cantons Sawa','The 12 Sawa Cantons')}</a>
          <a href="${b}pages/fr/rituels.html"       class="ngd-panel-link">${this.t('Rituels & Culture','Rituals & Culture')}</a>
          <a href="${b}pages/fr/pirogue.html"       class="ngd-panel-link">${this.t('Course de Pirogues','Pirogue Race')}</a>
          <a href="${b}pages/fr/miss-ngondo.html"   class="ngd-panel-link">${this.t('Miss NGONDO','Miss NGONDO')}</a>
          <a href="${b}pages/fr/presse.html"        class="ngd-panel-link">${this.t('Presse','Press')}</a>
          <a href="${b}pages/fr/contact.html"       class="ngd-panel-link">${this.t('Contact','Contact')}</a>
        </nav>

        <!-- Lang dans le panel -->
        <div class="ngd-panel-lang">
          <a href="${frPath}" class="ngd-lang-pill ${lang==='fr'?'on':''}" lang="fr">FR</a>
          <a href="${enPath}" class="ngd-lang-pill ${lang==='en'?'on':''}" lang="en">EN</a>
        </div>

        <a href="${b}pages/fr/billetterie.html" class="ngd-panel-cta">${this.t('Billets & Accès','Tickets & Access')}</a>

        <div class="ngd-panel-social">
          <a href="https://facebook.com/ngondo" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
      </div>
    </header>`;

    this._initHeader();
  },

  _initHeader() {
    const burger = document.getElementById('ngd-burger');
    const panel  = document.getElementById('ngd-panel');
    const header = document.getElementById('ngd-header');
    if (!burger || !panel) return;

    const open  = () => { panel.classList.add('open'); burger.classList.add('open'); burger.setAttribute('aria-expanded','true'); panel.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; };
    const close = () => { panel.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded','false'); panel.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
    const toggle = () => panel.classList.contains('open') ? close() : open();

    burger.addEventListener('click', toggle);
    panel.querySelectorAll('.ngd-panel-link,.ngd-panel-cta').forEach(a => a.addEventListener('click', close));
    document.addEventListener('click', e => { if (!e.target.closest('.ngd-header')) close(); });
    document.addEventListener('keydown', e => { if (e.key==='Escape') close(); });

    /* Sticky scroll */
    const onScroll = () => header.classList.toggle('ngd-scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();

    /* Marquer lien actif */
    const cur = window.location.href;
    document.querySelectorAll('.ngd-link').forEach(a => {
      if (cur.includes(a.getAttribute('href'))) a.classList.add('ngd-active');
    });
  },

  injectFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    const b = this.base();
    el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-brand-logo">
              <img src="${b}images/logo-ngondo.png" alt="Logo NGONDO" onerror="this.style.display='none'">
              <div><span class="nav-logo-main">NGONDO</span><span class="nav-logo-sub">${this.t('Patrimoine Culturel UNESCO','UNESCO Cultural Heritage')}</span></div>
            </div>
            <p>${this.t('La plus grande fête rituelle et culturelle des peuples Sawa du Cameroun, inscrite au Patrimoine Culturel Immatériel de l\'UNESCO.','The greatest ritual and cultural festival of the Sawa people of Cameroon, inscribed on UNESCO\'s Intangible Cultural Heritage.')}</p>
            <div class="footer-social">
              <a href="https://facebook.com" target="_blank" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
              <a href="https://youtube.com" target="_blank" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg></a>
            </div>
          </div>
          <div class="footer-col"><h4>${this.t('NGONDO 2026','NGONDO 2026')}</h4><ul>
            <li><a href="${b}pages/fr/programmation.html">${this.t('Programme','Programme')}</a></li>
            <li><a href="${b}pages/fr/billetterie.html">${this.t('Billetterie','Ticketing')}</a></li>
            <li><a href="${b}pages/fr/cantons.html">${this.t('Les 12 Cantons','12 Cantons')}</a></li>
            <li><a href="${b}pages/fr/galerie.html">${this.t('Galerie','Gallery')}</a></li>
            <li><a href="${b}pages/fr/actualites.html">${this.t('Actualités','News')}</a></li>
          </ul></div>
          <div class="footer-col"><h4>${this.t('Culture Sawa','Sawa Culture')}</h4><ul>
            <li><a href="${b}pages/fr/rituels.html">${this.t('Rituels sacrés','Sacred Rituals')}</a></li>
            <li><a href="${b}pages/fr/pirogue.html">${this.t('Course de pirogues','Pirogue Race')}</a></li>
            <li><a href="${b}pages/fr/miss-ngondo.html">Miss NGONDO</a></li>
            <li><a href="${b}pages/fr/apropos.html">${this.t('À propos','About')}</a></li>
          </ul></div>
          <div class="footer-col"><h4>${this.t('Informations','Information')}</h4><ul>
            <li><a href="${b}pages/fr/presse.html">${this.t('Salle de presse','Press Room')}</a></li>
            <li><a href="${b}pages/fr/partenaires.html">${this.t('Partenaires','Partners')}</a></li>
            <li><a href="${b}pages/fr/contact.html">Contact</a></li>
          </ul></div>
        </div>
      </div>
      <div class="footer-bottom"><div class="container"><div class="footer-bottom-inner">
        <p>© ${new Date().getFullYear()} Comité Permanent du NGONDO · Douala, Cameroun</p>
        <div class="footer-legal">
          <a href="#">${this.t('Confidentialité','Privacy')}</a>
          <a href="#">${this.t('Mentions légales','Legal')}</a>
          <a href="#" id="ck-open">Cookies</a>
        </div>
      </div></div></div>
    </footer>`;
    document.getElementById('ck-open')?.addEventListener('click', e => { e.preventDefault(); NGONDO.showCookieBanner(true); });
  },

  showCookieBanner(force=false) {
    if (!force && localStorage.getItem('ngondo_ck')) return;
    const d = document.createElement('div');
    d.id = 'ngd-cookie';
    d.innerHTML = `<div class="ngd-cookie-inner">
      <p><strong>${this.t('Cookies','Cookies')}</strong> — ${this.t('Nous utilisons des cookies pour améliorer votre navigation.','We use cookies to improve your browsing experience.')}</p>
      <div class="ngd-cookie-btns">
        <button id="ck-r" class="btn btn-outline" style="font-size:.72rem;padding:.45rem 1rem;">${this.t('Refuser','Decline')}</button>
        <button id="ck-a" class="btn btn-gold"    style="font-size:.72rem;padding:.45rem 1rem;">${this.t('Accepter','Accept')}</button>
      </div></div>`;
    document.body.appendChild(d);
    requestAnimationFrame(() => d.classList.add('show'));
    const close = v => { localStorage.setItem('ngondo_ck',v); d.classList.remove('show'); setTimeout(()=>d.remove(),400); };
    document.getElementById('ck-a').onclick = ()=>close('all');
    document.getElementById('ck-r').onclick = ()=>close('none');
  },

  init() { this.injectHeader(); this.injectFooter(); this.showCookieBanner(); }
};
document.addEventListener('DOMContentLoaded', ()=>NGONDO.init());
