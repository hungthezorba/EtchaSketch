
const playground = document.getElementById('grid-container');
const newBtn = document.querySelector('#newGrid');
const blackModeBtn = document.querySelector("#blackMode");
const RGBModeBtn = document.querySelector('#RGBMode');
const fadedModeBtn = document.querySelector('#fadedMode');
const clearBtn = document.querySelector('#clear');

/*grid initial*/
for (let i = 1; i < 17 * 17; i++) {
  createGrid(playground);
}


newBtn.addEventListener('click', function() {
  newGrid();
})

blackModeBtn.addEventListener('click', function() {
  playMode(blackHover);
});

RGBModeBtn.addEventListener('click', function () {
  playMode(RGBHover);
});

fadedModeBtn.addEventListener('click', function () {
  playMode(fadedHover);
})

clearBtn.addEventListener('click', function() {
  clear();
})

function createGrid(parents) {
  const div = document.createElement('div');
  div.setAttribute('class','grid-items');
  (parents).appendChild(div);
}


/*Modes*/
function playMode(mode) {
  let grids = document.querySelectorAll('.grid-items');
  grids.forEach(grid => grid.removeEventListener('mouseover',mode));
  grids.forEach(grid => grid.addEventListener('mouseover',mode));
}

function blackHover() {
  this.style.opacity = 1;
  this.style.backgroundColor = 'black';
}

function RGBHover() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255);
  this.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue +')';
  this.style.opacity = 1;
}

function fadedHover(e) {
  console.log(this.backgroundColor);
  this
}

function clear() {
  let grids = document.querySelectorAll('.grid-items');
  grids.forEach(grid => grid.style.backgroundColor = 'white');
}

function newGrid() {
  let squares = prompt('pixels?')
  removeElementsByClass('grid-items');
  playground.style.gridTemplateColumns = "repeat(" + squares +", 25px)";
  playground.style.width = squares * 25;
  for ( let i = 1; i < squares * squares + 1; i++) {
    createGrid(playground);
  }
}

function removeElementsByClass(className){
    let elements = document.getElementsByClassName(className);
    console.log(elements);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
