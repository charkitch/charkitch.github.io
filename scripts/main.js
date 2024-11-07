function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('terminal-theme')) {
      body.classList.remove('terminal-theme');
      body.classList.add('modern-theme');
  } else {
      body.classList.remove('modern-theme');
      body.classList.add('terminal-theme');
  }
}
