/* =============================================
   COOPER LAW — SHARED COMPONENTS
   Nav, Footer, and utilities
   ============================================= */

const navLogo = (base) => `<img src="${base}images/logo.svg" alt="Cooper Law" style="height:90px;width:auto;display:block;">`;

function getPageName() {
  const path = window.location.pathname;
  if (path.includes('young-adults')) return 'young-adults';
  if (path.includes('estate-planning')) return 'estate-planning';
  if (path.includes('services')) return 'services';
  if (path.includes('emergency')) return 'emergency';
  if (path.includes('about')) return 'about';
  if (path.includes('blog')) return 'blog';
  if (path.includes('contact')) return 'contact';
  if (path.includes('advisors')) return 'advisors';
  return 'home';
}

function renderNav() {
  const placeholder = document.getElementById('nav-placeholder');
  const base = (placeholder && placeholder.dataset.base) ? placeholder.dataset.base : '';
  const current = getPageName();
  const links = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'estate-planning.html', label: 'Estate Planning', key: 'estate-planning' },
    { href: 'services.html', label: 'Services', key: 'services' },
    { href: 'emergency.html', label: 'Emergency', key: 'emergency' },
    { href: 'young-adults.html', label: 'Young Adults', key: 'young-adults' },
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'blog.html', label: 'Resources', key: 'blog' },
    { href: 'advisors.html', label: 'Advisors', key: 'advisors' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
  ];
  const navHTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a class="nav-logo" href="${base}index.html">
      ${navLogo(base)}
    </a>
    <div class="nav-links">
      ${links.map(l => `<a href="${base}${l.href}" class="${l.key === current ? 'active' : ''}">${l.label}</a>`).join('')}
    </div>
    <a href="${base}contact.html" class="nav-cta-btn">Get Started</a>
    <button class="nav-mobile-toggle" onclick="toggleMobileNav()" aria-label="Menu">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect y="3" width="22" height="2" rx="1" fill="#666"/><rect y="10" width="22" height="2" rx="1" fill="#666"/><rect y="17" width="22" height="2" rx="1" fill="#666"/></svg>
    </button>
  </div>
  <div class="nav-mobile-menu" id="mobileMenu">
    ${links.map(l => `<a href="${base}${l.href}" class="${l.key === current ? 'active' : ''}">${l.label}</a>`).join('')}
    <a href="${base}contact.html" class="btn btn-rose" style="margin:8px 0">Get Started</a>
  </div>
</nav>`;
  placeholder.innerHTML = navHTML;
}

function renderFooter() {
  const navPh = document.getElementById('nav-placeholder');
  const base = (navPh && navPh.dataset.base) ? navPh.dataset.base : '';
  const cities = [
    { href: 'louisville-estate-planning.html', label: 'Louisville' },
    { href: 'lexington-estate-planning.html', label: 'Lexington' },
    { href: 'bowling-green-estate-planning.html', label: 'Bowling Green' },
    { href: 'indianapolis-estate-planning.html', label: 'Indianapolis' },
    { href: 'cincinnati-estate-planning.html', label: 'Cincinnati' },
  ];
  const footerHTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-left">
      <div>
        <div class="footer-logo-name">Cooper Law, LLC</div>
        <div class="footer-details">
          9200 Shelbyville Road, #600 &bull; Louisville, KY 40222<br>
          <a href="tel:5027541351">502-754-1351</a> &bull;
          <a href="mailto:allison@cooperlawky.com">allison@cooperlawky.com</a>
        </div>
      </div>
    </div>
    <div class="footer-right">
      &copy; 2026 Cooper Law, LLC<br>
      Licensed in Kentucky &bull; Indiana &bull; Ohio<br>
      <a href="${base}advisors.html">For Financial Advisors &amp; Agents</a><br>
      <a href="${base}privacy.html">Privacy Policy</a> &bull; <a href="${base}terms.html">Terms of Use</a> &bull; <a href="${base}accessibility.html">Accessibility</a> &bull; <a href="mailto:allison@cooperlawky.com?subject=Website%20Accessibility%20Issue">Report an issue</a>
    </div>
  </div>
  <div style="border-top:1px solid var(--border);margin-top:16px;padding-top:14px;max-width:var(--max-w);margin-left:auto;margin-right:auto">
    <p style="font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:var(--light);margin:0 0 6px">Estate planning service areas</p>
    <p style="font-size:12px;color:var(--mid);margin:0;line-height:1.9">
      ${cities.map(c => `<a href="${base}${c.href}" style="color:var(--mid)">${c.label}</a>`).join(' &bull; ')} &mdash; serving families across Kentucky, Indiana &amp; Ohio
    </p>
  </div>
  <div style="border-top:1px solid var(--border);margin-top:16px;padding-top:14px;max-width:var(--max-w);margin-left:auto;margin-right:auto">
    <p style="font-size:10px;color:var(--light);line-height:1.7;margin:0;text-align:center">
      <strong style="color:var(--light)">Attorney Advertising.</strong> This website is for informational purposes only and does not constitute legal advice. The information contained on this site does not create an attorney-client relationship. Cooper Law, LLC is licensed to practice law in Kentucky, Indiana, and Ohio only. Do not act or refrain from acting based on anything you read on this site without seeking qualified legal counsel. Past results do not guarantee similar outcomes.
    </p>
  </div>
</footer>`;
  document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

function toggleMobileNav() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Form handling via Formspree
function setupForm(formId, successId, endpoint) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
      const data = new FormData(form);
      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        document.getElementById(successId).style.display = 'block';
      } else {
        btn.textContent = 'Something went wrong — please email allison@cooperlawky.com';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Something went wrong — please email allison@cooperlawky.com';
      btn.disabled = false;
    }
  });
}

// Mobile nav style
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
  .nav-mobile-menu {
    flex-direction: column; padding: 16px 24px 20px;
    border-top: 1px solid var(--border-light);
    background: #fff;
  }
  .nav-mobile-menu a {
    padding: 10px 0; font-size: 15px; color: var(--mid);
    border-bottom: 1px solid var(--border-light);
  }
  .nav-mobile-menu a.active { color: var(--rose); }
`;
document.head.appendChild(mobileStyle);

// Skip-to-content link for screen reader and keyboard users
// Inserts a hidden-until-focused link as the first element in <body>
function injectSkipLink() {
  // Avoid duplicate injection
  if (document.getElementById('skip-to-content-link')) return;

  const skipLink = document.createElement('a');
  skipLink.id = 'skip-to-content-link';
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.cssText = 'position:absolute;left:-9999px;top:0;z-index:9999;padding:12px 18px;background:var(--rose);color:#fff;text-decoration:none;font-family:var(--sans);font-size:14px;font-weight:500;border-radius:0 0 8px 0;';
  skipLink.addEventListener('focus', () => {
    skipLink.style.left = '0';
  });
  skipLink.addEventListener('blur', () => {
    skipLink.style.left = '-9999px';
  });
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Ensure there's a #main-content target — find the first <main> or first major content section
  if (!document.getElementById('main-content')) {
    const target = document.querySelector('main') ||
                   document.querySelector('section') ||
                   document.querySelector('.post-hero') ||
                   document.querySelector('.book-hero') ||
                   document.querySelector('.calc-hero') ||
                   document.querySelector('.hero');
    if (target) {
      target.id = 'main-content';
      target.setAttribute('tabindex', '-1');
    }
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  injectSkipLink();
  renderNav();
  renderFooter();
});
