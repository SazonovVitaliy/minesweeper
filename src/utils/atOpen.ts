import { CellState } from "../types";

export const atOpen = (arr, x, y, newNonMinesCount) => {
  if (arr[x][y].open) {
    return arr;
  }

  let flipped = [];
  flipped.push(arr[x][y]);
  while (flipped.length !== 0) {
    let single: CellState = flipped.pop();

    if (!single.open) {
      newNonMinesCount--;
      single.open = true;
    }

    if (single.value !== 0) {
      break;
    }

    //TopLeft
    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].open
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }

    //BottomRight
    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].open
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
    }

    //BottomLeft
    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].open
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
    }

    //TopRight
    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].open
    ) {
      flipped.push(arr[single.x - 1][single.y + 1]);
    }

    //SingleOnes

    //Top
    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].open
    ) {
      flipped.push(arr[single.x - 1][single.y]);
    }

    //Bottom
    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][single.y].value === 0 &&
      !arr[single.x + 1][single.y].open
    ) {
      flipped.push(arr[single.x + 1][single.y]);
    }

    //Left
    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].open
    ) {
      flipped.push(arr[single.x][single.y - 1]);
    }

    //Right
    if (
      single.y < arr.length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].open
    ) {
      flipped.push(arr[single.x][single.y + 1]);
    }

    //StartOpenCell
    if (single.x > 0 && single.y > 0 && !arr[single.x - 1][single.y - 1].open) {
      //TopLeftOpen
      arr[single.x - 1][single.y - 1].open = true;
      newNonMinesCount--;
    }

    if (single.y > 0 && !arr[single.x][single.y - 1].open) {
      //LeftOpen
      arr[single.x][single.y - 1].open = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].open
    ) {
      //BottomLeftOpen
      arr[single.x + 1][single.y - 1].open = true;
      newNonMinesCount--;
    }

    if (single.x > 0 && !arr[single.x - 1][single.y].open) {
      //TopOpen
      arr[single.x - 1][single.y].open = true;
      newNonMinesCount--;
    }

    if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].open) {
      //BottomOpen
      arr[single.x + 1][single.y].open = true;
      newNonMinesCount--;
    }

    if (
      single.x > 0 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x - 1][single.y + 1].open
    ) {
      //TopRightOpen
      arr[single.x - 1][single.y + 1].open = true;
      newNonMinesCount--;
    }

    if (single.y < arr.length - 1 && !arr[single.x][single.y + 1].open) {
      //RightOpen
      arr[single.x][single.y + 1].open = true;
      newNonMinesCount--;
    }

    if (
      single.x < arr.length - 1 &&
      single.y < arr[0].length - 1 &&
      !arr[single.x + 1][single.y + 1].open
    ) {
      //BottomRightOpen
      arr[single.x + 1][single.y + 1].open = true;
      newNonMinesCount--;
    }
  }

  return { arr, newNonMinesCount };
};
