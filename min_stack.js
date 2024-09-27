var MinStack = function() {
    this.stack = [];
    this.min = Math.pow(2, 31) + 1;
    this.minimums = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.min = Math.min(val, this.min);
    this.minimums.push(this.min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minimums.pop();
    if (this.minimums.length != 0) {
        this.min = this.minimums[this.minimums.length - 1];
    } else {
        this.min = Math.pow(2, 31) + 1;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minimums[this.minimums.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */