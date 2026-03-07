function _Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
 };
 
 
/**
 * @param {_Node} node
 * @return {_Node}
*/

var cloneGraph = function(node) {
    if (!node) return null;
    var clonedNodes = new Map();

    function dfs(currentNode) {
      if (clonedNodes.has(currentNode.val)) {
        return clonedNodes.get(currentNode.val);
      }

      const clonedNode = new _Node(currentNode.val);
      clonedNodes.set(currentNode.val, clonedNode);

      for (let neighbor of currentNode.neighbors) {
          clonedNode.neighbors.push(dfs(neighbor));
      }

      return clonedNode;
    }

    return dfs(node);
};

// Example usage
var r1 = new _Node(1);
var r2 = new _Node(2);
var r3 = new _Node(3);
var r4 = new _Node(4);

r1.neighbors = [r2, r4];
r2.neighbors = [r1, r3];
r3.neighbors = [r2];
r4.neighbors = [r1];

var clonedGraph = cloneGraph(r1);
console.log(clonedGraph);