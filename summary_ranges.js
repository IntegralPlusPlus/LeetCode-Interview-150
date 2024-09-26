/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length == 0) return [];

    var first = nums[0];
    var last = nums[0];
    var res = [];

    for (var i = 1; i < nums.length; ++i) {
        if (nums[i] == last + 1) {
            last = nums[i];
        } else {
            if (first != last) res.push(first.toString() + "->" + last.toString());
            else res.push(first.toString()); 
            first = nums[i];
            last = nums[i];
        }
    }

    if (first != last) res.push(first.toString() + "->" + last.toString());
    else res.push(first.toString()); 

    return res;
};

//var nums = [0,1,2,4,5,7];
//console.log(summaryRanges(nums)); // Output: ["0,2","4,5","7"]