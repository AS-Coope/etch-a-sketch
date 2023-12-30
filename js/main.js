//add 16 divs to the container
const container = document.querySelector(".container");
const MAX_GRID_SIZE = 16;
const MAX_GRID_AREA = MAX_GRID_SIZE * MAX_GRID_SIZE;
console.log(MAX_GRID_AREA);
function createGrid(){
  for(let numOfGrids = 0; numOfGrids < MAX_GRID_AREA; numOfGrids++){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    addDivToContainer(newDiv);
  }
}

function addDivToContainer(div){
  container.append(div);
}

createGrid();