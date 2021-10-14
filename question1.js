const input = "My name is Ram. I am Ram Kumar. Ram, Please come here";
const lowerCasedString = input.toLowerCase();
const outputObject = lowerCasedString.match(/(\w+)/g).reduce((acc, word) => {
    acc[word] ? acc[word]++ : acc[word] = 1;
    return acc;
}, {})
console.log(outputObject)