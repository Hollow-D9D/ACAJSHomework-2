const filterByField = (arr, field) => {
    return arr.filter((elem) => elem[field]);
}

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
    },
    {
    username: "Elon Musk",
    isAstronaut: false,
    },
];

console.log(filterByField(users, "isAstronaut"));