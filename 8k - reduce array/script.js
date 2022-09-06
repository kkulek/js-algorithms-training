// 8k - reduce array
// 8 kyu

const array = [1, 2, 3, 4, 5, 6, 7, 20, 30, 40];
const myPoints = 75;

const array2= [100, 40, 34, 57, 29, 72, 57, 88]

function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce(function (sum, i) { // ta anonimowa funkcja sumuje tablicę
        return sum + i
    })
    return yourPoints > (sum + yourPoints) / (classPoints.length + 1) // moje punkty porównuję do średniej
}

console.log(`Sprawdzam:`)
console.log(betterThanAverage(array2, myPoints))


// shortest from the community

function betterThanAverage2(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

// other nice way

function betterThanAverage3(classPoints, yourPoints) {
    const allPoints = [yourPoints, ...classPoints];
    const average = allPoints.reduce((acc, val) => acc + val) / allPoints.length;

    return yourPoints > average;
}