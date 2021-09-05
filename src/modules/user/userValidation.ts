export const validateAuth = ({ body: { username, password } }) => {
    if (!username) throw { code: 400, message: "username is required" }
    if (!password) throw { code: 400, message: "password is required" }
}