class SolutionMaxPointsOnALine {
    public int maxPoints(int[][] points) {
        int max = 1;

        for (int i = 0; i < points.length; ++i) {
            boolean[] visited = new boolean[points.length];
            visited[i] = true;
            for (int j = i + 1; j < points.length; ++j) {
                if (!visited[j]) {
                    int count = 2;
                    visited[j] = true;
                    for (int w = j + 1; w < points.length; ++w) {
                        if (!visited[w] && dotInLine(points[w][0], points[w][1], 
                                                     points[i][0], points[i][1], 
                                                     points[j][0], points[j][1])) {
                            visited[w] = true;
                            count++;
                        }
                    }

                    max = Math.max(max, count);
                }
            }
        }

        return max;
    }

    public boolean dotInLine(int x, int y, int x1, int y1, int x2, int y2) {
        return (y - y1) * (x2 - x1) == (y2 - y1) * (x - x1);
    }

    public static void main(String[] args) {
        SolutionMaxPointsOnALine solution = new SolutionMaxPointsOnALine();
        int[][] points = {{1,1},{2,2},{3,3}};
        int result = solution.maxPoints(points);
        System.out.println(result);
    }
}