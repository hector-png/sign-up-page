const passwords = document.querySelectorAll('input[type="password"');
const error = document.querySelector('.error');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    if(passwords[0].value != passwords[1].value) {
        e.preventDefault();
        passwords[0].classList.toggle('is-invalid');
        passwords[1].classList.toggle('is-invalid');
        error.innerText = '*Passwords do not match'
    } 
});