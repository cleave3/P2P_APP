import { v4 as uuid } from "uuid";
import users from "../database/users";
import Helper from "../utils/helper";

class User {
    id: number;
    username: string;
    walletId: string;
    password: string;

    constructor(username: string, password: string) {
        this.id = users.length + 1;
        this.username = username;
        this.walletId = uuid();
        this.password = Helper.genHash(password);
    }
}

export default User;