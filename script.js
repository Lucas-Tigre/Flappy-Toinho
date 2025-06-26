const board = document.getElementById('gameBoard');
const width = 10;
const layout = [
  1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,1,0,1,
  1,1,1,1,1,1,0,1,0,1,
  1,0,0,0,0,1,0,1,0,1,
  1,0,1,1,0,1,0,1,0,1,
  1,0,1,0,0,0,0,1,0,1,
  1,0,0,0,1,1,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1
];

const cells = [];

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (layout[i] === 1) {
      cell.classList.add('wall');
    } else {
      cell.classList.add('dot');
    }

    board.appendChild(cell);
    cells.push(cell);
  }
}

createBoard();

let pacmanIndex = 11;
cells[pacmanIndex].classList.remove('dot');
cells[pacmanIndex].classList.add('pacman');

document.addEventListener('keydown', e => {
  cells[pacmanIndex].classList.remove('pacman');

  switch(e.key) {
    case 'ArrowLeft':
      if (pacmanIndex % width !== 0 && !cells[pacmanIndex - 1].classList.contains('wall')) {
        pacmanIndex -= 1;
      }
      break;
    case 'ArrowRight':
      if (pacmanIndex % width < width - 1 && !cells[pacmanIndex + 1].classList.contains('wall')) {
        pacmanIndex += 1;
      }
      break;
    case 'ArrowUp':
      if (pacmanIndex - width >= 0 && !cells[pacmanIndex - width].classList.contains('wall')) {
        pacmanIndex -= width;
      }
      break;
    case 'ArrowDown':
      if (pacmanIndex + width < width * width && !cells[pacmanIndex + width].classList.contains('wall')) {
        pacmanIndex += width;
      }
      break;
  }

  if (cells[pacmanIndex].classList.contains('dot')) {
    cells[pacmanIndex].classList.remove('dot');
  }

  cells[pacmanIndex].classList.add('pacman');
});

