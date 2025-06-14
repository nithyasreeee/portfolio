// Fade-in effect
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('fade-in');
    }
  });
});

// Theme toggle logic
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme + '-theme');
updateButtonText(savedTheme);

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
  updateButtonText(localStorage.getItem('theme'));
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const submitBtn = this.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
});

function updateButtonText(theme) {
  toggleBtn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
} 