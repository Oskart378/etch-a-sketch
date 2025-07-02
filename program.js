const gridContainer = document.querySelector("#grid-container");

const INITIAL_GRID_SIZE = 16; 

function drawGridCells (numberOfCells) {

    clearGrid();

     let totalCells = numberOfCells ** 2;

     for (let i = 0; i < totalCells; i++) {

        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.style.width = `calc(100% / ${numberOfCells})`;
        gridCell.style.height = `calc(100% / ${numberOfCells})`;
        gridCell.addEventListener("mouseover", handleOverEvent);

        gridContainer.appendChild(gridCell);

     } 
}

function handleOverEvent(event) {
    
    const cell = event.target;

    cell.style.backgroundColor = "gray";
}


function clearGrid () {
    gridContainer.innerHTML = "";
}


drawGridCells(INITIAL_GRID_SIZE);