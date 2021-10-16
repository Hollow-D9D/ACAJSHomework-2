const mySplice = (arr, index, deleteCount = arr.length, ...addElems) => {
    let copyArr = Array.from(arr);
    let rtnArr = [];
    let tillEnd = false;
    index = index >= 0 ? index : arr.length + index;
    let i = index;
    
    if (deleteCount + index >= copyArr.length)
    {
        while(deleteCount--)
            rtnArr.unshift(arr.pop());
        tillEnd = true;
    }
    for (let j in addElems)
    {
        arr[i] = addElems[j];
        i++;
    }
    for(; index < copyArr.length; index++)
    {
        console.log(i);
        console.log(index);
        if (tillEnd)
            break;
        if (deleteCount)
        {
            rtnArr.unshift(copyArr[index]);
            deleteCount--;
            continue;
        }
        arr[i] = copyArr[index];
        i++;
    }
    if (i < arr.length)
        while (i !== arr.length)
        {
            arr.pop();
        }
    return rtnArr;
}

let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

console.log(myFish);
console.log(removed);
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
removed = myFish.splice(-2, 1)

console.log(myFish);
console.log(removed);
// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]

myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
removed = myFish.splice(2)

console.log(myFish);
console.log(removed);
// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]