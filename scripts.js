function createGrid(size){
  const divs = document.querySelectorAll('.row');
  divs.forEach(div => div.remove());
    size = prompt("How big do you want your grid?")
    const container = document.querySelector(".container");
    container.classList.add("sketchpad")
    for(i=0; i<size; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for (j=0; j<size; j++){
        const cell = document.createElement("div");
        row.appendChild(cell);
        cell.classList.add("cell");
    }
    container.appendChild(row);
    }
    // grab all elements with a class
const cells = document.querySelectorAll(".cell");

// loop through them
cells.forEach(cell => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "#002FA7"; // or whatever color you want
  });
});
}


const makeGrid = document.querySelector(".makeGrid");
makeGrid.addEventListener("click", ()=> createGrid());