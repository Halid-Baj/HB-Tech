// mailto code to prevent spam bots

document.querySelectorAll('.email-link').forEach(link => {
    const user = link.getAttribute('data-user');
    const domain = link.getAttribute('data-domain');
    link.href = 'mailto:' + user + '@' + domain;
});


// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('show');
    });
});