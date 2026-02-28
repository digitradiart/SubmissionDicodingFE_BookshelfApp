const toggle = document.querySelector('#theme-toggle');
const theme = document.querySelector('#theme-link');
const icon = toggle?.querySelector('.material-icons-outlined');
const THEME_STORAGE_KEY = 'BOOKSHELF_THEME';

function refreshThemeIcon(currentHref) {
  if (!icon) return;
  icon.textContent = currentHref.includes('dark.css') ? 'dark_mode' : 'light_mode';
}

function applyTheme(nextTheme) {
  if (!theme) return;
  theme.setAttribute('href', nextTheme);
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  refreshThemeIcon(nextTheme);
}

if (toggle && theme) {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'css/dark.css' || savedTheme === 'css/light.css') {
    applyTheme(savedTheme);
  } else {
    refreshThemeIcon(theme.getAttribute('href'));
  }

  toggle.addEventListener('click', () => {
    const nextTheme = theme.getAttribute('href') === 'css/light.css' ? 'css/dark.css' : 'css/light.css';
    applyTheme(nextTheme);
  });
}
