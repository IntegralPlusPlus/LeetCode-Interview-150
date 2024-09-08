/**
 * @param {number[]} nums
 * @return {number}
 */
var max = function(a, b) {
    if (a > b) return a;
    else return b;
}

var jump = function(nums) {
    var currMaxInd = 0, currStep = 0;
    var futureMaxInd = 0, futureStep = 0;

    if (nums.length == 1) return 0;

    for (var i = 0; i < nums.length; ++i) {
        if (i == 0) {
            currMaxInd = i + nums[i];
            currStep = 0;
        } else {
            if (i > currMaxInd) {
                currMaxInd = futureMaxInd;
                currStep = futureStep;
            }

            futureMaxInd = max(futureMaxInd, i + nums[i]);
            futureStep = currStep + 1;
        }
    }

    return currStep + 1;
};