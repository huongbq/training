// const addBtn = document.getElementById("add-btn");
// const input = document.getElementById("todo-input");
// const list = document.getElementById("todo-list");

// addBtn.addEventListener("click", () => {
//   const task = input.value.trim();
//   if (task !== "") {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       ${task}
//       <button class="delete-btn">X</button>
//     `;
//     list.appendChild(li);
//     input.value = "";
//     input.focus();
//     li.querySelector(".delete-btn").addEventListener("click", () => {
//       li.remove();
//     });
//   }
// });

function chessBoard(size = 8) {
  const black = "⬛";
  const white = "⬜";
  const lines = [];

  for (let row = 0; row < size; row++) {
    let line = "";
    for (let col = 0; col < size; col++) {
      const isBlack = (row + col) % 2 === 1;
      line += isBlack ? black : white;
    }
    lines.push(line);
  }

  return lines;
}

const chessBoardLines = chessBoard();
chessBoardLines.forEach((line) => console.log(line));
