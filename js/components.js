/* Festival Ngondo — Composants partagés (Header + Footer) */
const NGONDO = {
  lang: document.documentElement.lang || 'fr',
  t(fr, en) { return this.lang === 'en' ? en : fr; },

  injectHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    const lang = this.lang;
    const otherLang = lang === 'fr' ? 'en' : 'fr';
    const currentPath = window.location.pathname;
    const otherPath = currentPath.includes('/en/') ? currentPath.replace('/en/', '/fr/') : currentPath.replace('/fr/', '/en/');

    el.innerHTML = `
    <div class="topbar">
      <div class="container">
        <div class="topbar-inner">
          <div class="topbar-links">
            <a href="contact.html">${this.t('Contact','Contact')}</a>
            <a href="partenaires.html">${this.t('Partenaires','Partners')}</a>
            <a href="presse.html">${this.t('Salle de presse','Press Room')}</a>
            <a href="benevoles.html">${this.t('Bénévoles','Volunteer')}</a>
            <a href="emploi.html">${this.t('Emploi','Jobs')}</a>
          </div>
          <div class="topbar-social">
            <a href="#" aria-label="Facebook">&#128084;</a>
            <a href="#" aria-label="Instagram">&#128247;</a>
            <a href="#" aria-label="YouTube">&#9654;</a>
          </div>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="${this.t('Navigation principale','Main Navigation')}">
          <a href="index.html" class="nav-logo" aria-label="${this.t('Accueil Festival Ngondo','Ngondo Festival Home')}">
            <img src="../../images/logo-ngondo.png" alt="Logo Ngondo" onerror="this.style.display='none'">
            <div class="nav-logo-text">
              <span class="nav-logo-main">NGONDO</span>
              <span class="nav-logo-sub">${this.t('Patrimoine UNESCO · Douala','UNESCO Heritage · Douala')}</span>
            </div>
          </a>
          <ul class="nav-menu" id="nav-menu" role="list">
            <li class="nav-item" role="listitem">
              <a href="index.html" class="nav-link">${this.t('Festival','Festival')}</a>
              <ul class="dropdown" aria-label="${this.t('Sous-menu Festival','Festival Submenu')}">
                <li><a href="programmation.html">${this.t('Programmation 2026','Programme 2026')}</a></li>
                <li><a href="billetterie.html">${this.t('Billetterie','Ticketing')}</a></li>
                <li><a href="apropos.html">${this.t('À propos du Ngondo','About Ngondo')}</a></li>
                <li><a href="site-exterieur.html">${this.t('Berges du Wouri','Wouri Banks')}</a></li>
                <li><a href="hebergement.html">${this.t('Hébergement','Accommodation')}</a></li>
                <li><a href="ecoresponsabilite.html">${this.t('Écoresponsabilité','Sustainability')}</a></li>
                <li><a href="editions.html">${this.t('Éditions passées','Past Editions')}</a></li>
              </ul>
            </li>
            <li class="nav-item" role="listitem">
              <a href="rituels.html" class="nav-link">${this.t('Rituels & Culture','Rituals & Culture')}</a>
              <ul class="dropdown">
                <li><a href="rituels.html">${this.t('Les rituels sacrés','Sacred Rituals')}</a></li>
                <li><a href="pirogue.html">${this.t('Course de pirogues','Pirogue Race')}</a></li>
                <li><a href="danses.html">${this.t('Danses traditionnelles','Traditional Dances')}</a></li>
                <li><a href="artisanat.html">${this.t('Artisanat & Cuisine','Crafts & Cuisine')}</a></li>
                <li><a href="miss-ngondo.html">${this.t('Miss Ngondo','Miss Ngondo')}</a></li>
              </ul>
            </li>
            <li class="nav-item" role="listitem">
              <a href="lutte.html" class="nav-link">${this.t('Compétitions','Competitions')}</a>
              <ul class="dropdown">
                <li><a href="pirogue.html">${this.t('Course de pirogues','Pirogue Race')}</a></li>
                <li><a href="lutte.html">${this.t('Lutte traditionnelle Sawa','Traditional Sawa Wrestling')}</a></li>
                <li><a href="miss-ngondo.html">${this.t('Élection Miss Ngondo','Miss Ngondo Election')}</a></li>
                <li><a href="palmares.html">${this.t('Palmarès','Hall of Fame')}</a></li>
              </ul>
            </li>
            <li class="nav-item" role="listitem">
              <a href="cantons.html" class="nav-link">${this.t('Cantons Sawa','Sawa Cantons')}</a>
              <ul class="dropdown">
                <li><a href="cantons.html">${this.t('Les Cantons participants','Participating Cantons')}</a></li>
                <li><a href="caravanes.html">${this.t('Caravanes culturelles','Cultural Caravans')}</a></li>
                <li><a href="langue-duala.html">${this.t('Langue Duala','Duala Language')}</a></li>
              </ul>
            </li>
            <div class="lang-switcher">
              <a href="${otherPath}" class="lang-btn">${otherLang.toUpperCase()}</a>
            </div>
          </ul>
          <button class="hamburger" id="hamburger" aria-label="${this.t('Menu','Menu')}" aria-expanded="false" aria-controls="nav-menu">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>`;
  },

  injectFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    const lang = this.lang;
    el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="../../images/logo-ngondo.png" alt="Logo Ngondo" onerror="this.style.display='none'">
              <div class="nav-logo-text">
                <span class="nav-logo-main">NGONDO</span>
                <span class="nav-logo-sub">${this.t('Patrimoine Culturel UNESCO','UNESCO Cultural Heritage')}</span>
              </div>
            </div>
            <p>${this.t(
              'Le Ngondo est la plus grande fête rituelle et culturelle des peuples Sawa du Cameroun, célébrée chaque année sur les berges du Wouri à Douala.',
              'Ngondo is the greatest ritual and cultural celebration of the Sawa people of Cameroon, held each year on the banks of the Wouri in Douala.'
            )}</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href="#" aria-label="YouTube">▶</a>
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
              <li><a href="lutte.html">${this.t('Lutte traditionnelle','Traditional Wrestling')}</a></li>
              <li><a href="miss-ngondo.html">${this.t('Miss Ngondo','Miss Ngondo')}</a></li>
              <li><a href="langue-duala.html">${this.t('Langue Duala','Duala Language')}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${this.t('Organisation','Organization')}</h4>
            <ul>
              <li><a href="apropos.html">${this.t('À propos','About')}</a></li>
              <li><a href="partenaires.html">${this.t('Partenaires','Partners')}</a></li>
              <li><a href="presse.html">${this.t('Presse','Press')}</a></li>
              <li><a href="benevoles.html">${this.t('Bénévoles','Volunteers')}</a></li>
              <li><a href="contact.html">${this.t('Contact','Contact')}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Comité Permanent du Ngondo · Douala, Cameroun</p>
          <div class="footer-legal">
            <a href="#">${this.t('Confidentialité','Privacy')}</a>
            <a href="#">${this.t('Mentions légales','Legal')}</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>`;
  },
  init() { this.injectHeader(); this.injectFooter(); }
};
document.addEventListener('DOMContentLoaded', () => NGONDO.init());
