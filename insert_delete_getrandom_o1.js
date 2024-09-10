var RandomizedSet = function() {
    this.set = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    var has = this.set.has(val);
    if (!has) {
        this.set.add(val);
        return true;
    } else return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    return this.set.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var values = Array.from(this.set); // Convert Set to Array
    return values[Math.floor(Math.random() * values.length)];
};