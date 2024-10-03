function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root == null) return;
    
    let dummy = new TreeNode(0);
    let curr = dummy;
    
    let stack = [root];
    
    while (stack.length > 0) {
        let node = stack.pop();
        curr.right = node;
        curr.left = null;
        curr = curr.right;
        
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
};

var r3 = new TreeNode(3);
var r4 = new TreeNode(4);
var r6 = new TreeNode(6);
var r2 = new TreeNode(2, r3, r4);
var r5 = new TreeNode(5, null, r6);
var r1 = new TreeNode(1, r2, r5);
flatten(r1);