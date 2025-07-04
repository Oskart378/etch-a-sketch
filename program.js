const MODES = {
    DEFAULT: "default",
    RAINBOW: "rainbow",
    ERASER: "eraser"
};

const gridContainer = document.querySelector("#grid-container");
const gridSlider = document.querySelector("#grid-slider");
const sliderDisplay = document.querySelector("#display");
const normalModeBtn = document.querySelector("#normal-btn");
const rainbowModeBtn = document.querySelector("#rainbow-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn");



let currentMode = MODES.DEFAULT;


/*const INITIAL_GRID_SIZE = 16; */

function drawGridCells (numberOfCells) {

    clearGrid();

     const totalCells = numberOfCells ** 2;

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

    if (currentMode == MODES.DEFAULT) {
        cell.style.backgroundColor = "#00ff90";
    }
        
    else if (currentMode == MODES.RAINBOW) {
        cell.style.backgroundColor = getRandomRGB();
    } 

    else if (currentMode == MODES.ERASER) {
        cell.style.backgroundColor = "#1a1a1a";
    }
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g =  Math.floor(Math.random() * 256);
    const b =  Math.floor(Math.random() * 256);



    return `rgb(${r}, ${g}, ${b})`;
}

function clearGrid () {
    gridContainer.innerHTML = "";
}


/*drawGridCells(INITIAL_GRID_SIZE);*/
gridSlider.addEventListener("input", () => {
    sliderDisplay.textContent = `${gridSlider.value} X ${gridSlider.value}`;

    drawGridCells(parseInt(gridSlider.value));
});

clearBtn.addEventListener("click", () => gridSlider.dispatchEvent(new Event("input")));


gridSlider.dispatchEvent(new Event("input"));

normalModeBtn.addEventListener("click",() => currentMode = MODES.DEFAULT);
rainbowModeBtn.addEventListener("click", () => currentMode = MODES.RAINBOW);
eraserBtn.addEventListener("click", () => currentMode = MODES.ERASER);