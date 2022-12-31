const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    let colorMatch;
    COLORS.forEach((element) => {
        if(toHex(hash) === toHex(sha256(utf8ToBytes(element))))
            colorMatch = element;
            return;
    });

    return colorMatch;
}

module.exports = findColor;