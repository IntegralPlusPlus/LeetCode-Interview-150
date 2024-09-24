/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let mp = new Map();
    for (let s of strs) {
        let count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = '';
        for (let i = 0; i < 26; i++) {
            key += i + ':' + count[i] + ',';
        }

        //console.log(key);

        if (!mp.has(key)) mp.set(key, [s]);
        else mp.get(key).push(s);
    }
    return Array.from(mp.values());
};

/*
var strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));*/