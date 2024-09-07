/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 0, el;
    for (var i = 0; i < nums.length; ++i) {
        if (count == 0) el = nums[i];

        if (el == nums[i]) count++;
        else count--;
    }

    return el;
};