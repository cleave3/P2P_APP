import Wallet from "../../model/wallet";
import wallets from "../../database/wallet";
import users from "../../database/users";

class WalletService {
    static deposit(walletId: string, amount: number) {
        const deposit = new Wallet(walletId, amount, 0, `fund account with ${amount}`);
        wallets.push(deposit);
        return "deposit successful";
    }

    static transfer(walletId: string, amount: number, recipientWalletId: string) {
        const wallet = users.find(user => user.walletId === recipientWalletId);
        if (!wallet) throw new Error("recipient not found");

        const walletBalance = WalletService.balance(walletId);

        if (walletBalance < amount) throw new Error("insufficient balance");

        const debitsender = new Wallet(walletId, 0, amount, `sent ${amount} to ${recipientWalletId}`);
        wallets.push(debitsender);

        const creditrecipient = new Wallet(recipientWalletId, amount, 0, `recieved ${amount} from ${walletId}`);
        wallets.push(creditrecipient);

        return "transfer successful";
    }

    static balance(walletId: string) {
        const walletentries = wallets.filter(user => user.walletId === walletId);
        let totalcredit = 0;
        let totaldebit = 0;

        for (let index = 0; index < walletentries.length; index++) {
            totalcredit += walletentries[index].credit;
            totaldebit += walletentries[index].debit;
        }

        return totalcredit - totaldebit;
    }

    static transactionHistory(walletId: string) {
        const balance = WalletService.balance(walletId);
        const walletentries = wallets.filter(user => user.walletId === walletId);

        return { balance, transactions: walletentries }
    }
}

export default WalletService;