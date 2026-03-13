import java.util.LinkedList;
import java.util.Queue;

class SolutionSnakesAndLadders {
    public int snakesAndLadders(int[][] board) {
        boolean[] visited = new boolean[1 + board.length * board.length];
        int[] steps = new int[1 + board.length * board.length];
        int result = -1;
        Queue<Integer> vertexes = new LinkedList<>();
        vertexes.add(1);
        visited[1] = true;
        steps[1] = 0;

        while (!vertexes.isEmpty()) {
            int curr = vertexes.poll();
            if (curr == board.length * board.length) {
                result = steps[curr];
                break;
            }

            /*int vertexI = getIByNumber(curr, board.length);
            int vertexJ = getJByNumber(curr, board.length);
            int ladderTo = board[vertexI][vertexJ];
            if (ladderTo != -1 && !visited[ladderTo]) {
                vertexes.add(ladderTo);
                visited[ladderTo] = true;
                steps[ladderTo] = steps[curr];
            }*/

            for (int i = 1; i <= 6; ++i) {
                int next = curr + i;
                if (next > board.length * board.length) break;
                
                int r = getIByNumber(next, board.length);
                int c = getJByNumber(next, board.length);
                
                int destination = next;
                if (board[r][c] != -1) destination = board[r][c];
                
                if (!visited[destination]) {
                    visited[destination] = true;
                    steps[destination] = steps[curr] + 1;
                    vertexes.add(destination);
                }
            }

            /*if (visited[board.length * board.length]) {
                result = steps[board.length * board.length];
                break;
            }*/
        }

        //print steps in 2d array
        /*for (int i = 0; i < board.length; ++i) {
            for (int j = 1; j <= board.length; ++j) {
                System.out.print(steps[i * board.length + j] + " ");
            }
            System.out.println();
        }*/

        return result;
    }

    public int getIByNumber(int num, int len) {
        return (len - 1) - (num - 1) / len;
    }

    public int getJByNumber(int num, int len) {
        if (((num - 1) / len) % 2 == 0) {
            return (num - 1) % len;
        } else {
            return len - 1 - ((num - 1) % len);
        }
    }

    public static void main(String[] args) {
        SolutionSnakesAndLadders solution = new SolutionSnakesAndLadders();
        /*int[][] board = {{-1,-1,-1,-1,-1,-1},{-1,-1,-1,-1,-1,-1},
                        {-1,-1,-1,-1,-1,-1},{-1,35,-1,-1,13,-1},
                        {-1,-1,-1,-1,-1,-1},{-1,15,-1,-1,-1,-1}};*/
        //int[][] board ={{-1,7,-1},{-1,6,9},{-1,-1,2}};
        //int[][] board = {{1,1,-1},{1,1,1},{-1,1,1}};
        int[][] board = {{1,1,-1},{1,1,1},{-1,1,1}};
        int result = solution.snakesAndLadders(board);
        System.out.println(result);
    }

}