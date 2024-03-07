const dots = document.querySelector('#dots');
const more = document.querySelector('#more');
const button = document.querySelector('.btn');

function explore() {
    if (dots.style.display === 'none') {
        button.innerHTML = 'Read More';
        dots.style.display = 'inline';
        more.style.display = 'none';
    } else {
        button.innerHTML = 'Read Less';
        dots.style.display = 'none';
        more.style.display = 'inline';
    }
}