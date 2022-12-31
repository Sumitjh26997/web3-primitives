const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const pubKey = publicKey.slice(1, publicKey.length);
    const hashedKey = keccak256(pubKey);
    return hashedKey.slice(-20);
}

module.exports = getAddress;