// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
    str.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        const letterInHand = str.charAt(i);
        const firstIndexLetter = str.indexOf(letterInHand);
        const lastIndexLetter = str.lastIndexOf(letterInHand);

        if (firstIndexLetter !== lastIndexLetter) {
            return false

        } else {

        }
    }
    return true
}

// other solutions

function isIsogram2(str){
    return new Set(str.toUpperCase()).size === str.length;
}


function isIsogram3(str){
    return !/(\w).*\1/i.test(str)
}


function isIsogram4(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
        for(j = i + 1; j < str.length; ++j)
            if(str[i] === str[j])
                return false;
    return true;
}


function isIsogram5(str){
    return !str.match(/([a-z]).*\1/i);
}