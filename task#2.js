const getAcronym = (str) => {
    return str.split(' ').reduce((acc, item) => acc + item[0], '').toUpperCase();
}

console.log(getAcronym('Have a good night'));