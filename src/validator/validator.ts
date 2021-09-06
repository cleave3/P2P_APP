import { NextFunction, Request, Response } from "express";
import ResponseHandler from "../utils/responseHandler";

export default (schema: (args: Request) => void) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema(req);
        next();
    } catch ({ code, message }) {
        return ResponseHandler.badRequest(res, false, code || 500, message);
    }
}