const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function block(id) {
    this.id = id;
}

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    // new block created with id set to the height of the blocks array
    const newBlock = new block(blocks.length);
    newBlock.transactions = [];
    
    while(newBlock.transactions.length < MAX_TRANSACTIONS && mempool.length != 0) {
        let i = 0;
        newBlock.transactions.push(mempool[i]);
        mempool.splice(0,1);
        i++;
    }

    newBlock.nonce = 0;
    
    while(1){
        newBlock.hash = SHA256(JSON.stringify(newBlock));
        if(BigInt(`0x${newBlock.hash}`) < TARGET_DIFFICULTY){
            break;
        }
        newBlock.nonce++;
    } 

    blocks.push(newBlock);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};