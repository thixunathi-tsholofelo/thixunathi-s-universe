document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');

  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
    navToggle.classList.toggle('is-active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(navbar.classList.contains('open')){
        navbar.classList.remove('open');
        navToggle.classList.remove('is-active');
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      if(this.hash && document.querySelector(this.hash)){
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});

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
