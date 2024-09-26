/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var arr = new Array(2 * 10000 + 2).fill(0);
    var res = [];
    //console.log(arr);
    for (var i = 0; i < intervals.length; i++) {
        var start = intervals[i][0], end = intervals[i][1];
        for (var j = 2 * start; j <= 2 * end; j += 2) {
            arr[j] = 1;
            if (j != 2 * end) arr[j + 1] = 1;
        }
    }

    //console.log(arr);

    var first = -1, last = -1;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] == 1) {
            if (first == -1) {
                res.push([]);
                first = j / 2;
                res[res.length - 1].push(j / 2);
            } else {
                last = j / 2;
            }
        } else {
            if (first != -1) {
                if (last != -1) res[res.length - 1].push(last);
                else res[res.length - 1].push(first);
            }

            first = -1;
            last = -1;
        }

        //console.log(res);
    }

    return res;
};


/*var intervals = [[1,4],[5,6]];//[[1,3],[2,6],[8,10],[15,18]];
var res = merge(intervals);

for (var i = 0; i < res.length; ++i) {
    console.log(res[i]);
}*/