/* ============================================================
   NGONDO 2026 — Components v5
   Mega-menu · Langue FR/EN · Cookies · Header/Footer injectés
   ============================================================ */

const NGONDO = {
  lang: document.documentElement.lang || 'fr',
  t(fr, en) { return this.lang === 'en' ? en : fr; },

  /* ──── MEGA MENU HTML ──────────────────────────────────────── */
  injectHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    const lang = this.lang;
    const otherLang = lang === 'fr' ? 'en' : 'fr';
    const currentPath = window.location.pathname;
    const otherPath = currentPath.includes('/en/') ? currentPath.replace('/en/', '/fr/') : currentPath.replace('/fr/', '/en/');

    el.innerHTML = `
    <!-- TOPBAR -->
    <div class="topbar">
      <div class="container">
        <div class="topbar-inner">
          <div class="topbar-links">
            <a href="contact.html">${this.t('Contact','Contact')}</a>
            <a href="partenaires.html">${this.t('Partenaires','Partners')}</a>
            <a href="presse.html">${this.t('Presse','Press')}</a>
            <a href="benevoles.html">${this.t('Bénévoles','Volunteer')}</a>
          </div>
          <div class="topbar-right">
            <div class="topbar-social">
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
            <!-- LANGUE SWITCHER topbar -->
            <a href="${otherPath}" class="lang-switcher-topbar" title="${this.t('Switch to English','Passer en Français')}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              ${otherLang.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN HEADER -->
    <header class="site-header" id="site-header-main">
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="${this.t('Navigation principale','Main navigation')}">

          <!-- LOGO -->
          <a href="index.html" class="nav-logo" aria-label="${this.t('Accueil Festival Ngondo','Ngondo Festival Home')}">
            <img src="../../images/logo-ngondo.png" alt="Logo Festival Ngondo" onerror="this.style.display='none'">
            <div class="nav-logo-text">
              <span class="nav-logo-main">NGONDO</span>
              <span class="nav-logo-sub">${this.t('Patrimoine UNESCO · Douala','UNESCO Heritage · Douala')}</span>
            </div>
          </a>

          <!-- NAV MENU -->
          <ul class="nav-menu" id="nav-menu" role="list">

            <!-- FESTIVAL -->
            <li class="nav-item has-mega" role="listitem">
              <a href="index.html" class="nav-link" aria-haspopup="true">${this.t('Festival','Festival')}
                <svg class="nav-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </a>
              <div class="mega-menu" role="region">
                <div class="mega-inner">
                  <div class="mega-col">
                    <span class="mega-col-title">${this.t('Édition 2026','2026 Edition')}</span>
                    <ul>
                      <li><a href="programmation.html"><span class="mega-icon">📅</span>${this.t('Programmation officielle','Official Programme')}</a></li>
                      <li><a href="billetterie.html"><span class="mega-icon">🎫</span>${this.t('Billetterie & Accès','Tickets & Access')}</a></li>
                      <li><a href="site-exterieur.html"><span class="mega-icon">🗺️</span>${this.t('Berges du Wouri','Wouri Banks')}</a></li>
                      <li><a href="hebergement.html"><span class="mega-icon">🏨</span>${this.t('Hébergement','Accommodation')}</a></li>
                    </ul>
                  </div>
                  <div class="mega-col">
                    <span class="mega-col-title">${this.t('À propos','About')}</span>
                    <ul>
                      <li><a href="apropos.html"><span class="mega-icon">ℹ️</span>${this.t('Histoire du Ngondo','History of Ngondo')}</a></li>
                      <li><a href="editions.html"><span class="mega-icon">📚</span>${this.t('Éditions passées','Past Editions')}</a></li>
                      <li><a href="ecoresponsabilite.html"><span class="mega-icon">🌿</span>${this.t('Écoresponsabilité','Sustainability')}</a></li>
                      <li><a href="partenaires.html"><span class="mega-icon">🤝</span>${this.t('Nos partenaires','Our Partners')}</a></li>
                    </ul>
                  </div>
                  <div class="mega-col mega-featured">
                    <div class="mega-card-feature">
                      <img src="../../images/pirogues-wouri.jpg" alt="${this.t('Pirogues Ngondo','Ngondo Pirogues')}">
                      <div class="mega-card-body">
                        <strong>${this.t('4 au 7 Déc. 2026','Dec 4–7, 2026')}</strong>
                        <p>${this.t('Thème : L\'Anticipation et la Vigilance','Theme: Anticipation & Vigilance')}</p>
                        <a href="programmation.html" class="btn btn-gold" style="margin-top:0.5rem;font-size:0.68rem;padding:0.4rem 1rem;">${this.t('Voir le programme','See Programme')}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <!-- CULTURE -->
            <li class="nav-item has-mega" role="listitem">
              <a href="culture.html" class="nav-link" aria-haspopup="true">${this.t('Culture','Culture')}
                <svg class="nav-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
              </a>
              <div class="mega-menu" role="region">
                <div class="mega-inner">
                  <div class="mega-col">
                    <span class="mega-col-title">${this.t('Patrimoine Sawa','Sawa Heritage')}</span>
                    <ul>
                      <li><a href="rituels.html"><span class="mega-icon">🌊</span>${this.t('Rituels sacrés','Sacred Rituals')}</a></li>
                      <li><a href="danses.html"><span class="mega-icon">💃</span>${this.t('Danses traditionnelles','Traditional Dances')}</a></li>
                      <li><a href="artisanat.html"><span class="mega-icon">🎨</span>${this.t('Artisanat & Cuisine','Crafts & Cuisine')}</a></li>
                      <li><a href="langue-duala.html"><span class="mega-icon">🗣️</span>${this.t('Langue Duala','Duala Language')}</a></li>
                    </ul>
                  </div>
                  <div class="mega-col">
                    <span class="mega-col-title">${this.t('Compétitions','Competitions')}</span>
                    <ul>
                      <li><a href="pirogue.html"><span class="mega-icon">🛶</span>${this.t('Course de pirogues','Pirogue Race')}</a></li>
                      <li><a href="lutte.html"><span class="mega-icon">🤼</span>${this.t('Lutte traditionnelle','Traditional Wrestling')}</a></li>
                      <li><a href="miss-ngondo.html"><span class="mega-icon">👑</span>${this.t('Élection Miss Ngondo','Miss Ngondo')}</a></li>
                      <li><a href="palmares.html"><span class="mega-icon">🏆</span>${this.t('Palmarès','Hall of Fame')}</a></li>
                    </ul>
                  </div>
                  <div class="mega-col">
                    <span class="mega-col-title">${this.t('Cantons Sawa','Sawa Cantons')}</span>
                    <ul>
                      <li><a href="cantons.html"><span class="mega-icon">🏘️</span>${this.t('Les 12 cantons','The 12 Cantons')}</a></li>
                      <li><a href="caravanes.html"><span class="mega-icon">🚌</span>${this.t('Caravanes culturelles','Cultural Caravans')}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <!-- ACTUALITÉS -->
            <li class="nav-item" role="listitem">
              <a href="actualites.html" class="nav-link">${this.t('Actualités','News')}</a>
            </li>

            <!-- GALERIE -->
            <li class="nav-item" role="listitem">
              <a href="galerie.html" class="nav-link">${this.t('Galerie','Gallery')}</a>
            </li>

            <!-- PRESSE -->
            <li class="nav-item" role="listitem">
              <a href="presse.html" class="nav-link">${this.t('Presse','Press')}</a>
            </li>

          </ul>

          <!-- RIGHT ACTIONS -->
          <div class="nav-actions">
            <!-- LANGUE dans le header -->
            <a href="${otherPath}" class="lang-btn" title="${this.t('Switch to English','Passer en Français')}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              <span>${otherLang.toUpperCase()}</span>
            </a>
            <a href="billetterie.html" class="btn btn-gold nav-cta">${this.t('Billets','Tickets')}</a>
          </div>

          <!-- HAMBURGER -->
          <button class="hamburger" id="hamburger" aria-label="${this.t('Menu','Menu')}" aria-expanded="false" aria-controls="nav-menu">
            <span></span><span></span><span></span>
          </button>

        </nav>
      </div>
    </header>`;

    this._initMegaMenu();
  },

  /* ──── FOOTER HTML ─────────────────────────────────────────── */
  injectFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="footer-brand-logo">
              <img src="../../images/logo-ngondo.png" alt="Logo Ngondo" onerror="this.style.display='none'">
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
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4>${this.t('Festival 2026','Festival 2026')}</h4>
            <ul>
              <li><a href="programmation.html">${this.t('Programmation','Programme')}</a></li>
              <li><a href="billetterie.html">${this.t('Billetterie','Ticketing')}</a></li>
              <li><a href="site-exterieur.html">${this.t('Berges du Wouri','Wouri Banks')}</a></li>
              <li><a href="hebergement.html">${this.t('Hébergement','Accommodation')}</a></li>
              <li><a href="editions.html">${this.t('Éditions passées','Past Editions')}</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>${this.t('Culture Sawa','Sawa Culture')}</h4>
            <ul>
              <li><a href="rituels.html">${this.t('Rituels sacrés','Sacred Rituals')}</a></li>
              <li><a href="pirogue.html">${this.t('Course de pirogues','Pirogue Race')}</a></li>
              <li><a href="cantons.html">${this.t('Les 12 cantons','12 Cantons')}</a></li>
              <li><a href="miss-ngondo.html">${this.t('Miss Ngondo','Miss Ngondo')}</a></li>
              <li><a href="galerie.html">${this.t('Galerie photos','Photo Gallery')}</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>${this.t('Informations','Information')}</h4>
            <ul>
              <li><a href="actualites.html">${this.t('Actualités','News')}</a></li>
              <li><a href="presse.html">${this.t('Salle de presse','Press Room')}</a></li>
              <li><a href="apropos.html">${this.t('À propos','About')}</a></li>
              <li><a href="partenaires.html">${this.t('Partenaires','Partners')}</a></li>
              <li><a href="contact.html">${this.t('Contact','Contact')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="footer-bottom-inner">
            <p>© ${new Date().getFullYear()} Comité Permanent du Ngondo · Douala, Cameroun</p>
            <div class="footer-legal">
              <a href="confidentialite.html">${this.t('Confidentialité','Privacy')}</a>
              <a href="mentions-legales.html">${this.t('Mentions légales','Legal')}</a>
              <a href="#" id="cookies-settings-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>`;

    document.getElementById('cookies-settings-link')?.addEventListener('click', (e) => {
      e.preventDefault();
      NGONDO.showCookieBanner(true);
    });
  },

  /* ──── MEGA MENU INTERACTIONS ──────────────────────────────── */
  _initMegaMenu() {
    // Desktop: hover mega menu
    document.querySelectorAll('.nav-item.has-mega').forEach(item => {
      item.addEventListener('mouseenter', () => {
        document.querySelectorAll('.nav-item.has-mega').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
      });
    });

    // Mobile: hamburger
    const burger = document.getElementById('hamburger');
    const menu   = document.getElementById('nav-menu');
    if (burger && menu) {
      burger.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
      });

      // Mobile: tap nav-link with mega to toggle
      document.querySelectorAll('.nav-item.has-mega > .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
          if (window.innerWidth < 992) {
            e.preventDefault();
            link.parentElement.classList.toggle('active');
          }
        });
      });
    }

    // Sticky header
    const header = document.getElementById('site-header-main');
    if (header) {
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
      }, { passive: true });
    }

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-header')) {
        document.querySelectorAll('.nav-item.has-mega.active').forEach(i => i.classList.remove('active'));
      }
    });
  },

  /* ──── COOKIE BANNER ───────────────────────────────────────── */
  showCookieBanner(force = false) {
    if (!force && localStorage.getItem('ngondo_cookies_accepted')) return;
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-inner">
        <div class="cookie-text">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;color:var(--gold)"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div>
            <strong>${this.t('Ce site utilise des cookies','This site uses cookies')}</strong>
            <p>${this.t(
              'Nous utilisons des cookies pour améliorer votre expérience et analyser l\'audience. Vos données restent protégées conformément à notre politique de confidentialité.',
              'We use cookies to improve your experience and analyse traffic. Your data is protected according to our privacy policy.'
            )}</p>
          </div>
        </div>
        <div class="cookie-actions">
          <button class="btn btn-outline cookie-refuse" style="font-size:0.72rem;padding:0.5rem 1rem;">${this.t('Refuser','Decline')}</button>
          <button class="btn btn-outline cookie-essential" style="font-size:0.72rem;padding:0.5rem 1rem;">${this.t('Essentiels seulement','Essential only')}</button>
          <button class="btn btn-gold cookie-accept" style="font-size:0.72rem;padding:0.5rem 1rem;">${this.t('Tout accepter','Accept all')}</button>
        </div>
      </div>`;
    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add('visible'));

    const close = (val) => {
      localStorage.setItem('ngondo_cookies_accepted', val);
      banner.classList.remove('visible');
      setTimeout(() => banner.remove(), 400);
    };
    banner.querySelector('.cookie-accept').onclick = () => close('all');
    banner.querySelector('.cookie-essential').onclick = () => close('essential');
    banner.querySelector('.cookie-refuse').onclick = () => close('none');
  },

  /* ──── INIT ─────────────────────────────────────────────────── */
  init() {
    this.injectHeader();
    this.injectFooter();
    this.showCookieBanner();
  }
};

document.addEventListener('DOMContentLoaded', () => NGONDO.init());
