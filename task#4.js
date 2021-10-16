const sumOfLegals = (arr) => {
    return arr.filter((elem) => elem >= 18).reduce((acc, elem) => acc + elem, 0);
}

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
console.log(sumOfLegals(arr));