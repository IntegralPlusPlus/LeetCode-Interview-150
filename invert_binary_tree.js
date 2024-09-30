
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var invertTree = function(root) {
    if (root === null) return null;

    var c = root.left;
    root.left = root.right;
    root.right = c;

    if (root.left != null) invertTree(root.left);
    if (root.right != null) invertTree(root.right);
    
    return root;
};

/*var p1 = new TreeNode(1);
var p3 = new TreeNode(3);
var p6 = new TreeNode(6);
var p9 = new TreeNode(9);
var p2 = new TreeNode(2, p1, p2);
var p7 = new TreeNode(7, p6, p9);
var p4 = new TreeNode(4, 2, 7);
var res = invertTree(p4);

console.log(res);
console.log(res.left);
console.log(res.right);
console.log(res.left.left);
console.log(res.left.right);*/