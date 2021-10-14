const input = {
    fName: "Name 1",
    lName: "L Name 1",
    obj: {
        fName: "Name 2",
        lName: "L Name 2",
        obj: {
            fName: "Name 3",
            lName: "L Name 3",

        }
    }
}

function convertKeyNames(object = {}) {
    let result = {};
    for (const key in object) {
        if (typeof object[key] == "object") {
            result[key] = convertKeyNames(object[key])
        } else {
            const newKey = key.replace(/^[a-z]/, (char) => {
                return `${char}_`;
            })
            result[newKey] = object[key];
        }
    }
    return result
}

console.log(convertKeyNames(input))