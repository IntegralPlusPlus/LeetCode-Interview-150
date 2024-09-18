/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var res = "";
    
    if (numRows == 1 || numRows >= s.length) return s;

    for (var i = 0; i < numRows; ++i) {
        var inx = i, bb = true;
        while (inx < s.length) {
            res += s[inx];
            if (i == 0 || i == numRows - 1) inx += 2 * numRows - 2;
            else {
                if (bb) inx += 2 * numRows - 2 - 2 * i;
                else inx += 2 * i;

                if (bb) bb = false;
                else bb = true;
            }

            //console.log(res);
        }
    }

    return res;
};