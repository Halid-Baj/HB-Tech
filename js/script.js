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


// Form Validation

const fname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

const errorName = fname.nextElementSibling;
const errorEmail = email.nextElementSibling;
const errorMessage = message.nextElementSibling;

form.addEventListener('submit', (e) => {
    errorName.textContent = '';
    errorEmail.textContent = '';
    errorMessage.textContent = '';

    let isValid = true;

    if (fname.value.trim() === '') {
        errorName.textContent = 'Name is required';
        isValid = false;
    }

    if (email.value.trim() === '') {
        errorEmail.textContent = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        errorEmail.textContent = 'Email is invalid';
        isValid = false;
    }

    if (message.value.trim() === '') {
        errorMessage.textContent = 'Message is required';
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }

});
