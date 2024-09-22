/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    //               ->                         down         <-  ^
    var movements = [matrix[0].length - 1, matrix.length - 1, 0, 1];
    var moveNow = 0, myX = 0, myY = 0; //i -- y, j -- x
    var res = [];

    res.push(matrix[0][0]);

    while (true) {
        if (moveNow == 0) {
            if (myX + 1 > movements[moveNow] && matrix[0].length != 1) break;

            for (var x = myX + 1; x <= movements[moveNow]; x++) {
                res.push(matrix[myY][x]);
            }

            myX = movements[moveNow];
            movements[moveNow]--;
        } else if (moveNow == 1) {
            if (myY + 1 > movements[moveNow]) break;

            for (var y = myY + 1; y <= movements[moveNow]; y++) {
                res.push(matrix[y][myX]);
            }

            myY = movements[moveNow];
            movements[moveNow]--;    
        } else if (moveNow == 2) {
            if (myX - 1 < movements[moveNow]) break;

            for (var x = myX - 1; x >= movements[moveNow]; x--) {
                res.push(matrix[myY][x]);
            }

            myX = movements[moveNow];
            movements[moveNow]++;
        } else if (moveNow == 3) {
            if (myY - 1 < movements[moveNow]) break;

            for (var y = myY - 1; y >= movements[moveNow]; y--) {
                res.push(matrix[y][myX]);
            }
            
            myY = movements[moveNow];
            movements[moveNow]++;
        }

        //console.log(res);

        moveNow++;
        if (moveNow > 3) moveNow = 0;
    }

    return res;
};

//var matrix = [[3], [2]]//[[1,2,3,4],[5,6,7,8],[9,10,11,12]];//[[1,2,3],[4,5,6],[7,8,9]];
//console.log(spiralOrder(matrix));