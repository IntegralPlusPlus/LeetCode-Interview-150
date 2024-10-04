function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function maxGain(node) {
        if (!node) return 0;

        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);

        maxSum = Math.max(maxSum, node.val + leftGain + rightGain);

        return node.val + Math.max(leftGain, rightGain);
    }

    maxGain(root);
    return maxSum;
};

/*var r9 = new TreeNode(9);
var r15 = new TreeNode(15);
var r7 = new TreeNode(7);
var r20 = new TreeNode(20, r15, r7);
var rm10 = new TreeNode(-10, r9, r20);
console.log(maxPathSum(rm10));*/