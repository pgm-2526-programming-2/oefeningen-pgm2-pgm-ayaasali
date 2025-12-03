const matrix = [
    [4, 5, 6],
    [8, 7, 3]

]

console.log(matrix)

function getMatrixValue(matrix, row, col) {
    const value = matrix[row][col]
    console.log(value)

}


getMatrixValue(matrix, 0);
getMatrixValue(matrix, 1)