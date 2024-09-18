/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let res = [];

    var inx = 0;
    while (inx < words.length) {
        var line = [];
        line.push(words[inx]);
        var summOfWordSzs = words[inx].length;

        if (inx + 1 >= words.length) inx++;
        for (var i = inx + 1; i < words.length; ++i) {
            if (words[i].length + summOfWordSzs + line.length > maxWidth) {
                inx = i;
                break;
            } else {
                line.push(words[i]);
                summOfWordSzs += words[i].length;
                if (i == words.length - 1) inx = words.length;
            }
        }

        console.log(summOfWordSzs, inx);
        console.log(line);

        if (line.length == 1) res.push(line[0] + "".padEnd(maxWidth - line[0].length, " "));
        else if (inx < words.length) {
            var subStr = "";
            var probelSize = Math.floor((maxWidth - summOfWordSzs) / (line.length - 1));
            var additional = (maxWidth - summOfWordSzs) % (line.length - 1), countAdditional = 0;
            for (var i = 0; i < line.length; ++i) {
                subStr += line[i];
                
                if (i != line.length - 1) {
                    if (countAdditional < additional) {
                        subStr += "".padEnd(probelSize + 1, " ");
                        countAdditional++;
                    } else subStr += "".padEnd(probelSize, " ");
                }
            }

            res.push(subStr);
        } else {
            var subStr = line[0];
            for (var i = 1; i < line.length; ++i) {
                subStr += " " + line[i];
            }

            subStr += "".padEnd(maxWidth - subStr.length, " ");
            res.push(subStr)
        }
    }

    return res;
    //return line;
};

//var words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20;
//console.log(fullJustify(words, maxWidth));