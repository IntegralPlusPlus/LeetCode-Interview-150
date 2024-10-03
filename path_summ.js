function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum, summ = 0, flag = 0) {
    if (root == null) return flag != 0 && summ == targetSum;
    
    if (root.right != null && root.left != null || root.right == null && root.left == null) {
        return hasPathSum(root.left, targetSum, summ + root.val, 1) 
            || hasPathSum(root.right, targetSum, summ + root.val, 1);
    } else if (root.right == null) {
        return hasPathSum(root.left, targetSum, summ + root.val, 1);
    } else {
        return hasPathSum(root.right, targetSum, summ + root.val, 1);
    }
};

/*var r7 = new TreeNode(7);
var r2 = new TreeNode(2);
var r1 = new TreeNode(1);
var r13 = new TreeNode(13);
var r11 = new TreeNode(11, r7, r2);
var r4 = new TreeNode(4, null, r1);
var r4u = new TreeNode(4, r11, null);
var r8 = new TreeNode(8, r13, r4);
var r5 = new TreeNode(5, r4u, r8);
console.log(hasPathSum(r5, 22));*/