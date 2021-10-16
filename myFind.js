const myFind = (arr, fn) => {
    check = (a, b, c) => {
        if (fn.length === 1)
            return fn(a)
        if (fn.length === 2)
            return fn(a,b);
        return fn(a,b,c);
    }

    for (let i in arr)
    {
        if (check(arr[i], i, arr))
            return arr[i];
    }
    return 
}

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
    ];
  
function isCherries(fruit, arr, i) {
    return fruit.name === 'cherries';
}
  
  console.log(myFind(inventory, isCherries));
  