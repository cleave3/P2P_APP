import { Response } from "express";

class ResponseHandler {
    static success(res: Response, status: boolean, code: number, data: any, message = "success") {
        return res.status(code).json({ status, code, message, data });
    }

    static successMessage(res: Response, status: boolean, code: number, message = "success") {
        return res.status(code).json({ status, code, message });
    }

    static badRequest(res: Response, status: boolean, code: number, error = "error") {
        return res.status(code).json({ status, code, error: error });
    }
}

export default ResponseHandler;
