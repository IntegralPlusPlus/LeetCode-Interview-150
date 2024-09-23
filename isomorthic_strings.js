/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map = new Map();
    var rmap = new Map();

    for (var i = 0; i < s.length; ++i) {
        var find = map.get(s[i]);
        var rfind = rmap.get(t[i]);

        if ((find !== undefined && find !== t[i]) || (rfind !== undefined && rfind !== s[i])) {
            return false;
        } else {
            map.set(s[i], t[i]);
            rmap.set(t[i], s[i]);        
        } 
    }

    return true;
};

//var s = "egg", t = "add";
//console.log(isIsomorphic(s, t));