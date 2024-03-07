const list = document.getElementById('list');
const grid = document.getElementById('grid');
const gridContainer = document.querySelector('#grid-container');

function removeGrid() {
    gridContainer.classList.remove('grid');
}

function removeList() {
    gridContainer.classList.remove('list');
}

/* ----------------------------- EVENT LISTENER ----------------------------- */
list.addEventListener('click', () => {
    removeGrid();
    gridContainer.classList.add('list');
} );

grid.addEventListener('click', () =>{
    removeList();
    gridContainer.classList.add('grid');
});