// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//
// Task
// Given a year, return the century it is in.
//
// Examples
// 10 --> 1
// 100 --> 1
// 101 --> 2
// 901 --> 10
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


function century(year) {
    let yearDevided = year / 100;
    return Number.isInteger(yearDevided) ? year / 100 : Math.floor(yearDevided + 1)
}


// other solution:
function century2(year) {
    return Math.ceil(year / 100);
}