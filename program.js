const gridContainer = document.querySelector("#grid-container");

function displayGrid() {

    for(let i = 0; i < 16; i++) {

        for (let j = 0; j < 16; j++) {

            const gridCell = document.createElement("div");
            gridCell.classList.add("gridcell");

            gridContainer.appendChild(gridCell);
        }
    }
}

displayGrid();