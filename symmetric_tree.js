
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSymmetric = function(root, right = undefined) {
    if (right == undefined) {
        if (root == null || root.left == null && root.right == null) return true;
        if ((root.left == null && root.right != null) || (root.right == null && root.left != null)
            || root.left.val != root.right.val) return false;
        //console.log(root.left, root.right);

        return isSymmetric(root.left, root.right);
    } else {
        //console.log(root, right);
        //console.log(root.left, root.right);
        //console.log(right.left, right.right);
        if (root == null && right == null) return true;
        if (root == null || right == null) return false;
        if (root.left == null && right.right != null || root.left != null && right.right == null) return false;
        if (root.right == null && right.left != null || root.right != null && right.left == null) return false;

        if ((root.left == null && right.right == null || root.left.val == right.right.val) 
            && (root.right == null && right.left == null || root.right.val == right.left.val)) {
            return isSymmetric(root.left, right.right) && isSymmetric(root.right, right.left);
        } 

        return false;
    }
};

/*
var p31 = new TreeNode(3);
var p41 = new TreeNode(4);
var p32 = new TreeNode(3);
var p42 = new TreeNode(4);
var p21 = new TreeNode(2, p31, p41);
var p22 = new TreeNode(2, p42, p32);
var p1 = new TreeNode(1, p21, p22);
console.log(isSymmetric(p1));
*/