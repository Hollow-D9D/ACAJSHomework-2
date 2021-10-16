const myReduce = (arr, fn, acc) => {
    let rtnArr = [];
    let i = 0;
    check = (a, b, c, d) => {
        if (fn.length === 2)
            return fn(a, b);
        if (fn.length === 3)
            return fn(a, b, c);
        return fn(a, b, c, d);
    }
    if (typeof(acc) === 'undefined')
    {
        acc = arr[0];
        i = 1;
    }
    for(i; i < arr.length; i++)
        acc = check(acc, arr[i], i, arr);
    return acc;
}

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log(myReduce([1, 100], getMax, 50)); // 100
console.log(myReduce([    50], getMax, 10)); // 50

// callback is invoked once for element at index 1
console.log(myReduce([1, 100], getMax));     // 100

// callback is not invoked
console.log(myReduce([    50], getMax));     // 50
console.log(myReduce([      ], getMax, 1));  // 1