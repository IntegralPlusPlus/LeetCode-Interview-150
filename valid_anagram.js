/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var mp = new Map();

    if (s.length != t.length) return false;

    for (var i = 0; i < s.length; ++i) {
        mp.set(s[i], (mp.get(s[i]) + 1) || 1);
    }

    for (var i = 0; i < t.length; ++i) {
        var gett = mp.get(t[i]);

        if (gett >= 1) {
            mp.set(t[i], gett - 1);
        } else return false;
    }

    return true;
};

/*
var s = "anagram", t = "nagaram";
console.log(isAnagram(s, t));
*/