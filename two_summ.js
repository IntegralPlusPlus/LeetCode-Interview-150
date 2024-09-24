/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var mp = new Map();
    var mpCount = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (mpCount.has(nums[i])) mpCount.set(nums[i], mpCount.get(nums[i]) + 1);
        else mpCount.set(nums[i], 1);

        mp.set(nums[i], i);
    }

    for (var i = 0; i < nums.length; ++i) {
        var complement = target - nums[i];

        if (mpCount.has(complement)) {
            if (complement != nums[i] && mpCount.get(complement) >= 1 
                || complement == nums[i] && mpCount.get(complement) > 1) {
                return [mp.get(complement), i];
            }

        }
    }
};

//var nums = [2,7,11,15], target = 9;
//console.log(twoSum(nums, target));