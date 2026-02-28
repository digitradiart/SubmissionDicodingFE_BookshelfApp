const toggle = document.querySelector('#theme-toggle');
const theme = document.querySelector('#theme-link');
const icon = toggle?.querySelector('.material-icons-outlined');

function refreshThemeIcon(currentHref) {
  if (!icon) return;
  icon.textContent = currentHref.includes('dark.css') ? 'dark_mode' : 'light_mode';
}

if (toggle && theme) {
  refreshThemeIcon(theme.getAttribute('href'));
  toggle.addEventListener('click', () => {
    const nextTheme = theme.getAttribute('href') === 'css/light.css' ? 'css/dark.css' : 'css/light.css';
    theme.setAttribute('href', nextTheme);
    refreshThemeIcon(nextTheme);
  });
}
