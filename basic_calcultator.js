/**
 * @param {string} s
 * @return {number}
 */
var isDigit = function(a) {
    return a >= "0" && a <= "9";
}

var expression = function(s) {
    let stack = [];
    let res = 0, sign = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        if (s[i] === '+') {
            if (stack.length != 0) res += sign * parseInt(stack.pop());
            sign = 1;
        } else if (s[i] === '-') {
            if (stack.length != 0) {
                res += sign * parseInt(stack.pop());
                sign = -1;
            } else sign *= -1;
        } else {
            var k = i, str = "";
            while (isDigit(s[k])) {
                str += s[k];
                k++;
            }

            stack.push(str);
            i = k - 1;
            //sign = 1;
        }
    }

    res += sign * parseInt(stack.pop());

    return res;
}

var calculate = function(s) {
    var brackets = [];
    s = "(" + s + ")";
    for (var i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            brackets.push(i);
        } else if (s[i] === ')') {
            var j = brackets.pop(); //(
            var str = s.substr(j + 1, i - j - 1);
            //console.log(j + 1, i);
            var resStr = expression(str).toString();
            s = s.slice(0, j) + resStr + s.slice(i + 1);
            i -= str.length + 1;
            //console.log(str);
        }

        //console.log(s, i);
    }

    return parseInt(s);
};

//var s = "(6)-(8)-(7)+(1+(6))"//"(1+(4+5+2)-3)+(6+8)";
//console.log(calculate(s)); // Output: 23