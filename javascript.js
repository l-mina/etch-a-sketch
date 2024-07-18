
const container = document.querySelector(".container");

// n x n grid
function createGrid(n) {
    for(i=0; i<n; i++){
        const horGrid = document.createElement("div")
        for(j=0; j<n; j++){
            const grid = document.createElement("div");
            horGrid.appendChild(grid);
        }
        container.appendChild(horGrid);
    }
}

// remove grid
function removeGrid(){
     while (container.firstChild) {
        container.removeChild(container.lastChild);
  }
}

// Hover over grid
function hover(){
    const cell = container.querySelectorAll(":scope > div > div")
    cell.forEach((item)=>item.addEventListener("mouseover",(event)=>{
    event.target.classList.add("fill-in");
    setTimeout(() => {
        event.target.classList.remove("fill-in");
      }, 1000);
}));
};

// Edit cell size


// Button for new square grid
const btn = document.querySelector("button");
const cella= container.querySelectorAll(":scope > div > div");
btn.addEventListener("click",()=>{
    
    removeGrid();
    while(input = prompt("Enter number of squares per side for the new grid: ")){
        if(input > 100 || input < 1 || parseInt(input) == NaN) {
            alert("Enter number between 1 - 100");
        }
        else {
            input = parseInt(input);
            break;
        }
    }
    
    createGrid(input);
    hover();
});

