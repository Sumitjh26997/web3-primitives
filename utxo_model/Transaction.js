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

			const inputValue = this.inputUTXOs.reduce((total, current) => {
				return total += current.amount;
			}, 0);

			const outputValue = this.outputUTXOs.reduce((total, current) => {
					return total += current.amount;
			}, 0);

			if(inputValue < outputValue) {
					throw new Error("Insufficient Balance");
			}
	}
}

module.exports = Transaction;