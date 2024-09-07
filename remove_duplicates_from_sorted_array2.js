/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; ++i) {
        if (count == 0 || count == 1 || nums[count - 2] != nums[i]) {
            nums[count] = nums[i];
            count++;
        } 
    }
    
    return count;
};