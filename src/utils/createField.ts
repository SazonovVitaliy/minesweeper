export const createField = (rows, columns, bombs) => {
  if (bombs > rows * columns) {
    bombs = (rows * columns) / 3;
  }

  const field = [];
  const minesLocation = [];
  for (let row = 0; row < rows; row++) {
    const subCol = [];
    for (let column = 0; column < columns; column++) {
      const cell = {
        value: 0,
        open: false,
        x: row,
        y: column,
        flagged: false,
      };
      subCol.push(cell);
    }
    field.push(subCol);
  }

  //Random placement bombs
  let bombsCount = 0;
  while (bombsCount < bombs) {
    let x = Math.floor(Math.random() * rows);
    let y = Math.floor(Math.random() * columns);
    if (field[x][y].value === 0) {
      field[x][y].value = "x";
      minesLocation.push([x, y]);
      bombsCount++;
    }
  }

  //Numbers of bombs
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (field[r][c].value === "x") {
        continue;
      }
      //Top
      if (r > 0 && field[r - 1][c].value === "x") {
        field[r][c].value++;
      }
      //TopRight
      if (r > 0 && c < columns - 1 && field[r - 1][c + 1].value === "x") {
        field[r][c].value++;
      }
      //Right
      if (c < columns - 1 && field[r][c + 1].value === "x") {
        field[r][c].value++;
      }
      //BottomRight
      if (
        r < rows - 1 &&
        c < columns - 1 &&
        field[r + 1][c + 1].value === "x"
      ) {
        field[r][c].value++;
      }
      //Bottom
      if (r < rows - 1 && field[r + 1][c].value === "x") {
        field[r][c].value++;
      }
      //BottomLeft
      if (r < rows - 1 && c > 0 && field[r + 1][c - 1].value === "x") {
        field[r][c].value++;
      }
      //Left
      if (c > 0 && field[r][c - 1].value === "x") {
        field[r][c].value++;
      }
      //TopLeft
      if (r > 0 && c > 0 && field[r - 1][c - 1].value === "x") {
        field[r][c].value++;
      }
    }
  }

  return { field, minesLocation, bombsCount };
};
