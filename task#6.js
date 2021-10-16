const letterScore = (str) => {
    let scores = ['aeioulnrst', 'dg', 'bcmp', 'fhvwy', 'k', 'jx', 'qz'];

    return scores.findIndex((elem) => elem.includes(str)) + 1;
}

const getScrabbleScore = (str) => {
    return str.split('').reduce((acc, elem) => acc += letterScore(elem), 0);
}

console.log(getScrabbleScore('quick'));