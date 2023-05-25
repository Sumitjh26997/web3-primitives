class Transaction {
	constructor(inputUTXOs, outputUTXOs) {
			this.inputUTXOs = inputUTXOs;
			this.outputUTXOs = outputUTXOs;
	}
	execute() {
			this.inputUTXOs.forEach(inputUTXO => {
					if(inputUTXO.spent === true) {
							throw new Error("UTXO has been already spent");
					}
			});
	}
}

module.exports = Transaction;