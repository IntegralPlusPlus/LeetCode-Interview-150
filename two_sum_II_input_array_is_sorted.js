/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0, right = numbers.length - 1;
    while (left < right) { 
        var sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

var numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers, target));