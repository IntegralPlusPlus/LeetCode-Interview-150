/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const wordLen = words[0].length;
    const wordCount = words.length;
    const wordMap = {};
    for (const word of words) {
      wordMap[word] = (wordMap[word] || 0) + 1;
    }
    const res = [];
  
    for (let i = 0; i <= s.length - wordLen * wordCount; i++) {
      const seen = {};
      let j = 0;
      for (; j < wordCount; j++) {
        const substr = s.substr(i + j * wordLen, wordLen);
        if (!wordMap[substr]) break;
        seen[substr] = (seen[substr] || 0) + 1;
        if (seen[substr] > wordMap[substr]) break;
      }
      if (j === wordCount) res.push(i);
    }
  
    return res;
  };

//var s = "lingmindraboofooowingdingbarrwingmonkeypoundcake", words = ["fooo","barr","wing","ding","wing"];
//console.log(findSubstring(s, words));