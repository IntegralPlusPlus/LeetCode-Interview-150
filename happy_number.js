/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var mp = new Map();
    
    while (true){
        var t = n.toString().split('');
        var summ = 0;

        for (var i = 0; i < t.length; ++i) {
            summ += parseInt(t[i]) * parseInt(t[i]);
        }

        if (n == 1) return true;
        if (mp.has(summ)) break;

        n = summ;
        mp.set(summ, 1);
    }

    return false;
};

//var n = 2;
//console.log(isHappy(n)); // true