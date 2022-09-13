//https://www.codewars.com/kata/52fba66badcd10859f00097e

const case1 = "This website is for losers LOL!";
const case2 = "No offense but,\\nYour writing is among the worst I've ever read";

function disemvowel(str) {
    return str.replace(/[AEIOUaeiou]/g, '')
}