/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
    
    for (var i = 0; i < n; ++i) {
        for (var j = i + 1; j < n; ++j) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < n / 2; ++j) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }

    //return matrix;
};

//var matrix = [[1,2,3],[4,5,6],[7,8,9]];
//console.log(rotate(matrix));