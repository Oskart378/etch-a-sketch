const gridContainer = document.querySelector("#grid-container");

function displayGrid() {

    for(let i = 0; i < 16; i++) {

        for (let j = 0; j < 16; j++) {

            const gridCell = document.createElement("div");
            gridCell.classList.add("gridcell");
            gridCell.addEventListener("mouseover", handleHoverEvent);
            gridCell.addEventListener("mouseleave", handleMouseLeave);

            gridContainer.appendChild(gridCell);
        }
    }
}

function handleHoverEvent(event) {

    event.target.classList.add("overGrid");

}

function handleMouseLeave(event) {
    event.target.classList.remove("overGrid");
}

displayGrid();