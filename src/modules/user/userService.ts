import User from "../../model/user";
import users from "../../database/users";
import Helper from "../../utils/helper";

class UserService {
    static addUser(username: string, password: string) {
        const userexist = users.find(user => user.username === username);
        if (userexist) throw new Error("username already exist");

        const newUser = new User(username, password);

        users.push(newUser);

        const { password: userPassword, ...user } = newUser;

        return user;
    }

    static loginUser(username: string, password: string) {
        const user = users.find(user => user.username === username);
        if (!user) throw new Error("invalid login credentials");

        if (!Helper.verifyHash(password, user.password)) throw new Error("invalid login credentials");
        const token = Helper.genToken({ id: user.id, walletId: user.walletId });

        return { token }
    }
}

export default UserService;