/**
 * @param {number[]} nums
 * @return {boolean}
 */
var max = function(a, b) {
    if (a > b) return a;
    else return b;
}

var canJump = function(nums) {
    var maxInd = 0;
    for (var i = 0; i < nums.length; ++i) {
        maxInd = max(maxInd, nums[i] + i);
        if (maxInd == i && maxInd != nums.length - 1) return false;
    }

    return true;
};