const cells = document.querySelectorAll('td');
let turn = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent !== '') {
      return; // Cell already occupied
    }

    cell.textContent = turn;

    // Check for winner
    if (checkWinner(turn)) {
      alert(`${turn} wins!`);
      cells.forEach(cell => cell.removeEventListener('click', () => {})); // Disable further clicks
    } else if (checkDraw()) {
      alert('It\'s a draw!');
      cells.forEach(cell => cell.removeEventListener('click', () => {})); // Disable further clicks
    } else {
      turn = turn === 'X' ? 'O' : 'X'; // Switch turns
    }
  });
});

function checkWinner(player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (cells[i * 3].textContent === player &&
        cells[i * 3 + 1].textContent === player &&
        cells[i * 3 + 2].textContent === player) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (cells[i].textContent === player &&
        cells[i + 3].textContent === player &&
        cells[i + 6].textContent === player) {
      return true;
    }
  }

  // Check diagonals
  if (cells[0].textContent === player &&
      cells[4].textContent === player &&
      cells[8].textContent === player) {
    return true;
  }
  if (cells[2].textContent === player &&
      cells[4].textContent === player &&
      cells[6].textContent === player) {
    return true;
  }

  return false;
}

function checkDraw() {
  // All cells are filled
  for (let i = 0; i < 9; i++) {
    if (cells[i].textContent === '') {
      return false;
    }
  }
  return true;
}
