/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var res = s;
    var l = s.length;
    for (var i = 0; i < l; i++) {
        //console.log(indices[i])
        console.log(s[i])
        res[indices[i]] = s[i];
    }
    return res;
};
//leetcode
restoreString("codeleet", [4,5,6,7,0,2,1,3])
