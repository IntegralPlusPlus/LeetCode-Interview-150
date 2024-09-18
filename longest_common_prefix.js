/**
 * @param {string[]} strs
 * @return {string}
 */
function min(a, b) {
    return a < b ? a : b;
}

var longestCommonPrefix = function(strs) {
    strs.sort();
    var first = strs[0], last = strs[strs.length - 1];
    var res = "";

    for (var i = 0; i < min(first.length, last.length); ++i) {
        if (first[i] == last[i]) res += first[i];
        else break; 
    }

    return res;
};