// Constantly selected HTML element with class 'btn'
const button = document.querySelector('.btn');

// Assigns the scrollFunction to the window's onscroll event
window.onscroll = function () {
    scrollFunction();
};

// Defines the scrollFunction that checks if the user has scrolled more than 30 pixels
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        // If true, changes the display style of the button to block
        button.style.display = 'block';
    } else {
        // If false, changes the display style of the button to none
        button.style.display = 'none';
    }
}

// Defines the topFunction that sets the scrollTop property of both the document body and documentElement to 0
function topFunction() {
    document.body.scrollTop = 0;                 //For safari browser
    document.documentElement.scrollTop = 0;     //For rest of the browsers
}