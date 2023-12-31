//add 16 divs to the container
const container = document.querySelector(".container");
let gridItems;
const MAX_GRID_SIZE = 16;
const MAX_GRID_AREA = MAX_GRID_SIZE * MAX_GRID_SIZE;
console.log(MAX_GRID_AREA);

function createGrid(){
  for(let numOfGrids = 0; numOfGrids < MAX_GRID_AREA; numOfGrids++){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    addDivToContainer(newDiv);
  }
  gridItems = document.querySelectorAll(".square");
  applyHoverEffect(gridItems, "mouseover");
  removeHoverEffect(gridItems, "mouseout");
}

function addDivToContainer(div){
  container.append(div);
}


function applyHoverEffect(gridItems, event){
  gridItems.forEach( (element) => {
    element.addEventListener(event, ()=>{
      element.classList.add("square-hover");
    });
  });
}

function removeHoverEffect(gridItems, event){
  gridItems.forEach( (element) => {
    element.addEventListener(event, ()=>{
      element.classList.remove("square-hover");
    });
  });
}
createGrid();