/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var was = [];
    var j = 0, max = 0;
    var myStr = "";
    for (var i = 0; i < s.length; ++i) {
        //console.log(myStr);

        if (was[s[i].charCodeAt()] != undefined) {
            max = Math.max(max, myStr.length);
            myStr = myStr.slice(1, myStr.length);
            was[s[j].charCodeAt()] = undefined;

            i--;
            j++;
        } else {
            myStr += s[i];
            max = Math.max(max, myStr.length);
            was[s[i].charCodeAt()] = true;
        }
    }

    return max;
};

//var s = " ";
//console.log(lengthOfLongestSubstring(s));