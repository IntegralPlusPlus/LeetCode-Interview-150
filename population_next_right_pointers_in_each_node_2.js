function _Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return null;

    var arr = [root];
    var start = 0;
    //console.log(root);
    while (true) {
        var len = arr.length, endWhile = true;
        for (var i = start; i < len; ++i) {
            //console.log(arr[i]);
            if (i == len - 1) arr[i].next = null;
            else if (i != 0) {
                arr[i].next = arr[i + 1];
            }

            if (arr[i].left != null) {
                arr.push(arr[i].left);
                endWhile = false;
            }

            if (arr[i].right != null) { 
                arr.push(arr[i].right); 
                endWhile = false;
            }
        }

        start = len;
        if (endWhile) break;
    }

    /*for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i], arr[i].next);
    }*/
    return root;
};

/*
var r4 = new _Node(4); 
var r5 = new _Node(5); 
var r7 = new _Node(7); 
var r2 = new _Node(2, r4, r5);
var r3 = new _Node(3, null, r7);
var r1 = new _Node(1, r2, r3);
var res = connect(r1);
console.log(res);*/