

let icon = document.querySelector('.nav .icon');
let bar = document.querySelector('.bar');
let container = document.querySelector('.trans-image');


icon.addEventListener('click', () => {
    icon.classList.toggle('rotate');
    bar.classList.toggle('open');
    container.classList.toggle('active');
});


