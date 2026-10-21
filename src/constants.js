export const SNAKES = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

export const LADDERS = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

// Generate 100 to 1 in zigzag order for a standard 10x10 Snakes and Ladders board
export const getBoardCells = () => {
  const cells = [];
  for (let row = 9; row >= 0; row--) {
    const rowCells = [];
    for (let col = 0; col < 10; col++) {
      let num;
      if (row % 2 === 1) {
        // odd row index from bottom (rows: 9, 7, 5, 3, 1): right-to-left or left-to-right
        // row 9: 100 down to 91 (col 0: 100, col 9: 91)
        num = row * 10 + (10 - col);
      } else {
        // even row index from bottom (rows: 8, 6, 4, 2, 0): left-to-right
        // row 8: 81 to 90 (col 0: 81, col 9: 90)
        num = row * 10 + (col + 1);
      }
      rowCells.push(num);
    }
    cells.push(...rowCells);
  }
  return cells;
};

