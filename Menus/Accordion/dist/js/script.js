// Select all elements with the class 'accordion'
const accordion = document.querySelectorAll('.accordion');
console.log(accordion); // Log the selected elements for debugging or verification

// Iterate through each element in the accordion NodeList
for (let i = 0; i < accordion.length; i++) {
    // Add an event listener to each accordion element for click events
    accordion[i].addEventListener('click', function () {
        // Toggle the 'active' class on the clicked accordion element
        this.classList.toggle('active');

        // Get the panel element that is next to the clicked accordion element
        const panel = this.nextElementSibling;

        // If the panel's display style is set to 'block'
        if (panel.style.display === 'block') {
            // Set the panel's display style to 'none'
            panel.style.display = 'none';
        } else {
            // Set the panel's display style to 'block'
            panel.style.display = 'block';
        }

        // If the panel's max-height style is set
        if (panel.style.maxHeight) {
            // Set the panel's max-height style to null
            panel.style.maxHeight = null;
        } else {
            // Set the panel's max-height style to the panel's scroll height + "px"
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
