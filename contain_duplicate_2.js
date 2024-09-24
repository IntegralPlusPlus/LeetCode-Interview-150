/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var mp = new Map();

    for (var i = 0; i < nums.length; ++i) {
        if (mp.has(nums[i]) && i - mp.get(nums[i]) <= k) {
            return true;
        }

        mp.set(nums[i], i);    
    }

    return false;
};

//var nums = [1,2,3,1], k = 3;
//console.log(containsNearbyDuplicate(nums, k));