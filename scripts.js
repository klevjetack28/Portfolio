// Minimal interactivity for your static page
document.addEventListener('DOMContentLoaded', () => {
  // 1) Make project descriptions collapsible by clicking the h4 title
  const projectTitles = document.querySelectorAll('body > div:nth-of-type(3) h4');
  projectTitles.forEach((h4) => {
    const content = h4.nextElementSibling; // the <p> after the h4
    if (!content) return;

    // Start collapsed for a tidy look (first project open by default)
    const keepOpen = h4.textContent.trim().toLowerCase().includes('remote macro');
    content.style.display = keepOpen ? '' : 'none';
    h4.classList.add('collapsible');
    if (keepOpen) h4.classList.add('open');

    h4.addEventListener('click', () => {
      const isHidden = content.style.display === 'none';
      content.style.display = isHidden ? '' : 'none';
      h4.classList.toggle('open', isHidden);
    });
  });

  // 2) Smooth-scroll for internal links (if you add any anchors later)
  document.documentElement.style.scrollBehavior = 'smooth';

  // 3) Inject a Back-to-Top button
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = 'Top ↑';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const showBtnIfNeeded = () => {
    btn.style.display = window.scrollY > 320 ? 'block' : 'none';
  };

  showBtnIfNeeded();
  window.addEventListener('scroll', showBtnIfNeeded);

  // 4) Generate IDs for h3/h4 so you can link to sections later
  const slug = (s) =>
    s.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');

  document.querySelectorAll('h3, body > div:nth-of-type(3) h4').forEach((el) => {
    if (!el.id) el.id = slug(el.textContent);
  });
});

