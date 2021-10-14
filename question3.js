// there are 2 ways for this solution depending upon the input, 
// 1. if all the elements are given in single array
// 2. if all the elements are given in array of arrays

// NOTE:THE LOGIC I'VE WRITTEN IS ONLY FOR SQUARE (single array or nested array) MATRIX


// Solution 1, if all elements are given in single array
// [2,3,0,5,9,8,7,6,3]
//If input is in single array
const input = [2, 3, 0, 5, 9, 8, 7, 6, 3];
const squareSize = Math.sqrt(input.length);
function sumOfDiagonal1(input) {
    let total = 0;
    for (let i = 0; i < input.length; i += (squareSize + 1)) {
        total += input[i];
    }
    return total;
}
function sumOfDiagonal2(input) {
    let total = 0;
    const incrementValue = squareSize - 1;
    for (let i = incrementValue; i + incrementValue < input.length; i += incrementValue) {
        total += input[i];
    }
    return total;
}
const result = [sumOfDiagonal1(input), sumOfDiagonal2(input)]
console.log("Result by method 1 : ", result);


// Solution 2, if all elements are given in nested array
const _input = [[2, 3, 0], [5, 9, 8], [7, 6, 3]];
const _squareSize = _input.length;
function _sumOfDiagonal1(input) {
    let total = 0;
    for (let i = 0; i < _squareSize; i++) {
        total += input[i][i];
    }
    return total;
}
function _sumOfDiagonal2(input) {
    let total = 0;
    for (let i = 0, j = _squareSize - 1; i < _squareSize && j >= 0; i++, j--) {
        total += input[i][j];
    }
    return total;
}
const _result = [_sumOfDiagonal1(_input), _sumOfDiagonal2(_input)]
console.log("Result by method 2 : ",_result)