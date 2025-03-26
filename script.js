function createGrid(gridSize) {
    const grid = document.getElementById('grid-container');

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.height = `calc(100% / ${gridSize})`;
        square.style.width = `calc(100% / ${gridSize})`;
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "grey";
        });
        grid.appendChild(square);
    }
}

let gridSize = 16;

const main = document.getElementById('main-container');

const button = document.createElement('button');
button.textContent = 'Grid Size';
button.addEventListener('click', () => {
    let size = prompt('Enter a grid size (1-100)', gridSize)
    if (size == null || size == "" || !Number(size) || size < 1) {
        gridSize = 16;
    } else if (size > 100) {
        gridSize = 100;
    } else {
        gridSize = size
    }
    const grid = document.getElementById('grid-container'); 
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(gridSize);
});
main.insertBefore(button, main.firstChild);

createGrid(gridSize)

const circles = document.getElementsByClassName('circle')
for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', () => {
        const squares = document.getElementsByClassName('grid-square');
        for (let j = 0; j < squares.length; j++) {
            squares[j].style.backgroundColor = "lightgrey";
        }
    });
}
