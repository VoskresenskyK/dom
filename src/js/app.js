// TODO: write code here

import "../css/style.css";
import goblinImgSrc from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const boardSize = 4;
  const container = document.querySelector(".game-container");
  const cells = [];

  // 1. Генерируем поле
  for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cells.push(cell);
  }

  // 2. Создаем персонажа
  const goblin = document.createElement("img");
  goblin.src = goblinImgSrc;
  goblin.classList.add("goblin");

  let currentIndex = -1;

  // 3. Функция перемещения
  const moveGoblin = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * cells.length);
    } while (nextIndex === currentIndex);

    // Просто добавляем картинку в новую ячейку — она сама исчезнет из старой
    cells[nextIndex].appendChild(goblin);
    currentIndex = nextIndex;
  };

  // Первый запуск и интервал
  moveGoblin();
  setInterval(moveGoblin, 1000);
});
