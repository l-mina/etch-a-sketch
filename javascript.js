
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
    //adjust height
    const cell = container.querySelectorAll(":scope > div > div");
    cell.forEach((item)=>item.style.height = (100/n)-1 + .4+'%');
    console.log((100/n)-1 +'%');
    console.log("done");
}

// remove grid
function removeGrid(){
     while (container.firstChild) {
        container.removeChild(container.lastChild);
  }
}

// Hover over grid
function hover(){
    const cell = container.querySelectorAll(":scope > div > div");
    let r,g,b;
    cell.forEach((item)=>item.addEventListener("mouseover",(event)=>{
        //console.log("num: "+(event.target.style.background = 'red'));
        if(event.target.style.background == ''){
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            event.target.style.background = "rgb("+r+","+g+","+b+")";
            event.target.style.opacity = ".1";
        }
        else {
            let x  = event.target.style.opacity;
            event.target.style.opacity = " "+(parseFloat(x)+.2)+" ";
            console.log("opc: "+x);
        }
        console.log("num: "+(event.target.style.background));
    }));
};

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
