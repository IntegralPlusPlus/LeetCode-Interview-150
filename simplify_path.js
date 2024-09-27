/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var stack = [];
    var components = path.split('/');
    
    for (var i = 0; i < components.length; i++) {
        var component = components[i];
        
        if (!(component == "" || component == ".")) {
            if (component == "..") {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(component);
            }
        }
    }

    var res = "/";
    for (var i = 0; i < stack.length; ++i) {
        res += stack[i];
        if (i != stack.length - 1) res += "/"
    }

    return res;
};

//var path = "/.../a/../b/c/../d/./";
//console.log(simplifyPath(path)); // "/"