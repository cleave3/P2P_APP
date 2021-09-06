import { Request } from 'express';

export const validateAuth = ({ body: { username, password } }: Request) => {
    if (!username) throw { code: 400, message: "username is required" }
    if (!password) throw { code: 400, message: "password is required" }
}