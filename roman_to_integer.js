/**
 * @param {string} s
 * @return {number}
 */
var arr = ["I", "V", "X", "L", "C", "D", "M"];
var convertToInt = function(letter) {
    if (letter == "I") return 1;
    else if (letter == "V") return 5;
    else if (letter == "X") return 10;
    else if (letter == "L") return 50; 
    else if (letter == "C") return 100;
    else if (letter == "D") return 500;
    else return 1000;
}

var biggerLetter = function(l1, l2) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == l1 && arr[i] != l2) return "l2";
        else if (arr[i] != l1 && arr[i] == l2) return "l1";
        else if (arr[i] == l1 && arr[i] == l2) return "=";
    }

    return "=";
}

var romanToInt = function(s) {
    var summ = 0, lastInx = -1;
    for (var i = 0; i < s.length - 1; ++i) {
        if (biggerLetter(s[i], s[i + 1]) == "l1" || biggerLetter(s[i], s[i + 1]) == "=") { 
            summ += convertToInt(s[i]);
        } else {
            summ += convertToInt(s[i + 1]) - convertToInt(s[i]);
            i++;
            lastInx = i;
        }
    }

    if (lastInx != s.length - 1) summ += convertToInt(s[s.length - 1]);

    return summ;
};