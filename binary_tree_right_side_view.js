function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    
    while (queue.length) {
        var levelSize = queue.length;
        for (var i = 0; i < levelSize; i++) {
            var node = queue.shift();
            if (i === levelSize - 1) result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
};

/*
var r4 = new TreeNode(4);
var r3 = new TreeNode(3, null, r4);
var r2 = new TreeNode(2);//, null, r5);
var r1 = new TreeNode(1, r2, r3);
console.log(rightSideView(r1));*/