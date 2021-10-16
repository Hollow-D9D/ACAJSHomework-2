const mySome = (arr, fn) => {
    check = (a, b, c) => {
        if (fn.length === 1)
            return fn(a)
        if (fn.length === 2)
            return fn(a, b);
        return fn(a, b, c);
    }
    for (let i in arr)
    {
        if (check(arr[i], i, arr))
            return true;
    }
    return false;
}

function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  
console.log(mySome([2, 5, 8, 1, 4], isBiggerThan10));  // false
console.log(mySome([12, 5, 8, 1, 4], isBiggerThan10)); // true