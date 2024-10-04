function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.myRoot = root;
    this.que = [];

    var inorder = (root) => {
        if (root == null) return;
        inorder(root.left);
        this.que.push(root.val);
        inorder(root.right);
    }

    inorder(this.myRoot);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.que.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.que.length > 0;
};

/*
var r3 = new TreeNode(3);
var r9 = new TreeNode(9);
var r20 = new TreeNode(20);
var r15 = new TreeNode(15, r9, r20);
var r7 = new TreeNode(7, r3, r15);
var obj = new BSTIterator(r7);
var param_1 = obj.next();
var param_2 = obj.next();
console.log(param_1, param_2, obj.hasNext());
*/