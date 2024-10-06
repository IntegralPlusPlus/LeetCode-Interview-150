function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    
    while (queue.length) {
        var levelSize = queue.length;
        var level = [];
        for (var i = 0; i < levelSize; i++) {
            var node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
};

/*
var r15 = new TreeNode(15);
var r7 = new TreeNode(7);
var r9 = new TreeNode(9);
var r20 = new TreeNode(20, r15, r7);
var r1 = new TreeNode(1, r9, r20);
console.log(levelOrder(r1));*/