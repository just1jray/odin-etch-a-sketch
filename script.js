function createGrid(gridSize, color) {
    const grid = document.getElementById('grid-container');

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.height = `calc(100% / ${gridSize})`;
        square.style.width = `calc(100% / ${gridSize})`;
        square.addEventListener('mouseenter', () => {
            if (color == "random") {
                square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            } else if (color == "shade") {
                square.style.backgroundColor = "black";
                let currentOpacity = Number(square.style.opacity) || 0;
                square.style.opacity = Math.min(currentOpacity + 0.2, 1);
            } else {
                square.style.backgroundColor = color;
            }
        });
        grid.appendChild(square);
    }
}

function resetGrid() {
    const grid = document.getElementById('grid-container'); 
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

let gridSize = 16;
const colors = ["grey", "random", "shade"]
let color = colors[0]

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
    resetGrid()
    createGrid(gridSize, color);
});
main.insertBefore(button, main.firstChild);

createGrid(gridSize, color)

const circles = document.getElementsByClassName('circle')

circles[0].addEventListener('click', () => {
    color = colors[(colors.indexOf(color) + 1) % colors.length];
    resetGrid()
    createGrid(gridSize, color);
});

circles[1].addEventListener('click', () => {
    resetGrid()
    createGrid(gridSize, color);
});