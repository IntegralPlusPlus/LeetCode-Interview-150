/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [];
    nums.sort(function(a, b) {return a - b;});

    var dontUse = -100001;
    for (var i = 0; i < nums.length - 2; ++i) {
        if (nums[i] != dontUse) {
            var first = i + 1, last = nums.length - 1;
            var wasPush = false, dontUseFirst = -100001;
            while (first < last) {
                var s = nums[i] + nums[first] + nums[last];
                if (nums[first] == dontUseFirst) first++;
                else if (s == 0) {
                    res.push([nums[i], nums[first], nums[last]]);
                    dontUseFirst = nums[first];
                    first++;
                    last--;
                    wasPush = true;
                } else if (s > 0) last--;
                else first++; 
            }

            if (wasPush) dontUse = nums[i];
        }
    }
    
    return res;
};

//var nums = [-1,0,1,2,-1,-4];//[-2,0,0,2,2];//[0,0,0,0];//[-1,0,1,2,-1,-4];
//r = threeSum(nums);
//for (var i = 0; i < r.length; ++i) console.log(r[i]);