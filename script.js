// Show welcome alert on first load
window.addEventListener('load', () => {
  alert("Bienvenue! Welcome to Ratatouille Restaurant!");
});

// Smooth scroll to menu section
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

// Add Dark Mode Toggle Button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#222';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '8px';
toggleButton.style.cursor = 'pointer';

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
