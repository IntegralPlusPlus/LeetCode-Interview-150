/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var num = [];
    var k = 0;
    for (var i = 0; i < nums.length; ++i) {
        if (nums[i] != val) {
            num.push(nums[i]);
            k++;
        }
    }
    
    for (var j = 0; j < nums.length; ++j) {
        if (j < num.length) {
            nums[j] = num[j];
        } else {
            nums[j] = undefined;
        }
    }
    
    return k;
};