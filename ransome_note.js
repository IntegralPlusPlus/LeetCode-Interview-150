/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map = new Map();

    for (var i = 0; i < magazine.length; ++i) {
        if (map.has(magazine[i])) map.set(magazine[i], map.get(magazine[i]) + 1);
        else map.set(magazine[i], 1);
    }

    //console.log(map);

    for (var i = 0; i < ransomNote.length; ++i) {
        var m = map.get(ransomNote[i]);
        if (m == undefined || m == 0) return false;
        else map.set(ransomNote[i], m - 1);
    }

    return true;
};

/*
var ransomNote = "aa", magazine = "aab";//ransomNote = "a", magazine = "b";
console.log(canConstruct(ransomNote, magazine));
*/