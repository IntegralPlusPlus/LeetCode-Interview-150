/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var pro = 1;
    //console.log(root.left, root.right);
    if(root == null) return 0;
    else if(root.left == null && root.right == null) return 1;
    else if(root.left != null && root.right != null) pro = Math.max(maxDepth(root.left), maxDepth(root.right));
    else if (root.left != null) pro = maxDepth(root.left);
    else if (root.right != null) pro = maxDepth(root.right);
    return pro + 1;
};

var root = [3,9,20,null,null,15,7];
console.log(maxDepth(root));