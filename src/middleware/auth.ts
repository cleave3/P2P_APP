import { NextFunction, Response } from "express";
import { IRequest } from "../interface/IRequest";
import Helper from "../utils/helper";
import ResponseHandler from "../utils/responseHandler";

export const checkAuth = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['token'];

        if (!token) throw { code: 401, message: 'Access denied, no token provided.' };

        const payload = await Helper.verifyToken(token as string);

        if (!payload) throw { code: 403, message: 'invalid token' };

        req.user = payload;
        next();
    } catch ({ code, message }) {
        return ResponseHandler.badRequest(res, false, code || 403, message);
    }
};