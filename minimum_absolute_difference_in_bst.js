function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    var que = [root];
    var res = [];

    while (que.length) {
        var size = que.length;
        for (var i = 0; i < size; ++i) {
            var node = que.shift();
            res.push(node.val);
            
            if (node.left) que.push(node.left);
            if (node.right) que.push(node.right);
        }
    }

    res.sort((a, b) => a - b);
    //console.log(res);
    var v1 = res[0], minRes = Infinity;
    for (var i = 1; i < res.length; ++i) {
        minRes = Math.min(minRes, res[i] - v1);
        v1 = res[i];
    }

    return minRes;
};