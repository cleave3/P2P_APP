export const deposit = ({ body: { amount } }) => {
    if (!amount) throw { code: 400, message: "amount is required" };
    if (isNaN(amount)) throw { code: 400, message: "amount must be a number" };
}

export const transfer = ({ body: { amount, recipientWalletId } }) => {
    if (!amount) throw { code: 400, message: "amount is required" };
    if (isNaN(amount)) throw { code: 400, message: "amount must be a number" };
    if (!recipientWalletId) throw { code: 400, message: "recipientWalletId required" };
}