/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var arr = [];
    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] != arr[arr.length - 1]) {
            arr.push(nums[i]);
        }
    }
    
    for (var i = 0; i < nums.length; ++i) {
        if (i < arr.length) nums[i] = arr[i];
        else nums[i] = undefined;
    }
    
    return arr.length;
};