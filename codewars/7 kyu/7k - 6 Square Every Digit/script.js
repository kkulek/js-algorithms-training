// https://www.codewars.com/kata/546e2562b03326a88e000020


function squareDigits(num){
    const numToArray = num.toString().split('');
    return parseInt(numToArray.map(x => x * x).join(''))
}

// Other solutions

function squareDigits2(num){
    return Number(('' + num).split('').map(x => x * x).join(''))
}

function squareDigits3(num){
    return parseInt(('' + num).split('').map(x => x * x).join(''))
}


function squareDigits4(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}


function squareDigits5(num){
    return +num.toString().split('').map(i => i*i).join('');
}