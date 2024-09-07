/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var nums3 = [];
    var ind1 = 0, ind2 = 0;
    
    if (nums1.length && nums2.length) {
        for (var i = 0; i < nums1.length; ++i) {
            if (ind1 < m && (ind2 >= n || nums1[ind1] < nums2[ind2])) {
                nums3.push(nums1[ind1]);
                ind1++;
            } else {
                nums3.push(nums2[ind2]);
                ind2++;
            }
        }
        
        for (var i = 0; i < nums1.length; ++i) nums1[i] = nums3[i];
    } else if (!nums1.length) {
        for (var i = 0; i < nums2.length; ++i) nums1[i] = nums2[i];
    }
};