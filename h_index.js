/**
 * @param {number[]} citations
 * @return {number}
 */
var min = function(a, b) {
    if (a > b) return b;
    else return a;
}

var hIndex = function(citations) {
    var n = citations.length;
    var t = [];

    for (var i = 0; i < n + 1; ++i) t.push(0);
    for (var i = 0; i < n; ++i) {
        if (citations[i] >= n) t[n]++;
        else t[citations[i]]++;
    }

    var res = 0;
    for (var i = n; i >= 0; i--) {
        res += t[i];
        if (res >= i) return i;
    }

    return 0;
};