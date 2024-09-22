/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var m = matrix.length, n = matrix[0].length;
    var rows = []; // |||
    var lines = [];// ---

    for (var i = 0; i < m; ++i) {
        for (var j = 0; j < n; ++j) {
            if (matrix[i][j] === 0) {
                rows.push(i);
                lines.push(j);
            }
        }
    }

    for (var row = 0; row < rows.length; ++row) {
        for (var j = 0; j < n; ++j) {
            matrix[rows[row]][j] = 0;
        }
    }

    for (var line = 0; line < lines.length; ++line) {
        for (var i = 0; i < m; ++i) {
            matrix[i][lines[line]] = 0;
        }
    }

    return matrix;
};

var matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix));