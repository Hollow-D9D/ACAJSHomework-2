const getAverageAge = (arr) => {
    return Math.floor(arr.reduce((acc, elem) => acc + elem.age, 0) / arr.length); // I use floor because age is always a real positive number
}

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
    },
    ];
console.log(getAverageAge(users));