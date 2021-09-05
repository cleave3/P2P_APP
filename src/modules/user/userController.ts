import { Response } from "express";
import { IRequest } from "../../interface/IRequest";
import responseHandler from "../../utils/responseHandler";
import UserService from "./userService";

class UserController {

    static async signup({ body: { username, password } }: IRequest, res: Response) {
        try {
            const user = UserService.addUser(username, password);
            return responseHandler.success(res, true, 200, user);
        } catch ({ message }) {
            return responseHandler.badRequest(res, false, 400, message);
        }
    }

    static async login({ body: { username, password } }: IRequest, res: Response) {
        try {
            const user = UserService.loginUser(username, password);
            return responseHandler.success(res, true, 200, user);
        } catch ({ message }) {
            return responseHandler.badRequest(res, false, 400, message);
        }
    }
}

export default UserController;