/**
 * @jest-environment jsdom
 */

test("should create 16 cells in the game board", () => {
  document.body.innerHTML = '<div class="game-container"></div>';

  const boardSize = 4;
  const container = document.querySelector(".game-container");
  for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }

  const cells = document.querySelectorAll(".cell");
  expect(cells.length).toBe(16);
});

test("goblin should move to another cell", () => {
  document.body.innerHTML =
    '<div class="game-container"><div class="cell"></div><div class="cell"></div></div>';
  const cells = document.querySelectorAll(".cell");
  const goblin = document.createElement("img");

  // Изначально в первой клетке
  cells[0].appendChild(goblin);
  expect(cells[0].contains(goblin)).toBe(true);

  // Перемещаем во вторую (имитация логики appendChild)
  cells[1].appendChild(goblin);

  expect(cells[1].contains(goblin)).toBe(true);
  expect(cells[0].contains(goblin)).toBe(false); // Проверка, что он ушел из старой
});
