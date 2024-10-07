function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var kthSmallest = function(root, k) {
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

    return res[k - 1];
};