import './styles.css';

function wireNav() {
  document.addEventListener('click', (e) => {
    const t = e.target.closest('a,button,[role=button]');
    if (!t) return;
    const label = ((t.getAttribute('href') || '') + ' ' + (t.textContent || '')).toLowerCase();
    if (label.includes('get started')) {
      if (t.hasAttribute('data-route')) e.preventDefault(), location.href = './get-started.html';
    }
    if (label.includes('open app')) { e.preventDefault(); location.href = './app/index.html'; }
    if (t.dataset && t.dataset.route === 'features') { e.preventDefault(); location.href = './features.html'; }
    if (t.dataset && t.dataset.route === 'pricing') { e.preventDefault(); location.href = './pricing.html'; }
    if (t.dataset && t.dataset.route === 'docs') { e.preventDefault(); location.href = './docs.html'; }
  }, true);
}
wireNav();
