/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var inx = 0;
    for (var i = 0; i < t.length; ++i) {
        if (t[i] == s[inx]) inx++;
    }

    return inx == s.length;
};

//var s = "abc", t = "ahbgdc";
//console.log(isSubsequence(s, t));