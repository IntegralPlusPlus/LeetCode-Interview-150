/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ");

    var res = "";
    for (var i = arr.length - 1; i >= 0; --i) {
        if (arr[i] != '') {
            res += arr[i] + " ";
        }
    }

    return res.slice(0, res.length - 1);
};