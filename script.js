const grid = document.getElementById("main");

createGrid(16, 16);
function createGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.innerText = (i + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };
  
