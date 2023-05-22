import { verifyToken } from "../utilities/helpers/jwtHelper.Utility.js";
import messages from "../utilities/helpers/customMessage.Utility.js";

const Auth = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = verifyToken(token);
            const { id, email, name } = decoded;


            //query database to fetch user details i.e. loggedInUser
            console.log("loggedInUser", loggedInUser);

            delete loggedInUser.password;
            req.user = loggedInUser;

            next();
        } catch (error) {
            console.error(`Error: ${error.name}`);

            if (error.name === "TokenExpiredError") {
                res.status(401);
                throw new Error(messages.auth.tokenExpired);
            } else {
                res.status(401);
                throw new Error(messages.auth.invalidToken);
            }
        }
    }

    if (!token) {
        res.status(401);
        throw new Error(messages.auth.tokenMissing);
    }
};

export default Auth