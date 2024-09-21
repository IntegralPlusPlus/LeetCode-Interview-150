/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var first = 0;
    var minSize = nums.length + 1, summ = 0;
    for (var i = 0; i < nums.length; ++i) {
        summ += nums[i];

        if (summ >= target && first <= i) {
            summ -= nums[first] + nums[i];
            minSize = Math.min(minSize, i - first + 1);
            first++;
            i--;
        }
    }

    return minSize == nums.length + 1 ? 0 : minSize;
};

//var target = 7, nums = [2,3,1,2,4,3];
//console.log(minSubArrayLen(target, nums));