const myMap = (arr, fn) => {
    let rtnArr = [];
    
    check = (a, b, c) => {
        if (fn.length === 1)
            return fn(a)
        if (fn.length === 2)
            return fn(a,b);
        return fn(a,b,c);
    }
    for(let i in arr)
    {
        rtnArr.push(check(arr[i], i, arr));
    }
    return rtnArr;
}

let kvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}];

let reformattedArray = myMap(kvArray, (obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
    }));

console.log(reformattedArray);
console.log(kvArray);