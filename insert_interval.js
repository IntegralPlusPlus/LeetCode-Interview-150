/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
*/

var invl = function(in1, in2, value) {
    return in1 <= value && value <= in2;
}

var insert = function(intervals, newInterval) {
    var finish = false, changed = false;
    var res = [];
    var inx = [];

    for (var i = 0; i < intervals.length; ++i) {
        var nInter0 = invl(intervals[i][0], intervals[i][1], newInterval[0]);
        var nInter1 = invl(intervals[i][0], intervals[i][1], newInterval[1]);

        if (!finish) {
            if (nInter0 && nInter1) {
                finish = true;
                changed = true;
            } else if (nInter0) {
                newInterval = [intervals[i][0], newInterval[1]];
                changed = true;
                inx.push(i);
            } else if (nInter1) {
                newInterval = [newInterval[0], intervals[i][1]];
                changed = true;
                inx.push(i);
            } else if (newInterval[0] <= intervals[i][0] && newInterval[1] >= intervals[i][1]) {
                changed = true;
                inx.push(i);
            } else if (changed) finish = true;
        }
    }

    if (!changed) {
        if (intervals.length == 0 || newInterval[0] > intervals[intervals.length - 1][1]) {
            intervals.push(newInterval);
            inx.push(intervals.length - 1);
        } else if (newInterval[1] < intervals[0][0]) {
            intervals.unshift(newInterval);
            inx.push(0);
        } else {
            for (var t = 0; t < intervals.length - 1; ++t) {
                if (invl(intervals[t][1], intervals[t + 1][0], newInterval[0]) 
                    && invl(intervals[t][1], intervals[t + 1][0], newInterval[1])) {
                    intervals.splice(t + 1, 0, newInterval);
                    inx.push(t + 1);
                    break;
                }
            }
        }
    }

    var inxI = 0;
    for (var i = 0; i < intervals.length; ++i) {
        if (i == inx[inxI]) {
            if (inxI == 0) {
                res.push(newInterval);
            }

            inxI++;
        } else res.push(intervals[i]);
    }

    return res;
};

var intervals = [[3,5],[12,15]], newInterval = [6,6];
var res = insert(intervals, newInterval); // [[1,5],[6,9]]
for (var i = 0; i < res.length; ++i) {
    console.log(res[i]);
}