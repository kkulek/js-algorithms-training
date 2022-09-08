// Fake binary
// 8 kyu
// Zamień mniejsze od 5 na 0, 5 lub większe na 1
// numery w stringu, porównać i wypuścić w stringu

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


// other solution

function fakeBin2(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
        x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
}