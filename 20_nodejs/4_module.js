/*exports.add = (a, b) => {
    return a + b;
};

exports.sub = (a, b) => {
    return a - b;
};*/

const myCalc = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
}

// exports.XXX 형태로 써야 함
exports.calc = myCalc;