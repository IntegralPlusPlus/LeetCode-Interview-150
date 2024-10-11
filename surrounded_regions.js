/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function print(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i]);
    }
}

var dfs = function(board, i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] != "O") return;
    board[i][j] = "A";
    dfs(board, i + 1, j);
    dfs(board, i - 1, j);
    dfs(board, i, j + 1);
    dfs(board, i, j - 1);
}

var solve = function(board) {
    if (board.length === 0) return;

    for (var i = 0; i < board.length; ++i) {
        dfs(board, i, 0);
        dfs(board, i, board[i].length - 1);
    }

    for (var j = 0; j < board[0].length; ++j) {
        dfs(board, 0, j);
        dfs(board, board.length - 1, j);
    }

    for (var i = 0; i < board.length; ++i) {
        for (var j = 0; j < board[i].length; ++j) {
            if (board[i][j] === "O") board[i][j] = "X";
            else if (board[i][j] === "A") board[i][j] = "O";
        }
    }
};

/*
var board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve(board);
print(board);*/