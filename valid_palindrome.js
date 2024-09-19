/**
 * @param {string} s
 * @return {boolean}
 */
function lowerCase(word) {
    return word >= "a" && word <= "z" || word >= "0" && word <= "9";
}

var isPalindrome = function(s) {
    var left = 0, right = s.length - 1;
    
    while (left < right) {
        if (!lowerCase(s[left].toLowerCase())) left++;
        else if (!lowerCase(s[right].toLowerCase())) right--;
        else {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
    }

    return true;
};

//var s = "A man, a plan, a canal: Panama";
//console.log(isPalindrome(s));