class Wallet {
    walletId: string;
    credit: number;
    debit: number;
    description: string;
    timeStamp: string;

    constructor(walletId: string, credit: number, debit: number, description: string) {
        this.walletId = walletId;
        this.credit = credit;
        this.debit = debit;
        this.description = description;
        this.timeStamp = new Date().toISOString();
    }
}

export default Wallet;