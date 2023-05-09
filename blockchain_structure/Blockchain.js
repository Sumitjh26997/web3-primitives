const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block("This is the genesis block")];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            const valid = currentBlock.previousHash.toString() === previousBlock.toHash().toString();
            if(!valid) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain;