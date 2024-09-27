/**
 * @param {string[]} tokens
 * @return {number}
 */
var operator = function(o) {
    return o == "+" || o == "-" || o == "*" || o == "/"; 
}

var evalRPN = function(tokens) {
    var stack = [];
    for (var i = 0; i < tokens.length; i++) {
        if (!operator(tokens[i])) {
            stack.push(tokens[i]);
        } else {
            var num2 = stack.pop();
            var num1 = stack.pop();
            var result = Math.trunc(eval(num1 + " " + tokens[i] + " " + num2));
            stack.push(result);
        }

        //console.log(stack);
    }

    return parseInt(stack[stack.length - 1]);
};

//var tokens =
//["4","-2","/","2","-3","-","-"];//tokens = ["18"];//["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
//console.log(evalRPN(tokens)); // Output: 22