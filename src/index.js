module.exports = function solveSudoku(matrix) {
  const check = Array([9]);
  const checkFunction = () => {
    for (let i = 1; i <= 9; i++) check[i] = false;
  };
  const rows = (row) => {
    checkFunction();
    for (let column = 0; column < 9; column++) {
      if (matrix[row][column] != 0) {
        if (check[matrix[row][column]]) return false;
        check[matrix[row][column]] = true;
      }
    }
    return true;
  }
  const columns = (column) => {
    checkFunction();
    for (let row = 0; row < 9; row++) {
      if (matrix[row][column] != 0) {
        if (check[matrix[row][column]]) return false;
        check[matrix[row][column]] = true;
      }
    }
    return true;
  }
  const blocks = (frRow, frCol) => {
    checkFunction();
    for (let row = frRow; row < frRow+3; row++) {
      for (let column = frCol; column < frCol+3; column++) {
        if (matrix[row][column] != 0) {
          if (check[matrix[row][column]]) return false;
          check[matrix[row][column]] = true;
        }
      }
    }
    return true;
  }
  const sudokudoku =(row, column) => {
    while (row < 9 && matrix[row][column] != 0) {
      column++;
      if (column == 9) {
        row++;
        column = 0;
      }
    }
    if (row == 9) return true;
    for (let k = 1; k <= 9; k++) {
      matrix[row][column] = k;
      if (rows(row) && columns(column)
      && blocks(row - row%3, column - column%3) && sudokudoku(row, column)) return true;
    }  
    matrix[row][column] = 0;
    return false;
  } 
  sudokudoku(0, 0);
  return matrix;
}