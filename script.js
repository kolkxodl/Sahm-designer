document.querySelector(".bars-menu").addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});
// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
});
 
 
sr.reveal(`.hero, .content,
            .features-section, .quality,
            .phones-section,
            .phones, .footer-section`, {
    interval: 200
})
