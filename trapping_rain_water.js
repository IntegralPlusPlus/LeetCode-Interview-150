/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var left = 0, right = height.length - 1;
    var leftMax = height[left], rightMax = height[right];
    var res = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            res += leftMax - height[left]; 
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            res += rightMax - height[right];
        }
    }

    return res;
};

var height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // Output: 6