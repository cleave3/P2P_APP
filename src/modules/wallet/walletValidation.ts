import { Request } from 'express';

export const deposit = ({ body: { amount } }: Request) => {
    if (!amount) throw { code: 400, message: "amount is required" };
    if (isNaN(amount)) throw { code: 400, message: "amount must be a number" };
}

export const transfer = ({ body: { amount, recipientWalletId } }: Request) => {
    if (!amount) throw { code: 400, message: "amount is required" };
    if (isNaN(amount)) throw { code: 400, message: "amount must be a number" };
    if (!recipientWalletId) throw { code: 400, message: "recipientWalletId required" };
}