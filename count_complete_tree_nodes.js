function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    que = [];

    var inorder = (root) => {
        if (root == null) return;
        inorder(root.left);
        que.push(root.val);
        inorder(root.right);
    }

    inorder(root);

    return que.length;
};

var r4 = new TreeNode(4);
var r5 = new TreeNode(5);
var r6 = new TreeNode(6);
var r2 = new TreeNode(2, r4, r5);
var r3 = new TreeNode(3, r6);
var r1 = new TreeNode(1, r2, r3);
console.log(countNodes(r1));