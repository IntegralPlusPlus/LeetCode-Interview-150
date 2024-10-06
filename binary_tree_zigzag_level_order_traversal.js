function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    var result = [];
    var queue = [root];
    var count = 0;

    while (queue.length) {
        var levelSize = queue.length;
        var level = [];
        for (var i = 0; i < levelSize; i++) {
            var node = queue.shift();
            
            if (count % 2 == 0) level.push(node.val);
            else level.unshift(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
        count++;
    }

    return result;
};

/*
var r15 = new TreeNode(15);
var r7 = new TreeNode(7);
var r9 = new TreeNode(9);
var r20 = new TreeNode(20, r15, r7);
var r1 = new TreeNode(1, r9, r20);
console.log(zigzagLevelOrder(r1));*/