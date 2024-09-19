/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0, right = height.length - 1, maxArea = 0;
    while (left < right) {
        var area = (right - left) * Math.min(height[left], height[right]);
        if (area > maxArea) {
            maxArea = area;
        }

        if (height[left] < height[right]) left++;
        else right--;
    }

    return maxArea;
};

//var height = [1,8,6,2,5,4,8,3,7];
//console.log(maxArea(height));