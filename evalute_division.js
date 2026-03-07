/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function print(graph) {
    for (var i = 0; i < graph.length; ++i) {
        console.log(graph[i]);
    }
}

var calcEquation = function(equations, values, queries) {
    var mpWordInx = new Map();
    var mpInxWord = new Map();
    var count = 0;

    for (var i = 0; i < equations.length; ++i) {
        var v1 = equations[i][0], v2 = equations[i][1];
        if (mpWordInx.get(v1) == undefined) {
            mpWordInx.set(v1, count);
            mpInxWord.set(count, v1);
            count++;
        } 
        
        if (mpWordInx.get(v2) == undefined) {
            mpWordInx.set(v2, count);
            mpInxWord.set(count, v2);
            count++;
        }
    }

    var graph = [[]];
    for (var i = 0; i < count; ++i) {
        graph[i] = [];
        for (var j = 0; j < count; ++j) {
            graph[i][j] = undefined;
        }
    }
    
    for (var i = 0; i < equations.length; ++i) {
        var v1 = equations[i][0], v2 = equations[i][1];
        var val = values[i];

        graph[mpWordInx.get(v1)][mpWordInx.get(v2)] = val;
        graph[mpWordInx.get(v2)][mpWordInx.get(v1)] = 1 / val;
    }

    var res = [];
    //console.log(queries.length);
    for (var j = 0; j < queries.length; ++j) {
        var v1 = queries[j][0];
        var v2 = queries[j][1];
        //console.log("varibles:", j, v1, v2);
        if (mpWordInx.get(v1) == undefined || mpWordInx.get(v2) == undefined) {
            res.push(-1);
        } else {
            var que = [mpWordInx.get(v1)];
            var visited = new Array(count).fill(false);
            var breaked = false;
            visited[mpWordInx.get(v1)] = 1;

            while (que.length != 0) {
                var cur = que.shift();
                //console.log("start check: ");

                for (var i = 0; i < graph.length; ++i) {
                    if (graph[cur][i] != undefined) {
                        //console.log("el,", mpInxWord.get(i));
                        if (!visited[i]) {
                            que.push(i);//mpInxWord.get(i));
                            visited[i] = visited[cur] * graph[cur][i];

                            //console.log("push", i, mpInxWord.get(i), visited[i], v2);
                            if (mpInxWord.get(i) == v2) { //break
                                breaked = true;
                                break;
                            }
                        }
                    }
                }

                if (breaked) break;
            }

            if (visited[mpWordInx.get(v2)] == false) res.push(-1);
            else res.push(visited[mpWordInx.get(v2)]);
            //console.log("RES PUSH", visited[mpWordInx.get(v2)]);
        }
    }

    return res;
};

/*var equations = [["a","b"],["b","c"]], values = [2.0,3.0];
var queries = [["a","c"], ["b","a"], ["a","e"],["a","a"],["x","x"]];*/
/*var equations =
[["a","b"],["c","d"]];
var values =
[1.0,1.0];
var queries =
[["a","c"],["b","d"],["b","a"],["d","c"]];*/
//console.log(calcEquation(equations, values, queries));