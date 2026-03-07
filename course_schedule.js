/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function print(graph) {
    for (var i = 0; i < graph.length; ++i) {
        console.log(graph[i]);
    }
}

function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    for (const [course, prereq] of prerequisites) {
      graph[course].push(prereq);
    }
  
    const visited = Array(numCourses).fill(0);
    function dfs(course) {
      if (visited[course] === -1) return false;
      if (visited[course] === 1) return true;
      visited[course] = -1;
      for (const prereq of graph[course]) {
        if (!dfs(prereq)) return false;
      }
      visited[course] = 1;
      return true;
    }
  
    for (let course = 0; course < numCourses; course++) {
      if (!dfs(course)) return false;
    }
  
    return true;
  }

var numCourses = 2, prerequisites = [[1,0]];
console.log(canFinish(numCourses, prerequisites));