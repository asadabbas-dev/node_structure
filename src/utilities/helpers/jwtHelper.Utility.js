import Jwt from "jsonwebtoken";

export const generateToken = (id) => {
    return Jwt.sign(
        {
            id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "24h",
        }
    );
};

export const verifyToken = (token) => {
    return Jwt.verify(token, process.env.JWT_SECRET);
};