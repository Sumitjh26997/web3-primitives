const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block("This is the genesis block")];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }
}

module.exports = Blockchain;