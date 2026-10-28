const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('copyEmail').addEventListener('click', async () => {
  const email = 'sarmiyasaran@gmail.com';
  const feedback = document.getElementById('copyFeedback');
  try {
    await navigator.clipboard.writeText(email);
    feedback.textContent = 'Email address copied!';
  } catch (error) {
    feedback.textContent = 'Email: ' + email;
  }
});
