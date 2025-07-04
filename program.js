// ===== Constants =====
const MODES = {
    DEFAULT: "default",
    RAINBOW: "rainbow",
    ERASER: "eraser"
};

// ===== DOM Elements =====
const gridContainer = document.querySelector("#grid-container");
const gridSlider = document.querySelector("#grid-slider");
const sliderDisplay = document.querySelector("#display");

const normalModeBtn = document.querySelector("#normal-btn");
const rainbowModeBtn = document.querySelector("#rainbow-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn");

// ===== State =====
let currentMode = MODES.DEFAULT;

// ===== Functions =====
function drawGridCells(numberOfCells) {
    clearGrid();
    const totalCells = numberOfCells ** 2;

    for (let i = 0; i < totalCells; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.style.width = `calc(100% / ${numberOfCells})`;
        gridCell.style.height = `calc(100% / ${numberOfCells})`;
        gridCell.addEventListener("mouseover", handleOverEvent);
        gridCell.dataset.darkness = 0;
        gridContainer.appendChild(gridCell);
    }
}

function handleOverEvent(event) {
    const cell = event.target;

    if (currentMode === MODES.DEFAULT) {
        cell.style.backgroundColor = "#00ff90";

        let darkness = Number(cell.dataset.darkness);
        
        if (darkness < 10) {
            darkness++;
            cell.dataset.darkness = darkness;
    
            // Calculate how dark the cell should be, from 0 to 1
            let shade = darkness * 0.1;  // 10% increments
            
            // Set black color with opacity
            cell.style.backgroundColor = `rgba(0, 255, 144, ${shade})`;
        }

    } 
    
    else if (currentMode === MODES.RAINBOW) {
        cell.style.backgroundColor = getRandomRGB();
    } 
    
    else if (currentMode === MODES.ERASER) {
        cell.style.backgroundColor = "#1a1a1a";
    }
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function clearGrid() {
    gridContainer.innerHTML = "";
}

function setActiveButton(selectedButton) {
    [normalModeBtn, rainbowModeBtn, eraserBtn].forEach(btn =>
        btn.classList.remove("active")
    );
    selectedButton.classList.add("active");
}

// ===== Event Listeners =====
gridSlider.addEventListener("input", () => {
    sliderDisplay.textContent = `${gridSlider.value} X ${gridSlider.value}`;
    drawGridCells(parseInt(gridSlider.value));
});

clearBtn.addEventListener("click", () =>
    gridSlider.dispatchEvent(new Event("input"))
);

normalModeBtn.addEventListener("click", () => {
    currentMode = MODES.DEFAULT;
    setActiveButton(normalModeBtn);
});

rainbowModeBtn.addEventListener("click", () => {
    currentMode = MODES.RAINBOW;
    setActiveButton(rainbowModeBtn);
});

eraserBtn.addEventListener("click", () => {
    currentMode = MODES.ERASER;
    setActiveButton(eraserBtn);
});

// ===== Initial Setup =====
setActiveButton(normalModeBtn);
gridSlider.dispatchEvent(new Event("input"));
