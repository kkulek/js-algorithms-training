// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

//other solutions:
function getCount2(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}

function getCount3(str) {
    return str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length : 0
}
