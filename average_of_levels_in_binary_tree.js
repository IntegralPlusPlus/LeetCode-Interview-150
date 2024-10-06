function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var que = [root];
    var res = [];
    while (que.length > 0) {
        var levelSize = que.length;
        var sum = 0;
        for (var i = 0; i < levelSize; i++) {
            var node = que.shift();
            sum += node.val;
            if (node.left) que.push(node.left);
            if (node.right) que.push(node.right);
        }
        
        res.push(sum / levelSize);
    }

    return res;
};

/*
var r15 = new TreeNode(15);
var r7 = new TreeNode(7);
var r9 = new TreeNode(9);
var r20 = new TreeNode(20, r15, r7);
var r1 = new TreeNode(1, r9, r20);
console.log(averageOfLevels(r1));*/