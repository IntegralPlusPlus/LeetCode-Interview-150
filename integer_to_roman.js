/**
 * @param {string} s
 * @return {number}
 */

var intToRoman = function(num) {
    var s = "";
    while (num >= 1000) {
        s += "M";
        num -= 1000;
    }

    //console.log(num);
    if (num >= 900) {
        s += "CM";
        num -= 900;
    }

    if (num >= 500) {
        s += "D";
        num -= 500;
    }

    if (num >= 400) {
        s += "CD";
        num -= 400;
    }

    while (num >= 100) {
        s += "C"
        num -= 100;
    }

    while (num >= 90) {
        s += "XC"
        num -= 90;
    }
    
    while (num >= 50) {
        s += "L"
        num -= 50;
    }

    while (num >= 40) {
        s += "XL"
        num -= 40;
    }

    while (num >= 10) {
        s += "X"
        num -= 10;
    }

    while (num >= 9) {
        s += "IX"
        num -= 9;
    }

    while (num >= 5) {
        s += "V"
        num -= 5;
    }

    while (num >= 4) {
        s += "IV"
        num -= 4;
    }

    while (num > 0) {
        s += "I"
        num -= 1;
    }

    return s;
};