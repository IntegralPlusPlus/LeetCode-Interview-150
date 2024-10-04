function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left ? left : right;
};

/*var r6 = new TreeNode(6);
var r7 = new TreeNode(7);
var r4 = new TreeNode(4);
var r0 = new TreeNode(0);
var r8 = new TreeNode(8);
var r2 = new TreeNode(2, r7, r4);
var r5 = new TreeNode(5, r6, r2);
var r1 = new TreeNode(1, r0, r8);
var r3 = new TreeNode(3, r5, r1);
console.log(lowestCommonAncestor(r3, 5, 1));*/