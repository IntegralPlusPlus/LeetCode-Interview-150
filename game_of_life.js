/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var counter = function(board, i, j) {
    var count = [];
    count[0] = 0; count[1] = 0;

    for (var y = Math.max(i - 1, 0); y <= Math.min(board.length - 1, i + 1); ++y) {
        for (var x = Math.max(j - 1, 0); x <= Math.min(board[0].length - 1, j + 1); ++x) {
            if (!(y == i && x == j)) {
                count[board[y][x]]++; 
            }
        }
    }

    return count;
}

var gameOfLife = function(board) {
    var is = [], js = [];

    for (var i = 0; i < board.length; ++i) {
        for (var j = 0; j < board[0].length; ++j) {
            var count = counter(board, i, j);

            if (board[i][j] == 1) {
                if (count[1] < 2 || count[1] > 3) {
                    is.push(i); js.push(j);
                }
            } else {
                if (count[1] == 3) {
                    is.push(i); js.push(j);
                }
            }
        }
    }



    for (var w = 0; w < is.length; ++w) {
        board[is[w]][js[w]] = 1 - board[is[w]][js[w]];
    }

    return board;
};

/*var board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
board = gameOfLife(board);

for (var i = 0; i < board.length; ++i) {
    console.log(board[i]);
}*/