// Default 16x16 Grid
const container = document.querySelector("#container");

function createGrid(int) {
    for (let i = 0; i < (int*int); i++) {
        const grid = document.createElement("div");
        grid.setAttribute("id", "grid");

        // Hover Effect
        grid.addEventListener('mouseenter', () => {
            grid.classList.add("bg-black");
        })

        container.appendChild(grid);
    }
}

createGrid(16);

// New Grid Button
const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener('click', () => {
    let boxes = prompt('How many boxes per side?', 16)
    console.log(boxes);
    if (boxes > 100) {
        alert('That number is too high!');
    } else if (boxes <= 0) {
        alert('That number is too low!');
    } else if (typeof Number(boxes) !== "number") {
        alert('Enter a number!');
    } else {

        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }

        createGrid(parseInt(boxes));
        let width = (960/boxes);
        let height = (960/boxes);

        const grids = container.querySelectorAll("div#container > div#grid");
        grids.forEach((grid) => {
            grid.style.width = `${width}px`;
            grid.style.height = `${height}px`;
        });

    }
})
