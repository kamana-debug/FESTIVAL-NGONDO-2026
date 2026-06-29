/* ============================================================
   NGONDO 2026 — Components v6
   Menu mobile style papeaucameroun · FR/EN · Cookies
   ============================================================ */

const NGONDO = {
  lang: document.documentElement.lang || 'fr',
  t(fr, en) { return this.lang === 'en' ? en : fr; },

  injectHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    const lang = this.lang;
    const otherLang = lang === 'fr' ? 'en' : 'fr';
    const currentPath = window.location.pathname;
    const otherPath = currentPath.includes('/en/')
      ? currentPath.replace('/en/', '/fr/')
      : currentPath.replace('/fr/', '/en/');

    el.innerHTML = `
    <header class="site-header" id="site-header-main">
      <div class="header-inner">

        <!-- LOGO -->
        <a href="index.html" class="nav-logo" aria-label="NGONDO 2026">
          <img src="../../images/logo-ngondo.png" alt="Logo NGONDO" onerror="this.style.display='none'">
          <div class="nav-logo-text">
            <span class="nav-logo-main">NGONDO</span>
            <span class="nav-logo-sub">${this.t('Patrimoine UNESCO · Douala 2026','UNESCO Heritage · Douala 2026')}</span>
          </div>
        </a>

        <!-- NAV DESKTOP -->
        <nav class="nav-desktop" aria-label="${this.t('Navigation','Navigation')}">
          <a href="index.html" class="nav-link">${this.t('Accueil','Home')}</a>
          <a href="programmation.html" class="nav-link">${this.t('Programme','Programme')}</a>
          <a href="actualites.html" class="nav-link">${this.t('Actualités','News')}</a>
          <a href="galerie.html" class="nav-link">${this.t('Galerie','Gallery')}</a>
          <a href="cantons.html" class="nav-link">${this.t('Cantons','Cantons')}</a>
          <a href="rituels.html" class="nav-link">${this.t('Rituels','Rituals')}</a>
          <a href="presse.html" class="nav-link">${this.t('Presse','Press')}</a>
        </nav>

        <!-- DROITE : FR/EN + Billets -->
        <div class="nav-right">
          <!-- Boutons langue style papeaucameroun -->
          <div class="lang-pills">
            <a href="${currentPath.replace('/en/', '/fr/')}" class="lang-pill ${lang === 'fr' ? 'active' : ''}">FR</a>
            <a href="${currentPath.replace('/fr/', '/en/')}" class="lang-pill ${lang === 'en' ? 'active' : ''}">EN</a>
          </div>
          <a href="billetterie.html" class="btn btn-gold nav-cta">${this.t('Billets','Tickets')}</a>
        </div>

        <!-- HAMBURGER MOBILE -->
        <button class="hamburger" id="hamburger" aria-label="${this.t('Menu','Menu')}" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- MENU MOBILE (panneau plein écran) -->
      <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
        <nav aria-label="${this.t('Navigation mobile','Mobile navigation')}">
          <a href="index.html" class="mobile-link">${this.t('Accueil','Home')}</a>
          <a href="programmation.html" class="mobile-link">${this.t('Programme 2026','Programme 2026')}</a>
          <a href="actualites.html" class="mobile-link">${this.t('Actualités','News')}</a>
          <a href="galerie.html" class="mobile-link">${this.t('Galerie Photos','Photo Gallery')}</a>
          <a href="cantons.html" class="mobile-link">${this.t('Les 12 Cantons','The 12 Cantons')}</a>
          <a href="rituels.html" class="mobile-link">${this.t('Rituels & Culture','Rituals & Culture')}</a>
          <a href="pirogue.html" class="mobile-link">${this.t('Course de Pirogues','Pirogue Race')}</a>
          <a href="miss-ngondo.html" class="mobile-link">${this.t('Miss Ngondo','Miss Ngondo')}</a>
          <a href="presse.html" class="mobile-link">${this.t('Presse','Press')}</a>
          <a href="contact.html" class="mobile-link">${this.t('Contact','Contact')}</a>
        </nav>

        <!-- FR / EN dans le menu mobile -->
        <div class="mobile-lang">
          <a href="${currentPath.replace('/en/', '/fr/')}" class="lang-pill ${lang === 'fr' ? 'active' : ''}">FR</a>
          <a href="${currentPath.replace('/fr/', '/en/')}" class="lang-pill ${lang === 'en' ? 'active' : ''}">EN</a>
        </div>

        <div class="mobile-footer-links">
          <a href="billetterie.html" class="btn btn-gold" style="width:100%;justify-content:center;margin-top:1.5rem;">${this.t('Billets & Accès','Tickets & Access')}</a>
          <div class="mobile-social">
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>`;

    this._initNav();
  },

  _initNav() {
    const burger  = document.getElementById('hamburger');
    const menu    = document.getElementById('mobile-menu');
    const header  = document.getElementById('site-header-main');
    if (!burger || !menu) return;

    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Fermer sur clic lien mobile
    menu.querySelectorAll('.mobile-link').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Sticky
    window.addEventListener('scroll', () => {
      header?.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  },

  injectFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    const lang = this.lang;
    const currentPath = window.location.pathname;
    el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-brand-logo">
              <img src="../../images/logo-ngondo.png" alt="Logo NGONDO" onerror="this.style.display='none'">
              <div class="nav-logo-text">
                <span class="nav-logo-main">NGONDO</span>
                <span class="nav-logo-sub">${this.t('Patrimoine Culturel UNESCO','UNESCO Cultural Heritage')}</span>
              </div>
            </div>
            <p>${this.t(
              'La plus grande fête rituelle et culturelle des peuples Sawa du Cameroun, inscrite au Patrimoine Culturel Immatériel de l\'UNESCO.',
              'The greatest ritual and cultural festival of the Sawa people of Cameroon, inscribed on UNESCO\'s Intangible Cultural Heritage list.'
            )}</p>
            <div class="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>${this.t('NGONDO 2026','NGONDO 2026')}</h4>
            <ul>
              <li><a href="programmation.html">${this.t('Programme','Programme')}</a></li>
              <li><a href="billetterie.html">${this.t('Billetterie','Ticketing')}</a></li>
              <li><a href="cantons.html">${this.t('Les 12 Cantons','12 Cantons')}</a></li>
              <li><a href="galerie.html">${this.t('Galerie','Gallery')}</a></li>
              <li><a href="actualites.html">${this.t('Actualités','News')}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${this.t('Culture Sawa','Sawa Culture')}</h4>
            <ul>
              <li><a href="rituels.html">${this.t('Rituels sacrés','Sacred Rituals')}</a></li>
              <li><a href="pirogue.html">${this.t('Course de pirogues','Pirogue Race')}</a></li>
              <li><a href="miss-ngondo.html">${this.t('Miss Ngondo','Miss Ngondo')}</a></li>
              <li><a href="apropos.html">${this.t('À propos','About')}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${this.t('Informations','Information')}</h4>
            <ul>
              <li><a href="presse.html">${this.t('Salle de presse','Press Room')}</a></li>
              <li><a href="partenaires.html">${this.t('Partenaires','Partners')}</a></li>
              <li><a href="contact.html">${this.t('Contact','Contact')}</a></li>
              <li><a href="benevoles.html">${this.t('Bénévoles','Volunteers')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-inner">
            <p>© ${new Date().getFullYear()} Comité Permanent du Ngondo · Douala, Cameroun</p>
            <div class="footer-legal">
              <a href="#">${this.t('Confidentialité','Privacy')}</a>
              <a href="#">${this.t('Mentions légales','Legal')}</a>
              <a href="#" id="cookies-settings-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>`;

    document.getElementById('cookies-settings-link')?.addEventListener('click', e => {
      e.preventDefault();
      NGONDO.showCookieBanner(true);
    });
  },

  showCookieBanner(force = false) {
    if (!force && localStorage.getItem('ngondo_cookies')) return;
    const b = document.createElement('div');
    b.id = 'cookie-banner';
    b.innerHTML = `
      <div class="cookie-banner-inner">
        <div class="cookie-text">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;color:var(--gold)"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div>
            <strong>${this.t('Ce site utilise des cookies','This site uses cookies')}</strong>
            <p>${this.t('Nous utilisons des cookies pour améliorer votre expérience de navigation.','We use cookies to improve your browsing experience.')}</p>
          </div>
        </div>
        <div class="cookie-actions">
          <button class="btn btn-outline" id="ck-refuse" style="font-size:0.72rem;padding:0.5rem 1rem;">${this.t('Refuser','Decline')}</button>
          <button class="btn btn-gold" id="ck-accept" style="font-size:0.72rem;padding:0.5rem 1rem;">${this.t('Accepter','Accept')}</button>
        </div>
      </div>`;
    document.body.appendChild(b);
    requestAnimationFrame(() => b.classList.add('visible'));
    const close = v => { localStorage.setItem('ngondo_cookies', v); b.classList.remove('visible'); setTimeout(() => b.remove(), 400); };
    document.getElementById('ck-accept').onclick = () => close('all');
    document.getElementById('ck-refuse').onclick  = () => close('none');
  },

  init() {
    this.injectHeader();
    this.injectFooter();
    this.showCookieBanner();
  }
};

document.addEventListener('DOMContentLoaded', () => NGONDO.init());
