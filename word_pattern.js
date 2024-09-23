/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var strs = s.split(" ");
    var patternWordM = new Map();
    var wordPatternM = new Map();

    if (pattern.length != strs.length) return false;

    for (var i = 0; i < pattern.length; ++i) {
        var f1 = patternWordM.get(strs[i]);
        var f2 = wordPatternM.get(pattern[i]);

        if ((f1 != undefined && f1 != pattern[i]) || (f2 != undefined && f2 != strs[i])) {
            return false;
        } else {
            patternWordM.set(strs[i], pattern[i]);
            wordPatternM.set(pattern[i], strs[i]);
        }
    }

    return true;
};

var pattern = "abba", s = "dog cat cat dog";
console.log(wordPattern(pattern, s)); // true