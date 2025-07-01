const gridContainer = document.querySelector("#grid-container");

const INITIAL_GRID_SIZE = 16; 

function drawGridCells (numberOfCells) {

     let actualCellNumber = numberOfCells ** 2;

     for (let i = 0; i < actualCellNumber; i++) {

        let gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.style.width = `calc(100% / ${numberOfCells})`;
        gridCell.style.height = `calc(100% / ${numberOfCells})`;

        gridContainer.appendChild(gridCell);

     } 
}


drawGridCells(INITIAL_GRID_SIZE);