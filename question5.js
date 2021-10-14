const input = "the simplest Things in LIFE are always The best"

function toTitleCase(str){
    return str.replace(/(:?[^\s_-])+/g,(substr)=>{
        return substr.charAt(0).toUpperCase() + substr.substr(1).toLowerCase();
    })
}

console.log(toTitleCase(input));