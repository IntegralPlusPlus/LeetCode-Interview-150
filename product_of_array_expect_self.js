/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var product = 1;
    var proOut0 = 1, count0 = 0;

    for (el in nums) {
        product *= nums[el];

        if (nums[el] == 0) count0++;
        else proOut0 *= nums[el];
    }

    if (nums.length == 1 && count0) return [0];

    for (var i = 0; i < nums.length; ++i) {
        if (count0 > 1) nums[i] = 0;
        else if (count0 == 1) {
            if (nums[i] == 0) nums[i] = proOut0;
            else nums[i] = 0;
        } else {
            nums[i] = Math.floor(product / nums[i]);
        }
    }

    return nums;
};

var nums = [0];//[-1,1,0,-3,3];//[1,2,3,4];
console.log(productExceptSelf(nums));