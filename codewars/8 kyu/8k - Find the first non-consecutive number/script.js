// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    let value = arr.find((x, y) => x !== (arr[0] + y))
    return value === undefined ? null : value
}


// other solutions

function firstNonConsecutive2 (arr) {
    let value = arr.find((x, y) => x !== (arr[0] + y))
    return Number.isInteger(value) ? value : null
}

function firstNonConsecutive3(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i + 1]
        }
    }
    return null
}