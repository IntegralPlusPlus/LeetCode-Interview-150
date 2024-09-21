var minWindow = function(s, t) {
    const tCount = {};
    for (let char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }

    let required = Object.keys(tCount).length;
    let left = 0, right = 0;
    let formed = 0;

    const windowCounts = {};
    let minLen = Infinity, minWindow = "";

    while (right < s.length) {
        const character = s[right];
        windowCounts[character] = (windowCounts[character] || 0) + 1;

        if (tCount[character] && windowCounts[character] === tCount[character]) {
            formed++;
        }

        while (left <= right && formed === required) {
            let char = s[left]; // Declare a new variable 'char'
        
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minWindow = s.substring(left, right + 1);
            }
        
            windowCounts[char]--;
            if (tCount[char] && windowCounts[char] < tCount[char]) {
                formed--;
            }
        
            left++;
        }

        right++;
    }

    return minWindow;
};

//var s = "ADOBECODEBANC", t = "ABC";
//console.log(minWindow(s, t)); // Output: "BANC"