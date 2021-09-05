import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const APP_SECRET = process.env.APP_SECRET || "app secret";

interface ITokenPayload { id: number, walletId: string }

class Helper {
    static genToken(payload: ITokenPayload) {
        return jwt.sign(payload, APP_SECRET, { expiresIn: "24hr" });
    }

    static verifyToken(token: string) {
        return jwt.verify(token, APP_SECRET);
    }

    static genHash(password: string) {
        return bcrypt.hashSync(password, 10);
    }

    static verifyHash(password: string, hash: string) {
        return bcrypt.compareSync(password, hash);
    }
}

export default Helper;