import { Response } from "express";
import { IRequest } from "../../interface/IRequest";
import responseHandler from "../../utils/responseHandler";
import WalletService from "./walletService";

class WalletController {

    static async fundsDeposit({ body: { amount }, user: { walletId } }: IRequest, res: Response) {
        try {
            const wallet = WalletService.deposit(walletId, amount);
            return responseHandler.successMessage(res, true, 200, wallet);
        } catch ({ message }) {
            return responseHandler.badRequest(res, false, 400, message);
        }
    }

    static async fundsTransfer({ body: { amount, recipientWalletId }, user: { walletId } }: IRequest, res: Response) {
        try {
            const transfer = WalletService.transfer(walletId, amount, recipientWalletId);
            return responseHandler.successMessage(res, true, 200, transfer);
        } catch ({ message }) {
            return responseHandler.badRequest(res, false, 400, message);
        }
    }

    static async getWalletBalance({ user: { walletId } }: IRequest, res: Response) {
        try {
            const balance = WalletService.balance(walletId);
            return responseHandler.success(res, true, 200, { balance });
        } catch ({ message }) {
            return responseHandler.badRequest(res, false, 400, message);
        }
    }

    static async getTansactionHistory({ user: { walletId } }: IRequest, res: Response) {
        try {
            const transactions = WalletService.transactionHistory(walletId);
            return responseHandler.success(res, true, 200, transactions);
        } catch ({ message }) {
            return responseHandler.badRequest(res, false, 400, message);
        }
    }
}

export default WalletController;