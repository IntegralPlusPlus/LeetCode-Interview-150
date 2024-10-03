function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

  
function buildTree(inorder, postorder) {
    if (!postorder.length || !inorder.length) {
        return null;
    }

    const rootVal = postorder[postorder.length - 1];
    const root = new TreeNode(rootVal);

    const inorderIdx = inorder.indexOf(rootVal);

    root.left = buildTree(inorder.slice(0, inorderIdx), postorder.slice(0, inorderIdx));
    root.right = buildTree(inorder.slice(inorderIdx + 1), postorder.slice(inorderIdx, postorder.length - 1));

    return root;
}