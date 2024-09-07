/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var l = nums.length;
    k %= l;
    for (var i = 0; i < l / 2; ++i) { //rotate all array
        var c = nums[l - 1 - i];
        nums[l - 1 - i] = nums[i];
        nums[i] = c;
    }

    for (var i = 0; i < k / 2; ++i) { //rotate [0, k - 1]
        var c = nums[k - 1 - i];
        nums[k - 1 - i] = nums[i];
        nums[i] = c;
    }

    for (var i = 0; i < (l - k) / 2; ++i) { //rotate [k, l - 1]
        var c = nums[l - 1 - i];
        nums[l - 1 - i] = nums[k + i];
        nums[k + i] = c;
    }
};