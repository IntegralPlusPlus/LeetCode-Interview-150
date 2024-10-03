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
var sumNumbers = function(root, summ = "", flag = 0) {
    if (root == null) {
        //console.log(summ);
        if (flag != 0) return parseInt(summ) / 2;
        else return 0;
    }

    if (root.right != null && root.left != null || root.right == null && root.left == null) {
        return sumNumbers(root.left, summ + (root.val).toString(), 1) 
        + sumNumbers(root.right, summ + (root.val).toString(), 1);
    } else if (root.right == null) {
        return sumNumbers(root.left, summ + (root.val).toString(), 1);
    } else {
        return sumNumbers(root.right, summ + (root.val).toString(), 1);
    }
};

/*var r5 = new TreeNode(5);
var r1 = new TreeNode(1);
var r0 = new TreeNode(0);
var r9 = new TreeNode(9, r5, r1);
var r4 = new TreeNode(4, r9, r0);
console.log(sumNumbers(r4));*/