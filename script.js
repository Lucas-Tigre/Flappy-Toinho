const board = document.getElementById('gameBoard');
const width = 20;
const layout = [];
const total = width * width;

// Gera um layout com paredes nas bordas e espaço no meio
for (let i = 0; i < total; i++) {
  if (
    i < width || i >= total - width || 
    i % width === 0 || i % width === width - 1 || 
    Math.random() < 0.1
  ) {
    layout.push(1); // parede
  } else {
    layout.push(0); // espaço
  }
}

const cells = [];
function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (layout[i] === 1) cell.classList.add('wall');
    else cell.classList.add('dot');
    board.appendChild(cell);
    cells.push(cell);
  }
}
createBoard();

// Pac-Man
let pacmanIndex = 22;
cells[pacmanIndex].classList.remove('dot');
cells[pacmanIndex].classList.add('pacman');

// Fantasmas
const ghostIndices = [358, 377, 382, 401, 438];
ghostIndices.forEach(index => cells[index].classList.add('ghost'));

// Pac-Man movimento
document.addEventListener('keydown', e => {
  cells[pacmanIndex].classList.remove('pacman');
  switch(e.key) {
    case 'ArrowLeft':
      if (pacmanIndex % width !== 0 && !cells[pacmanIndex - 1].classList.contains('wall')) pacmanIndex -= 1;
      break;
    case 'ArrowRight':
      if (pacmanIndex % width < width - 1 && !cells[pacmanIndex + 1].classList.contains('wall')) pacmanIndex += 1;
      break;
    case 'ArrowUp':
      if (pacmanIndex - width >= 0 && !cells[pacmanIndex - width].classList.contains('wall')) pacmanIndex -= width;
      break;
    case 'ArrowDown':
      if (pacmanIndex + width < cells.length && !cells[pacmanIndex + width].classList.contains('wall')) pacmanIndex += width;
      break;
  }
  if (cells[pacmanIndex].classList.contains('dot')) {
    cells[pacmanIndex].classList.remove('dot');
  }
  cells[pacmanIndex].classList.add('pacman');
});

// Movimento dos fantasmas (todos)
setInterval(() => {
  ghostIndices.forEach((ghostIndex, idx) => {
    const directions = [-1, 1, -width, width];
    const validMoves = directions.filter(dir => {
      const newIndex = ghostIndex + dir;
      return newIndex >= 0 &&
        newIndex < cells.length &&
        !cells[newIndex].classList.contains('wall') &&
        !cells[newIndex].clas
        
