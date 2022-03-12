import Grid from "./Grid.js";
import Tile from "./Tile.js";

const gameBoard = document.getElementById('game-board')

const grid = new Grid(gameBoard);

console.log(grid.cellsByColumn)

grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);

setupInput();

function setupInput() {
    window.addEventListener('keydown', handleInput, {once: true})
};

function handleInput(e) {
    console.log(e.key);
    switch (e.key) {
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        default:
            setupInput()
            return
    }

    /*===   Other Code  ===*/
    setupInput();
}

function moveUp() {
    slideTiles(grid.cellsByColumn)
}

function moveDown() {
}

function moveLeft() {
}

function moveRight() {
}