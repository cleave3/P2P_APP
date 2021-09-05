interface IWallet {
    walletId: string;
    credit: number;
    debit: number;
    description: string;
    timeStamp: string;
}

const wallets: IWallet[] = [];

export default wallets;