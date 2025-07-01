function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').style.display = 'none';
}

function toggleDarkMode() {
  document.body.classList.add('fading');
  setTimeout(() => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.remove('fading');
  }, 300);
}

function toggleDarkMode() {
  document.body.classList.add('fading');
  setTimeout(() => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.remove('fading');

    const sun = document.getElementById('sun-icon');
    const moon = document.getElementById('moon-icon');

    if (document.body.classList.contains('dark-mode')) {
      sun.style.display = 'none';
      moon.style.display = 'inline';
    } else {
      sun.style.display = 'inline';
      moon.style.display = 'none';
    }
  }, 300);
}

// On load: match icon to theme
window.addEventListener('DOMContentLoaded', () => {
  const sun = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');

  if (document.body.classList.contains('dark-mode')) {
    sun.style.display = 'none';
    moon.style.display = 'inline';
  } else {
    sun.style.display = 'inline';
    moon.style.display = 'none';
  }
});
