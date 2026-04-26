/* =============================================
   COOPER LAW — SHARED COMPONENTS
   Nav, Footer, and utilities
   ============================================= */

const NAV_LOGO_SVG = `<img src="images/logo.svg" alt="Cooper Law" style="height:90px;width:auto;display:block;">`;

function getPageName() {
  const path = window.location.pathname;
  if (path.includes('young-adults')) return 'young-adults';
  if (path.includes('estate-planning')) return 'estate-planning';
  if (path.includes('services')) return 'services';
  if (path.includes('priority')) return 'priority';
  if (path.includes('about')) return 'about';
  if (path.includes('blog')) return 'blog';
  if (path.includes('contact')) return 'contact';
  return 'home';
}

function renderNav() {
  const current = getPageName();
  const links = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'estate-planning.html', label: 'Estate Planning', key: 'estate-planning' },
    { href: 'services.html', label: 'Services + Pricing', key: 'services' },
    { href: 'priority.html', label: 'Priority Planning', key: 'priority' },
    { href: 'young-adults.html', label: 'Young Adults', key: 'young-adults' },
    { href: 'young-adults.html', label: 'Young Adults', key: 'young-adults' },
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'blog.html', label: 'Resources', key: 'blog' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
  ];
  const navHTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html">
      ${NAV_LOGO_SVG}
    </a>
    <div class="nav-links">
      ${links.map(l => `<a href="${l.href}" class="${l.key === current ? 'active' : ''}">${l.label}</a>`).join('')}
    </div>
    <a href="contact.html" class="nav-cta-btn">Get Started</a>
    <button class="nav-mobile-toggle" onclick="toggleMobileNav()" aria-label="Menu">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect y="3" width="22" height="2" rx="1" fill="#666"/><rect y="10" width="22" height="2" rx="1" fill="#666"/><rect y="17" width="22" height="2" rx="1" fill="#666"/></svg>
    </button>
  </div>
  <div class="nav-mobile-menu" id="mobileMenu">
    ${links.map(l => `<a href="${l.href}" class="${l.key === current ? 'active' : ''}">${l.label}</a>`).join('')}
    <a href="contact.html" class="btn btn-rose" style="margin:8px 0">Get Started</a>
  </div>
</nav>`;
  document.getElementById('nav-placeholder').innerHTML = navHTML;
}

function renderFooter() {
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
      <a href="privacy.html">Privacy Policy</a> &bull; <a href="terms.html">Terms of Use</a>
    </div>
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

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
