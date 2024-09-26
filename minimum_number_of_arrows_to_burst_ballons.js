/**
 * @param {number[][]} points
 * @return {number}
 */
var intersec = function(a0, a1) {
    if (a0[0] <= a1[0] && a1[0] <= a0[1]) {
        return [a1[0], Math.min(a0[1], a1[1])];
    } else if (a0[0] <= a1[1] && a1[1] <= a0[1]) {
        return [Math.max(a1[0], a0[0]), a1[1]];
    } 
    else if (a1[0] <= a0[0] && a0[0] <= a1[1]) {
        return [a0[0], Math.min(a1[1], a0[1])];
    } else if (a1[0] <= a0[1] && a0[1] <= a1[1]) {
        return [Math.max(a0[0], a1[0]), a0[1]];
    } else {
        return undefined;
    }
}

var findMinArrowShots = function(points) {
    points.sort(([a0, b0], [a1, b1]) => (a0 != a1 ? a0 - a1 : b0 - b1));
    //for (var i = 0; i < points.length; ++i) console.log(points[i]);
    var inter = points[0], count = 0;
    for (var i = 1; i < points.length; ++i) {
        inter = intersec(points[i], inter);
        if (inter != undefined) count++;
        else inter = points[i];
    }

    return points.length - count;
};

var points = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points)); // Output: 2