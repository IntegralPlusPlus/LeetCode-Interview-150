/**
 * @param {number[]} prices
 * @return {number}
 */
var max = function(a, b) {
    if (a > b) return a;
    else return b;
}

var min = function(a, b) {
    if (a > b) return b;
    else return a;
}

var maxProfit = function(prices) {
    var profit = 0, mini = prices[0];
    for (var i = 1; i < prices.length; ++i) {
        profit = max(profit, prices[i] - mini);
        mini = min(mini, prices[i])
    }

    return profit;
};