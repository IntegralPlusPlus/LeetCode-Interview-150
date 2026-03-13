import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

class SolutionCourseScheduleII {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        int[] courseOrder = new int[numCourses];
        int[] inDegree = new int[numCourses];
        List<List<Integer>> graph = new ArrayList<>();
        
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < prerequisites.length; i++) {
            int course = prerequisites[i][0];
            int prereq = prerequisites[i][1];
            graph.get(prereq).add(course);
            inDegree[course]++;
        }

        int index = 0;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) {
                courseOrder[index++] = i;
            }
        }

        int processed = 0;
        while (processed < index) {
            int current = courseOrder[processed++];
            for (int next : graph.get(current)) {
                inDegree[next]--;
                if (inDegree[next] == 0) {
                    courseOrder[index++] = next;
                }
            }
        }

        return index == numCourses ? courseOrder : new int[0];
    }

    public static void main(String[] args) {
        SolutionCourseScheduleII solution = new SolutionCourseScheduleII();
        int[][] prerequisites = {{2, 0}, {2, 1}};//{{1, 0}};//{{1, 0}, {2, 0}, {3, 1}, {3, 2}};
        int numCourses = 3;//4;
        int[] result = solution.findOrder(numCourses, prerequisites);
        for (int num : result) {
            System.out.print(num + " ");
        }
    }
}