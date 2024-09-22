/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (var i = 0; i < 9; i += 3) {
        for (var j = 0; j < 9; j += 3) {
            var box = new Array(9);
            
            for (var x = 0; x < 3; ++x) {
                for (var y = 0; y < 3; ++y) {
                    var num = board[i + x][j + y];
                    if (num != ".") box[num - 1] = (box[num - 1] || 0) + 1;//box.push(num);
                }
            }

            //console.log(box);

            for (var p = 0; p < box.length; ++p) {
                if (box[p] > 1) {
                    return false;
                }
            }
        }
    }

    for (var i = 0; i < 9; i++) {
        var boxVert = new Array(9), boxHor = new Array(9);

        for (var j = 0; j < 9; j++) {
            var num1 = board[i][j];
            var num2 = board[j][i];

            if (num1 != ".") boxHor[num1 - 1] = (boxHor[num1 - 1] || 0) + 1;//boxHor.push(num1);
            if (num2 != ".") boxVert[num2 - 1] = (boxVert[num2 - 1] || 0) + 1;//boxVert.push(num2);
        }

        //if (i == 4) console.log(boxHor);

        for (var p = 0; p < boxHor.length; ++p) {
            if (boxHor[p] > 1) {
                return false;
            }
        }

        for (var p = 0; p < boxVert.length; ++p) {
            if (boxVert[p] > 1) {
                return false;
            }
        }
    }

    return true;
};

var board = 
[["7",".",".",".","4",".",".",".","."],
 [".",".",".","8","6","5",".",".","."],
 [".","1",".","2",".",".",".",".","."],
 [".",".",".",".",".","9",".",".","."],
 [".",".",".",".","5",".","5",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."]];
console.log(isValidSudoku(board));