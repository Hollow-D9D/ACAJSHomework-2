const myEvery = (arr, fn) => {
    check = (a, b, c) => {
        if (fn.length === 1)
            return fn(a)
        if (fn.length === 2)
            return fn(a, b);
        return fn(a, b, c);
    }
    for (let i in arr)
    {
        if (!check(arr[i], i, arr))
            return false;
    }
    return true;
}

function isBigEnough(element, index, array) {
    return element >= 10;
    }
console.log(myEvery([12, 5, 8, 130, 44], isBigEnough));   // false
console.log(myEvery([12, 54, 18, 130, 44], isBigEnough)); // true