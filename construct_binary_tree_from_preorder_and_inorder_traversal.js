function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

  
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    const inorderIdx = inorder.indexOf(rootVal);

    root.left = buildTree(preorder.slice(1, inorderIdx + 1), inorder.slice(0, inorderIdx));
    root.right = buildTree(preorder.slice(inorderIdx + 1), inorder.slice(inorderIdx + 1));

    return root;
}