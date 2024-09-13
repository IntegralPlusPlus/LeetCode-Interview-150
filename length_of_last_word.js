/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var inx = s.length - 1, res = 0;
    while (s[inx] == " ") inx--;
    
    while (s[inx] != " ") {
        res++;
        inx--;

        if (inx == -1) break;
    }

    return res;
};