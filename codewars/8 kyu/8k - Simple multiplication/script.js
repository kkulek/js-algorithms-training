// 8k - operator warunkowy zamiast if - modulo, multiply
// 8 kyu
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

// other solution:

function simpleMultiplication2(n) {
    return n * (n % 2 ? 9 : 8);
}