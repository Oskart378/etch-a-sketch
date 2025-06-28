const INITIAL_SIZE = 16;

const gridContainer = document.querySelector("#grid-container");
const changeCellsBtn = document.querySelector(".change-cells-btn");


function displayGrid(numberOfCells) {

    let totalCells = numberOfCells ** 2;

    for (let i = 0; i < totalCells; i++) {

        //const gridSize = parseInt(getComputedStyle(gridContainer).width);

        //const cellSize = Math.floor(gridSize / numberOfCells); // 960px / number of cells

        const gridCell = document.createElement("div");
        gridCell.classList.add("gridcell");
        gridCell.addEventListener("mouseover", handleHoverEvent);
        gridCell.style.width = `calc(100% / ${numberOfCells})`;
        gridCell.style.height = `calc(100% / ${numberOfCells})`;

        gridContainer.appendChild(gridCell);
    
    }
}

function handleHoverEvent(event) {

    event.target.classList.add("overGrid");

}

function handleChangeOfCells() {
    let numberOfCells = prompt("Enter the desired number of cells (gotta be under 100)");

    if (isNaN(numberOfCells) || numberOfCells < 1 || numberOfCells > 100) {
        alert("Invalid input. Enter a number from 1 to 100.");
        return;
      }

    deleteGrid();

    displayGrid(numberOfCells);

}

function deleteGrid() {
    
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

changeCellsBtn.addEventListener("click", handleChangeOfCells);

displayGrid(INITIAL_SIZE);