
const playground = document.getElementById('grid-container');
const newBtn = document.querySelector('#newGrid');
const blackModeBtn = document.querySelector("#blackMode");
const RGBModeBtn = document.querySelector('#RGBMode');
const clearBtn = document.querySelector('#clear');

blackModeBtn.addEventListener('click', function() {
  playMode(blackHover);
});

RGBModeBtn.addEventListener('click', function () {
  playMode(RGBHover);
});

clearBtn.addEventListener('click', function() {
  clear();
})


function createGrid(parents) {
  const div = document.createElement('div');
  div.setAttribute('class','grid-items');
  (parents).appendChild(div);
}



function blackHover() {
  this.style.backgroundColor = 'black';
}

function RGBHover() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255);
  this.style.backgroundColor = red + green + blue;
}

function playMode(mode) {
  let grids = document.querySelectorAll('.grid-items');
  grids.forEach(grid => grid.removeEventListener('mouseover',mode));
  grids.forEach(grid => grid.addEventListener('mouseover',mode));
}

function clear() {
  let grids = document.querySelectorAll('.grid-items');
  grids.forEach(grid => grid.style.backgroundColor = 'white');
}

function new(squares) {
  
  for ( let i = 1; i < squares * squares + 1; i++) {
    createGrid(playground);
  }
}
