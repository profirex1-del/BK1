const root = document.documentElement;
const themeSelect = document.getElementById('theme-select');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const applyTheme = (mode) => {
  const resolvedMode = mode === 'system' ? getSystemTheme() : mode;
  root.setAttribute('data-theme', resolvedMode);
  localStorage.setItem('theme', mode);

  if (themeSelect) {
    themeSelect.value = mode;
  }
};

const detectInitialTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light' || saved === 'system') {
    return saved;
  }

  return 'system';
};

applyTheme(detectInitialTheme());

if (themeSelect) {
  themeSelect.addEventListener('change', (event) => {
    applyTheme(event.target.value);
  });
}

const matchesReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealItems = document.querySelectorAll('.reveal');

if (matchesReduceMotion.matches) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
colorSchemeMedia.addEventListener('change', () => {
  if (localStorage.getItem('theme') === 'system') {
    applyTheme('system');
  }
});

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
