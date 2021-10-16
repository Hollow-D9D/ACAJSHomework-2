const mySlice = (arr, start, end) => {
    let rtnArr = [];

    let i = start > 0 ? start : arr.length + start;
    let j = end > 0 ? end : arr.length - end;

    for (; i < j; i++)
    {
        rtnArr.push(arr[i]);
    }
    return rtnArr;
}

// console.log(mySlice([1, 2 ,3 ,4 ,5],1, 4));