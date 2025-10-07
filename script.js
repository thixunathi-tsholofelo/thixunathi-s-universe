// Navbar toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(navbar.classList.contains('open')){
        navbar.classList.remove('open');
      }
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      if(this.hash && document.querySelector(this.hash)){
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});

// Intro splash
const enterBtn = document.getElementById('enter-btn');
const intro = document.getElementById('intro');
const mainSite = document.getElementById('main-site');

enterBtn.addEventListener('click', () => {
  intro.style.opacity = 0;
  setTimeout(() => {
    intro.style.display = 'none';
    mainSite.style.display = 'block';
    window.scrollTo({top:0, behavior:'smooth'});
  }, 600);
});

// Countdown Timer
const targetDate = new Date("October 10, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML =
      "<p>The adventure begins today 💫</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();


// Hint Button Toggle
const hintButtons = document.querySelectorAll(".hint-btn");
hintButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const hint = btn.nextElementSibling;
    hint.classList.toggle("active");
  });
});

