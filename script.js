const size = 5;
let treasureX, treasureY;

const grid = document.getElementById("grid");
const hint = document.getElementById("hint");

function createGrid() {
    grid.innerHTML = "";
    treasureX = Math.floor(Math.random() * size);
    treasureY = Math.floor(Math.random() * size);

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.onclick = () => checkCell(i, j, cell);
            grid.appendChild(cell);
        }
    }
}

function checkCell(x, y, cell) {
    if (x === treasureX && y === treasureY) {
        cell.style.background = "green";
        hint.innerHTML = "🎉 You found the treasure!";
    } else {
        cell.style.background = "red";
        const distance = Math.abs(x - treasureX) + Math.abs(y - treasureY);
        hint.innerHTML = "Distance: " + distance;
    }
}

function restart() {
    hint.innerHTML = "";
    createGrid();
}

createGrid();