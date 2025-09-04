// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// Simulasi kirim form
function sendMessage(e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
}